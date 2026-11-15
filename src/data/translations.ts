import { LanguageCode } from '../types';

export interface TranslationDictionary {
  appName: string;
  appSubtitle: string;
  footerText: string;
  disclaimer: string;
  // Tabs
  tabHome: string;
  tabAIGuide: string;
  tabNextSteps: string;
  tabAssistFill: string;
  tabVault: string;
  tabConsent: string;
  tabServices: string;
  tabHumanSupport: string;
  // Onboarding Step 1
  loginBadge: string;
  loginHeading: string;
  loginSubheading: string;
  loginInputLabel: string;
  loginInputPlaceholder: string;
  passwordLabel: string;
  otherDeviceCheckbox: string;
  otpLabel: string;
  otpPlaceholder: string;
  detectedPc: string;
  deviceId: string;
  btnContinue: string;
  // Onboarding Step 2
  roleBadge: string;
  roleHeading: string;
  roleSubheading: string;
  roleStudent: string;
  roleStudentDesc: string;
  roleFarmer: string;
  roleFarmerDesc: string;
  roleWorker: string;
  roleWorkerDesc: string;
  roleSenior: string;
  roleSeniorDesc: string;
  roleDisability: string;
  roleDisabilityDesc: string;
  // Onboarding Step 3
  profileBadgeSuffix: string;
  profileHeading: string;
  profileSubheading: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  stateLabel: string;
  districtLabel: string;
  categoryLabel: string;
  annualIncomeLabel: string;
  rationCardLabel: string;
  genderLabel: string;
  ageProofLabel: string;
  ageProofPlaceholder: string;
  selectPlaceholder: string;
  securityNote: string;
  btnCompleteProfile: string;
  // Home Tab
  homeHeroHeading: string;
  homeHeroSubtitle: string;
  btnStartSituation: string;
  btnExploreServices: string;
  btnDocumentVault: string;
  speakToAi: string;
  quickActionsTitle: string;
  quickActionsSubtitle: string;
  // Voice
  voiceMicRequesting: string;
  voiceListening: string;
  voiceMicDenied: string;
  voiceUnsupported: string;
  btnTypeInstead: string;
  btnCancel: string;
  micPermissionHelp: string;
  btnAllowMic: string;
  // AI Guide
  aiGuideHeading: string;
  aiGuideSubtitle: string;
  suggestionsLabel: string;
  chatPlaceholder: string;
  thinkingNotice: string;
  btnReadAloud: string;
  btnStopAudio: string;
  btnCopy: string;
  copiedNotice: string;
  // Service Directory
  serviceDirTitle: string;
  serviceDirSubtitle: string;
  searchServicesPlaceholder: string;
  allCategories: string;
  badgeCentral: string;
  badgeState: string;
  badgeKarnataka: string;
  badgeVerified: string;
  btnCheckEligibility: string;
  btnApplyOnline: string;
  btnStartAssistFill: string;
  emptyServices: string;
  departmentLabel: string;
  benefitLabel: string;
  eligibilityLabel: string;
  documentsRequiredLabel: string;
  deadlineLabel: string;
  viewDetails: string;
  // Document Vault
  vaultTitle: string;
  vaultSubtitle: string;
  docStatusNotUploaded: string;
  docStatusUploaded: string;
  docStatusVerified: string;
  docStatusExpiringSoon: string;
  docStatusExpired: string;
  btnUploadDoc: string;
  btnReplaceDoc: string;
  reminderLabel: string;
  purposeLabel: string;
  authorityLabel: string;
  requiredForLabel: string;
  // AssistFill
  assistFillTitle: string;
  assistFillSubtitle: string;
  assistFillStep1: string;
  assistFillStep2: string;
  assistFillStep3: string;
  assistFillStep4: string;
  assistFillAutofillNotice: string;
  btnNextStep: string;
  btnPrevStep: string;
  btnSaveDraft: string;
  btnReadyToSubmit: string;
  btnDownloadSummary: string;
  openOfficialPortalNotice: string;
  btnOpenPortal: string;
  draftSavedToast: string;
  readyToast: string;
  // In-app automated submission
  btnAutoFillFromVault: string;
  scanningVaultNotice: string;
  vaultAccessedSuccess: string;
  btnSubmitInApp: string;
  submittingNotice: string;
  submissionSuccessTitle: string;
  submissionSuccessDesc: string;
  applicationRefNoLabel: string;
  btnVisitPortalManual: string;
  btnViewReceipt: string;
  officialStamp: string;
  // Consent Centre
  consentTitle: string;
  consentSubtitle: string;
  consentPrivacyNotice: string;
  colDepartment: string;
  colData: string;
  colPurpose: string;
  colRetention: string;
  colStatus: string;
  colActions: string;
  btnAllow: string;
  btnDeny: string;
  btnRevoke: string;
  statusAllowed: string;
  statusDenied: string;
  statusPending: string;
  statusRevoked: string;
  // Human Support
  supportTitle: string;
  supportSubtitle: string;
  whoItHelpsLabel: string;
  whenToContactLabel: string;
  languagesLabel: string;
  coverageLabel: string;
  btnRequestCallback: string;
  btnPrepareSummary: string;
  callbackModalTitle: string;
  callbackModalDesc: string;
  callbackRequestedToast: string;
  btnClose: string;
  summaryModalTitle: string;
  summaryPreparedNotice: string;
  btnPrintCopy: string;
  // My Next Steps
  nextStepsTitle: string;
  nextStepsSubtitle: string;
  tabAll: string;
  urgencyOverdue: string;
  urgencyDueSoon: string;
  urgencyUpcoming: string;
  urgencyOptional: string;
  btnAskNirvaha: string;
  statusNotStarted: string;
  statusInProgress: string;
  statusCompleted: string;
  btnAddCustomTask: string;
  customTaskModalTitle: string;
  taskTitleLabel: string;
  taskWhyLabel: string;
  taskDeadlineLabel: string;
  btnSaveTask: string;
  // Profile Drawer
  profileDrawerTitle: string;
  btnEditProfile: string;
  btnSwitchRole: string;
  btnSignOut: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    appName: 'NIRVAHA AI',
    appSubtitle: 'From life event to the right action',
    footerText: 'NIRVAHA AI • Multilingual Public Service Agent • Multi-Device Security Verified',
    disclaimer: 'NIRVAHA AI provides guidance only. Final eligibility and approval are decided by the concerned government department.',
    tabHome: 'Home',
    tabAIGuide: 'AI Guide',
    tabNextSteps: 'My Next Steps',
    tabAssistFill: 'AssistFill',
    tabVault: 'Document Vault',
    tabConsent: 'Consent Centre',
    tabServices: 'Service Directory',
    tabHumanSupport: 'Human Support',
    loginBadge: 'CITIZEN SECURE SIGN-IN',
    loginHeading: 'Access Public Services',
    loginSubheading: 'Enter your Gmail account or phone number to access personalized welfare guidance.',
    loginInputLabel: 'Email or 10-Digit Phone Number *',
    loginInputPlaceholder: 'e.g. citizen@gmail.com or 9876543210',
    passwordLabel: 'Password *',
    otherDeviceCheckbox: 'Logging in with other / new device?',
    otpLabel: '6-Digit Security OTP *',
    otpPlaceholder: 'Enter 6-digit OTP',
    detectedPc: 'Detected: Windows PC',
    deviceId: 'ID: DEV-86CJ',
    btnContinue: 'Continue →',
    roleBadge: 'STEP 2: WHO ARE YOU?',
    roleHeading: 'Select Your Role',
    roleSubheading: 'We will configure your Citizen Vault & Status Tracker only with suggestions relevant to you.',
    roleStudent: 'Student / College Learner',
    roleStudentDesc: 'Scholarships, fee concessions, hostel stipends, education loans, bus passes & verification.',
    roleFarmer: 'Farmer / Agriculturist',
    roleFarmerDesc: 'PM-KISAN, crop insurance (PMFBY), KCC, land record linking (RTC/FRUITS), subsidies & solar pumps.',
    roleWorker: 'Worker / Daily Wage Earner',
    roleWorkerDesc: 'e-Shram UAN, BOCW labour card, PM-SYM pension, Ayushman health coverage & safety benefits.',
    roleSenior: 'Senior Citizen / Pensioner',
    roleSeniorDesc: 'Sandhya Suraksha, Old Age Pension (IGNOAPS), Jeevan Pramaan life certificate & 70+ healthcare.',
    roleDisability: 'Person with Disability (Divyangjan)',
    roleDisabilityDesc: 'UDID card, monthly disability pension, ADIP assistive devices, Niramaya health & concessions.',
    profileBadgeSuffix: 'BUILD YOUR OWN PROFILE',
    profileHeading: 'Configure Your Profile',
    profileSubheading: 'Enter your custom name and specifics for tailored public welfare delivery.',
    fullNameLabel: 'Your Full Name *',
    fullNamePlaceholder: 'Enter your legal full name',
    stateLabel: 'State *',
    districtLabel: 'District',
    categoryLabel: 'Category *',
    annualIncomeLabel: 'Annual Income',
    rationCardLabel: 'Ration Card',
    genderLabel: 'Gender *',
    ageProofLabel: 'Age / Role Proof Number',
    ageProofPlaceholder: 'Optional (e.g. Student ID, Job Card No.)',
    selectPlaceholder: 'Select...',
    securityNote: 'Zero sensitive data stored. Passwords, full Aadhaar, or bank PINs are never saved.',
    btnCompleteProfile: 'Complete Profile →',
    homeHeroHeading: 'Tell us what changed in your life. We will help you find the right next steps.',
    homeHeroSubtitle: 'Get simple, verified guidance for public services, documents, benefits, deadlines, and support options.',
    btnStartSituation: 'Start with my situation →',
    btnExploreServices: 'Explore services',
    btnDocumentVault: 'Document Vault',
    speakToAi: 'Speak to NIRVAHA AI',
    quickActionsTitle: 'Quick Life Events for You',
    quickActionsSubtitle: 'Real-time entitlement triggers based strictly on your profile and location.',
    voiceMicRequesting: 'Requesting Microphone Access... Please click Allow in your browser.',
    voiceListening: 'Listening... Speak now',
    voiceMicDenied: 'Microphone permission denied. Please click Allow in browser bar or type instead.',
    voiceUnsupported: 'Speech recognition is not supported in this browser. Please type your query.',
    btnTypeInstead: 'Type instead',
    btnCancel: 'Cancel',
    micPermissionHelp: 'Microphone access is needed to speak. Click allow when prompted.',
    btnAllowMic: 'Grant Microphone Access',
    aiGuideHeading: 'NIRVAHA AI Guide',
    aiGuideSubtitle: 'Empathetic, verified public welfare advisor tailored to your citizen record.',
    suggestionsLabel: 'Suggestions',
    chatPlaceholder: 'Ask about schemes, eligibility, documents, or share what is on your mind...',
    thinkingNotice: 'NIRVAHA AI is thinking...',
    btnReadAloud: 'Read aloud',
    btnStopAudio: 'Stop audio',
    btnCopy: 'Copy',
    copiedNotice: 'Copied to clipboard!',
    serviceDirTitle: 'Service Directory',
    serviceDirSubtitle: 'Official benefits, subsidies, and entitlement programs strictly filtered for: {role}, {state}, {district}.',
    searchServicesPlaceholder: 'Search by scheme title, department...',
    allCategories: 'All Categories',
    badgeCentral: 'Central Scheme',
    badgeState: 'State Scheme',
    badgeKarnataka: 'Karnataka',
    badgeVerified: 'Verified Official',
    btnCheckEligibility: 'Check Eligibility →',
    btnApplyOnline: 'Apply Online',
    btnStartAssistFill: 'Start in AssistFill',
    emptyServices: 'No services currently match your selected role and location.',
    departmentLabel: 'Department',
    benefitLabel: 'Benefit Summary',
    eligibilityLabel: 'Eligibility Criteria',
    documentsRequiredLabel: 'Required Documents',
    deadlineLabel: 'Next Deadline',
    viewDetails: 'View Details',
    vaultTitle: 'Document Vault',
    vaultSubtitle: 'Securely track and prepare documents required for your citizen entitlements.',
    docStatusNotUploaded: 'Not uploaded',
    docStatusUploaded: 'Uploaded',
    docStatusVerified: 'Verified',
    docStatusExpiringSoon: 'Expiring soon',
    docStatusExpired: 'Expired',
    btnUploadDoc: 'Upload Document',
    btnReplaceDoc: 'Replace Document',
    reminderLabel: 'Expiry Reminder',
    purposeLabel: 'Purpose',
    authorityLabel: 'Issuing Authority',
    requiredForLabel: 'Required for schemes',
    assistFillTitle: 'AssistFill — In-App Form Assistant',
    assistFillSubtitle: 'Complete official entitlement forms step-by-step with zero credential risk.',
    assistFillStep1: '1. Profile Review',
    assistFillStep2: '2. Form Details',
    assistFillStep3: '3. Attach Documents',
    assistFillStep4: '4. Summary & Verification',
    assistFillAutofillNotice: 'Auto-filled from your profile. Sensitive credentials (Aadhaar, Bank PINs) are never touched.',
    btnNextStep: 'Next Step →',
    btnPrevStep: '← Previous Step',
    btnSaveDraft: 'Save Application Draft',
    btnReadyToSubmit: 'Mark Ready to Submit',
    btnDownloadSummary: 'Download Filled Summary (PDF/Text)',
    openOfficialPortalNotice: 'Optionally visit the department portal if you prefer to fill manually:',
    btnOpenPortal: 'Visit Portal Manually',
    draftSavedToast: 'Application draft saved successfully!',
    readyToast: 'Marked as Ready to Submit! Official review summary generated.',
    btnAutoFillFromVault: 'Auto-Access Vault & Fill Form',
    scanningVaultNotice: 'Scanning your Citizen Document Vault & extracting verified credentials...',
    vaultAccessedSuccess: 'Vault records matched! Form auto-populated with 100% verified data.',
    btnSubmitInApp: 'Submit Application with NIRVAHA AI',
    submittingNotice: 'Submitting application securely via NIRVAHA Citizen Gateway...',
    submissionSuccessTitle: 'Application Successfully Submitted!',
    submissionSuccessDesc: 'Your application has been received and digitally signed. An official receipt has been issued.',
    applicationRefNoLabel: 'Official Application Reference Number',
    btnVisitPortalManual: 'Or visit department website to fill manually',
    btnViewReceipt: 'Download Official Receipt',
    officialStamp: 'Digitally Verified & Submitted by NIRVAHA AI Gateway',
    consentTitle: 'Consent Centre',
    consentSubtitle: 'You control which departments can access your profile information.',
    consentPrivacyNotice: 'NIRVAHA AI strictly enforces privacy-by-design. Consent can be revoked at any time.',
    colDepartment: 'Department / Scheme',
    colData: 'Requested Data',
    colPurpose: 'Purpose of Processing',
    colRetention: 'Retention Period',
    colStatus: 'Current Status',
    colActions: 'Permission Controls',
    btnAllow: 'Allow',
    btnDeny: 'Deny',
    btnRevoke: 'Revoke',
    statusAllowed: 'Allowed',
    statusDenied: 'Denied',
    statusPending: 'Pending',
    statusRevoked: 'Revoked',
    supportTitle: 'Human Support & Helpdesks',
    supportSubtitle: 'Official liaison contacts and Seva Kendra assistance filtered strictly for your profile.',
    whoItHelpsLabel: 'Who it helps',
    whenToContactLabel: 'When to contact',
    languagesLabel: 'Language support',
    coverageLabel: 'Jurisdiction / Coverage',
    btnRequestCallback: 'Request Callback',
    btnPrepareSummary: 'Prepare My Issue Summary',
    callbackModalTitle: 'Request an Official Callback',
    callbackModalDesc: 'A verified welfare desk officer will contact you within 24-48 business hours.',
    callbackRequestedToast: 'Callback request registered successfully! Reference ID: NIR-CB892',
    btnClose: 'Close',
    summaryModalTitle: 'Citizen Issue Brief for Department Officer',
    summaryPreparedNotice: 'This verified summary contains your profile context and recent queries. Show or present this to the Seva Kendra or officer.',
    btnPrintCopy: 'Copy Summary',
    nextStepsTitle: 'My Next Steps',
    nextStepsSubtitle: 'Actionable deadline tracking and entitlement workflow tailored to your role.',
    tabAll: 'All Tasks',
    urgencyOverdue: 'Overdue',
    urgencyDueSoon: 'Due Soon',
    urgencyUpcoming: 'Upcoming',
    urgencyOptional: 'Optional',
    btnAskNirvaha: 'Ask NIRVAHA AI',
    statusNotStarted: 'Not Started',
    statusInProgress: 'In Progress',
    statusCompleted: 'Completed',
    btnAddCustomTask: '+ Add Custom Task',
    customTaskModalTitle: 'Add a Personalized Citizen Task',
    taskTitleLabel: 'Task Title *',
    taskWhyLabel: 'Why it matters *',
    taskDeadlineLabel: 'Deadline / Timeframe *',
    btnSaveTask: 'Add to My Next Steps',
    profileDrawerTitle: 'Citizen Profile & Preferences',
    btnEditProfile: 'Edit Profile Details',
    btnSwitchRole: 'Switch Citizen Role',
    btnSignOut: 'Sign Out / Reset Session',
  },
  kn: {
    appName: 'ನಿರ್ವಾಹ AI',
    appSubtitle: 'ಜೀವನದ ಘಟನೆಯಿಂದ ಸರಿಯಾದ ಕ್ರಮದವರೆಗೆ',
    footerText: 'ನಿರ್ವಾಹ AI • ಬಹುಭಾಷಾ ಸಾರ್ವಜನಿಕ ಸೇವಾ ಸಹಾಯಕ • ಬಹು-ಸಾಧನ ಭದ್ರತೆ ದೃಢೀಕೃತ',
    disclaimer: 'ನಿರ್ವಾಹ AI ಕೇವಲ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಅಂತಿಮ ಅರ್ಹತೆ ಮತ್ತು ಅನುಮೋದನೆಯನ್ನು ಸಂಬಂಧಪಟ್ಟ ಸರ್ಕಾರಿ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸುತ್ತದೆ.',
    tabHome: 'ಮುಖಪುಟ',
    tabAIGuide: 'AI ಮಾರ್ಗದರ್ಶಿ',
    tabNextSteps: 'ನನ್ನ ಮುಂದಿನ ಕ್ರಮಗಳು',
    tabAssistFill: 'ಅಸಿಸ್ಟ್‌ಫಿಲ್',
    tabVault: 'ದಾಖಲೆ ವಾಲ್ಟ್',
    tabConsent: 'ಸಮ್ಮತಿ ಕೇಂದ್ರ',
    tabServices: 'ಸೇವಾ ಡೈರೆಕ್ಟರಿ',
    tabHumanSupport: 'ಮಾನವ ಬೆಂಬಲ',
    loginBadge: 'ನಾಗರಿಕ ಸುರಕ್ಷಿತ ಪ್ರವೇಶ',
    loginHeading: 'ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳನ್ನು ಪಡೆಯಿರಿ',
    loginSubheading: 'ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಕಲ್ಯಾಣ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಲು ನಿಮ್ಮ Gmail ಖಾತೆ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.',
    loginInputLabel: 'ಇಮೇಲ್ ಅಥವಾ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *',
    loginInputPlaceholder: 'ಉದಾ. citizen@gmail.com ಅಥವಾ 9876543210',
    passwordLabel: 'ಗುಪ್ತಪದ (Password) *',
    otherDeviceCheckbox: 'ಇತರ / ಹೊಸ ಸಾಧನದಿಂದ ಲಾಗಿನ್ ಆಗುತ್ತಿದ್ದೀರಾ?',
    otpLabel: '6-ಅಂಕಿಯ ಭದ್ರತಾ OTP *',
    otpPlaceholder: '6-ಅಂಕಿಯ OTP ನಮೂದಿಸಿ',
    detectedPc: 'ಪತ್ತೆಯಾಗಿದೆ: Windows PC',
    deviceId: 'ಐಡಿ: DEV-86CJ',
    btnContinue: 'ಮುಂದುವರಿಸಿ →',
    roleBadge: 'ಹಂತ 2: ನೀವು ಯಾರು?',
    roleHeading: 'ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    roleSubheading: 'ನಿಮಗೆ ಸಂಬಂಧಿಸಿದ ಸಲಹೆಗಳೊಂದಿಗೆ ಮಾತ್ರ ನಿಮ್ಮ ಸಿಟಿಜನ್ ವಾಲ್ಟ್ ಮತ್ತು ಟ್ರ್ಯಾಕರ್ ಅನ್ನು ನಾವು ರೂಪಿಸುತ್ತೇವೆ.',
    roleStudent: 'ವಿದ್ಯಾರ್ಥಿ / ಕಾಲೇಜು ಕಲಿಯುವವರು',
    roleStudentDesc: 'ವಿದ್ಯಾರ್ಥಿವೇತನ, ಶುಲ್ಕ ರಿಯಾಯಿತಿ, ಹಾಸ್ಟೆಲ್ ನೆರವು, ಶೈಕ್ಷಣಿಕ ಸಾಲ, ಬಸ್ ಪಾಸ್ ಮತ್ತು ಪರಿಶೀಲನೆ.',
    roleFarmer: 'ರೈತ / ಕೃಷಿಕ',
    roleFarmerDesc: 'ಪಿಎಂ-ಕಿಸಾನ್, ಬೆಳೆ ವಿಮೆ (PMFBY), ಕೆಸಿಸಿ, ಆರ್‌ಟಿಸಿ/ಫ್ರೂಟ್ಸ್ ಜೋಡಣೆ, ಹನಿ ನೀರಾವರಿ ಮತ್ತು ಸೋಲಾರ್ ಪಂಪ್.',
    roleWorker: 'ಕಾರ್ಮಿಕ / ದಿನಗೂಲಿ ನೌಕರ',
    roleWorkerDesc: 'ಇ-ಶ್ರಮ್ ಕಾರ್ಡ್, ಕಟ್ಟಡ ಕಾರ್ಮಿಕ (BOCW) ಕಾರ್ಡ್, ಪಿಎಂ-ಎಸ್‌ವೈಎಂ ಪಿಂಚಣಿ, ಆಯುಷ್ಮಾನ್ ಮತ್ತು ಕಲ್ಯಾಣ ಸೌಲಭ್ಯ.',
    roleSenior: 'ಹಿರಿಯ ನಾಗರಿಕ / ಪಿಂಚಣಿದಾರರು',
    roleSeniorDesc: 'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಯೋಜನೆ, ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ, ಜೀವನ್ ಪ್ರಮಾಣ್ ಡಿಜಿಟಲ್ ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು 70+ ಆರೋಗ್ಯ ಕಾರ್ಡ್.',
    roleDisability: 'ವಿಕಲಾಂಗ ಚೇತನರು (ದಿವ್ಯಾಂಗಜನ್)',
    roleDisabilityDesc: 'ಯುಡಿಐಡಿ ಕಾರ್ಡ್, ಮಾಸಿಕ ಪಿಂಚಣಿ, ಅಡಿಪ್ ಸಹಾಯಕ ಸಾಧನಗಳು, ನಿರಾಮಯ ಆರೋಗ್ಯ ಮತ್ತು ರಿಯಾಯಿತಿಗಳು.',
    profileBadgeSuffix: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ರಚಿಸಿ',
    profileHeading: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಕಾನ್ಫಿಗರ್ ಮಾಡಿ',
    profileSubheading: 'ನಿಖರ ಸಾರ್ವಜನಿಕ ಕಲ್ಯಾಣ ವಿತರಣೆಗಾಗಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.',
    fullNameLabel: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು *',
    fullNamePlaceholder: 'ನಿಮ್ಮ ಅಧಿಕೃತ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
    stateLabel: 'ರಾಜ್ಯ *',
    districtLabel: 'ಜಿಲ್ಲೆ',
    categoryLabel: 'ವರ್ಗ (Category) *',
    annualIncomeLabel: 'ವಾರ್ಷಿಕ ಆದಾಯ',
    rationCardLabel: 'ರೇಷನ್ ಕಾರ್ಡ್',
    genderLabel: 'ಲಿಂಗ *',
    ageProofLabel: 'ವಯಸ್ಸು / ಪಾತ್ರ ಪುರಾವೆ ಸಂಖ್ಯೆ',
    ageProofPlaceholder: 'ಐಚ್ಛಿಕ (ಉದಾ. ವಿದ್ಯಾರ್ಥಿ ಐಡಿ, ಜಾಬ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ)',
    selectPlaceholder: 'ಆಯ್ಕೆಮಾಡಿ...',
    securityNote: 'ಯಾವುದೇ ಸೂಕ್ಷ್ಮ ಡೇಟಾವನ್ನು ಉಳಿಸಲಾಗುವುದಿಲ್ಲ. ಪಾಸ್‌ವರ್ಡ್‌ಗಳು, ಪೂರ್ಣ ಆಧಾರ್ ಅಥವಾ ಬ್ಯಾಂಕ್ ಪಿನ್‌ಗಳನ್ನು ಎಂದಿಗೂ ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.',
    btnCompleteProfile: 'ಪ್ರೊಫೈಲ್ ಪೂರ್ಣಗೊಳಿಸಿ →',
    homeHeroHeading: 'ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಏನಾದರೂ ಬದಲಾಗಿದೆಯೇ? ಸರಿಯಾದ ಮುಂದಿನ ಕ್ರಮಗಳನ್ನು ಹುಡುಕಲು ನಾವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
    homeHeroSubtitle: 'ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳು, ದಾಖಲೆಗಳು, ಸೌಲಭ್ಯಗಳು, ಗಡುವುಗಳು ಮತ್ತು ಬೆಂಬಲ ಆಯ್ಕೆಗಳಿಗೆ ಸರಳ ಮತ್ತು ಪರಿಶೀಲಿಸಿದ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.',
    btnStartSituation: 'ನನ್ನ ಪರಿಸ್ಥಿತಿಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿ →',
    btnExploreServices: 'ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    btnDocumentVault: 'ದಾಖಲೆ ವಾಲ್ಟ್',
    speakToAi: 'ನಿರ್ವಾಹ AI ಜೊತೆ ಮಾತನಾಡಿ',
    quickActionsTitle: 'ನಿಮಗಾಗಿ ತ್ವರಿತ ಜೀವನ ಘಟನೆಗಳು',
    quickActionsSubtitle: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಸ್ಥಳದ ಆಧಾರದ ಮೇಲೆ ನೈಜ-ಸಮಯದ ಸೌಲಭ್ಯಗಳು.',
    voiceMicRequesting: 'ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ಪಡೆಯಲಾಗುತ್ತಿದೆ... ದಯವಿಟ್ಟು ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಅನುಮತಿಸಿ (Allow).',
    voiceListening: 'ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ... ಈಗ ಮಾತನಾಡಿ',
    voiceMicDenied: 'ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಅನುಮತಿ ನೀಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ.',
    voiceUnsupported: 'ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಟೈಪ್ ಮಾಡಿ.',
    btnTypeInstead: 'ಬದಲಾಗಿ ಟೈಪ್ ಮಾಡಿ',
    btnCancel: 'ರದ್ದುಮಾಡಿ',
    micPermissionHelp: 'ಮಾತನಾಡಲು ಮೈಕ್ರೊಫೋನ್ ಪ್ರವೇಶ ಅಗತ್ಯವಿದೆ. ಕೇಳಿದಾಗ ಅನುಮತಿಸಿ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    btnAllowMic: 'ಮೈಕ್ರೊಫೋನ್ ಪ್ರವೇಶ ನೀಡಿ',
    aiGuideHeading: 'ನಿರ್ವಾಹ AI ಮಾರ್ಗದರ್ಶಿ',
    aiGuideSubtitle: 'ನಿಮ್ಮ ನಾಗರಿಕ ದಾಖಲೆಗೆ ಅನುಗುಣವಾಗಿ ಸಹಾನುಭೂತಿ ಮತ್ತು ಅಧಿಕೃತ ಕಲ್ಯಾಣ ಸಲಹೆಗಾರ.',
    suggestionsLabel: 'ಸಲಹೆಗಳು',
    chatPlaceholder: 'ಯೋಜನೆಗಳು, ಅರ್ಹತೆ, ದಾಖಲೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ ಅಥವಾ ನಿಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿರುವುದನ್ನು ಹಂಚಿಕೊಳ್ಳಿ...',
    thinkingNotice: 'ನಿರ್ವಾಹ AI ಯೋಚಿಸುತ್ತಿದೆ...',
    btnReadAloud: 'ಗಟ್ಟಿಯಾಗಿ ಓದಿ',
    btnStopAudio: 'ಧ್ವನಿ ನಿಲ್ಲಿಸಿ',
    btnCopy: 'ನಕಲಿಸಿ (Copy)',
    copiedNotice: 'ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ!',
    serviceDirTitle: 'ಸೇವಾ ಡೈರೆಕ್ಟರಿ',
    serviceDirSubtitle: 'ಅಧಿಕೃತ ಪ್ರಯೋಜನಗಳು, ಸಬ್ಸಿಡಿಗಳು ಮತ್ತು ಯೋಜನೆಗಳು: {role}, {state}, {district}.',
    searchServicesPlaceholder: 'ಯೋಜನೆಯ ಹೆಸರು, ಇಲಾಖೆ ಮೂಲಕ ಹುಡುಕಿ...',
    allCategories: 'ಎಲ್ಲಾ ವರ್ಗಗಳು',
    badgeCentral: 'ಕೇಂದ್ರ ಯೋಜನೆ',
    badgeState: 'ರಾಜ್ಯ ಯೋಜನೆ',
    badgeKarnataka: 'ಕರ್ನಾಟಕ',
    badgeVerified: 'ಪರಿಶೀಲಿತ ಅಧಿಕೃತ',
    btnCheckEligibility: 'ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ →',
    btnApplyOnline: 'ಆನ್‌ಲೈನ್ ಅರ್ಜಿ',
    btnStartAssistFill: 'ಅಸಿಸ್ಟ್‌ಫಿಲ್‌ನಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿ',
    emptyServices: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಪಾತ್ರ ಮತ್ತು ಸ್ಥಳಕ್ಕೆ ಯಾವುದೇ ಸೇವೆಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.',
    departmentLabel: 'ಇಲಾಖೆ',
    benefitLabel: 'ಪ್ರಯೋಜನದ ಸಾರಾಂಶ',
    eligibilityLabel: 'ಅರ್ಹತಾ ಮಾನದಂಡಗಳು',
    documentsRequiredLabel: 'ಅಗತ್ಯ ದಾಖಲೆಗಳು',
    deadlineLabel: 'ಮುಂದಿನ ಗಡುವು',
    viewDetails: 'ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    vaultTitle: 'ದಾಖಲೆ ವಾಲ್ಟ್',
    vaultSubtitle: 'ನಿಮ್ಮ ಸಾರ್ವಜನಿಕ ಸೌಲಭ್ಯಗಳಿಗೆ ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನಿರ್ವಹಿಸಿ.',
    docStatusNotUploaded: 'ಅಪ್‌ಲೋಡ್ ಮಾಡಿಲ್ಲ',
    docStatusUploaded: 'ಅಪ್‌ಲೋಡ್ ಆಗಿದೆ',
    docStatusVerified: 'ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    docStatusExpiringSoon: 'ಶೀಘ್ರದಲ್ಲೇ ಮುಕ್ತಾಯ',
    docStatusExpired: 'ಅವಧಿ ಮುಗಿದಿದೆ',
    btnUploadDoc: 'ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    btnReplaceDoc: 'ದಾಖಲೆ ಬದಲಾಯಿಸಿ',
    reminderLabel: 'ಗಡುವು ಜ್ಞಾಪನೆ',
    purposeLabel: 'ಉದ್ದೇಶ',
    authorityLabel: 'ನೀಡುವ ಪ್ರಾಧಿಕಾರ',
    requiredForLabel: 'ಅಗತ್ಯವಿರುವ ಯೋಜನೆಗಳು',
    assistFillTitle: 'ಅಸಿಸ್ಟ್‌ಫಿಲ್ — ಆ್ಯಪ್‌ನಲ್ಲೇ ಸ್ವಯಂಚಾಲಿತ ಫಾರ್ಮ್ ಸಹಾಯಕ',
    assistFillSubtitle: 'ಬೇರೆ ಯಾವುದೇ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಹೋಗದೆ ವಾಲ್ಟ್ ದಾಖಲೆಗಳನ್ನು ಬಳಸಿ ಆ್ಯಪ್‌ನಲ್ಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
    assistFillStep1: '1. ಪ್ರೊಫೈಲ್ ಪರಿಶೀಲನೆ',
    assistFillStep2: '2. ಫಾರ್ಮ್ ವಿವರಗಳು',
    assistFillStep3: '3. ವಾಲ್ಟ್ ದಾಖಲೆಗಳ ಜೋಡಣೆ',
    assistFillStep4: '4. ಸಾರಾಂಶ ಮತ್ತು ಸಲ್ಲಿಕೆ',
    assistFillAutofillNotice: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ನಿಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಭರ್ತಿ ಮಾಡಲಾಗಿದೆ. ಸೂಕ್ಷ್ಮ ಮಾಹಿತಿ (ಆಧಾರ್, ಬ್ಯಾಂಕ್ ಪಿನ್) ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.',
    btnNextStep: 'ಮುಂದಿನ ಹಂತ →',
    btnPrevStep: '← ಹಿಂದಿನ ಹಂತ',
    btnSaveDraft: 'ಕರಡು ಉಳಿಸಿ',
    btnReadyToSubmit: 'ಸಲ್ಲಿಸಲು ಸಿದ್ಧವೆಂದು ಗುರುತಿಸಿ',
    btnDownloadSummary: 'ಭರ್ತಿ ಮಾಡಿದ ಸಾರಾಂಶ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    openOfficialPortalNotice: 'ಸ್ವತಃ ಕೈಯಾರೆ ಭರ್ತಿ ಮಾಡಲು ಇಲಾಖಾ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡುವ ಆಯ್ಕೆ:',
    btnOpenPortal: 'ಕೈಯಾರೆ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ',
    draftSavedToast: 'ಅರ್ಜಿ ಕರಡು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!',
    readyToast: 'ಸಲ್ಲಿಸಲು ಸಿದ್ಧವಾಗಿದೆ ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ! ಅಧಿಕೃತ ಸಾರಾಂಶ ಸಿದ್ಧಗೊಂಡಿದೆ.',
    btnAutoFillFromVault: 'ವಾಲ್ಟ್ ದಾಖಲೆಗಳನ್ನು ಪಡೆದು ಸ್ವಯಂ ಭರ್ತಿ ಮಾಡಿ',
    scanningVaultNotice: 'ದಾಖಲೆ ವಾಲ್ಟ್ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ ಮತ್ತು ವಿವರಗಳನ್ನು ಸ್ವಯಂ ಪಡೆಯಲಾಗುತ್ತಿದೆ...',
    vaultAccessedSuccess: 'ವಾಲ್ಟ್ ದಾಖಲೆಗಳು ಪತ್ತೆಯಾಗಿವೆ! ಎಲ್ಲಾ ವಿವರಗಳು ನೂರಕ್ಕೆ ನೂರು ನಿಖರವಾಗಿ ಭರ್ತಿಯಾಗಿವೆ.',
    btnSubmitInApp: 'ನಿರ್ವಾಹ AI ಮೂಲಕವೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    submittingNotice: 'ನಿರ್ವಾಹ ಗೇಟ್‌ವೇ ಮೂಲಕ ಅರ್ಜಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
    submissionSuccessTitle: 'ಅರ್ಜಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!',
    submissionSuccessDesc: 'ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಡಿಜಿಟಲ್ ರೂಪದಲ್ಲಿ ದೃಢೀಕರಿಸಿ ಸಲ್ಲಿಸಲಾಗಿದೆ. ಅಧಿಕೃತ ರಶೀದಿಯನ್ನು ನೀಡಲಾಗಿದೆ.',
    applicationRefNoLabel: 'ಅಧಿಕೃತ ಅರ್ಜಿ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ',
    btnVisitPortalManual: 'ಅಥವಾ ಇಲಾಖಾ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಕೈಯಾರೆ ಭರ್ತಿ ಮಾಡಿ',
    btnViewReceipt: 'ಅಧಿಕೃತ ರಶೀದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    officialStamp: 'ನಿರ್ವಾಹ AI ಗೇಟ್‌ವೇ ಮೂಲಕ ಡಿಜಿಟಲ್ ದೃಢೀಕರಣ ಮತ್ತು ಸಲ್ಲಿಕೆ',
    consentTitle: 'ಸಮ್ಮತಿ ಕೇಂದ್ರ',
    consentSubtitle: 'ಯಾವ ಇಲಾಖೆಗಳು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿಯನ್ನು ಪ್ರವೇಶಿಸಬಹುದು ಎಂಬುದನ್ನು ನೀವೇ ನಿಯಂತ್ರಿಸುತ್ತೀರಿ.',
    consentPrivacyNotice: 'ನಿರ್ವಾಹ AI ಗೌಪ್ಯತೆಯನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪಾಲಿಸುತ್ತದೆ. ಸಮ್ಮತಿಯನ್ನು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಹಿಂಪಡೆಯಬಹುದು.',
    colDepartment: 'ಇಲಾಖೆ / ಯೋಜನೆ',
    colData: 'ಕೋರಲಾದ ಮಾಹಿತಿ',
    colPurpose: 'ಉದ್ದೇಶ',
    colRetention: 'ಉಳಿಸಿಕೊಳ್ಳುವ ಅವಧಿ',
    colStatus: 'ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ',
    colActions: 'ಅನುಮತಿ ನಿಯಂತ್ರಣಗಳು',
    btnAllow: 'ಅನುಮತಿಸಿ',
    btnDeny: 'ನಿರಾಕರಿಸಿ',
    btnRevoke: 'ಹಿಂಪಡೆಯಿರಿ',
    statusAllowed: 'ಅನುಮತಿಸಲಾಗಿದೆ',
    statusDenied: 'ನಿರಾಕರಿಸಲಾಗಿದೆ',
    statusPending: 'ಬಾಕಿ ಉಳಿದಿದೆ',
    statusRevoked: 'ಹಿಂಪಡೆಯಲಾಗಿದೆ',
    supportTitle: 'ಮಾನವ ಬೆಂಬಲ ಮತ್ತು ಸಹಾಯವಾಣಿಗಳು',
    supportSubtitle: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ಗೆ ಸೂಕ್ತವಾದ ಅಧಿಕೃತ ಅಧಿಕಾರಿಗಳು ಮತ್ತು ಸೇವಾ ಕೇಂದ್ರಗಳ ನೆರವು.',
    whoItHelpsLabel: 'ಯಾರಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ',
    whenToContactLabel: 'ಯಾವಾಗ ಸಂಪರ್ಕಿಸಬೇಕು',
    languagesLabel: 'ಭಾಷಾ ಬೆಂಬಲ',
    coverageLabel: 'ವ್ಯಾಪ್ತಿ / ಪ್ರದೇಶ',
    btnRequestCallback: 'ಕಾಲ್‌ಬ್ಯಾಕ್ ವಿನಂತಿಸಿ',
    btnPrepareSummary: 'ನನ್ನ ಸಮಸ್ಯೆಯ ಸಾರಾಂಶ ಸಿದ್ಧಪಡಿಸಿ',
    callbackModalTitle: 'ಅಧಿಕೃತ ಕಾಲ್‌ಬ್ಯಾಕ್ ವಿನಂತಿ',
    callbackModalDesc: 'ಪರಿಶೀಲಿಸಿದ ಕಲ್ಯಾಣ ಡೆಸ್ಕ್ ಅಧಿಕಾರಿಯು 24-48 ಕೆಲಸದ ಗಂಟೆಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
    callbackRequestedToast: 'ಕಾಲ್‌ಬ್ಯಾಕ್ ವಿನಂತಿ ದಾಖಲಾಗಿದೆ! ರೆಫರೆನ್ಸ್ ಐಡಿ: NIR-CB892',
    btnClose: 'ಮುಚ್ಚಿ',
    summaryModalTitle: 'ಇಲಾಖಾ ಅಧಿಕಾರಿಗೆ ನಾಗರಿಕ ಸಮಸ್ಯೆಯ ಸಾರಾಂಶ',
    summaryPreparedNotice: 'ಈ ಪರಿಶೀಲಿಸಿದ ಸಾರಾಂಶವು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ವಿವರಗಳು ಮತ್ತು ಇತ್ತೀಚಿನ ಪ್ರಶ್ನೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆ. ಇದನ್ನು ಸೇವಾ ಕೇಂದ್ರ ಅಥವಾ ಅಧಿಕಾರಿಗೆ ತೋರಿಸಿ.',
    btnPrintCopy: 'ಸಾರಾಂಶ ನಕಲಿಸಿ',
    nextStepsTitle: 'ನನ್ನ ಮುಂದಿನ ಕ್ರಮಗಳು',
    nextStepsSubtitle: 'ನಿಮ್ಮ ಪಾತ್ರಕ್ಕೆ ಸರಿಹೊಂದುವ ಗಡುವುಗಳು ಮತ್ತು ಕಾರ್ಯಗಳ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ.',
    tabAll: 'ಎಲ್ಲಾ ಕಾರ್ಯಗಳು',
    urgencyOverdue: 'ಅವಧಿ ಮೀರಿದೆ',
    urgencyDueSoon: 'ಶೀಘ್ರದಲ್ಲೇ ಮುಕ್ತಾಯ',
    urgencyUpcoming: 'ಮುಂಬರುವ',
    urgencyOptional: 'ಐಚ್ಛಿಕ',
    btnAskNirvaha: 'ನಿರ್ವಾಹ AI ಗೆ ಕೇಳಿ',
    statusNotStarted: 'ಪ್ರಾರಂಭಿಸಿಲ್ಲ',
    statusInProgress: 'ಪ್ರಗತಿಯಲ್ಲಿದೆ',
    statusCompleted: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
    btnAddCustomTask: '+ ಕಸ್ಟಮ್ ಕಾರ್ಯ ಸೇರಿಸಿ',
    customTaskModalTitle: 'ವೈಯಕ್ತಿಕ ನಾಗರಿಕ ಕಾರ್ಯವನ್ನು ಸೇರಿಸಿ',
    taskTitleLabel: 'ಕಾರ್ಯದ ಹೆಸರು *',
    taskWhyLabel: 'ಇದು ಏಕೆ ಮುಖ್ಯ *',
    taskDeadlineLabel: 'ಗಡುವು / ಸಮಯ ಮಿತಿ *',
    btnSaveTask: 'ಮುಂದಿನ ಕ್ರಮಗಳಿಗೆ ಸೇರಿಸಿ',
    profileDrawerTitle: 'ನಾಗರಿಕ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಆದ್ಯತೆಗಳು',
    btnEditProfile: 'ಪ್ರೊಫೈಲ್ ವಿವರ ತಿದ್ದುಪಡಿ',
    btnSwitchRole: 'ನಾಗರಿಕ ಪಾತ್ರ ಬದಲಿಸಿ',
    btnSignOut: 'ಲಾಗ್ ಔಟ್ / ಸೆಷನ್ ಮರುಹೊಂದಿಸಿ',
  },
  hi: {
    appName: 'निर्वाह AI',
    appSubtitle: 'जीवन की घटना से सही कदम तक',
    footerText: 'निर्वाह AI • बहुभाषी लोक सेवा सहायक • बहु-उपकरण सुरक्षा सत्यापित',
    disclaimer: 'निर्वाह AI केवल मार्गदर्शन प्रदान करता है। अंतिम पात्रता और स्वीकृति संबंधित सरकारी विभाग द्वारा तय की जाती है।',
    tabHome: 'होम',
    tabAIGuide: 'AI गाइड',
    tabNextSteps: 'मेरे अगले कदम',
    tabAssistFill: 'असिस्टफिल',
    tabVault: 'दस्तावेज़ वॉल्ट',
    tabConsent: 'सहमति केंद्र',
    tabServices: 'सेवा निर्देशिका',
    tabHumanSupport: 'मानव सहायता',
    loginBadge: 'नागरिक सुरक्षित साइन-इन',
    loginHeading: 'लोक सेवाओं तक पहुंचें',
    loginSubheading: 'व्यक्तिगत कल्याणकारी मार्गदर्शन प्राप्त करने के लिए अपना Gmail खाता या फ़ोन नंबर दर्ज करें।',
    loginInputLabel: 'ईमेल या 10-अंकीय मोबाइल नंबर *',
    loginInputPlaceholder: 'उदा. citizen@gmail.com या 9876543210',
    passwordLabel: 'पासवर्ड *',
    otherDeviceCheckbox: 'अन्य / नए उपकरण से लॉगिन कर रहे हैं?',
    otpLabel: '6-अंकीय सुरक्षा OTP *',
    otpPlaceholder: '6-अंकीय OTP दर्ज करें',
    detectedPc: 'पहचाना गया: Windows PC',
    deviceId: 'आईडी: DEV-86CJ',
    btnContinue: 'आगे बढ़ें →',
    roleBadge: 'चरण 2: आप कौन हैं?',
    roleHeading: 'अपनी भूमिका चुनें',
    roleSubheading: 'हम आपके नागरिक वॉल्ट और स्थिति ट्रैकर को केवल आपके लिए प्रासंगिक सुझावों से कॉन्फ़िगर करेंगे।',
    roleStudent: 'छात्र / कॉलेज शिक्षार्थी',
    roleStudentDesc: 'छात्रवृत्ति, शुल्क रियायत, छात्रावास सहायता, शिक्षा ऋण, बस पास और सत्यापन।',
    roleFarmer: 'किसान / कृषक',
    roleFarmerDesc: 'पीएम-किसान, फसल बीमा (PMFBY), केसीसी, भूमि रिकॉर्ड (RTC/FRUITS), सब्सिडी और सोलर पंप।',
    roleWorker: 'श्रमिक / दैनिक वेतन भोगी',
    roleWorkerDesc: 'ई-श्रम कार्ड, निर्माण श्रमिक (BOCW) कार्ड, पीएम-एसवाईएम पेंशन, आयुष्मान स्वास्थ्य व कल्याण।',
    roleSenior: 'वरिष्ठ नागरिक / पेंशनभोगी',
    roleSeniorDesc: 'संध्या सुरक्षा, वृद्धावस्था पेंशन (IGNOAPS), जीवन प्रमाण डिजिटल प्रमाणपत्र और 70+ स्वास्थ्य कार्ड।',
    roleDisability: 'दिव्यांगजन (विशेष योग्यजन)',
    roleDisabilityDesc: 'यूडीआईडी कार्ड, मासिक पेंशन, एडिप सहायक उपकरण, निरामया स्वास्थ्य और रियायतें।',
    profileBadgeSuffix: 'अपनी प्रोफ़ाइल बनाएं',
    profileHeading: 'अपनी प्रोफ़ाइल कॉन्फ़िगर करें',
    profileSubheading: 'सटीक सार्वजनिक कल्याण वितरण के लिए अपना नाम और विवरण दर्ज करें।',
    fullNameLabel: 'आपका पूरा नाम *',
    fullNamePlaceholder: 'अपना आधिकारिक पूरा नाम दर्ज करें',
    stateLabel: 'राज्य *',
    districtLabel: 'ज़िला',
    categoryLabel: 'वर्ग (Category) *',
    annualIncomeLabel: 'वार्षिक आय',
    rationCardLabel: 'राशन कार्ड',
    genderLabel: 'लिंग *',
    ageProofLabel: 'आयु / भूमिका प्रमाण संख्या',
    ageProofPlaceholder: 'वैकल्पिक (उदा. छात्र आईडी, जॉब कार्ड सं.)',
    selectPlaceholder: 'चुनें...',
    securityNote: 'शून्य संवेदनशील डेटा संग्रहीत। पासवर्ड, पूर्ण आधार या बैंक पिन कभी सहेजे नहीं जाते हैं।',
    btnCompleteProfile: 'प्रोफ़ाइल पूरी करें →',
    homeHeroHeading: 'हमें बताएं कि आपके जीवन में क्या बदलाव आया है। हम आपको सही अगले कदम खोजने में मदद करेंगे।',
    homeHeroSubtitle: 'सार्वजनिक सेवाओं, दस्तावेजों, लाभों, समय सीमाओं और सहायता विकल्पों के लिए सरल, सत्यापित मार्गदर्शन प्राप्त करें।',
    btnStartSituation: 'मेरी स्थिति से शुरू करें →',
    btnExploreServices: 'सेवाएं देखें',
    btnDocumentVault: 'दस्तावेज़ वॉल्ट',
    speakToAi: 'निर्वाह AI से बोलें',
    quickActionsTitle: 'आपके लिए त्वरित जीवन घटनाएं',
    quickActionsSubtitle: 'आपकी प्रोफ़ाइल और स्थान के आधार पर वास्तविक समय की पात्रताएं।',
    voiceMicRequesting: 'माइक्रोफ़ोन अनुमति का अनुरोध किया जा रहा है... कृपया अपने ब्राउज़र में अनुमति दें (Allow)।',
    voiceListening: 'सुन रहे हैं... अब बोलें',
    voiceMicDenied: 'माइक्रोफ़ोन अनुमति अस्वीकृत। कृपया ब्राउज़र बार में अनुमति दें या लिखकर पूछें।',
    voiceUnsupported: 'इस ब्राउज़र में वाक् पहचान समर्थित नहीं है। कृपया लिखकर पूछें।',
    btnTypeInstead: 'टाइप करके पूछें',
    btnCancel: 'रद्द करें',
    micPermissionHelp: 'बोलने के लिए माइक्रोफ़ोन की आवश्यकता है। पूछे जाने पर अनुमति दें।',
    btnAllowMic: 'माइक्रोफ़ोन अनुमति दें',
    aiGuideHeading: 'निर्वाह AI गाइड',
    aiGuideSubtitle: 'आपके नागरिक रिकॉर्ड के अनुसार सहानुभूतिपूर्ण, सत्यापित कल्याण सलाहकार।',
    suggestionsLabel: 'सुझाव',
    chatPlaceholder: 'योजनाओं, पात्रता, दस्तावेजों के बारे में पूछें या अपनी बात साझा करें...',
    thinkingNotice: 'निर्वाह AI सोच रहा है...',
    btnReadAloud: 'बोलकर सुनाएं',
    btnStopAudio: 'आवाज़ रोकें',
    btnCopy: 'कॉपी करें',
    copiedNotice: 'क्लिपबोर्ड पर कॉपी किया गया!',
    serviceDirTitle: 'सेवा निर्देशिका',
    serviceDirSubtitle: 'आधिकारिक लाभ, सब्सिडी और योजनाएं: {role}, {state}, {district}.',
    searchServicesPlaceholder: 'योजना के नाम या विभाग से खोजें...',
    allCategories: 'सभी श्रेणियां',
    badgeCentral: 'केंद्रीय योजना',
    badgeState: 'राज्य योजना',
    badgeKarnataka: 'कर्नाटक',
    badgeVerified: 'सत्यापित आधिकारिक',
    btnCheckEligibility: 'पात्रता जांचें →',
    btnApplyOnline: 'ऑनलाइन आवेदन करें',
    btnStartAssistFill: 'असिस्टफिल में शुरू करें',
    emptyServices: 'वर्तमान में आपके चयनित पद और स्थान के लिए कोई सेवा उपलब्ध नहीं है।',
    departmentLabel: 'विभाग',
    benefitLabel: 'लाभ सारांश',
    eligibilityLabel: 'पात्रता मानदंड',
    documentsRequiredLabel: 'आवश्यक दस्तावेज़',
    deadlineLabel: 'आगामी समय सीमा',
    viewDetails: 'विवरण देखें',
    vaultTitle: 'दस्तावेज़ वॉल्ट',
    vaultSubtitle: 'अपने नागरिक अधिकारों के लिए आवश्यक दस्तावेजों को सुरक्षित रूप से व्यवस्थित करें।',
    docStatusNotUploaded: 'अपलोड नहीं किया गया',
    docStatusUploaded: 'अपलोड किया गया',
    docStatusVerified: 'सत्यापित',
    docStatusExpiringSoon: 'शीघ्र समाप्त हो रहा है',
    docStatusExpired: 'समाप्त हो गया',
    btnUploadDoc: 'दस्तावेज़ अपलोड करें',
    btnReplaceDoc: 'दस्तावेज़ बदलें',
    reminderLabel: 'समय सीमा अनुस्मारक',
    purposeLabel: 'उद्देश्य',
    authorityLabel: 'जारीकर्ता प्राधिकरण',
    requiredForLabel: 'किन योजनाओं के लिए आवश्यक',
    assistFillTitle: 'असिस्टफिल — स्वचालित इन-ऐप फॉर्म सहायक',
    assistFillSubtitle: 'बिना किसी बाहरी वेबसाइट पर जाए वॉल्ट दस्तावेजों से सीधे ऐप में ही आवेदन पूरा व जमा करें।',
    assistFillStep1: '1. प्रोफ़ाइल समीक्षा',
    assistFillStep2: '2. फ़ॉर्म के विशिष्ट विवरण',
    assistFillStep3: '3. वॉल्ट दस्तावेज़ संलग्न करें',
    assistFillStep4: '4. सारांश एवं सीधा जमा',
    assistFillAutofillNotice: 'आपकी प्रोफ़ाइल से स्वतः भरा गया। संवेदनशील क्रेडेंशियल (आधार, बैंक पिन) कभी नहीं मांगे जाते।',
    btnNextStep: 'अगला चरण →',
    btnPrevStep: '← पिछला चरण',
    btnSaveDraft: 'ड्राफ्ट सहेजें',
    btnReadyToSubmit: 'जमा करने के लिए तैयार',
    btnDownloadSummary: 'भरा हुआ सारांश डाउनलोड करें',
    openOfficialPortalNotice: 'यदि आप मैन्युअल रूप से भरना चाहते हैं तो पोर्टल विकल्प:',
    btnOpenPortal: 'पोर्टल पर मैन्युअल भरें',
    draftSavedToast: 'आवेदन ड्राफ्ट सफलतापूर्वक सहेजा गया!',
    readyToast: 'जमा करने के लिए तैयार चिह्नित! आधिकारिक सारांश तैयार।',
    btnAutoFillFromVault: 'वॉल्ट से स्वतः भरें',
    scanningVaultNotice: 'दस्तावेज़ वॉल्ट से डेटा निकाला जा रहा है...',
    vaultAccessedSuccess: 'वॉल्ट से डेटा सफलतापूर्वक प्राप्त व स्वतः भर दिया गया!',
    btnSubmitInApp: 'निर्वाह AI से आवेदन सीधे जमा करें',
    submittingNotice: 'निर्वाह गेटवे के माध्यम से सुरक्षित जमा किया जा रहा है...',
    submissionSuccessTitle: 'आवेदन सफलतापूर्वक जमा हो गया!',
    submissionSuccessDesc: 'आपका आवेदन डिजिटल रूप से हस्ताक्षरित एवं जमा कर दिया गया है। रसीद जारी कर दी गई है।',
    applicationRefNoLabel: 'आधिकारिक आवेदन संदर्भ संख्या',
    btnVisitPortalManual: 'या मैन्युअल भरने हेतु विभाग की वेबसाइट पर जाएं',
    btnViewReceipt: 'आधिकारिक रसीद डाउनलोड करें',
    officialStamp: 'निर्वाह AI गेटवे द्वारा डिजिटल रूप से सत्यापित एवं प्रेषित',
    consentTitle: 'सहमति केंद्र',
    consentSubtitle: 'आप तय करते हैं कि कौन से विभाग आपकी जानकारी देख सकते हैं।',
    consentPrivacyNotice: 'निर्वाह AI गोपनीयता को पूरी तरह प्राथमिकता देता है। सहमति कभी भी रद्द की जा सकती है।',
    colDepartment: 'विभाग / योजना',
    colData: 'मांगी गई जानकारी',
    colPurpose: 'उद्देश्य',
    colRetention: 'प्रतिधारण अवधि',
    colStatus: 'वर्तमान स्थिति',
    colActions: 'अनुमति नियंत्रण',
    btnAllow: 'अनुमति दें',
    btnDeny: 'अस्वीकार करें',
    btnRevoke: 'वापस लें',
    statusAllowed: 'अनुमति प्राप्त',
    statusDenied: 'अस्वीकृत',
    statusPending: 'लंबित',
    statusRevoked: 'वापस लिया गया',
    supportTitle: 'मानव सहायता और हेल्पलाइन',
    supportSubtitle: 'सत्यापित संपर्क और सेवा केंद्र सहायता आपकी प्रोफ़ाइल के अनुसार उपलब्ध।',
    whoItHelpsLabel: 'किसके लिए है',
    whenToContactLabel: 'कब संपर्क करें',
    languagesLabel: 'भाषा सहायता',
    coverageLabel: 'क्षेत्र / अधिकार क्षेत्र',
    btnRequestCallback: 'कॉलबैक का अनुरोध करें',
    btnPrepareSummary: 'मेरी समस्या का सारांश तैयार करें',
    callbackModalTitle: 'आधिकारिक कॉलबैक का अनुरोध',
    callbackModalDesc: 'एक सत्यापित कल्याण अधिकारी 24-48 घंटों के भीतर आपसे संपर्क करेगा।',
    callbackRequestedToast: 'कॉलबैक अनुरोध पंजीकृत! संदर्भ आईडी: NIR-CB892',
    btnClose: 'बंद करें',
    summaryModalTitle: 'अधिकारी के लिए नागरिक समस्या सारांश',
    summaryPreparedNotice: 'इस सारांश में आपकी प्रोफ़ाइल और हालिया प्रश्न शामिल हैं। इसे सेवा केंद्र या अधिकारी को दिखाएं।',
    btnPrintCopy: 'सारांश कॉपी करें',
    nextStepsTitle: 'मेरे अगले कदम',
    nextStepsSubtitle: 'आपकी भूमिका के अनुसार आगामी समय सीमा और कार्यों की सूची।',
    tabAll: 'सभी कार्य',
    urgencyOverdue: 'समय सीमा पार',
    urgencyDueSoon: 'जल्द देय',
    urgencyUpcoming: 'आगामी',
    urgencyOptional: 'वैकल्पिक',
    btnAskNirvaha: 'निर्वाह AI से पूछें',
    statusNotStarted: 'शुरू नहीं हुआ',
    statusInProgress: 'प्रगति पर है',
    statusCompleted: 'पूरा हुआ',
    btnAddCustomTask: '+ कस्टम कार्य जोड़ें',
    customTaskModalTitle: 'नया नागरिक कार्य जोड़ें',
    taskTitleLabel: 'कार्य का शीर्षक *',
    taskWhyLabel: 'यह क्यों महत्वपूर्ण है *',
    taskDeadlineLabel: 'समय सीमा *',
    btnSaveTask: 'मेरे अगले कदम में जोड़ें',
    profileDrawerTitle: 'नागरिक प्रोफ़ाइल और प्राथमिकताएं',
    btnEditProfile: 'प्रोफ़ाइल संपादित करें',
    btnSwitchRole: 'नागरिक भूमिका बदलें',
    btnSignOut: 'लॉग आउट / सत्र रीसेट करें',
  },
  ta: {} as any,
  te: {} as any,
  ml: {} as any,
  mr: {} as any,
  bn: {} as any,
  gu: {} as any,
  pa: {} as any,
  or: {} as any,
  ur: {} as any,
  as: {} as any,
};

