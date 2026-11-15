export type RoleKey =
  | 'student'
  | 'farmer'
  | 'worker'
  | 'senior'
  | 'disability';

export type LanguageCode =
  | 'en'
  | 'kn'
  | 'hi'
  | 'ta'
  | 'te'
  | 'ml'
  | 'mr'
  | 'bn'
  | 'gu'
  | 'pa'
  | 'or'
  | 'ur'
  | 'as';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  bcp47: string;
  dir: 'ltr' | 'rtl';
}

export interface LocalizedText {
  en: string;
  kn: string;
  hi: string;
  ta: string;
  te: string;
  ml: string;
  mr: string;
  bn: string;
  gu: string;
  pa: string;
  or: string;
  ur: string;
  as: string;
}

export interface UserProfile {
  fullName: string;
  role: RoleKey;
  state: string;
  district: string;
  category: string;
  annualIncome: string;
  rationCard: string;
  gender: string;
  ageOrProofNumber: string;
}

export interface ServiceItem {
  id: string;
  role: RoleKey;
  states: string[] | 'ALL';
  districts?: string[] | 'ALL';
  category?: string[];
  incomeLevel?: string[];
  title: LocalizedText;
  department: LocalizedText;
  benefit: LocalizedText;
  eligibility: LocalizedText;
  documents: LocalizedText[];
  deadline?: LocalizedText;
  tags: LocalizedText[];
  applyMode: 'IN_APP_FORM' | 'OFFICIAL_PORTAL';
  verified: boolean;
  officialPortalUrl?: string;
}

export type DocumentVaultStatus =
  | 'not_uploaded'
  | 'uploaded'
  | 'verified'
  | 'expiring_soon'
  | 'expired';

export interface DocumentItem {
  id: string;
  role: RoleKey;
  title: LocalizedText;
  purpose: LocalizedText;
  issuingAuthority: LocalizedText;
  states?: string[] | 'ALL';
  requiredForSchemes: LocalizedText;
}

export interface StoredDocStatus {
  status: DocumentVaultStatus;
  fileName?: string;
  uploadedAt?: string;
  reminder?: boolean;
}

export interface TaskItem {
  id: string;
  role: RoleKey;
  states: string[] | 'ALL';
  districts?: string[] | 'ALL';
  title: LocalizedText;
  whyItMatters: LocalizedText;
  deadline: LocalizedText;
  urgency: 'overdue' | 'due_soon' | 'upcoming' | 'optional';
  requiredDocuments: LocalizedText[];
  status: 'not_started' | 'in_progress' | 'completed';
  isCustom?: boolean;
}

export interface AssistFormField {
  id: string;
  label: LocalizedText;
  type: 'text' | 'select' | 'number' | 'date';
  required: boolean;
  options?: LocalizedText[];
  placeholder?: LocalizedText;
  helperText?: LocalizedText;
}

export interface AssistFillFormConfig {
  id: string;
  role: RoleKey;
  states: string[] | 'ALL';
  title: LocalizedText;
  department: LocalizedText;
  description: LocalizedText;
  formSpecificFields: AssistFormField[];
  requiredDocs: LocalizedText[];
  portalUrl?: string;
}

export interface ConsentItem {
  id: string;
  role: RoleKey;
  states: string[] | 'ALL';
  department: LocalizedText;
  dataRequested: LocalizedText;
  purpose: LocalizedText;
  retentionPeriod: LocalizedText;
  nature: 'required' | 'optional' | 'revocable';
}

export interface SupportContact {
  id: string;
  role: RoleKey;
  states: string[] | 'ALL';
  districts?: string[] | 'ALL';
  officeName: LocalizedText;
  whoItHelps: LocalizedText;
  whenToContact: LocalizedText;
  languages: LocalizedText;
  locationCoverage: LocalizedText;
  phone: string;
  verified: boolean;
}

export interface LifeEventCard {
  id: string;
  role: RoleKey;
  states: string[] | 'ALL';
  districts?: string[] | 'ALL';
  title: LocalizedText;
  description: LocalizedText;
  badge: LocalizedText;
  category: LocalizedText;
  iconType: string;
}

export type TabKey =
  | 'home'
  | 'ai-guide'
  | 'next-steps'
  | 'assist-fill'
  | 'vault'
  | 'consent'
  | 'services'
  | 'human-support';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: number;
  isVoice?: boolean;
}
