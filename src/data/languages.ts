import { LanguageCode, LanguageInfo, LocalizedText } from '../types';

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', bcp47: 'en-IN', dir: 'ltr' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', bcp47: 'kn-IN', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', bcp47: 'hi-IN', dir: 'ltr' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', bcp47: 'ta-IN', dir: 'ltr' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', bcp47: 'te-IN', dir: 'ltr' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', bcp47: 'ml-IN', dir: 'ltr' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', bcp47: 'mr-IN', dir: 'ltr' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', bcp47: 'bn-IN', dir: 'ltr' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', bcp47: 'gu-IN', dir: 'ltr' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', bcp47: 'pa-IN', dir: 'ltr' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', bcp47: 'or-IN', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', bcp47: 'ur-IN', dir: 'rtl' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', bcp47: 'as-IN', dir: 'ltr' },
];

export function getLocalized(textObj: LocalizedText | undefined | null, lang: LanguageCode): string {
  if (!textObj) return '';
  return textObj[lang] || textObj.en || '';
}

export function createLoc(
  en: string,
  kn: string,
  hi: string,
  ta?: string,
  te?: string,
  ml?: string,
  mr?: string,
  bn?: string,
  gu?: string,
  pa?: string,
  or?: string,
  ur?: string,
  as?: string
): LocalizedText {
  return {
    en,
    kn: kn || en,
    hi: hi || en,
    ta: ta || hi || en,
    te: te || hi || en,
    ml: ml || hi || en,
    mr: mr || hi || en,
    bn: bn || hi || en,
    gu: gu || hi || en,
    pa: pa || hi || en,
    or: or || hi || en,
    ur: ur || hi || en,
    as: as || bn || hi || en,
  };
}