// Generate comprehensive localized translations for all remaining Indian languages
const generateNativeDictionary = (
  code: LanguageCode,
  appName: string,
  appSubtitle: string,
  tabHome: string,
  tabAIGuide: string,
  tabNextSteps: string,
  tabAssistFill: string,
  tabVault: string,
  tabConsent: string,
  tabServices: string,
  tabHumanSupport: string,
  loginBadge: string,
  loginHeading: string,
  btnContinue: string,
  roleStudent: string,
  roleFarmer: string,
  roleWorker: string,
  roleSenior: string,
  roleDisability: string,
  speakToAi: string,
  btnStartSituation: string,
  btnExploreServices: string,
  btnDocumentVault: string,
  suggestionsLabel: string,
  chatPlaceholder: string,
  btnAutoFillFromVault: string,
  btnSubmitInApp: string,
  submissionSuccessTitle: string,
  applicationRefNoLabel: string
): TranslationDictionary => {
  const base = TRANSLATIONS.en;
  return {
    ...base,
    appName,
    appSubtitle,
    tabHome,
    tabAIGuide,
    tabNextSteps,
    tabAssistFill,
    tabVault,
    tabConsent,
    tabServices,
    tabHumanSupport,
    loginBadge,
    loginHeading,
    btnContinue,
    roleStudent,
    roleFarmer,
    roleWorker,
    roleSenior,
    roleDisability,
    speakToAi,
    btnStartSituation,
    btnExploreServices,
    btnDocumentVault,
    suggestionsLabel,
    chatPlaceholder,
    btnAutoFillFromVault,
    btnSubmitInApp,
    submissionSuccessTitle,
    applicationRefNoLabel,
    viewDetails: 'விவரங்கள்',
  };
};

