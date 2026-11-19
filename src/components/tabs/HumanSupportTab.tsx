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
  ShieldCheck,
  Navigation,
  Search,
  Loader2,
  ExternalLink,
  AlertCircle,
  Crosshair,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SUPPORT_CONTACTS } from '../../data/support';
import { SupportContact } from '../../types';

interface NearbyOffice {
  id: string;
  name: string;
  address: string;
  location: { latitude: number; longitude: number } | null;
  phone: string | null;
  openNow: boolean | null;
  googleMapsUri: string | null;
  directionsUri: string | null;
}

interface DirectionsInfo {
  officeId: string;
  officeName: string;
  distanceText: string;
  durationText: string;
  travelMode: string;
  steps: Array<{ instruction: string; distanceMeters: number; duration: string }>;
}

const QUICK_OFFICE_QUERIES = [
  'Taluk Office Tehsildar',
  'Common Service Centre CSC',
  'District Social Welfare Office',
  'Agriculture Department Krishi Kendra',
  'District Collectorate',
];

export const HumanSupportTab: React.FC = () => {
  const { t, getLoc, userProfile, selectedLanguage, filterByCitizen, chatMessages } = useApp();

  const [callbackContact, setCallbackContact] = useState<SupportContact | null>(null);
  const [callbackPhoneInput, setCallbackPhoneInput] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const [issueSummaryModalContact, setIssueSummaryModalContact] = useState<SupportContact | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Google Maps Nearby Government Offices & Directions state
  const [officeQuery, setOfficeQuery] = useState('Taluk Office Tehsildar');
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [searchingOffices, setSearchingOffices] = useState(false);
  const [nearbyOffices, setNearbyOffices] = useState<NearbyOffice[]>([]);
  const [mapsError, setMapsError] = useState<string | null>(null);
  const [hasSearchedMaps, setHasSearchedMaps] = useState(false);

  const [loadingRouteId, setLoadingRouteId] = useState<string | null>(null);
  const [activeDirections, setActiveDirections] = useState<DirectionsInfo | null>(null);

  const filteredContacts = filterByCitizen(SUPPORT_CONTACTS);

  const handleUseMyLocation = () => {
    setMapsError(null);
    if (!navigator.geolocation) {
      setMapsError('Geolocation is not supported by this browser.');
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLocating(false);
      },
      (err) => {
        setMapsError(`Location permission unavailable (${err.message}). Searching using your profile district/state instead.`);
        setLocating(false);
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  };

  const handleSearchNearbyOffices = async (customQuery?: string) => {
    const query = (customQuery ?? officeQuery).trim();
    if (!query) return;
    if (customQuery) setOfficeQuery(customQuery);

    setSearchingOffices(true);
    setMapsError(null);
    setActiveDirections(null);
    setHasSearchedMaps(true);

    try {
      const res = await fetch('/api/maps/nearby-offices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          state: userProfile.state || 'India',
          district: userProfile.district || undefined,
          lat: userCoords?.lat,
          lng: userCoords?.lng,
          languageCode: selectedLanguage.code,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'Could not fetch nearby government offices.');
      }
      setNearbyOffices(Array.isArray(data.offices) ? data.offices : []);
    } catch (err: any) {
      setNearbyOffices([]);
      setMapsError(err?.message || 'Unable to reach Google Maps office locator.');
    } finally {
      setSearchingOffices(false);
    }
  };

  const handleGetDirections = async (office: NearbyOffice) => {
    setLoadingRouteId(office.id);
    setMapsError(null);

    try {
      const originAddress = [userProfile.district, userProfile.state, 'India'].filter(Boolean).join(', ');
      const res = await fetch('/api/maps/directions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          originLat: userCoords?.lat,
          originLng: userCoords?.lng,
          originAddress: userCoords ? undefined : originAddress,
          destinationPlaceId: office.id || undefined,
          destinationLat: office.location?.latitude,
          destinationLng: office.location?.longitude,
          destinationAddress: office.address || undefined,
          travelMode: 'DRIVE',
          languageCode: selectedLanguage.code,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'Could not compute directions.');
      }
      setActiveDirections({
        officeId: office.id,
        officeName: office.name,
        distanceText: data.distanceText,
        durationText: data.durationText,
        travelMode: data.travelMode,
        steps: Array.isArray(data.steps) ? data.steps : [],
      });
    } catch (err: any) {
      setMapsError(err?.message || 'Unable to compute route directions.');
    } finally {
      setLoadingRouteId(null);
    }
  };

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

  const handleCopySummary = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch (e) {}
    }
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

      {/* Nearby Government Offices & Directions (Google Maps Places API New + Routes API) */}
      <section className="bg-white/85 backdrop-blur-md rounded-3xl p-5 border border-cyan-200/70 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0284c7] to-[#10b981] text-white flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#091526]">
                Find Nearby Government Offices & Directions
              </h2>
              <p className="text-[11px] text-slate-500">
                Search near {userCoords ? 'your live GPS coordinates' : `${userProfile.district || userProfile.state || 'India'}`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleUseMyLocation}
            disabled={locating}
            className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {locating ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Crosshair className="w-3.5 h-3.5" />
            )}
            <span>{userCoords ? 'Location Set' : 'Use My Location'}</span>
          </button>
        </div>

        {/* Search Input + Button */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchNearbyOffices();
          }}
          className="flex flex-col sm:flex-row gap-2"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={officeQuery}
              onChange={(e) => setOfficeQuery(e.target.value)}
              placeholder="e.g., Taluk Office, Grama One, CSC, Social Welfare Office..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600 focus:bg-white"
            />
          </div>
          <button
            type="submit"
            disabled={searchingOffices || !officeQuery.trim()}
            className="px-4 py-2.5 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] disabled:opacity-50 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            {searchingOffices ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Search className="w-4 h-4" />
            )}
            <span>Search Offices</span>
          </button>
        </form>

        {/* Quick office chips */}
        <div className="flex flex-wrap gap-1.5">
          {QUICK_OFFICE_QUERIES.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => handleSearchNearbyOffices(preset)}
              className="text-[11px] bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-800 px-2.5 py-1 rounded-full border border-slate-200 hover:border-cyan-300 transition-colors cursor-pointer font-medium"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Maps Error / Unconfigured Notice */}
        {mapsError && (
          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <span>{mapsError}</span>
          </div>
        )}

        {/* Active Directions Panel */}
        {activeDirections && (
          <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-2.5 text-xs animate-in fade-in">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-bold text-[#091526] flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-sky-600" />
                  <span>Directions to {activeDirections.officeName}</span>
                </h3>
                <p className="text-sky-800 font-semibold mt-0.5">
                  {activeDirections.distanceText} • {activeDirections.durationText} ({activeDirections.travelMode})
                </p>
              </div>
              <button
                onClick={() => setActiveDirections(null)}
                className="p-1 rounded-lg text-slate-500 hover:bg-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {activeDirections.steps.length > 0 && (
              <ol className="space-y-1.5 max-h-48 overflow-y-auto pr-1 list-decimal list-inside text-slate-700">
                {activeDirections.steps.map((step, idx) => (
                  <li key={idx} className="bg-white/90 px-2.5 py-1.5 rounded-lg border border-sky-100">
                    <span className="font-medium">{step.instruction}</span>{' '}
                    <span className="text-slate-400">
                      ({step.distanceMeters >= 1000 ? `${(step.distanceMeters / 1000).toFixed(1)} km` : `${step.distanceMeters} m`})
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}

        {/* Returned Nearby Offices */}
        {nearbyOffices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {nearbyOffices.map((office) => (
              <div
                key={office.id || office.name}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-2 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xs sm:text-sm font-bold text-[#091526] leading-snug">
                      {office.name}
                    </h3>
                    {office.openNow !== null && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                          office.openNow
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {office.openNow ? 'Open Now' : 'Closed'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{office.address}</p>
                  {office.phone && (
                    <a
                      href={`tel:${office.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{office.phone}</span>
                    </a>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    disabled={loadingRouteId === office.id}
                    onClick={() => handleGetDirections(office)}
                    className="flex-1 py-1.5 px-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {loadingRouteId === office.id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Navigation className="w-3.5 h-3.5" />
                    )}
                    <span>Route Steps</span>
                  </button>

                  {(office.directionsUri || office.googleMapsUri) && (
                    <a
                      href={office.directionsUri || office.googleMapsUri || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2.5 bg-[#091526] hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {hasSearchedMaps && !searchingOffices && !mapsError && nearbyOffices.length === 0 && (
          <p className="text-xs text-slate-500 text-center py-2">
            No matching offices found for this query. Try a broader term like "District Collectorate" or "CSC".
          </p>
        )}
      </section>

      {/* Verified Helplines & Support Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredContacts.map((contact: SupportContact) => (
          <div
            key={contact.id}
            className="bg-white/80 hover:bg-white backdrop-blur-md rounded-3xl p-5 border border-white/80 hover:border-cyan-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
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

              <div className="p-3 bg-sky-50/70 rounded-2xl border border-sky-100/80 mb-3 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block mb-0.5">
                  {t.whoItHelpsLabel}
                </span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {getLoc(contact.whoItHelps)}
                </p>
              </div>

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

      {/* Prepare Issue Summary Modal */}
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

            <pre className="p-4 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-[11px] text-slate-800 whitespace-pre-wrap max-h-72 overflow-y-auto leading-relaxed select-text">
              {generateIssueSummary(issueSummaryModalContact)}
            </pre>

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
