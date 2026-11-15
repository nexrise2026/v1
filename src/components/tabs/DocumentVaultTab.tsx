import React, { useState } from 'react';
import {
  FolderLock,
  Upload,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Bell,
  BellOff,
  FileText,
  FileCheck2,
  RefreshCw,
  Building2,
  Bookmark,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DOCUMENTS_DATABASE } from '../../data/documents';
import { DocumentVaultStatus, DocumentItem } from '../../types';

export const DocumentVaultTab: React.FC = () => {
  const { t, getLoc, userProfile, uploadedDocs, updateDocumentStatus } = useApp();

  const [activeUploadDocId, setActiveUploadDocId] = useState<string | null>(null);

  // Filter documents strictly by citizen role and state
  const citizenDocs = DOCUMENTS_DATABASE.filter((doc) => {
    if (doc.role !== userProfile.role) return false;
    if (doc.states && doc.states !== 'ALL' && !doc.states.includes(userProfile.state)) {
      return false;
    }
    return true;
  });

  // Simulated file picker upload
  const handleSimulatedUpload = (docId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      updateDocumentStatus(docId, {
        status: 'verified',
        fileName: file.name,
        uploadedAt: new Date().toLocaleDateString(),
        reminder: true,
      });
    } else {
      updateDocumentStatus(docId, {
        status: 'verified',
        fileName: `${docId}_verified_doc.pdf`,
        uploadedAt: new Date().toLocaleDateString(),
        reminder: true,
      });
    }
  };

  const toggleReminder = (docId: string) => {
    const current = uploadedDocs[docId] || { status: 'not_uploaded' };
    updateDocumentStatus(docId, {
      ...current,
      reminder: !current.reminder,
    });
  };

  const getStatusBadge = (status: DocumentVaultStatus) => {
    switch (status) {
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            {t.docStatusVerified}
          </span>
        );
      case 'uploaded':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            <FileCheck2 className="w-3 h-3 text-blue-600" />
            {t.docStatusUploaded}
          </span>
        );
      case 'expiring_soon':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-600" />
            {t.docStatusExpiringSoon}
          </span>
        );
      case 'expired':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800 border border-rose-200">
            <AlertTriangle className="w-3 h-3 text-rose-600" />
            {t.docStatusExpired}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
            <FileText className="w-3 h-3 text-slate-400" />
            {t.docStatusNotUploaded}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
            <FolderLock className="w-4 h-4" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#091526] tracking-tight">
            {t.vaultTitle}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          {t.vaultSubtitle}
        </p>
      </div>

      {/* Document Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {citizenDocs.map((doc: DocumentItem) => {
          const docState = uploadedDocs[doc.id] || { status: 'not_uploaded', reminder: false };
          const isUploaded = docState.status === 'uploaded' || docState.status === 'verified';

          return (
            <div
              key={doc.id}
              className="bg-white/80 hover:bg-white backdrop-blur-md rounded-3xl p-5 border border-white/80 hover:border-cyan-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header row with status badge */}
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h3 className="text-base font-bold text-[#091526] leading-snug">
                    {getLoc(doc.title)}
                  </h3>
                  {getStatusBadge(docState.status)}
                </div>

                {/* Purpose */}
                <div className="text-xs text-slate-600 mb-2.5">
                  <span className="font-semibold text-slate-700">{t.purposeLabel}: </span>
                  <span className="leading-relaxed">{getLoc(doc.purpose)}</span>
                </div>

                {/* Issuing Authority */}
                <div className="text-xs text-slate-600 mb-2.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-700">{t.authorityLabel}: </span>
                  <span className="truncate">{getLoc(doc.issuingAuthority)}</span>
                </div>

                {/* Required for schemes */}
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-600 mb-3 flex items-start gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">{t.requiredForLabel}: </span>
                    <span>{getLoc(doc.requiredForSchemes)}</span>
                  </div>
                </div>

                {docState.fileName && (
                  <div className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 mb-3 flex items-center justify-between">
                    <span className="truncate">Attached: {docState.fileName}</span>
                    <span className="text-[10px] text-emerald-600">{docState.uploadedAt}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <label className="flex-1 py-2 px-3 bg-white hover:bg-sky-50 text-sky-800 font-semibold rounded-xl text-xs border border-sky-200 transition-colors cursor-pointer shadow-2xs flex items-center justify-center gap-1.5">
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleSimulatedUpload(doc.id, e)}
                  />
                  {isUploaded ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{t.btnReplaceDoc}</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-3.5 h-3.5" />
                      <span>{t.btnUploadDoc}</span>
                    </>
                  )}
                </label>

                {/* Reminder Toggle */}
                <button
                  type="button"
                  onClick={() => toggleReminder(doc.id)}
                  className={`p-2 rounded-xl text-xs font-medium border transition-colors flex items-center gap-1 cursor-pointer ${
                    docState.reminder
                      ? 'bg-sky-50 text-sky-800 border-sky-200'
                      : 'bg-white text-slate-500 border-slate-200 hover:text-slate-800'
                  }`}
                  title={docState.reminder ? 'Reminder Active' : 'Set Expiry Reminder'}
                >
                  {docState.reminder ? (
                    <Bell className="w-4 h-4 text-teal-600" />
                  ) : (
                    <BellOff className="w-4 h-4 text-slate-400" />
                  )}
                  <span className="hidden sm:inline text-[11px]">{t.reminderLabel}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
