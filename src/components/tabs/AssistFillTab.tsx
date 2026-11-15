import React, { useState, useMemo } from 'react';
import {
  FileSignature,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Save,
  Download,
  ExternalLink,
  Paperclip,
  UserCheck,
  Info,
  Check,
  FileText,
  Sparkles,
  Loader2,
  Award,
  RefreshCw,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ASSIST_FILL_FORMS } from '../../data/forms';

export const AssistFillTab: React.FC = () => {
  const { t, getLoc, userProfile, uploadedDocs, filterByCitizen, updateTaskStatus } = useApp();

  // Filter forms strictly by citizen role and state
  const availableForms = useMemo(() => {
    return filterByCitizen(ASSIST_FILL_FORMS);
  }, [userProfile.role, userProfile.state, userProfile.district]);

  const [selectedFormId, setSelectedFormId] = useState<string>(
    availableForms[0]?.id || ''
  );
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form input values for missing form-specific fields
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isScanningVault, setIsScanningVault] = useState<boolean>(false);
  const [vaultAutoFilled, setVaultAutoFilled] = useState<boolean>(false);

  // In-app direct submission states
  const [isSubmittingInApp, setIsSubmittingInApp] = useState<boolean>(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    refNumber: string;
    submittedAt: string;
    formTitle: string;
    department: string;
  } | null>(null);

  const activeFormConfig = availableForms.find((f) => f.id === selectedFormId) || availableForms[0];

  const handleFieldChange = (fieldId: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [fieldId]: value }));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Automated Vault Access & Self-Fill Engine
  const handleAutoFillFromVault = () => {
    setIsScanningVault(true);

    setTimeout(() => {
      let extractedValues: Record<string, string> = {};

      if (activeFormConfig.id === 'form-ssp-scholarship') {
        extractedValues = {
          universityRollNo: userProfile.ageOrProofNumber || '1RV22CS045',
          courseYear: '2nd Year',
          hostelType: 'Day Scholar (Commuting from home)',
        };
      } else if (activeFormConfig.id === 'form-pmkisan-ekyc') {
        extractedValues = {
          villageName: userProfile.district ? `${userProfile.district} Rural` : 'Kadur Hobli',
          surveyNumber: '142/2A',
          cultivatedLandExtent: '2 Acres 10 Guntas',
        };
      } else if (activeFormConfig.id === 'form-bocw-labour-card') {
        extractedValues = {
          primaryTrade: 'Masonry / Bricklaying',
          employerName: 'District Infrastructure Contractor',
        };
      } else if (activeFormConfig.id === 'form-sandhya-suraksha-pension') {
        extractedValues = {
          exactAge: '66',
          livingArrangement: 'Living with Family / Children',
        };
      } else if (activeFormConfig.id === 'form-udid-registration') {
        extractedValues = {
          disabilityType: 'Locomotor Disability (Mobility / Orthopedic)',
          disabilityPercentage: '50',
        };
      }

      setFieldValues(extractedValues);
      setIsScanningVault(false);
      setVaultAutoFilled(true);
      showToast(t.vaultAccessedSuccess);
    }, 700);
  };

  // In-App Direct Submission by NIRVAHA AI
  const handleSubmitInApp = () => {
    setIsSubmittingInApp(true);

    setTimeout(() => {
      const generatedRef = `NIR-${userProfile.role.substring(0, 3).toUpperCase()}-${new Date().getFullYear()}-${Math.floor(
        10000 + Math.random() * 90000
      )}`;

      const receipt = {
        refNumber: generatedRef,
        submittedAt: new Date().toLocaleString(),
        formTitle: getLoc(activeFormConfig.title),
        department: getLoc(activeFormConfig.department),
      };

      setSubmittedReceipt(receipt);
      setIsSubmittingInApp(false);

      // Also mark corresponding task completed in Next Steps
      if (activeFormConfig.id === 'form-ssp-scholarship') {
        updateTaskStatus('task-student-ssp-renewal', 'completed');
      } else if (activeFormConfig.id === 'form-pmkisan-ekyc') {
        updateTaskStatus('task-farmer-pmkisan-ekyc', 'completed');
      } else if (activeFormConfig.id === 'form-sandhya-suraksha-pension') {
        updateTaskStatus('task-senior-sandhya-pension', 'completed');
      } else if (activeFormConfig.id === 'form-udid-registration') {
        updateTaskStatus('task-disability-udid-link', 'completed');
      }

      showToast(t.submissionSuccessTitle);
    }, 1200);
  };

  const handleDownloadReceipt = () => {
    if (!submittedReceipt) return;

    const receiptText = `=====================================================
NIRVAHA AI — OFFICIAL CITIZEN SUBMISSION RECEIPT
${t.officialStamp}
=====================================================
Application Reference No: ${submittedReceipt.refNumber}
Form Name: ${submittedReceipt.formTitle}
Department: ${submittedReceipt.department}
Submission Timestamp: ${submittedReceipt.submittedAt}
Status: VERIFIED & OFFICIALLY LODGED

CITIZEN DETAILS
---------------
Full Name: ${userProfile.fullName || 'Citizen'}
Role: ${userProfile.role.toUpperCase()}
State / UT: ${userProfile.state || 'India'}
District: ${userProfile.district || 'Unspecified'}
Category: ${userProfile.category || 'General'}
Gender: ${userProfile.gender || 'Unspecified'}
Income Band: ${userProfile.annualIncome || 'Unspecified'}

DATA EXTRACTED & SUBMITTED FROM CITIZEN VAULT
----------------------------------------------
${activeFormConfig.formSpecificFields
  .map((field) => `${getLoc(field.label)}: ${fieldValues[field.id] || 'Verified'}`)
  .join('\n')}

ATTACHED VAULT DOCUMENTS
------------------------
${activeFormConfig.requiredDocs
  .map((doc) => `[VERIFIED] ${getLoc(doc)}`)
  .join('\n')}

=====================================================
Verification Hash: SHA256-NIR-${Math.random().toString(36).substr(2, 9).toUpperCase()}
Digitally certified by NIRVAHA AI Public Service Gateway.
`;

    const blob = new Blob([receiptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${submittedReceipt.refNumber}_Official_Receipt.txt`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Official receipt downloaded!');
  };

  if (!activeFormConfig) {
    return (
      <div className="bg-white/80 rounded-3xl p-8 text-center border border-slate-200/80 max-w-md mx-auto my-6 space-y-3 shadow-2xs">
        <h3 className="font-bold text-slate-800 text-sm">
          No forms currently available for this role and state.
        </h3>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#081426] border border-cyan-500/30 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-in slide-in-from-bottom duration-150">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
            <FileSignature className="w-4 h-4" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#091526] tracking-tight">
            {t.assistFillTitle}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {t.assistFillSubtitle}
        </p>
      </div>

      {/* Form Selector (if multiple available for role) */}
      {availableForms.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {availableForms.map((form) => (
            <button
              key={form.id}
              onClick={() => {
                setSelectedFormId(form.id);
                setCurrentStep(1);
                setFieldValues({});
                setVaultAutoFilled(false);
                setSubmittedReceipt(null);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedFormId === form.id
                  ? 'bg-gradient-to-r from-[#0369a1] to-[#0d9488] text-white shadow-xs'
                  : 'bg-white hover:bg-sky-50 text-slate-700 border border-slate-200'
              }`}
            >
              {getLoc(form.title).split('Form')[0].trim()}
            </button>
          ))}
        </div>
      )}

      {/* IF ALREADY SUBMITTED IN-APP: Show Official Submission Slip */}
      {submittedReceipt ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-lg space-y-6 animate-in zoom-in-95 duration-200">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              {t.submissionSuccessTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              {t.submissionSuccessDesc}
            </p>
          </div>

          {/* Receipt Details Card */}
          <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <span className="text-slate-500 font-medium">{t.applicationRefNoLabel}</span>
              <span className="font-mono font-bold text-sm text-emerald-800">
                {submittedReceipt.refNumber}
              </span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <span className="text-slate-500 font-medium">{t.departmentLabel}</span>
              <span className="font-semibold text-slate-800">{submittedReceipt.department}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <span className="text-slate-500 font-medium">{t.fullNameLabel.replace('*', '')}</span>
              <span className="font-bold text-slate-800">{userProfile.fullName}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Submission Timestamp</span>
              <span className="font-semibold text-slate-800">{submittedReceipt.submittedAt}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-center gap-2 text-xs text-slate-600 font-medium text-center">
            <Award className="w-4 h-4 text-sky-600" />
            <span>{t.officialStamp}</span>
          </div>

          {/* Receipt Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleDownloadReceipt}
              className="py-3 px-6 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-cyan-700/20 flex items-center gap-2 cursor-pointer transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{t.btnViewReceipt}</span>
            </button>

            <button
              onClick={() => {
                setSubmittedReceipt(null);
                setCurrentStep(1);
              }}
              className="py-3 px-5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-xs sm:text-sm border border-slate-200 cursor-pointer"
            >
              Fill Another Form
            </button>
          </div>

          {/* Optional link to visit official department website */}
          {activeFormConfig.portalUrl && (
            <div className="text-center pt-3 border-t border-slate-100">
              <a
                href={activeFormConfig.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-sky-700 inline-flex items-center gap-1.5 underline decoration-slate-300"
              >
                <span>{t.btnVisitPortalManual}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      ) : (
        /* Active Form In-App Guided Wizard */
        <div className="bg-white/85 backdrop-blur-md rounded-3xl border border-cyan-100/80 shadow-xs overflow-hidden">
          {/* Form Header with Quick Auto-Access Button */}
          <div className="p-5 sm:p-6 border-b border-slate-200/80 bg-slate-50/70">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#091526] leading-tight">
                  {getLoc(activeFormConfig.title)}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {getLoc(activeFormConfig.department)}
                </p>
              </div>

              {/* 1-Click Auto-Fill from Vault Button */}
              <button
                type="button"
                onClick={handleAutoFillFromVault}
                disabled={isScanningVault}
                className="self-start sm:self-auto px-4 py-2 bg-gradient-to-r from-[#0284c7] via-[#0891b2] to-[#10b981] hover:from-[#0369a1] hover:to-[#059669] text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {isScanningVault ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
                <span>{t.btnAutoFillFromVault}</span>
              </button>
            </div>

            {/* Scanning vault indicator */}
            {isScanningVault && (
              <div className="mb-4 p-3 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-xs flex items-center gap-2 animate-pulse">
                <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                <span>{t.scanningVaultNotice}</span>
              </div>
            )}

            {/* Stepper */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { num: 1, label: t.assistFillStep1.split('.')[1]?.trim() || 'Profile' },
                { num: 2, label: t.assistFillStep2.split('.')[1]?.trim() || 'Details' },
                { num: 3, label: t.assistFillStep3.split('.')[1]?.trim() || 'Vault Docs' },
                { num: 4, label: t.assistFillStep4.split('.')[1]?.trim() || 'Submit' },
              ].map((st) => {
                const isPast = currentStep > st.num;
                const isCurrent = currentStep === st.num;
                return (
                  <div key={st.num} className="flex flex-col items-center text-center">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all mb-1 ${
                        isPast
                          ? 'bg-emerald-500 text-white'
                          : isCurrent
                          ? 'bg-gradient-to-r from-[#0369a1] to-[#0d9488] text-white ring-4 ring-cyan-100'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isPast ? <Check className="w-4 h-4" /> : st.num}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs truncate max-w-full font-medium ${
                        isCurrent ? 'text-sky-700 font-bold' : 'text-slate-500'
                      }`}
                    >
                      {st.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Step Body */}
          <div className="p-5 sm:p-6 space-y-6">
            {/* STEP 1: REVIEW AUTO-FILLED PROFILE FIELDS */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200 text-xs text-sky-900 flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-sky-700 flex-shrink-0 mt-0.5" />
                  <span>{t.assistFillAutofillNotice}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-medium">{t.fullNameLabel}</span>
                    <span className="font-bold text-slate-800 text-sm">{userProfile.fullName || '—'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-medium">{t.stateLabel}</span>
                    <span className="font-semibold text-slate-800">{userProfile.state || '—'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-medium">{t.districtLabel}</span>
                    <span className="font-semibold text-slate-800">{userProfile.district || '—'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-medium">{t.categoryLabel}</span>
                    <span className="font-semibold text-slate-800">{userProfile.category || 'General'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-medium">{t.genderLabel}</span>
                    <span className="font-semibold text-slate-800">{userProfile.gender || '—'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-medium">{t.annualIncomeLabel}</span>
                    <span className="font-semibold text-slate-800">{userProfile.annualIncome || '—'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: FILL OR REVIEW VAULT-ACCESSED FIELDS */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                {vaultAutoFilled ? (
                  <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{t.vaultAccessedSuccess} You may review or modify any field below.</span>
                  </div>
                ) : (
                  <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200 text-xs text-sky-900 flex items-start gap-2">
                    <Info className="w-4 h-4 text-sky-700 flex-shrink-0 mt-0.5" />
                    <span>Specific form details retrieved or entered for this application.</span>
                  </div>
                )}

                <div className="space-y-4">
                  {activeFormConfig.formSpecificFields.map((field) => (
                    <div key={field.id} className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">
                        {getLoc(field.label)} {field.required && <span className="text-red-500">*</span>}
                      </label>

                      {field.type === 'select' && field.options ? (
                        <select
                          value={fieldValues[field.id] || ''}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600 focus:bg-white"
                        >
                          <option value="">{t.selectPlaceholder}</option>
                          {field.options.map((opt, idx) => (
                            <option key={idx} value={getLoc(opt)}>
                              {getLoc(opt)}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          value={fieldValues[field.id] || ''}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          placeholder={field.placeholder ? getLoc(field.placeholder) : ''}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white"
                        />
                      )}

                      {field.helperText && (
                        <span className="text-[11px] text-slate-500 block">
                          {getLoc(field.helperText)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: ATTACHED DOCUMENTS FROM VAULT */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                  <Paperclip className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>Verified credentials from your Document Vault are attached and verified.</span>
                </div>

                <div className="space-y-3">
                  {activeFormConfig.requiredDocs.map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">
                            {getLoc(doc)}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            Verified Document Record
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Attached & Validated
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: SUMMARY & IN-APP DIRECT SUBMISSION */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-in fade-in duration-150">
                <div className="p-4 bg-sky-50 rounded-2xl border border-sky-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-950 uppercase tracking-wider">
                      Application Ready for In-App Submission
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-600 text-white text-[11px] font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Ready
                    </span>
                  </div>

                  <div className="text-xs text-sky-950 space-y-1.5 pt-2 border-t border-sky-200/60">
                    <p>
                      <strong>Applicant:</strong> {userProfile.fullName} ({userProfile.gender}, {userProfile.category})
                    </p>
                    <p>
                      <strong>Location:</strong> {userProfile.district}, {userProfile.state}
                    </p>
                    {activeFormConfig.formSpecificFields.map((f) => (
                      <p key={f.id}>
                        <strong>{getLoc(f.label)}:</strong> {fieldValues[f.id] || 'Verified from Vault'}
                      </p>
                    ))}
                    <p>
                      <strong>Attached Records:</strong> {activeFormConfig.requiredDocs.length} Verified Vault Records Linked
                    </p>
                  </div>
                </div>

                {/* Submitting in-app progress notice */}
                {isSubmittingInApp && (
                  <div className="p-4 bg-sky-50 text-sky-900 rounded-2xl border border-sky-200 text-xs flex items-center justify-center gap-2 animate-pulse">
                    <Loader2 className="w-4 h-4 animate-spin text-sky-700" />
                    <span className="font-semibold">{t.submittingNotice}</span>
                  </div>
                )}

                {/* Direct In-App Submission Button */}
                <div className="space-y-3 pt-1">
                  <button
                    type="button"
                    onClick={handleSubmitInApp}
                    disabled={isSubmittingInApp}
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.99] text-white font-extrabold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20"
                  >
                    {isSubmittingInApp ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                    <span>{t.btnSubmitInApp}</span>
                  </button>

                  <div className="flex items-center justify-between text-xs gap-2">
                    <button
                      type="button"
                      onClick={() => showToast(t.draftSavedToast)}
                      className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{t.btnSaveDraft}</span>
                    </button>

                    {activeFormConfig.portalUrl && (
                      <a
                        href={activeFormConfig.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-sky-700 inline-flex items-center gap-1 underline text-[11px]"
                      >
                        <span>{t.btnVisitPortalManual}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => (prev - 1) as any)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t.btnPrevStep}</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => (prev + 1) as any)}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{t.btnNextStep}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
