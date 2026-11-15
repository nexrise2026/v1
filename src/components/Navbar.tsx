import React from 'react';
import {
  Home,
  Bot,
  ListTodo,
  FileSignature,
  FolderLock,
  ShieldCheck,
  Compass,
  Headphones,
  User,
  GraduationCap,
  Tractor,
  HardHat,
  HeartHandshake,
  Accessibility,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LanguageSelector } from './LanguageSelector';
import { TabKey, RoleKey } from '../types';

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, t, userProfile, setIsProfileDrawerOpen } = useApp();

  const getRoleIcon = (role: RoleKey) => {
    switch (role) {
      case 'student':
        return <GraduationCap className="w-3.5 h-3.5 text-sky-600" />;
      case 'farmer':
        return <Tractor className="w-3.5 h-3.5 text-emerald-600" />;
      case 'worker':
        return <HardHat className="w-3.5 h-3.5 text-amber-600" />;
      case 'senior':
        return <HeartHandshake className="w-3.5 h-3.5 text-cyan-600" />;
      case 'disability':
        return <Accessibility className="w-3.5 h-3.5 text-teal-600" />;
      default:
        return <User className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  const getRoleLabel = (role: RoleKey) => {
    switch (role) {
      case 'student':
        return t.roleStudent.split('/')[0].trim();
      case 'farmer':
        return t.roleFarmer.split('/')[0].trim();
      case 'worker':
        return t.roleWorker.split('/')[0].trim();
      case 'senior':
        return t.roleSenior.split('/')[0].trim();
      case 'disability':
        return t.roleDisability.split('(')[0].trim();
      default:
        return 'Citizen';
    }
  };

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'home', label: t.tabHome, icon: <Home className="w-3.5 h-3.5" /> },
    { key: 'ai-guide', label: t.tabAIGuide, icon: <Bot className="w-3.5 h-3.5" /> },
    { key: 'next-steps', label: t.tabNextSteps, icon: <ListTodo className="w-3.5 h-3.5" /> },
    { key: 'assist-fill', label: t.tabAssistFill, icon: <FileSignature className="w-3.5 h-3.5" /> },
    { key: 'vault', label: t.tabVault, icon: <FolderLock className="w-3.5 h-3.5" /> },
    { key: 'consent', label: t.tabConsent, icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { key: 'services', label: t.tabServices, icon: <Compass className="w-3.5 h-3.5" /> },
    { key: 'human-support', label: t.tabHumanSupport, icon: <Headphones className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Top Header Row */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Top-left: NIRVAHA AI Logo + title + subtitle */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none min-w-0"
          >
            <img
              src="/assets/aistudio/logo_5419b498.jpeg"
              alt="NIRVAHA AI Logo"
              className="w-10 h-10 rounded-xl object-cover bg-[#050814] border border-cyan-500/30 shadow-md shadow-cyan-500/15 group-hover:scale-105 transition-transform flex-shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#091526] leading-tight flex items-center gap-1.5">
                {t.appName}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">
                {t.appSubtitle}
              </span>
            </div>
          </div>

          {/* Top-right: Language dropdown + User Profile pill */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageSelector variant="light" />

            <button
              onClick={() => setIsProfileDrawerOpen(true)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-800 rounded-full text-xs font-medium border border-slate-200 transition-all cursor-pointer shadow-2xs"
              title="Citizen Profile"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-2xs">
                {getRoleIcon(userProfile.role)}
              </div>
              <span className="hidden sm:inline font-semibold text-slate-700 max-w-[100px] truncate">
                {userProfile.fullName || getRoleLabel(userProfile.role)}
              </span>
              <span className="sm:hidden font-semibold text-slate-700">
                {getRoleLabel(userProfile.role)}
              </span>
              {userProfile.state && (
                <span className="hidden md:inline text-[10px] text-slate-500 bg-white px-1.5 py-0.5 rounded-full border border-slate-200/60">
                  {userProfile.state}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Tabs (compact styling with hidden scrollbars) */}
        <nav className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto py-1.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-xs font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 whitespace-nowrap rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0369a1] via-[#0891b2] to-[#0d9488] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-[#091526] hover:bg-sky-50/80'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-slate-500'}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
