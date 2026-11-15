import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { LanguageCode } from '../types';

interface Props {
  variant?: 'light' | 'dark';
}

export const LanguageSelector: React.FC<Props> = ({ variant = 'light' }) => {
  const { selectedLanguage, setLanguage } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isDark = variant === 'dark';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shadow-xs cursor-pointer ${
          isDark
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md'
            : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 shadow-xs'
        }`}
        aria-expanded={isOpen}
      >
        <Globe className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-300' : 'text-sky-600'}`} />
        <span className="font-semibold">{selectedLanguage.nativeName}</span>
        <span className={`text-[11px] opacity-75 hidden sm:inline`}>({selectedLanguage.name})</span>
        <ChevronDown className="w-3 h-3 ml-0.5 opacity-60" />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-56 rounded-2xl shadow-xl border z-50 py-1.5 max-h-80 overflow-y-auto backdrop-blur-xl transition-all animate-in fade-in zoom-in-95 duration-100 ${
            isDark
              ? 'bg-[#081426]/95 border-cyan-400/20 text-white shadow-cyan-950/50'
              : 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-300/50'
          }`}
        >
          <div className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider opacity-60 border-b ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
            Select Language / ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ
          </div>
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang.code === selectedLanguage.code;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as LanguageCode);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2 flex items-center justify-between text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'bg-sky-50 text-sky-700 font-semibold'
                    : isDark
                    ? 'hover:bg-white/5 text-slate-200'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{lang.nativeName}</span>
                  <span className="text-[10px] opacity-70">
                    {lang.name} • {lang.bcp47}
                  </span>
                </div>
                {isSelected && (
                  <Check className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-sky-600'}`} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
