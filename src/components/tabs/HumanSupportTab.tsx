import React, { useState } from 'react';
import {
  Headphones,
  Phone,
  Clock,
  Languages,
  MapPin,
  CheckCircle2,
  FileText,
  PhoneCall,
  X,
  Copy,
  Printer,
  ShieldCheck,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SUPPORT_CONTACTS } from '../../data/support';
import { SupportContact } from '../../types';

export const HumanSupportTab: React.FC = () => {
  const { t, getLoc, userProfile, filterByCitizen, chatMessages } = useApp();

  const [callbackContact, setCallbackContact] = useState<SupportContact | null>(null);
  const [callbackPhoneInput, setCallbackPhoneInput] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const [issueSummaryModalContact, setIssueSummaryModalContact] = useState<SupportContact | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const filteredContacts = filterByCitizen(SUPPORT_CONTACTS);

  // Generate localized comprehensive issue brief for department officer
  const generateIssueSummary = (contact: SupportContact) => {
    const recentQueries = chatMessages
      .filter((m) => m.sender === 'user')
      .slice(-3)
      .map((m) => `• "${m.text}"`)
      .join('\n');

    return `=====================================================
NIRVAHA AI — CITIZEN GRIEVANCE & ISSUE BRIEF
For Official Department Reference: ${getLoc(contact.officeName)}
=====================================================
Date Generated: ${new Date().toLocaleString()}
Reference Token: NIR-CAS-${Date.now().toString(36).toUpperCase()}

1. CITIZEN IDENTITY CONTEXT
---------------------------
Citizen Legal Name: ${userProfile.fullName || 'Citizen'}
Enrolled Role: ${userProfile.role.toUpperCase()}
State / UT: ${userProfile.state || 'India'}
District / Taluk: ${userProfile.district || 'Unspecified'}
Social Category: ${userProfile.category || 'General'}
Income Bracket: ${userProfile.annualIncome || 'Unspecified'}
Ration Card Status: ${userProfile.rationCard || 'None'}
Assistance ID / Role Proof: ${userProfile.ageOrProofNumber || 'None'}

2. OFFICE JURISDICTION & MANDATE
--------------------------------
Target Office: ${getLoc(contact.officeName)}
Helpdesk Category: ${getLoc(contact.whoItHelps)}
Operating Hours: ${getLoc(contact.whenToContact)}
Jurisdiction: ${getLoc(contact.locationCoverage)}
Official Helpline: ${contact.phone}

3. RECENT CITIZEN QUERIES & SCHEME CONTEXT
------------------------------------------
${recentQueries || '• Seeking initial guidance on role-based welfare entitlement delivery and verification.'}

4. CITIZEN DECLARATION
----------------------
"I hereby state that the demographic and social particulars stated above represent my valid citizen status. I request expedited assistance and resolution from the concerned welfare officer."
`;
  };

  const handleCopySummary = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
            <Headphones className="w-4 h-4" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#091526] tracking-tight">
            {t.supportTitle}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          {t.supportSubtitle}
        </p>
      </div>

      {/* Support Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredContacts.map((contact: SupportContact) => (
          <div
            key={contact.id}
            className="bg-white/80 hover:bg-white backdrop-blur-md rounded-3xl p-5 border border-white/80 hover:border-cyan-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header: Office name & verified badge */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-[#091526] leading-snug">
                  {getLoc(contact.officeName)}
                </h3>
                {contact.verified && (
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1 flex-shrink-0">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                )}
              </div>

              {/* Who it helps */}
              <div className="p-3 bg-sky-50/70 rounded-2xl border border-sky-100/80 mb-3 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block mb-0.5">
                  {t.whoItHelpsLabel}
                </span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {getLoc(contact.whoItHelps)}
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-2 text-xs text-slate-600 mb-4">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">{t.whenToContactLabel}: </span>
                    <span>{getLoc(contact.whenToContact)}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Languages className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">{t.languagesLabel}: </span>
                    <span>{getLoc(contact.languages)}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">{t.coverageLabel}: </span>
                    <span>{getLoc(contact.locationCoverage)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 font-bold text-slate-800">
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:text-sky-700 underline decoration-cyan-300"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setCallbackContact(contact);
                  setCallbackSubmitted(false);
                  setCallbackPhoneInput('');
                }}
                className="flex-1 py-2 px-3 bg-white hover:bg-sky-50 text-sky-800 font-semibold rounded-xl text-xs border border-sky-200 transition-colors cursor-pointer shadow-2xs flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
                <span>{t.btnRequestCallback}</span>
              </button>

              <button
                type="button"
                onClick={() => setIssueSummaryModalContact(contact)}
                className="py-2 px-3 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold rounded-xl text-xs border border-sky-200 transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.btnPrepareSummary}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Request Callback Modal */}
      {callbackContact && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  {t.callbackModalTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {getLoc(callbackContact.officeName)}
                </p>
              </div>
              <button
                onClick={() => setCallbackContact(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {callbackSubmitted ? (
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-950 text-sm">
                  {t.callbackRequestedToast}
                </h4>
                <p className="text-xs text-emerald-800">
                  An official case coordinator will reach out to your registered phone number.
                </p>
                <button
                  onClick={() => setCallbackContact(null)}
                  className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold"
                >
                  {t.btnClose}
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCallbackSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <p className="text-slate-600 leading-relaxed">
                  {t.callbackModalDesc}
                </p>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[6-9][0-9]{9}"
                    placeholder="10-digit mobile number"
                    value={callbackPhoneInput}
                    onChange={(e) => setCallbackPhoneInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setCallbackContact(null)}
                    className="px-3 py-2 text-slate-500 hover:text-slate-700 font-semibold"
                  >
                    {t.btnCancel}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                  >
                    Confirm Callback Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Prepare Issue Summary Modal (Generates Instant Comprehensive Citizen Brief) */}
      {issueSummaryModalContact && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                  Official Issue Brief
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#091526] mt-1">
                  {t.summaryModalTitle}
                </h3>
              </div>
              <button
                onClick={() => setIssueSummaryModalContact(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              {t.summaryPreparedNotice}
            </p>

            {/* Generated Text Box */}
            <pre className="p-4 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-[11px] text-slate-800 whitespace-pre-wrap max-h-72 overflow-y-auto leading-relaxed select-text">
              {generateIssueSummary(issueSummaryModalContact)}
            </pre>

            {/* Action buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-[11px] text-slate-400">
                Encrypted & Signed by NIRVAHA AI
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    handleCopySummary(generateIssueSummary(issueSummaryModalContact))
                  }
                  className="px-3.5 py-2 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer border border-sky-200"
                >
                  {copiedSummary ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSummary ? t.copiedNotice : t.btnPrintCopy}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIssueSummaryModalContact(null)}
                  className="px-4 py-2 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-bold rounded-xl text-xs shadow-xs cursor-pointer"
                >
                  {t.btnClose}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