TRANSLATIONS.ta = {
  ...TRANSLATIONS.en,
  appName: 'நிர்வாஹா AI',
  appSubtitle: 'வாழ்க்கை நிகழ்விலிருந்து சரியான நடவடிக்கை வரை',
  footerText: 'நிர்வாஹா AI • பன்மொழி பொது சேவை வழிகாட்டி • பாதுகாப்பு சரிபார்க்கப்பட்டது',
  disclaimer: 'நிர்வாஹா AI வழிகாட்டலை மட்டுமே வழங்குகிறது. இறுதி ஒப்புதலை அரசு துறை தீர்மானிக்கிறது.',
  tabHome: 'முகப்பு',
  tabAIGuide: 'AI வழிகாட்டி',
  tabNextSteps: 'அடுத்த படிகள்',
  tabAssistFill: 'அசிஸ்ட்பில்',
  tabVault: 'ஆவண பெட்டகம்',
  tabConsent: 'ஒப்புதல் மையம்',
  tabServices: 'சேவை அடைவு',
  tabHumanSupport: 'மனித ஆதரவு',
  loginBadge: 'குடிமக்கள் பாதுகாப்பு உள்நுழைவு',
  loginHeading: 'பொது சேவைகளை அணுகவும்',
  loginSubheading: 'தனிப்பயனாக்கப்பட்ட நலத்திட்ட வழிகாட்டுதலைப் பெற உங்கள் மின்னஞ்சல் அல்லது தொலைபேசி எண்ணை உள்ளிடவும்.',
  loginInputLabel: 'மின்னஞ்சல் அல்லது 10-இலக்க தொலைபேசி எண் *',
  passwordLabel: 'கடவுச்சொல் *',
  btnContinue: 'தொடரவும் →',
  roleBadge: 'படி 2: நீங்கள் யார்?',
  roleHeading: 'உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்',
  roleStudent: 'மாணவர் / கல்லூரி கற்பவர்',
  roleFarmer: 'விவசாயி / பயிரிடுபவர்',
  roleWorker: 'தொழிலாளி / தினக்கூலி',
  roleSenior: 'மூத்த குடிமகன் / ஓய்வூதியதாரர்',
  roleDisability: 'மாற்றுத்திறனாளி (திவ்யாங்ஜன்)',
  homeHeroHeading: 'உங்கள் வாழ்க்கையில் என்ன மாறியது என்று கூறுங்கள். சரியான அடுத்த படிகளைக் கண்டறிய நாங்கள் உதவுவோம்.',
  homeHeroSubtitle: 'பொது சேவைகள், ஆவணங்கள், சலுகைகள் மற்றும் காலக்கெடுவிற்கு எளிய, சரிபார்க்கப்பட்ட வழிகாட்டுதலைப் பெறுங்கள்.',
  btnStartSituation: 'என் சூழ்நிலையுடன் தொடங்கவும் →',
  btnExploreServices: 'சேவைகளை ஆராயுங்கள்',
  btnDocumentVault: 'ஆவண பெட்டகம்',
  speakToAi: 'நிர்வாஹா AI உடன் பேசுங்கள்',
  quickActionsTitle: 'உங்களுக்கான விரைவு வாழ்க்கை நிகழ்வுகள்',
  quickActionsSubtitle: 'உங்கள் விவரக்குறிப்பு மற்றும் இருப்பிடத்தின் அடிப்படையில் நிகழ்நேர நன்மைகள்.',
  suggestionsLabel: 'பரிந்துரைகள்',
  chatPlaceholder: 'திட்டங்கள், தகுதி, ஆவணங்கள் பற்றி கேளுங்கள்...',
  thinkingNotice: 'நிர்வாஹா AI சிந்திக்கிறது...',
  btnReadAloud: 'சத்தமாக வாசிக்கவும்',
  btnStopAudio: 'ஒலியை நிறுத்து',
  btnCopy: 'நகலெடுக்க',
  copiedNotice: 'நகலெடுக்கப்பட்டது!',
  serviceDirTitle: 'சேவை அடைவு',
  searchServicesPlaceholder: 'திட்டத்தின் பெயர் அல்லது துறை மூலம் தேடவும்...',
  allCategories: 'அனைத்து பிரிவுகளும்',
  badgeCentral: 'மத்திய திட்டம்',
  badgeState: 'மாநில திட்டம்',
  badgeKarnataka: 'கர்நாடகா',
  badgeVerified: 'சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ திட்டம்',
  btnCheckEligibility: 'தகுதியைச் சரிபார்க்கவும் →',
  btnStartAssistFill: 'அசிஸ்ட்பில்லில் தொடங்கவும்',
  btnAutoFillFromVault: 'பெட்டகத்திலிருந்து ஆவணங்களை எடுத்து தானாக நிரப்பவும்',
  scanningVaultNotice: 'ஆவண பெட்டகம் சரிபார்க்கப்பட்டு சான்றுகள் தானாக எடுக்கப்படுகின்றன...',
  vaultAccessedSuccess: 'ஆவணங்கள் இணைக்கப்பட்டன! படிவம் 100% துல்லியமாக நிரப்பப்பட்டது.',
  btnSubmitInApp: 'நிர்வாஹா AI மூலம் நேரடியாக விண்ணப்பிக்கவும்',
  submittingNotice: 'பாதுகாப்பாக விண்ணப்பம் சமர்ப்பிக்கப்படுகிறது...',
  submissionSuccessTitle: 'விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!',
  submissionSuccessDesc: 'உங்கள் விண்ணப்பம் பெறப்பட்டு டிஜிட்டல் முறையில் கையொப்பமிடப்பட்டுள்ளது.',
  applicationRefNoLabel: 'அதிகாரப்பூர்வ விண்ணப்ப குறிப்பு எண்',
  btnVisitPortalManual: 'அல்லது கைமுறையாக நிரப்ப துறை தளத்திற்கு செல்லவும்',
  btnViewReceipt: 'ரசீதைப் பதிவிறக்கவும்',
  officialStamp: 'நிர்வாஹா AI நுழைவாயில் மூலம் டிஜிட்டல் முறையில் சரிபார்க்கப்பட்டது',
  btnAllowMic: 'மைக்ரோஃபோன் அணுகலை அனுமதிக்கவும்',
  micPermissionHelp: 'பேச மைக்ரோஃபோன் அனுமதி தேவை.',
  viewDetails: 'விவரங்களைக் காண்க',
};

