import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import {
  RoleKey,
  LanguageCode,
  LanguageInfo,
  UserProfile,
  TabKey,
  ChatMessage,
  TaskItem,
  StoredDocStatus,
} from '../types';
import { SUPPORTED_LANGUAGES, getLocalized } from '../data/languages';
import { TRANSLATIONS, TranslationDictionary } from '../data/translations';

interface AppContextType {
  selectedLanguage: LanguageInfo;
  setLanguage: (code: LanguageCode) => void;
  t: TranslationDictionary;
  getLoc: (textObj: any) => string;

  userProfile: UserProfile;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  setRole: (role: RoleKey) => void;

  onboardingStep: 1 | 2 | 3;
  setOnboardingStep: (step: 1 | 2 | 3) => void;
  onboardingComplete: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;

  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;

  chatMessages: ChatMessage[];
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => string;
  updateChatMessage: (id: string, text: string) => void;
  clearChat: () => void;

  voiceTranscript: string;
  setVoiceTranscript: (text: string) => void;
  pendingVoiceQuery: string | null;
  setPendingVoiceQuery: (query: string | null) => void;

  customTasks: TaskItem[];
  addCustomTask: (task: Omit<TaskItem, 'id'>) => void;
  taskStatuses: Record<string, 'not_started' | 'in_progress' | 'completed'>;
  updateTaskStatus: (taskId: string, status: 'not_started' | 'in_progress' | 'completed') => void;

  consentPreferences: Record<string, 'allowed' | 'denied' | 'pending' | 'revoked'>;
  updateConsent: (id: string, status: 'allowed' | 'denied' | 'revoked') => void;

  uploadedDocs: Record<string, StoredDocStatus>;
  updateDocumentStatus: (docId: string, status: StoredDocStatus) => void;

  isProfileDrawerOpen: boolean;
  setIsProfileDrawerOpen: (open: boolean) => void;

  filterByCitizen: <T extends { role: RoleKey; states: string[] | 'ALL'; districts?: string[] | 'ALL' }>(
    items: T[]
  ) => T[];
}

const defaultLanguage = SUPPORTED_LANGUAGES[0]; // English

