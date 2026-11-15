import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Info } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="w-full mt-auto py-6 border-t border-cyan-900/10 bg-white/60 backdrop-blur-xs text-center text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-2.5">
        <div className="flex items-center justify-center gap-1.5 text-slate-700 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{t.footerText}</span>
        </div>
        <p className="max-w-2xl text-[11px] text-slate-500 leading-relaxed flex items-center justify-center gap-1">
          <Info className="w-3.5 h-3.5 flex-shrink-0 text-amber-500" />
          <span>{t.disclaimer}</span>
        </p>
      </div>
    </footer>
  );
};