TRANSLATIONS.te = {
  ...TRANSLATIONS.en,
  appName: 'నిర్వాహ AI',
  appSubtitle: 'జీవిత సంఘటన నుండి సరైన చర్య వరకు',
  footerText: 'నిర్వాహ AI • బహుభాషా ప్రజా సేవా మార్గదర్శి • ధృవీకరించబడింది',
  disclaimer: 'నిర్వాహ AI కేవలం మార్గదర్శకత్వాన్ని మాత్రమే అందిస్తుంది. తుది అర్హతను ప్రభుత్వ శాఖ నిర్ణయిస్తుంది.',
  tabHome: 'హోమ్',
  tabAIGuide: 'AI గైడ్',
  tabNextSteps: 'తదుపరి దశలు',
  tabAssistFill: 'అసిస్ట్‌ఫిల్',
  tabVault: 'పత్రాల వాల్ట్',
  tabConsent: 'సమ్మతి కేంద్రం',
  tabServices: 'సేవా డైరెక్టరీ',
  tabHumanSupport: 'మానవ మద్దతు',
  loginBadge: 'పౌరుల సురక్షిత లాగిన్',
  loginHeading: 'ప్రజా సేవలను పొందండి',
  btnContinue: 'కొనసాగించండి →',
  roleStudent: 'విద్యార్థి / అభ్యాసకుడు',
  roleFarmer: 'రైతు / కర్షకుడు',
  roleWorker: 'కార్మికుడు / వేతనదారు',
  roleSenior: 'సీనియర్ సిటిజన్ / పెన్షనర్',
  roleDisability: 'దివ్యాంగులు (ప్రత్యేక ప్రతిభావంతులు)',
  homeHeroHeading: 'మీ జీవితంలో ఏమి మారిందో మాకు చెప్పండి. సరైన తదుపరి చర్యలను కనుగొనడంలో మేము మీకు సహాయం చేస్తాము.',
  btnStartSituation: 'నా పరిస్థితితో ప్రారంభించండి →',
  btnExploreServices: 'సేవలను అన్వేషించండి',
  btnDocumentVault: 'పత్రాల వాల్ట్',
  speakToAi: 'నిర్వాహ AI తో మాట్లాడండి',
  suggestionsLabel: 'సూచనలు',
  chatPlaceholder: 'పథకాలు, అర్హత, పత్రాల గురించి అడగండి...',
  btnAutoFillFromVault: 'వాల్ట్ నుండి పత్రాలను పొంది దరఖాస్తును నింపండి',
  scanningVaultNotice: 'పత్రాల వాల్ట్ స్కాన్ చేసి వివరాలను తీసుకుంటోంది...',
  vaultAccessedSuccess: 'వాల్ట్ పత్రాలు సరిపోలాయి! ఫారమ్ విజయవంతంగా నింపబడింది.',
  btnSubmitInApp: 'నిర్వాహ AI ద్వారా నేరుగా సమర్పించండి',
  submissionSuccessTitle: 'దరఖాస్తు విజయవంతంగా సమర్పించబడింది!',
  applicationRefNoLabel: 'అధికారిక దరఖాస్తు రిఫరెన్స్ సంఖ్య',
  btnVisitPortalManual: 'లేదా మాన్యువల్‌గా నింపడానికి అధికారిక పోర్టల్‌కు వెళ్లండి',
  btnViewReceipt: 'రసీదును డౌన్‌లోడ్ చేయండి',
  viewDetails: 'వివరాలు చూడండి',
};

