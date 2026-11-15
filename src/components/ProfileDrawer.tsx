import React from 'react';
import { X, User, Shield, MapPin, Tag, Wallet, FileText, ArrowRight, LogOut, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RoleKey } from '../types';

export const ProfileDrawer: React.FC = () => {
  const {
    isProfileDrawerOpen,
    setIsProfileDrawerOpen,
    userProfile,
    updateUserProfile,
    setRole,
    resetOnboarding,
    setOnboardingStep,
    t,
  } = useApp();

  if (!isProfileDrawerOpen) return null;

  const roleLabels: Record<RoleKey, string> = {
    student: t.roleStudent,
    farmer: t.roleFarmer,
    worker: t.roleWorker,
    senior: t.roleSenior,
    disability: t.roleDisability,
  };

  const roles: RoleKey[] = ['student', 'farmer', 'worker', 'senior', 'disability'];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsProfileDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-slate-200 flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#091526] text-sm sm:text-base leading-tight">
                  {t.profileDrawerTitle}
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {userProfile.fullName || 'Citizen Profile'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsProfileDrawerOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            {/* Citizen Details Card */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {t.fullNameLabel.replace('*', '').trim()}
                </span>
                <span className="font-bold text-slate-800">{userProfile.fullName || '—'}</span>
              </div>

              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {t.stateLabel.replace('*', '').trim()} / {t.districtLabel}
                </span>
                <span className="font-semibold text-slate-800">
                  {userProfile.state || '—'}
                  {userProfile.district ? `, ${userProfile.district}` : ''}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  {t.categoryLabel.replace('*', '').trim()}
                </span>
                <span className="font-semibold text-slate-800">{userProfile.category || 'General'}</span>
              </div>

              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5" />
                  {t.annualIncomeLabel}
                </span>
                <span className="font-semibold text-slate-800">{userProfile.annualIncome || '—'}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  {t.rationCardLabel}
                </span>
                <span className="font-semibold text-slate-800">{userProfile.rationCard || '—'}</span>
              </div>
            </div>

            {/* Switch Citizen Role */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                {t.btnSwitchRole}
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                Switching role will update all schemes, documents, tasks and helpdesks.
              </p>
              <div className="space-y-2">
                {roles.map((r) => {
                  const isCurrent = userProfile.role === r;
                  return (
                    <button
                      key={r}
                      onClick={() => {
                        setRole(r);
                      }}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-sky-600 bg-sky-50 text-sky-800 font-bold shadow-2xs'
                          : 'border-slate-200 hover:border-cyan-300 text-slate-700 bg-white'
                      }`}
                    >
                      <span>{roleLabels[r]}</span>
                      {isCurrent ? (
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Privacy note */}
            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200/80 text-[11px] text-emerald-800 flex items-start gap-2">
              <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{t.securityNote}</span>
            </div>
          </div>

          {/* Footer buttons */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2">
            <button
              onClick={() => {
                setIsProfileDrawerOpen(false);
                resetOnboarding();
                setOnboardingStep(3);
              }}
              className="w-full py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-sky-200/70"
            >
              {t.btnEditProfile}
            </button>
            <button
              onClick={() => {
                setIsProfileDrawerOpen(false);
                resetOnboarding();
              }}
              className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              {t.btnSignOut}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
