import React from 'react';
import { ShieldCheck, ShieldAlert, Check, X, Undo2, Lock, Building2, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CONSENT_ITEMS } from '../../data/consents';
import { ConsentItem } from '../../types';

export const ConsentCentreTab: React.FC = () => {
  const { t, getLoc, userProfile, filterByCitizen, consentPreferences, updateConsent } = useApp();

  const filteredConsents = filterByCitizen(CONSENT_ITEMS);

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#091526] tracking-tight">
            {t.consentTitle}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          {t.consentSubtitle}
        </p>
      </div>

      {/* Privacy Guarantee Box */}
      <div className="p-4 bg-emerald-50 rounded-3xl border border-emerald-200/80 text-xs text-emerald-900 flex items-start gap-3 shadow-2xs">
        <Lock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-emerald-950 mb-0.5">Privacy By Design Enforced</h3>
          <p className="leading-relaxed text-emerald-800">
            {t.consentPrivacyNotice} Government agencies can only inspect verified credentials with your explicit authorization.
          </p>
        </div>
      </div>

      {/* Consent Cards List */}
      <div className="space-y-4">
        {filteredConsents.map((consent: ConsentItem) => {
          const currentStatus = consentPreferences[consent.id] || 'pending';
          const isAllowed = currentStatus === 'allowed';
          const isDenied = currentStatus === 'denied';
          const isRevoked = currentStatus === 'revoked';

          return (
            <div
              key={consent.id}
              className="bg-white/80 hover:bg-white backdrop-blur-md rounded-3xl p-5 border border-white/80 hover:border-cyan-300 shadow-2xs transition-all space-y-4"
            >
              {/* Top row: Department name and status badge */}
              <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#091526]">
                      {getLoc(consent.department)}
                    </h3>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      Nature: {consent.nature.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div>
                  {isAllowed && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <Check className="w-3.5 h-3.5" />
                      {t.statusAllowed}
                    </span>
                  )}
                  {isDenied && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
                      <X className="w-3.5 h-3.5" />
                      {t.statusDenied}
                    </span>
                  )}
                  {isRevoked && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                      <Undo2 className="w-3.5 h-3.5" />
                      {t.statusRevoked}
                    </span>
                  )}
                  {currentStatus === 'pending' && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {t.statusPending}
                    </span>
                  )}
                </div>
              </div>

              {/* Data fields grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {t.colData}
                  </span>
                  <span className="font-medium text-slate-700 leading-relaxed block">
                    {getLoc(consent.dataRequested)}
                  </span>
                </div>

                <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {t.colPurpose}
                  </span>
                  <span className="font-medium text-slate-700 leading-relaxed block">
                    {getLoc(consent.purpose)}
                  </span>
                </div>

                <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {t.colRetention}
                  </span>
                  <span className="font-medium text-slate-700 leading-relaxed block">
                    {getLoc(consent.retentionPeriod)}
                  </span>
                </div>
              </div>

              {/* Permission Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => updateConsent(consent.id, 'denied')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isDenied
                      ? 'bg-rose-50 text-rose-700 border-rose-300 ring-2 ring-rose-200'
                      : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                >
                  {t.btnDeny}
                </button>

                {isAllowed ? (
                  <button
                    type="button"
                    onClick={() => updateConsent(consent.id, 'revoked')}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Undo2 className="w-3 h-3" />
                    <span>{t.btnRevoke}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => updateConsent(consent.id, 'allowed')}
                    className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer shadow-xs flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" />
                    <span>{t.btnAllow}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