TRANSLATIONS.ml = {
  ...TRANSLATIONS.en,
  appName: 'നിർവാഹ AI',
  appSubtitle: 'ജീവിത സംഭവങ്ങളിൽ നിന്ന് ശരിയായ നടപടിയിലേക്ക്',
  tabHome: 'ഹോം',
  tabAIGuide: 'AI ഗൈഡ്',
  tabNextSteps: 'അടുത്ത ഘട്ടങ്ങൾ',
  tabAssistFill: 'അസിസ്റ്റ്ഫിൽ',
  tabVault: 'രേഖകളുടെ വോൾട്ട്',
  tabConsent: 'സമ്മത കേന്ദ്രം',
  tabServices: 'സർവീസ് ഡയറക്ടറി',
  tabHumanSupport: 'സഹായ കേന്ദ്രം',
  roleStudent: 'വിദ്യാർത്ഥി',
  roleFarmer: 'കർഷകൻ',
  roleWorker: 'തൊഴിലാളി',
  roleSenior: 'മുതിർന്ന പൗരൻ',
  roleDisability: 'ഭിന്നശേഷിക്കാർ',
  homeHeroHeading: 'നിങ്ങളുടെ ജീവിതത്തിൽ എന്താണ് മാറിയതെന്ന് പറയൂ. ശരിയായ അടുത്ത നടപടികൾ കണ്ടെത്താൻ ഞങ്ങൾ സഹായിക്കാം.',
  speakToAi: 'നിർവാഹ AI യോട് സംസാരിക്കുക',
  suggestionsLabel: 'നിർദ്ദേശങ്ങൾ',
  chatPlaceholder: 'പദ്ധതികളെക്കുറിച്ചും രേഖകളെക്കുറിച്ചും ചോദിക്കുക...',
  btnAutoFillFromVault: 'വോൾട്ടിൽ നിന്ന് രേഖകൾ എടുത്ത് സ്വയം പൂരിപ്പിക്കുക',
  btnSubmitInApp: 'നിർവാഹ AI വഴി അപേക്ഷ സമർപ്പിക്കുക',
  submissionSuccessTitle: 'അപേക്ഷ വിജയകരമായി സമർപ്പിച്ചു!',
  applicationRefNoLabel: 'ഔദ്യോഗിക അപേക്ഷാ റഫറൻസ് നമ്പർ',
  viewDetails: 'വിശദാംശങ്ങൾ കാണുക',
};

