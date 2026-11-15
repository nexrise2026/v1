import React, { useState, useRef, useEffect } from 'react';
import {
  Mic,
  MicOff,
  ArrowRight,
  Compass,
  FolderLock,
  GraduationCap,
  Home as HomeIcon,
  Bus,
  FileCheck,
  CloudRain,
  Layers,
  CreditCard,
  Droplet,
  ShieldCheck,
  Wrench,
  HeartPulse,
  Coins,
  Smile,
  HeartHandshake,
  Award,
  Activity,
  AlertCircle,
  Loader2,
  Sparkles,
  MapPin,
  CheckCircle,
  Volume2,
  ExternalLink,
  X,
  RefreshCw,
  ShieldAlert,
  Send,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LIFE_EVENT_CARDS } from '../../data/lifeEvents';
import { LifeEventCard } from '../../types';
import { ROLE_SUGGESTIONS } from '../../data/suggestions';

export const HomeTab: React.FC = () => {
  const {
    t,
    getLoc,
    setActiveTab,
    selectedLanguage,
    setPendingVoiceQuery,
    setVoiceTranscript,
    filterByCitizen,
    userProfile,
  } = useApp();

  // Voice Interaction State
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [recordingState, setRecordingState] = useState<'idle' | 'requesting' | 'listening'>('idle');
  const [voiceStatus, setVoiceStatus] = useState<string>('');
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [interimTranscript, setInterimTranscript] = useState<string>('');
  const [showVoiceFallbackModal, setShowVoiceFallbackModal] = useState(false);
  const recognitionRef = useRef<any>(null);
  const transcriptRef = useRef<string>('');
  const autoSendTimerRef = useRef<any>(null);

  // Check if running inside an iframe sandbox
  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

  // Filter life event cards strictly by role, state, district
  const filteredLifeEvents = filterByCitizen(LIFE_EVENT_CARDS);

  // Icon mapper
  const renderCardIcon = (iconType: string) => {
    switch (iconType) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sky-600" />;
      case 'Home':
        return <HomeIcon className="w-5 h-5 text-sky-600" />;
      case 'Bus':
        return <Bus className="w-5 h-5 text-cyan-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-emerald-600" />;
      case 'CloudRain':
        return <CloudRain className="w-5 h-5 text-sky-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-amber-600" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-cyan-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-yellow-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-sky-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-sky-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-600" />;
    }
  };

  // Function to paste converted speech-to-text directly to the chatbot
  const pasteToChatbot = (textToPaste?: string) => {
    if (autoSendTimerRef.current) {
      clearTimeout(autoSendTimerRef.current);
      autoSendTimerRef.current = null;
    }

    const finalText = (textToPaste || transcriptRef.current || interimTranscript).trim();

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }

    setIsVoiceActive(false);
    setRecordingState('idle');
    setVoiceStatus('');

    if (finalText) {
      setVoiceTranscript(finalText);
      setPendingVoiceQuery(finalText);
      // Auto-navigate to AI Guide tab and paste/submit to chatbot
      setActiveTab('ai-guide');
    }
  };

  const cancelVoice = () => {
    if (autoSendTimerRef.current) {
      clearTimeout(autoSendTimerRef.current);
      autoSendTimerRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {}
    }
    setIsVoiceActive(false);
    setRecordingState('idle');
    setVoiceStatus('');
    setInterimTranscript('');
    transcriptRef.current = '';
  };

  // Voice Interaction Trigger with direct Speech-to-Text conversion
  const startVoiceInteraction = async () => {
    if (autoSendTimerRef.current) {
      clearTimeout(autoSendTimerRef.current);
      autoSendTimerRef.current = null;
    }

    setVoiceError(null);
    setInterimTranscript('');
    transcriptRef.current = '';
    setIsVoiceActive(true);
    setRecordingState('requesting');
    setVoiceStatus(t.voiceMicRequesting);

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceError(t.voiceUnsupported);
      setIsVoiceActive(false);
      setRecordingState('idle');
      setShowVoiceFallbackModal(true);
      return;
    }

    try {
      // 1. Verify audio hardware if supported
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((track) => track.stop());
        } catch (mediaErr) {
          console.warn('getUserMedia notice:', mediaErr);
          if (isInIframe) {
            setVoiceError(
              'Microphone access is restricted inside preview iframes. Open in standalone window for native voice recognition.'
            );
            setIsVoiceActive(false);
            setRecordingState('idle');
            setShowVoiceFallbackModal(true);
            return;
          }
        }
      }

      // 2. Setup SpeechRecognition
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;

      recognition.lang = selectedLanguage.bcp47;
      recognition.interimResults = true;
      recognition.continuous = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setRecordingState('listening');
        setVoiceStatus(t.voiceListening);
      };

      recognition.onresult = (event: any) => {
        let fullTranscript = '';
        for (let i = 0; i < event.results.length; ++i) {
          fullTranscript += event.results[i][0].transcript;
        }

        const trimmed = fullTranscript.trim();
        transcriptRef.current = trimmed;
        setInterimTranscript(trimmed);

        // Reset debounce timer on new speech words
        if (autoSendTimerRef.current) {
          clearTimeout(autoSendTimerRef.current);
        }

        // When user pauses speaking for 2.2 seconds, automatically convert & paste to chatbot
        if (trimmed.length > 2) {
          autoSendTimerRef.current = setTimeout(() => {
            if (transcriptRef.current.trim()) {
              pasteToChatbot(transcriptRef.current.trim());
            }
          }, 2200);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition event error:', event.error);
        if (event.error === 'not-allowed' || event.error === 'permission-denied') {
          setVoiceError(t.voiceMicDenied);
          setShowVoiceFallbackModal(true);
          setIsVoiceActive(false);
          setRecordingState('idle');
        } else if (event.error === 'no-speech') {
          setVoiceStatus('Waiting for your voice... speak now');
        } else if (event.error === 'network') {
          setVoiceError('Network connection interrupted. Please try again or type.');
          setIsVoiceActive(false);
          setRecordingState('idle');
        } else if (event.error !== 'aborted') {
          setVoiceError(`Voice notice (${event.error}). Please try again.`);
          setIsVoiceActive(false);
          setRecordingState('idle');
        }
      };

      recognition.onend = () => {
        // If recognition ends and transcript exists, paste to chatbot
        if (transcriptRef.current.trim()) {
          pasteToChatbot(transcriptRef.current.trim());
        } else {
          setIsVoiceActive(false);
          setRecordingState('idle');
        }
      };

      recognition.start();
    } catch (err: any) {
      console.warn('Microphone permission catch:', err);
      setIsVoiceActive(false);
      setRecordingState('idle');
      setVoiceError(t.voiceMicDenied);
      setShowVoiceFallbackModal(true);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoSendTimerRef.current) {
        clearTimeout(autoSendTimerRef.current);
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, []);

  const handleGrantAccessOrOpenWindow = () => {
    if (isInIframe) {
      window.open(window.location.href, '_blank');
    } else {
      startVoiceInteraction();
    }
  };

  // Role suggestions for quick voice test
  const quickVoiceChips =
    ROLE_SUGGESTIONS[userProfile.role]?.[selectedLanguage.code]?.slice(0, 3) ||
    ROLE_SUGGESTIONS[userProfile.role]?.en?.slice(0, 3) ||
    [];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Hero Section */}
      <section className="text-center pt-4 sm:pt-6 pb-2">
        {/* State and District Pill indicator */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-cyan-900/10 shadow-2xs text-xs text-slate-700 font-semibold mb-3">
          <MapPin className="w-3.5 h-3.5 text-sky-600" />
          <span>
            {userProfile.role.toUpperCase()} • {userProfile.state || 'India'}
            {userProfile.district ? ` • ${userProfile.district}` : ''}
          </span>
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 ml-1" />
        </div>

        {/* Hero Heading */}
        <h1 className="text-xl sm:text-2xl md:text-[28px] font-bold leading-normal tracking-tight max-w-xl mx-auto mb-3 text-[#091526]">
          {t.homeHeroHeading}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
          {t.homeHeroSubtitle}
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          <button
            onClick={() => setActiveTab('ai-guide')}
            className="px-4 py-2.5 bg-gradient-to-r from-[#0369a1] via-[#0891b2] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-cyan-700/20 flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>{t.btnStartSituation}</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className="px-4 py-2.5 bg-white hover:bg-sky-50/70 text-[#091526] font-semibold text-xs sm:text-sm rounded-xl border border-slate-200/90 hover:border-cyan-300 shadow-2xs flex items-center gap-2 transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-sky-600" />
            <span>{t.btnExploreServices}</span>
          </button>

          <button
            onClick={() => setActiveTab('vault')}
            className="px-4 py-2.5 bg-white hover:bg-sky-50/70 text-[#091526] font-semibold text-xs sm:text-sm rounded-xl border border-slate-200/90 hover:border-cyan-300 shadow-2xs flex items-center gap-2 transition-all cursor-pointer"
          >
            <FolderLock className="w-4 h-4 text-teal-600" />
            <span>{t.btnDocumentVault}</span>
          </button>
        </div>
      </section>

      {/* Voice Interaction Section: Speech to Text Conversion & Paste to Chatbot */}
      <section className="max-w-md mx-auto text-center">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-cyan-100/80 shadow-sm flex flex-col items-center">
          {/* Big Microphone Button: click to start; click again to finish and paste to chatbot */}
          <button
            onClick={isVoiceActive ? () => pasteToChatbot() : startVoiceInteraction}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg relative ${
              isVoiceActive
                ? 'bg-red-500 text-white animate-pulse shadow-red-500/40 ring-4 ring-red-200'
                : 'bg-gradient-to-tr from-[#0284c7] via-[#06b6d4] to-[#10b981] hover:from-[#0369a1] hover:via-[#0891b2] hover:to-[#059669] text-white shadow-cyan-500/30 hover:scale-105 active:scale-95'
            }`}
            title={isVoiceActive ? "Finish & Paste to Chatbot" : t.speakToAi}
            aria-label={t.speakToAi}
          >
            {isVoiceActive ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
          </button>

          <span className="font-bold text-sm text-[#091526] mt-3 block">
            {isVoiceActive ? 'Listening... Click to Paste to Chatbot' : t.speakToAi}
          </span>
          <span className="text-[11px] text-slate-500 font-medium mt-0.5">
            {selectedLanguage.nativeName} ({selectedLanguage.name} • {selectedLanguage.bcp47})
          </span>

          {/* Voice Live Status & Speech-to-Text Conversion Panel */}
          {isVoiceActive && (
            <div className="mt-4 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs w-full animate-in fade-in space-y-3">
              {/* Animated Sound Wave Bars */}
              <div className="flex items-center justify-center gap-1.5 py-1">
                <span className="w-1 h-3 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1 h-5 bg-cyan-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-7 bg-teal-600 rounded-full animate-bounce"></span>
                <span className="w-1 h-5 bg-cyan-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1 h-3 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              </div>

              <div className="flex items-center justify-center gap-2 text-sky-800 font-semibold">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>{voiceStatus}</span>
              </div>

              {/* Real-Time Speech-to-Text Display */}
              <div className="bg-white/95 p-3 rounded-xl border border-sky-100 text-left space-y-1 shadow-2xs">
                <div className="flex items-center justify-between text-[10px] text-sky-800 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-600" />
                    Speech-to-Text Conversion:
                  </span>
                  <span className="text-slate-400 lowercase">{selectedLanguage.code}</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-relaxed min-h-[36px]">
                  "{interimTranscript || 'Speak into your mic... words will be transcribed here live...'}"
                </p>
              </div>

              {/* Action Buttons: Paste to Chatbot & Cancel */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => pasteToChatbot()}
                  disabled={!interimTranscript.trim()}
                  className="flex-1 py-2 px-3 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] disabled:opacity-40 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-700/20 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Paste to Chatbot & Send →</span>
                </button>
                <button
                  onClick={cancelVoice}
                  className="py-2 px-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-medium rounded-xl text-xs transition-colors cursor-pointer"
                >
                  {t.btnCancel}
                </button>
              </div>
            </div>
          )}

          {/* Quick Voice Prompt Suggestions when idle */}
          {!isVoiceActive && !voiceError && quickVoiceChips.length > 0 && (
            <div className="mt-4 pt-3 border-t border-slate-100 w-full text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5 text-center">
                Or pick a speech query to convert & paste to chatbot:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickVoiceChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setVoiceTranscript(chip);
                      setPendingVoiceQuery(chip);
                      setActiveTab('ai-guide');
                    }}
                    className="text-left text-xs bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-800 p-2 rounded-xl border border-slate-200 hover:border-cyan-300 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span className="truncate flex-1 font-medium">"{chip}"</span>
                    <Send className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Unlocked Error / Permission Notice with Standalone Tab & Fallback options */}
          {voiceError && !isVoiceActive && (
            <div className="mt-4 p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs w-full text-left space-y-2.5 animate-in fade-in">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 text-amber-900 font-medium">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>{voiceError}</span>
                </div>
                <button
                  onClick={() => setVoiceError(null)}
                  className="text-amber-500 hover:text-amber-800 p-0.5 rounded cursor-pointer"
                  title="Dismiss notice"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {isInIframe && (
                <p className="text-[11px] text-amber-700 bg-amber-100/50 p-2 rounded-lg border border-amber-200/60 leading-relaxed">
                  <strong>Browser Notice:</strong> Embedded preview sandboxes often block microphone hardware. Opening in a standalone window grants full audio access directly.
                </p>
              )}

              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <button
                  onClick={handleGrantAccessOrOpenWindow}
                  className="flex-1 min-w-[130px] py-2 px-3 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] active:scale-[0.98] text-white font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-cyan-700/20 cursor-pointer"
                >
                  {isInIframe ? (
                    <>
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Full Window</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-3.5 h-3.5" />
                      <span>{t.btnAllowMic}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={startVoiceInteraction}
                  className="py-2 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-xl text-xs transition-colors flex items-center gap-1 cursor-pointer"
                  title="Retry speech recognition directly"
                >
                  <RefreshCw className="w-3 h-3 text-slate-500" />
                  <span>Retry</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai-guide')}
                  className="py-2 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-xl text-xs transition-colors cursor-pointer"
                >
                  {t.btnTypeInstead}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Role & State Specific Quick Life Event Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#091526]">
              {t.quickActionsTitle}
            </h2>
            <p className="text-xs text-slate-500">
              {t.quickActionsSubtitle}
            </p>
          </div>
          <span className="text-xs font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/70 hidden sm:inline">
            {filteredLifeEvents.length} Triggers
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {filteredLifeEvents.map((card: LifeEventCard) => (
            <div
              key={card.id}
              onClick={() => setActiveTab('services')}
              className="bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl p-4 border border-white/80 hover:border-cyan-400 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderCardIcon(card.iconType)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/70">
                    {getLoc(card.badge)}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-[#091526] group-hover:text-sky-700 transition-colors mb-1.5 leading-snug">
                  {getLoc(card.title)}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {getLoc(card.description)}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700 group-hover:translate-x-0.5 transition-transform">
                <span>{t.viewDetails}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Fallback Modal for Iframe Sandbox & Denied Permissions */}
      {showVoiceFallbackModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowVoiceFallbackModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              title="Close modal"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <MicOff className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#091526] leading-tight">
                  Microphone Access Notice
                </h3>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 mt-1 inline-block">
                  {isInIframe ? 'Iframe Sandbox Restricted' : 'Audio Permission Required'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              {isInIframe ? (
                <>
                  Modern web browsers block direct microphone hardware access inside embedded preview sandboxes. Open NIRVAHA AI in a <strong>standalone browser tab</strong> where Chrome's native microphone prompt will appear immediately and allow speech recognition.
                </>
              ) : (
                <>
                  Microphone access was denied or is blocked by your browser settings. You can grant access in your browser address bar (lock icon) or open the app in a fresh window.
                </>
              )}
            </p>

            <div className="space-y-2.5">
              <button
                onClick={() => {
                  window.open(window.location.href, '_blank');
                  setShowVoiceFallbackModal(false);
                }}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#0369a1] via-[#0891b2] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] active:scale-[0.99] text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-700/20 transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Standalone Window (Recommended)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setShowVoiceFallbackModal(false);
                    startVoiceInteraction();
                  }}
                  className="py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Try Again Here</span>
                </button>

                <button
                  onClick={() => {
                    setShowVoiceFallbackModal(false);
                    setActiveTab('ai-guide');
                  }}
                  className="py-2.5 px-3 bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{t.btnTypeInstead}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
