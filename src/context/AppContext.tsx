import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import {
  RoleKey,
  LanguageCode,
  LanguageInfo,
  UserProfile,
  TabKey,
  ChatMessage,
  ChatSession,
  TaskItem,
  StoredDocStatus,
} from '../types';
import { SUPPORTED_LANGUAGES, getLocalized } from '../data/languages';
import { TRANSLATIONS, TranslationDictionary } from '../data/translations';

export interface SupabaseAuthResult {
  status: 'authenticated' | 'email_confirmation_required' | 'not_configured' | 'error';
  message?: string;
}

interface AppContextType {
  selectedLanguage: LanguageInfo;
  setLanguage: (code: LanguageCode) => void;
  t: TranslationDictionary;
  getLoc: (textObj: any) => string;

  userProfile: UserProfile;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  setRole: (role: RoleKey) => void;

  authUser: { id: string; email: string } | null;
  authToken: string | null;
  signInWithSupabase: (email: string, password: string) => Promise<SupabaseAuthResult>;
  signUpWithSupabase: (email: string, password: string, fullName?: string) => Promise<SupabaseAuthResult>;
  signOutSupabase: () => void;

  onboardingStep: 1 | 2 | 3;
  setOnboardingStep: (step: 1 | 2 | 3) => void;
  onboardingComplete: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;

  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;