TRANSLATIONS.mr = {
  ...TRANSLATIONS.en,
  appName: 'निर्वाह AI',
  appSubtitle: 'जीवनातील घटनेपासून योग्य कृतीपर्यंत',
  tabHome: 'मुख्यपृष्ठ',
  tabAIGuide: 'AI मार्गदर्शक',
  tabNextSteps: 'पुढील पावले',
  tabAssistFill: 'असिस्टफिल',
  tabVault: 'दस्तऐवज व्हॉल्ट',
  tabConsent: 'संमती केंद्र',
  tabServices: 'सेवा निर्देशिका',
  tabHumanSupport: 'मानवी मदत',
  roleStudent: 'विद्यार्थी',
  roleFarmer: 'शेतकरी',
  roleWorker: 'कामगार',
  roleSenior: 'ज्येष्ठ नागरिक',
  roleDisability: 'दिव्यांग व्यक्ती',
  homeHeroHeading: 'तुमच्या जीवनात काय बदलले ते सांगा. आम्ही योग्य पुढील पावले शोधण्यात मदत करू.',
  speakToAi: 'निर्वाह AI शी बोला',
  suggestionsLabel: 'सूचना',
  chatPlaceholder: 'योजना, पात्रता आणि कागदपत्रांबद्दल विचारा...',
  btnAutoFillFromVault: 'व्हॉल्टमधून कागदपत्रे घेऊन फॉर्म स्वतः भरा',
  btnSubmitInApp: 'निर्वाह AI द्वारे थेट अर्ज सबमिट करा',
  submissionSuccessTitle: 'अर्ज यशस्वीरित्या सादर केला!',
  applicationRefNoLabel: 'अधिकृत अर्ज संदर्भ क्रमांक',
  viewDetails: 'तपशील पहा',
};

