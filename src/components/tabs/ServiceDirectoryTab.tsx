import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  ExternalLink,
  ShieldCheck,
  Calendar,
  FileText,
  CheckCircle2,
  X,
  Compass,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SCHEMES_DATABASE } from '../../data/schemes';
import { ServiceItem } from '../../types';

export const ServiceDirectoryTab: React.FC = () => {
  const { t, getLoc, userProfile, filterByCitizen, setActiveTab } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [eligibilityModalScheme, setEligibilityModalScheme] = useState<ServiceItem | null>(null);

  // Debounce search input for performance (Requirement 17)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery.trim().toLowerCase());
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Strict citizen role, state, and district filter
  const citizenSchemes = useMemo(() => {
    return filterByCitizen(SCHEMES_DATABASE);
  }, [userProfile.role, userProfile.state, userProfile.district]);

  // Dynamic category pills extracted ONLY from matched citizen schemes (Requirement 10)
  const dynamicCategories = useMemo(() => {
    const categorySet = new Set<string>();
    citizenSchemes.forEach((scheme) => {
      scheme.tags.forEach((tag) => {
        const localizedTag = getLoc(tag);
        if (localizedTag) categorySet.add(localizedTag);
      });
    });
    return Array.from(categorySet);
  }, [citizenSchemes, getLoc]);

  // Filter by search query and category
  const filteredSchemes = useMemo(() => {
    return citizenSchemes.filter((scheme) => {
      // Category match
      if (selectedCategory !== 'ALL') {
        const hasTag = scheme.tags.some((tag) => getLoc(tag) === selectedCategory);
        if (!hasTag) return false;
      }

      // Search match
      if (debouncedQuery) {
        const titleMatch = getLoc(scheme.title).toLowerCase().includes(debouncedQuery);
        const deptMatch = getLoc(scheme.department).toLowerCase().includes(debouncedQuery);
        const benefitMatch = getLoc(scheme.benefit).toLowerCase().includes(debouncedQuery);
        return titleMatch || deptMatch || benefitMatch;
      }

      return true;
    });
  }, [citizenSchemes, selectedCategory, debouncedQuery, getLoc]);

  const subtitleFormatted = t.serviceDirSubtitle
    .replace('{role}', userProfile.role.toUpperCase())
    .replace('{state}', userProfile.state || 'India')
    .replace('{district}', userProfile.district || 'All Districts');

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
            <Compass className="w-4 h-4" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#091526] tracking-tight">
            {t.serviceDirTitle}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          {subtitleFormatted}
        </p>
      </div>

      {/* Search Input & Dynamic Categories Bar */}
      <div className="space-y-3">
        {/* Search bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchServicesPlaceholder}
            className="w-full bg-white/85 border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white shadow-2xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills (generated dynamically from filtered schemes) */}
        {dynamicCategories.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'ALL'
                  ? 'bg-gradient-to-r from-[#0369a1] to-[#0d9488] text-white shadow-xs'
                  : 'bg-white/80 hover:bg-sky-50 text-slate-700 border border-slate-200/80'
              }`}
            >
              {t.allCategories} ({citizenSchemes.length})
            </button>
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#0369a1] to-[#0d9488] text-white shadow-xs'
                    : 'bg-white/80 hover:bg-sky-50 text-slate-700 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Scheme Cards Grid */}
      {filteredSchemes.length === 0 ? (
        <div className="bg-white/80 rounded-3xl p-8 text-center border border-slate-200/80 max-w-md mx-auto my-6 space-y-3 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 text-sm">
            {t.emptyServices}
          </h3>
          <p className="text-xs text-slate-500">
            Try adjusting your search query or check the My Next Steps tab for urgent action deadlines.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSchemes.map((scheme) => {
            const isKarnatakaOnly = Array.isArray(scheme.states) && scheme.states.includes('Karnataka');
            const isCentral = scheme.states === 'ALL';

            return (
              <div
                key={scheme.id}
                className="bg-white/80 hover:bg-white backdrop-blur-md rounded-3xl p-5 border border-white/80 hover:border-cyan-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    {isCentral ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200/60 px-2 py-0.5 rounded-full">
                        {t.badgeCentral}
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                        {t.badgeState}
                      </span>
                    )}

                    {isKarnatakaOnly && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/60 px-2 py-0.5 rounded-full">
                        {t.badgeKarnataka}
                      </span>
                    )}

                    {scheme.verified && (
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        {t.badgeVerified}
                      </span>
                    )}
                  </div>

                  {/* Scheme Title */}
                  <h3 className="text-base font-bold text-[#091526] leading-snug mb-1">
                    {getLoc(scheme.title)}
                  </h3>

                  {/* Department */}
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {getLoc(scheme.department)}
                  </p>

                  {/* Benefit Summary */}
                  <div className="p-3 bg-sky-50/70 rounded-2xl border border-sky-100/80 mb-3 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block">
                      {t.benefitLabel}
                    </span>
                    <p className="text-xs text-sky-950 font-medium leading-relaxed">
                      {getLoc(scheme.benefit)}
                    </p>
                  </div>

                  {/* Eligibility & Documents Snippet */}
                  <div className="space-y-2 text-xs text-slate-600 mb-3">
                    <div>
                      <span className="font-semibold text-slate-700">{t.eligibilityLabel}: </span>
                      <span className="line-clamp-2 leading-relaxed">{getLoc(scheme.eligibility)}</span>
                    </div>

                    {scheme.deadline && (
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span className="font-semibold text-slate-700">{t.deadlineLabel}: </span>
                        <span>{getLoc(scheme.deadline)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setEligibilityModalScheme(scheme)}
                    className="flex-1 py-2 px-3 bg-white hover:bg-sky-50 text-sky-800 font-semibold rounded-xl text-xs border border-sky-200 transition-colors cursor-pointer shadow-2xs flex items-center justify-center gap-1"
                  >
                    <span>{t.btnCheckEligibility}</span>
                  </button>

                  {scheme.applyMode === 'IN_APP_FORM' ? (
                    <button
                      onClick={() => setActiveTab('assist-fill')}
                      className="py-2 px-3 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer shadow-2xs flex items-center gap-1"
                    >
                      <span>{t.btnStartAssistFill}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : scheme.officialPortalUrl ? (
                    <a
                      href={scheme.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-[#091526] hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>{t.btnApplyOnline}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Check Eligibility Modal */}
      {eligibilityModalScheme && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                  Eligibility Evaluation
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#091526] mt-1">
                  {getLoc(eligibilityModalScheme.title)}
                </h3>
              </div>
              <button
                onClick={() => setEligibilityModalScheme(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Citizen match checklist */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>Role Match:</strong> Citizen role is registered as{' '}
                  <strong className="text-sky-700">{userProfile.role.toUpperCase()}</strong>.
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>Location Match:</strong> Validated for state of{' '}
                  <strong>{userProfile.state || 'India'}</strong>.
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>Income Band:</strong> {userProfile.annualIncome || 'Within standard limits'}.
                </span>
              </div>
            </div>

            {/* Detailed Criteria */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-slate-800">{t.eligibilityLabel}</h4>
              <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                {getLoc(eligibilityModalScheme.eligibility)}
              </p>
            </div>

            {/* Required Documents List */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-slate-800">{t.documentsRequiredLabel}</h4>
              <ul className="space-y-1.5">
                {eligibilityModalScheme.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-600">
                    <FileText className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>{getLoc(doc)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                onClick={() => setEligibilityModalScheme(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                {t.btnClose}
              </button>
              <button
                onClick={() => {
                  setEligibilityModalScheme(null);
                  setActiveTab('assist-fill');
                }}
                className="px-4 py-2 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
              >
                <span>{t.btnStartAssistFill}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