  chatMessages: ChatMessage[];
  chatSessions: ChatSession[];
  activeChatSessionId: string | null;
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => string;
  updateChatMessage: (id: string, text: string) => void;
  persistChatMessage: (message: { id: string; sender: 'user' | 'assistant'; text: string; isVoice?: boolean }) => void;
  clearChat: () => void;
  startNewChat: () => void;
  loadChatSession: (sessionId: string) => void;
  deleteChatSession: (sessionId: string) => void;
  clearAllChatHistory: () => void;

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

const VALID_ROLES: RoleKey[] = ['student', 'farmer', 'worker', 'senior', 'disability'];

const isPlainObject = (val: unknown): val is Record<string, any> =>
  typeof val === 'object' && val !== null && !Array.isArray(val);

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
    } catch (e) {}
    return defaultLanguage;
  });

  const setLanguage = (code: LanguageCode) => {
    const lang = SUPPORTED_LANGUAGES.find((l) => l.code === code) || defaultLanguage;
    setSelectedLanguage(lang);
    try {
      localStorage.setItem('nirvaha_lang', code);
    } catch (e) {}
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.bcp47;
  };

  useEffect(() => {
    document.documentElement.dir = selectedLanguage.dir;
    document.documentElement.lang = selectedLanguage.bcp47;
  }, [selectedLanguage]);

  const t = useMemo(() => {
    return TRANSLATIONS[selectedLanguage.code] || TRANSLATIONS.en;
  }, [selectedLanguage]);

  const getLoc = (textObj: any): string => {
    return getLocalized(textObj, selectedLanguage.code);
  };

  // 2. Supabase Auth Session (kept in sessionStorage so tokens are scoped cleanly)
  const [authToken, setAuthToken] = useState<string | null>(() => {
    try {
      return sessionStorage.getItem('nirvaha_auth_token');
    } catch {
      return null;
    }
  });
  const [authUser, setAuthUser] = useState<{ id: string; email: string } | null>(() => {
    try {
      const raw = sessionStorage.getItem('nirvaha_auth_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  // 3. User profile
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (isPlainObject(parsed)) {
          const validRole = VALID_ROLES.includes(parsed.role) ? parsed.role : defaultProfile.role;
          return {
            ...defaultProfile,
            ...parsed,
            role: validRole,
          };
        }
      }
    } catch (e) {}
    return defaultProfile;
  });

  // 4. Onboarding states
  const [onboardingComplete, setOnboardingComplete] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nirvaha_onboarded') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [onboardingStep, setOnboardingStep] = useState<1 | 2 | 3>(1);

  // 5. Active tab
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  // 6. Chat messages & persisted chat history sessions
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_chat');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter(
            (m) => isPlainObject(m) && typeof m.id === 'string' && typeof m.text === 'string'
          );
        }
      }
    } catch (e) {}
    return [];
  });

  const [chatSessions, setChatSessions] = useState<ChatSession[]>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_chat_sessions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter(
            (s) => isPlainObject(s) && typeof s.id === 'string' && Array.isArray(s.messages)
          );
        }
      }
    } catch (e) {}
    return [];
  });

  const [activeChatSessionId, setActiveChatSessionId] = useState<string | null>(() => {
    try {
      return localStorage.getItem('nirvaha_active_chat_session') || null;
    } catch {
      return null;
    }
  });

  // Sync profile & chat history from Supabase whenever authenticated
  const hydrateFromSupabase = async (token: string) => {
    try {
      const [profileRes, chatRes] = await Promise.all([
        fetch('/api/profile', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/chat/history', { headers: { Authorization: `Bearer ${token}` } }),
      ]);

      if (profileRes.ok) {
        const data = await profileRes.json();
        if (data?.profile && isPlainObject(data.profile)) {
          const p = data.profile;
          const validRole = VALID_ROLES.includes(p.role) ? p.role : 'student';
          setUserProfile((prev) => ({
            ...prev,
            fullName: p.fullName || prev.fullName,
            role: validRole,
            state: p.state || prev.state,
            district: p.district || prev.district,
            category: p.category || prev.category,
            annualIncome: p.annualIncome || prev.annualIncome,
            rationCard: p.rationCard || prev.rationCard,
            gender: p.gender || prev.gender,
            ageOrProofNumber: p.ageOrProofNumber || prev.ageOrProofNumber,
          }));
          if (p.preferredLanguage) {
            const lang = SUPPORTED_LANGUAGES.find((l) => l.code === p.preferredLanguage);
            if (lang) setLanguage(lang.code);
          }
        }
      }

      if (chatRes.ok) {
        const data = await chatRes.json();
        if (Array.isArray(data?.messages) && data.messages.length > 0) {
          setChatMessages(data.messages);
        }
      }
    } catch (e) {
      console.warn('Supabase hydration notice:', e);
    }
  };

  useEffect(() => {
    if (authToken) {
      hydrateFromSupabase(authToken);
    }
  }, [authToken]);

  const signInWithSupabase = async (email: string, password: string): Promise<SupabaseAuthResult> => {
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 503 && data?.code === 'API_KEY_NOT_CONFIGURED') {
        return { status: 'not_configured', message: data.error };
      }
      if (!res.ok) {
        return { status: 'error', message: data?.error || 'Sign-in failed.' };
      }
      if (data.accessToken && data.user) {
        setAuthToken(data.accessToken);
        setAuthUser(data.user);
        try {
          sessionStorage.setItem('nirvaha_auth_token', data.accessToken);
          sessionStorage.setItem('nirvaha_auth_user', JSON.stringify(data.user));
        } catch {}
        return { status: 'authenticated' };
      }
      return { status: 'error', message: 'Authentication session could not be created.' };
    } catch (err: any) {
      return { status: 'error', message: err?.message || 'Unable to reach authentication server.' };
    }
  };

  const signUpWithSupabase = async (
    email: string,
    password: string,
    fullName?: string
  ): Promise<SupabaseAuthResult> => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 503 && data?.code === 'API_KEY_NOT_CONFIGURED') {
        return { status: 'not_configured', message: data.error };
      }
      if (!res.ok) {
        return { status: 'error', message: data?.error || 'Account registration failed.' };
      }
      if (data.accessToken && data.user) {
        setAuthToken(data.accessToken);
        setAuthUser(data.user);
        try {
          sessionStorage.setItem('nirvaha_auth_token', data.accessToken);
          sessionStorage.setItem('nirvaha_auth_user', JSON.stringify(data.user));
        } catch {}
        return { status: 'authenticated' };
      }
      if (data.requiresEmailConfirmation) {
        return {
          status: 'email_confirmation_required',
          message: 'Account created! Please check your email to confirm before signing in.',
        };
      }
      return { status: 'error', message: 'Registration incomplete.' };
    } catch (err: any) {
      return { status: 'error', message: err?.message || 'Unable to reach authentication server.' };
    }
  };

  const signOutSupabase = () => {
    setAuthToken(null);
    setAuthUser(null);
    try {
      sessionStorage.removeItem('nirvaha_auth_token');
      sessionStorage.removeItem('nirvaha_auth_user');
    } catch {}
  };

  // Persist local profile & sync to Supabase when logged in
  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_profile', JSON.stringify(userProfile));
    } catch (e) {}

    if (authToken && userProfile.fullName) {
      const timer = setTimeout(() => {
        fetch('/api/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            ...userProfile,
            preferredLanguage: selectedLanguage.code,
          }),
        }).catch(() => {});
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [userProfile, authToken, selectedLanguage.code]);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem('nirvaha_chat', JSON.stringify(chatMessages.slice(-50)));
      } catch (e) {}
    }, 300);
    return () => clearTimeout(timer);
  }, [chatMessages]);

  // Keep active conversation automatically synced into chatSessions history
  useEffect(() => {
    const nonEmpty = chatMessages.filter((m) => m.text && m.text.trim().length > 0);
    if (nonEmpty.length === 0) return;

    const firstUserMsg = nonEmpty.find((m) => m.sender === 'user')?.text || nonEmpty[0].text;
    const title = firstUserMsg.trim().slice(0, 60) + (firstUserMsg.trim().length > 60 ? '...' : '');
    const sessionId = activeChatSessionId || `session_${nonEmpty[0].timestamp || Date.now()}`;

    if (!activeChatSessionId) {
      setActiveChatSessionId(sessionId);
    }

    setChatSessions((prev) => {
      const updatedSession: ChatSession = {
        id: sessionId,
        title,
        updatedAt: nonEmpty[nonEmpty.length - 1].timestamp || Date.now(),
        languageCode: selectedLanguage.code,
        messages: nonEmpty.slice(-50),
      };
      const others = prev.filter((s) => s.id !== sessionId);
      return [updatedSession, ...others].slice(0, 30);
    });
  }, [chatMessages, activeChatSessionId, selectedLanguage.code]);

  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_chat_sessions', JSON.stringify(chatSessions.slice(0, 30)));
    } catch (e) {}
  }, [chatSessions]);

  useEffect(() => {
    try {
      if (activeChatSessionId) {
        localStorage.setItem('nirvaha_active_chat_session', activeChatSessionId);
      } else {
        localStorage.removeItem('nirvaha_active_chat_session');
      }
    } catch (e) {}
  }, [activeChatSessionId]);

  // 7. Voice States
  const [voiceTranscript, setVoiceTranscript] = useState<string>('');
  const [pendingVoiceQuery, setPendingVoiceQuery] = useState<string | null>(null);

  // 8. Custom Tasks & Statuses
  const [customTasks, setCustomTasks] = useState<TaskItem[]>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_custom_tasks');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    return [];
  });

  const [taskStatuses, setTaskStatuses] = useState<Record<string, 'not_started' | 'in_progress' | 'completed'>>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_task_statuses');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (isPlainObject(parsed)) return parsed;
      }
    } catch (e) {}
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_custom_tasks', JSON.stringify(customTasks));
      localStorage.setItem('nirvaha_task_statuses', JSON.stringify(taskStatuses));
    } catch (e) {}
  }, [customTasks, taskStatuses]);

  // 9. Consents
  const [consentPreferences, setConsentPreferences] = useState<Record<string, 'allowed' | 'denied' | 'pending' | 'revoked'>>(
    () => {
      try {
        const saved = localStorage.getItem('nirvaha_consents');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (isPlainObject(parsed)) return parsed;
        }
      } catch (e) {}
      return {};
    }
  );

  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_consents', JSON.stringify(consentPreferences));
    } catch (e) {}
  }, [consentPreferences]);

  // 10. Document vault status
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, StoredDocStatus>>(() => {
    try {
      const saved = localStorage.getItem('nirvaha_docs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (isPlainObject(parsed)) return parsed;
      }
    } catch (e) {}
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem('nirvaha_docs', JSON.stringify(uploadedDocs));
    } catch (e) {}
  }, [uploadedDocs]);

  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    const contextChanged =
      (updates.role !== undefined && updates.role !== userProfile.role) ||
      (updates.state !== undefined && updates.state !== userProfile.state) ||
      (updates.district !== undefined && updates.district !== userProfile.district);

    setUserProfile((prev) => ({ ...prev, ...updates }));

    if (contextChanged) {
      setCustomTasks([]);
    }
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
    signOutSupabase();
    setOnboardingComplete(false);
    setOnboardingStep(1);
    try {
      localStorage.removeItem('nirvaha_onboarded');
    } catch (e) {}
  };

  const persistChatMessage = (message: {
    id: string;
    sender: 'user' | 'assistant';
    text: string;
    isVoice?: boolean;
  }) => {
    if (!authToken || !message.text.trim()) return;
    fetch('/api/chat/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        ...message,
        languageCode: selectedLanguage.code,
      }),
    }).catch(() => {});
  };

  const addChatMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const id = 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    const newMsg: ChatMessage = {
      ...message,
      id,
      timestamp: Date.now(),
    };
    setChatMessages((prev) => [...prev, newMsg]);
    if (message.sender === 'user' && message.text.trim()) {
      persistChatMessage({
        id,
        sender: 'user',
        text: message.text,
        isVoice: message.isVoice,
      });
    }
    return id;
  };

  const updateChatMessage = (id: string, text: string) => {
    setChatMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, text: m.text + text } : m))
    );
  };

  const clearChat = () => {
    setChatMessages([]);
    setActiveChatSessionId(null);
    try {
      localStorage.removeItem('nirvaha_chat');
      localStorage.removeItem('nirvaha_active_chat_session');
    } catch (e) {}
    if (authToken) {
      fetch('/api/chat/history', {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${authToken}` },
      }).catch(() => {});
    }
  };

  const startNewChat = () => {
    setChatMessages([]);
    setActiveChatSessionId(null);
    try {
      localStorage.removeItem('nirvaha_chat');
      localStorage.removeItem('nirvaha_active_chat_session');
    } catch (e) {}
  };

  const loadChatSession = (sessionId: string) => {
    const found = chatSessions.find((s) => s.id === sessionId);
    if (!found) return;
    setActiveChatSessionId(found.id);
    setChatMessages(found.messages);
  };

  const deleteChatSession = (sessionId: string) => {
    setChatSessions((prev) => prev.filter((s) => s.id !== sessionId));
    if (activeChatSessionId === sessionId) {
      setChatMessages([]);
      setActiveChatSessionId(null);
      try {
        localStorage.removeItem('nirvaha_chat');
        localStorage.removeItem('nirvaha_active_chat_session');
      } catch (e) {}
    }
  };

  const clearAllChatHistory = () => {
    setChatSessions([]);
    clearChat();
    try {
      localStorage.removeItem('nirvaha_chat_sessions');
    } catch (e) {}
  };

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

  const updateConsent = (id: string, status: 'allowed' | 'denied' | 'revoked') => {
    setConsentPreferences((prev) => ({ ...prev, [id]: status }));
  };

  const updateDocumentStatus = (docId: string, status: StoredDocStatus) => {
    setUploadedDocs((prev) => ({ ...prev, [docId]: status }));
  };

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
        authUser,
        authToken,
        signInWithSupabase,
        signUpWithSupabase,
        signOutSupabase,
        onboardingStep,
        setOnboardingStep,
        onboardingComplete,
        completeOnboarding,
        resetOnboarding,
        activeTab,
        setActiveTab,
        chatMessages,
        chatSessions,
        activeChatSessionId,
        addChatMessage,
        updateChatMessage,
        persistChatMessage,
        clearChat,
        startNewChat,
        loadChatSession,
        deleteChatSession,
        clearAllChatHistory,
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