TRANSLATIONS.bn = {
  ...TRANSLATIONS.en,
  appName: 'নির্বাহ AI',
  appSubtitle: 'জীবনের ঘটনা থেকে সঠিক পদক্ষেপ পর্যন্ত',
  tabHome: 'হোম',
  tabAIGuide: 'AI গাইড',
  tabNextSteps: 'পরবর্তী পদক্ষেপ',
  tabAssistFill: 'অ্যাসিস্টফিল',
  tabVault: 'নথিপত্র ভল্ট',
  tabConsent: 'সম্মতি কেন্দ্র',
  tabServices: 'পরিষেবা ডিরেক্টরি',
  tabHumanSupport: 'সহায়তা কেন্দ্র',
  roleStudent: 'শিক্ষার্থী',
  roleFarmer: 'কৃষক',
  roleWorker: 'শ্রমিক',
  roleSenior: 'বয়োজ্যেষ্ঠ নাগরিক',
  roleDisability: 'প্রতিবন্ধী ব্যক্তি',
  homeHeroHeading: 'আপনার জীবনে কী পরিবর্তিত হয়েছে জানান। আমরা সঠিক পদক্ষেপ খুঁজে পেতে সাহায্য করব।',
  speakToAi: 'নির্বাহ AI এর সাথে কথা বলুন',
  suggestionsLabel: 'পরামর্শ',
  chatPlaceholder: 'পরিকল্পনা, যোগ্যতা এবং নথি সম্পর্কে জিজ্ঞাসা করুন...',
  btnAutoFillFromVault: 'ভল্ট থেকে নথি সংগ্রহ করে স্বয়ংক্রিয়ভাবে পূরণ করুন',
  btnSubmitInApp: 'নির্বাহ AI এর মাধ্যমে আবেদন জমা দিন',
  submissionSuccessTitle: 'আবেদন সফলভাবে জমা হয়েছে!',
  applicationRefNoLabel: 'অফিসিয়াল আবেদন রেফারেন্স নম্বর',
  viewDetails: 'বিস্তারিত দেখুন',
};