const defaultProfile: UserProfile = {
  fullName: '',
  role: 'student',
  state: '',
  district: '',
  category: '',
  annualIncome: '',
  rationCard: '',
  gender: '',
  ageOrProofNumber: '',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Language state
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageInfo>(() => {
    try {
      const savedLang = localStorage.getItem('nirvaha_lang');
      if (savedLang) {
        const found = SUPPORTED_LANGUAGES.find((l) => l.code === savedLang);
        if (found) return found;
      }
    } catch (e) {
      // ignore
    }
    return defaultLanguage;
  });

  const setLanguage = (code: LanguageCode) => {
    const lang = SUPPORTED_LANGUAGES.find((l) => l.code === code) || defaultLanguage;
    setSelectedLanguage(lang);
    try {
      localStorage.setItem('nirvaha_lang', code);
    } catch (e) {}
    // Set document direction for Urdu
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.bcp47;
  };

  useEffect(() => {
    document.documentElement.dir = selectedLanguage.dir;
    document.documentElement.lang = selectedLanguage.bcp47;
  }, [selectedLanguage]);

  // Current translation dictionary
  const t = useMemo(() => {
    return TRANSLATIONS[selectedLanguage.code] || TRANSLATIONS.en;
  }, [selectedLanguage]);

  const getLoc = (textObj: any): string => {
    return getLocalized(textObj, selectedLanguage.code);
  };

  // 2. User profile
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {}
    return defaultProfile;
  });

  // 3. Onboarding states
  const [onboardingComplete, setOnboardingComplete] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nirvaha_onboarded') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [onboardingStep, setOnboardingStep] = useState<1 | 2 | 3>(1);

  // 4. Active tab
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  // 5. Chat messages
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_chat');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  // Save non-sensitive data
  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_profile', JSON.stringify(userProfile));
    } catch (e) {}
  }, [userProfile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem('nirvaha_chat', JSON.stringify(chatMessages.slice(-50)));
      } catch (e) {}
    }, 500);
    return () => clearTimeout(timer);
  }, [chatMessages]);

  // 6. Voice States
  const [voiceTranscript, setVoiceTranscript] = useState<string>('');
  const [pendingVoiceQuery, setPendingVoiceQuery] = useState<string | null>(null);

  // 7. Custom Tasks & Statuses
  const [customTasks, setCustomTasks] = useState<TaskItem[]>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_custom_tasks');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  const [taskStatuses, setTaskStatuses] = useState<Record<string, 'not_started' | 'in_progress' | 'completed'>>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_task_statuses');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_custom_tasks', JSON.stringify(customTasks));
      localStorage.setItem('nirvaha_task_statuses', JSON.stringify(taskStatuses));
    } catch (e) {}
  }, [customTasks, taskStatuses]);

  // 8. Consents
  const [consentPreferences, setConsentPreferences] = useState<Record<string, 'allowed' | 'denied' | 'pending' | 'revoked'>>(
    () => {
      try {
        const saved = localStorage.getItem('nirvaha_consents');
        if (saved) return JSON.parse(saved);
      } catch (e) {}
      return {};
    }
  );

  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_consents', JSON.stringify(consentPreferences));
    } catch (e) {}
  }, [consentPreferences]);

  // 9. Document vault status
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, StoredDocStatus>>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_docs');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_docs', JSON.stringify(uploadedDocs));
    } catch (e) {}
  }, [uploadedDocs]);

  // 10. Profile drawer
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  // Profile updaters
  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUserProfile((prev) => {
      const next = { ...prev, ...updates };
      // Check if role, state or district changed to reset custom tasks as per requirement:
      // "Reset custom tasks, selected forms, and chat suggestions whenever role, state, or district changes."
      if (
        (updates.role && updates.role !== prev.role) ||
        (updates.state && updates.state !== prev.state) ||
        (updates.district && updates.district !== prev.district)
      ) {
        setCustomTasks([]);
      }
      return next;
    });
  };

  const setRole = (role: RoleKey) => {
    updateUserProfile({ role });
  };

  const completeOnboarding = () => {
    setOnboardingComplete(true);
    try {
      localStorage.setItem('nirvaha_onboarded', 'true');
    } catch (e) {}
    setActiveTab('home');
  };

  const resetOnboarding = () => {
    setOnboardingComplete(false);
    setOnboardingStep(1);
    try {
      localStorage.removeItem('nirvaha_onboarded');
    } catch (e) {}
  };

  // Chat helpers
  const addChatMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const id = 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    const newMsg: ChatMessage = {
      ...message,
      id,
      timestamp: Date.now(),
    };
    setChatMessages((prev) => [...prev, newMsg]);
    return id;
  };

  const updateChatMessage = (id: string, text: string) => {
    setChatMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, text: m.text + text } : m))
    );
  };

  const clearChat = () => {
    setChatMessages([]);
    try {
      localStorage.removeItem('nirvaha_chat');
    } catch (e) {}
  };

  // Task helpers
  const addCustomTask = (task: Omit<TaskItem, 'id'>) => {
    const newTask: TaskItem = {
      ...task,
      id: 'custom_' + Date.now(),
      isCustom: true,
    };
    setCustomTasks((prev) => [newTask, ...prev]);
  };

  const updateTaskStatus = (taskId: string, status: 'not_started' | 'in_progress' | 'completed') => {
    setTaskStatuses((prev) => ({ ...prev, [taskId]: status }));
  };

  // Consent helpers
  const updateConsent = (id: string, status: 'allowed' | 'denied' | 'revoked') => {
    setConsentPreferences((prev) => ({ ...prev, [id]: status }));
  };

  // Document status updater
  const updateDocumentStatus = (docId: string, status: StoredDocStatus) => {
    setUploadedDocs((prev) => ({ ...prev, [docId]: status }));
  };

  // Strict citizen filter function
  // Requirement 8:
  // items.filter(item =>
  //   item.role === userProfile.role &&
  //   (item.states === "ALL" || item.states.includes(userProfile.state)) &&
  //   (item.districts === "ALL" || !item.districts || item.districts.includes(userProfile.district))
  // );
  const filterByCitizen = <T extends { role: RoleKey; states: string[] | 'ALL'; districts?: string[] | 'ALL' }>(
    items: T[]
  ): T[] => {
    return items.filter((item) => {
      if (item.role !== userProfile.role) return false;
      const stateMatch = item.states === 'ALL' || (userProfile.state && item.states.includes(userProfile.state));
      if (!stateMatch) return false;
      const districtMatch =
        item.districts === 'ALL' || !item.districts || !userProfile.district || item.districts.includes(userProfile.district);
      return districtMatch;
    });
  };

  return (
    <AppContext.Provider
      value={{
        selectedLanguage,
        setLanguage,
        t,
        getLoc,
        userProfile,
        updateUserProfile,
        setRole,
        onboardingStep,
        setOnboardingStep,
        onboardingComplete,
        completeOnboarding,
        resetOnboarding,
        activeTab,
        setActiveTab,
        chatMessages,
        addChatMessage,
        updateChatMessage,
        clearChat,
        voiceTranscript,
        setVoiceTranscript,
        pendingVoiceQuery,
        setPendingVoiceQuery,
        customTasks,
        addCustomTask,
        taskStatuses,
        updateTaskStatus,
        consentPreferences,
        updateConsent,
        uploadedDocs,
        updateDocumentStatus,
        isProfileDrawerOpen,
        setIsProfileDrawerOpen,
        filterByCitizen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