TRANSLATIONS.gu = {
  ...TRANSLATIONS.en,
  appName: 'નિર્વાહ AI',
  appSubtitle: 'જીવનની ઘટનાથી યોગ્ય પગલા સુધી',
  tabHome: 'હોમ',
  tabAIGuide: 'AI માર્ગદર્શક',
  tabNextSteps: 'આગળનાં પગલાં',
  tabAssistFill: 'આસિસ્ટફિલ',
  tabVault: 'દસ્તાવેજ વૉલ્ટ',
  tabConsent: 'સંમતિ કેન્દ્ર',
  tabServices: 'સેવા ડિરેક્ટરી',
  tabHumanSupport: 'માનવ સહાય',
  roleStudent: 'વિદ્યાર્થી',
  roleFarmer: 'ખેડૂત',
  roleWorker: 'શ્રમિક',
  roleSenior: 'વરિષ્ઠ નાગરિક',
  roleDisability: 'દિવ્યાંગ વ્યક્તિ',
  homeHeroHeading: 'તમારા જીવનમાં શું બદલાયું છે તે જણાવો. અમે યોગ્ય આગલા પગલાં શોધવામાં મદદ કરીશું.',
  speakToAi: 'નિર્વાહ AI સાથે વાત કરો',
  suggestionsLabel: 'સૂચનો',
  chatPlaceholder: 'યોજનાઓ, પાત્રતા અને દસ્તાવેજો વિશે પૂછો...',
  btnAutoFillFromVault: 'વૉલ્ટમાંથી દસ્તાવેજો મેળવી આપમેળે ભરો',
  btnSubmitInApp: 'નિર્વાહ AI દ્વારા સીધી અરજી સબમિટ કરો',
  submissionSuccessTitle: 'અરજી સફળતાપૂર્વક સબમિટ થઈ!',
  applicationRefNoLabel: 'સત્તાવાર અરજી સંદર્ભ નંબર',
  viewDetails: 'વિગતો જુઓ',
};

TRANSLATIONS.pa = {
  ...TRANSLATIONS.en,
  appName: 'ਨਿਰਵਾਹ AI',
  appSubtitle: 'ਜ਼ਿੰਦਗੀ ਦੀ ਘਟਨਾ ਤੋਂ ਸਹੀ ਕਦਮ ਤੱਕ',
  tabHome: 'ਹੋਮ',
  tabAIGuide: 'AI ਗਾਈਡ',
  tabNextSteps: 'ਮੇਰੇ ਅਗਲੇ ਕਦਮ',
  tabAssistFill: 'ਅਸਿਸਟਫਿਲ',
  tabVault: 'ਦਸਤਾਵੇਜ਼ ਵਾਲਟ',
  tabConsent: 'ਸਹਿਮਤੀ ਕੇਂਦਰ',
  tabServices: 'ਸੇਵਾ ਡਾਇਰੈਕਟਰੀ',
  tabHumanSupport: 'ਮਨੁੱਖੀ ਸਹਾਇਤਾ',
  roleStudent: 'ਵਿਦਿਆਰਥੀ',
  roleFarmer: 'ਕਿਸਾਨ',
  roleWorker: 'ਮਜ਼ਦੂਰ',
  roleSenior: 'ਬਜ਼ੁਰਗ ਨਾਗਰਿਕ',
  roleDisability: 'ਦਿਵਿਆਂਗਜਨ',
  homeHeroHeading: 'ਸਾਨੂੰ ਦੱਸੋ ਕਿ ਤੁਹਾਡੀ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਕੀ ਬਦਲਿਆ ਹੈ। ਅਸੀਂ ਸਹੀ ਕਦਮ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਾਂਗੇ।',
  speakToAi: 'ਨਿਰਵਾਹ AI ਨਾਲ ਗੱਲ ਕਰੋ',
  suggestionsLabel: 'ਸੁਝਾਅ',
  chatPlaceholder: 'ਸਕੀਮਾਂ, ਯੋਗਤਾ ਅਤੇ ਦਸਤਾਵੇਜ਼ਾਂ ਬਾਰੇ ਪੁੱਛੋ...',
  btnAutoFillFromVault: 'ਵਾਲਟ ਤੋਂ ਦਸਤਾਵੇਜ਼ ਪ੍ਰਾਪਤ ਕਰਕੇ ਖ਼ੁਦ ਭਰੋ',
  btnSubmitInApp: 'ਨਿਰਵਾਹ AI ਰਾਹੀਂ ਸਿੱਧੀ ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਕਰੋ',
  submissionSuccessTitle: 'ਅਰਜ਼ੀ ਸਫਲਤਾਪੂਰਵਕ ਜਮ੍ਹਾਂ ਹੋ ਗਈ!',
  applicationRefNoLabel: 'ਅਧਿਕਾਰਤ ਅਰਜ਼ੀ ਹਵਾਲਾ ਨੰਬਰ',
  viewDetails: 'ਵੇਰਵੇ ਵੇਖੋ',
};

TRANSLATIONS.or = {
  ...TRANSLATIONS.en,
  appName: 'ନିର୍ବାହ AI',
  appSubtitle: 'ଜୀବନର ଘଟଣାରୁ ସଠିକ୍ ପଦକ୍ଷେପ ପର୍ଯ୍ୟନ୍ତ',
  tabHome: 'ମୂଳପୃଷ୍ଠା',
  tabAIGuide: 'AI ଗାଇଡ୍',
  tabNextSteps: 'ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ',
  tabAssistFill: 'ଆସିଷ୍ଟଫିଲ୍',
  tabVault: 'ଦଲିଲ ଭଲ୍ଟ',
  tabConsent: 'ସମ୍ମତି କେନ୍ଦ୍ର',
  tabServices: 'ସେବା ଡିରେକ୍ଟୋରୀ',
  tabHumanSupport: 'ମାନବ ସହାୟତା',
  roleStudent: 'ଛାତ୍ର',
  roleFarmer: 'କୃଷକ',
  roleWorker: 'ଶ୍ରମିକ',
  roleSenior: 'ବରିଷ୍ଠ ନାଗରିକ',
  roleDisability: 'ଦିବ୍ୟାଙ୍ଗ ବ୍ୟକ୍ତି',
  homeHeroHeading: 'ଆପଣଙ୍କ ଜୀବନରେ କ’ଣ ପରିବର୍ତ୍ତନ ଘଟିଛି କୁହନ୍ତୁ। ଆମେ ସଠିକ୍ ପଦକ୍ଷେପ ଖୋଜିବାରେ ସାହାଯ୍ୟ କରିବୁ।',
  speakToAi: 'ନିର୍ବାହ AI ସହିତ କଥାବାର୍ତ୍ତା କରନ୍ତୁ',
  suggestionsLabel: 'ପରାମର୍ଶ',
  chatPlaceholder: 'ଯୋଜନା, ଯୋଗ୍ୟତା ଏବଂ ଦଲିଲ ବିଷୟରେ ପଚାରନ୍ତୁ...',
  btnAutoFillFromVault: 'ଭଲ୍ଟରୁ ଦଲିଲ ପାଇ ଫର୍ମ ସ୍ୱୟଂ ପୂରଣ କରନ୍ତୁ',
  btnSubmitInApp: 'ନିର୍ବାହ AI ମାଧ୍ୟମରେ ଆବେଦନ ଦାଖଲ କରନ୍ତୁ',
  submissionSuccessTitle: 'ଆବେଦନ ସଫଳତାର ସହ ଦାଖଲ ହେଲା!',
  applicationRefNoLabel: 'ସରକାରୀ ଆବେଦନ ରେଫରେନ୍ସ ନମ୍ବର',
  viewDetails: 'ବିବରଣୀ ଦେଖନ୍ତୁ',
};

TRANSLATIONS.ur = {
  ...TRANSLATIONS.en,
  appName: 'نرباہا AI',
  appSubtitle: 'زندگی کے واقعے سے درست اقدام تک',
  tabHome: 'ہوم',
  tabAIGuide: 'AI گائیڈ',
  tabNextSteps: 'اگلے اقدامات',
  tabAssistFill: 'اسسٹ فل',
  tabVault: 'دستاویزات والٹ',
  tabConsent: 'رضامندی مرکز',
  tabServices: 'سروس ڈائرکٹری',
  tabHumanSupport: 'انسانی مدد',
  roleStudent: 'طالب علم',
  roleFarmer: 'کسان',
  roleWorker: 'مزدور',
  roleSenior: 'معمر شہری',
  roleDisability: 'معذور افراد',
  homeHeroHeading: 'ہمیں بتائیں کہ آپ کی زندگی میں کیا بدلا ہے۔ ہم آپ کو صحیح اگلے اقدامات تلاش کرنے میں مدد کریں گے۔',
  speakToAi: 'نرباہا AI سے بات کریں',
  suggestionsLabel: 'تجاویز',
  chatPlaceholder: 'اسکیموں، اہلیت اور دستاویزات کے بارے میں پوچھیں...',
  btnAutoFillFromVault: 'والٹ سے دستاویزات لے کر خودکار فارم بھریں',
  btnSubmitInApp: 'نرباہا AI کے ذریعے براہ راست درخواست جمع کریں',
  submissionSuccessTitle: 'درخواست کامیابی کے ساتھ جمع ہو گئی!',
  applicationRefNoLabel: 'سرکاری درخواست کا حوالہ نمبر',
  viewDetails: 'تفصیلات دیکھیں',
};

TRANSLATIONS.as = {
  ...TRANSLATIONS.en,
  appName: 'নিৰ্বাহ AI',
  appSubtitle: 'জীৱনৰ ঘটনাৰ পৰা সঠিক পদক্ষেপলৈ',
  tabHome: 'গৃহ',
  tabAIGuide: 'AI নিৰ্দেশক',
  tabNextSteps: 'মোৰ পৰৱৰ্তী পদক্ষেপ',
  tabAssistFill: 'এচিষ্টফিল',
  tabVault: 'নথি-পত্ৰ ভল্ট',
  tabConsent: 'সন্মতি কেন্দ্ৰ',
  tabServices: 'সেৱা ডাইৰেক্টৰি',
  tabHumanSupport: 'মানৱ সহায়',
  roleStudent: 'ছাত্ৰ',
  roleFarmer: 'কৃষক',
  roleWorker: 'শ্ৰমিক',
  roleSenior: 'জ্যেষ্ঠ নাগৰিক',
  roleDisability: 'দিব্যাংগ ব্যক্তি',
  homeHeroHeading: 'আপোনাৰ জীৱনত কি সলনি হৈছে জনাওক। আমি সঠিক পদক্ষেপ বিচাৰি পোৱাত সহায় কৰিম।',
  speakToAi: 'নিৰ্বাহ AI ৰ সৈতে কথা পাতক',
  suggestionsLabel: 'পৰামৰ্শসমূহ',
  chatPlaceholder: 'আঁচনি, যোগ্যতা আৰু নথিপত্ৰৰ বিষয়ে সোধক...',
  btnAutoFillFromVault: 'ভল্টৰ পৰা নথি সংগ্ৰহ কৰি স্বয়ংক্ৰিয়ভাৱে পূৰণ কৰক',
  btnSubmitInApp: 'নিৰ্বাহ AI ৰ জৰিয়তে পোনপটীয়াকৈ আবেদন জমা দিয়ক',
  submissionSuccessTitle: 'আবেদন সফলতাৰে জমা দিয়া হ’ল!',
  applicationRefNoLabel: 'চৰকাৰী আবেদন প্ৰসংগ নম্বৰ',
  viewDetails: 'বিৱৰণ চাওক',
};
