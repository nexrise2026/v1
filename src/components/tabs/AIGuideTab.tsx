import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Bot,
  User,
  Sparkles,
  Loader2,
  Trash2,
  Mic,
  MicOff,
  ExternalLink,
  X,
  RefreshCw,
  Languages,
  FileSearch,
  CheckCircle2,
  ArrowRight,
  MapPin,
  AlertCircle,
  History,
  Plus,
  MessageSquare,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ROLE_SUGGESTIONS } from '../../data/suggestions';
import { SUPPORTED_LANGUAGES } from '../../data/languages';

interface ProblemAnalysis {
  problemSummary: string;
  recommendedSchemes: Array<{
    schemeId: string;
    title: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    matchReason: string;
    estimatedBenefit: string;
  }>;
  requiredDocuments: string[];
  actionSteps: string[];
  suggestedOfficeType: string;
}

type VoiceEngine = 'browser' | 'sarvam' | 'bhashini';
type TranslateEngine = 'sarvam' | 'bhashini';

export const AIGuideTab: React.FC = () => {
  const {
    t,
    userProfile,
    selectedLanguage,
    chatMessages,
    chatSessions,
    activeChatSessionId,
    addChatMessage,
    updateChatMessage,
    persistChatMessage,
    clearChat,
    startNewChat,
    loadChatSession,
    deleteChatSession,
    clearAllChatHistory,
    pendingVoiceQuery,
    setPendingVoiceQuery,
    setVoiceTranscript,
    setActiveTab,
  } = useApp();

  const [inputMessage, setInputMessage] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ProblemAnalysis | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [showHistoryDrawer, setShowHistoryDrawer] = useState(false);

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingMsgId, setPlayingMsgId] = useState<string | null>(null);
  const [isListeningInChat, setIsListeningInChat] = useState(false);
  const [chatMicStatus, setChatMicStatus] = useState<string>('');
  const [showVoiceFallbackModal, setShowVoiceFallbackModal] = useState(false);
  const [voiceEngine, setVoiceEngine] = useState<VoiceEngine>('browser');
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);

  // Per-message translation state (Sarvam AI / Bhashini)
  const [translatePanelMsgId, setTranslatePanelMsgId] = useState<string | null>(null);
  const [translateTargetLang, setTranslateTargetLang] = useState<string>('kn');
  const [translateEngine, setTranslateEngine] = useState<TranslateEngine>('sarvam');
  const [translatingMsgId, setTranslatingMsgId] = useState<string | null>(null);
  const [translatedReplies, setTranslatedReplies] = useState<
    Record<string, { text: string; langLabel: string; provider: string }>
  >({});
  const [translateError, setTranslateError] = useState<Record<string, string>>({});

  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const chatRecognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isSendingRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      abortControllerRef.current?.abort();
      if (chatRecognitionRef.current) {
        const rec = chatRecognitionRef.current;
        chatRecognitionRef.current = null;
        rec.onend = null;
        rec.onresult = null;
        rec.onerror = null;
        try {
          rec.abort();
        } catch (e) {}
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        try {
          mediaRecorderRef.current.stop();
        } catch (e) {}
      }
      if (audioPlayerRef.current) {
        try {
          audioPlayerRef.current.pause();
        } catch (e) {}
      }
      if (synthRef.current) {
        try {
          synthRef.current.cancel();
        } catch (e) {}
      }
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isStreaming, analysisResult]);

  useEffect(() => {
    if (pendingVoiceQuery) {
      const query = pendingVoiceQuery;
      setPendingVoiceQuery(null);
      setInputMessage(query);
      handleSendMessage(query, true);
    }
  }, [pendingVoiceQuery]);

  const chips =
    ROLE_SUGGESTIONS[userProfile.role]?.[selectedLanguage.code] ||
    ROLE_SUGGESTIONS[userProfile.role]?.en ||
    [];

  const handleSendMessage = async (textToSend?: string, isVoiceInput: boolean = false) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isStreaming || isSendingRef.current) return;

    isSendingRef.current = true;
    setInputMessage('');
    setVoiceNotice(null);

    const priorMessages = chatMessages
      .filter((m) => m.text && m.text.trim().length > 0)
      .map((m) => ({ sender: m.sender, text: m.text }));

    addChatMessage({ sender: 'user', text: query, isVoice: isVoiceInput });

    const assistantMsgId = addChatMessage({ sender: 'assistant', text: '' });
    setIsStreaming(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;
    let receivedAnyText = false;
    let fullAssistantText = '';

    const processSseLine = (line: string): boolean => {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) return false;
      const dataStr = trimmed.slice(5).trim();
      if (dataStr === '[DONE]') return true;
      try {
        const parsed = JSON.parse(dataStr);
        if (parsed.text) {
          receivedAnyText = true;
          fullAssistantText += parsed.text;
          updateChatMessage(assistantMsgId, parsed.text);
        } else if (parsed.error) {
          receivedAnyText = true;
          fullAssistantText += parsed.error;
          updateChatMessage(assistantMsgId, parsed.error);
        }
      } catch (e) {}
      return false;
    };

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: [...priorMessages, { sender: 'user', text: query }],
          userProfile,
          language: selectedLanguage,
        }),
      });

      if (!response.ok || !response.body) {
        let serverError = 'Connection to NIRVAHA AI server failed.';
        try {
          const errJson = await response.json();
          if (errJson?.error) serverError = errJson.error;
        } catch (e) {}
        throw new Error(serverError);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let doneSignal = false;

      while (!doneSignal) {
        const { value, done } = await reader.read();
        if (done) {
          buffer += decoder.decode();
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (processSseLine(line)) {
            doneSignal = true;
            break;
          }
        }
      }

      if (!doneSignal && buffer.trim()) {
        for (const line of buffer.split('\n')) {
          if (processSseLine(line)) break;
        }
      }

      if (!receivedAnyText) {
        const fallback = 'No response was received from NIRVAHA AI. Please try asking again.';
        fullAssistantText = fallback;
        updateChatMessage(assistantMsgId, fallback);
      }

      if (fullAssistantText.trim()) {
        persistChatMessage({
          id: assistantMsgId,
          sender: 'assistant',
          text: fullAssistantText,
        });
      }
    } catch (err: any) {
      if (err?.name !== 'AbortError') {
        console.error('Chat stream error:', err);
        if (!receivedAnyText) {
          updateChatMessage(
            assistantMsgId,
            err?.message ||
              'I am experiencing a temporary connection issue. Please try again in a moment.'
          );
        }
      }
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
      isSendingRef.current = false;
      setIsStreaming(false);
    }
  };

  // Structured Gemini Problem Analysis & Scheme Recommendations
  const handleAnalyzeProblem = async () => {
    const query = inputMessage.trim();
    if (!query || isAnalyzing || isStreaming) return;

    setIsAnalyzing(true);
    setAnalysisError(null);

    try {
      const res = await fetch('/api/gemini/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemText: query,
          userProfile,
          language: selectedLanguage,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'Could not analyze problem.');
      }
      setAnalysisResult(data as ProblemAnalysis);
      setInputMessage('');
    } catch (err: any) {
      setAnalysisError(err?.message || 'Problem analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Cloud Speech-to-Text via Sarvam AI or Bhashini using MediaRecorder
  const toggleCloudVoice = async (engine: 'sarvam' | 'bhashini') => {
    setVoiceNotice(null);

    if (isListeningInChat && mediaRecorderRef.current) {
      if (mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === 'undefined') {
      setShowVoiceFallbackModal(true);
      return;
    }

    try {
      setChatMicStatus(`Recording audio for ${engine === 'sarvam' ? 'Sarvam AI' : 'Bhashini'}... Click mic again to transcribe`);
      setIsListeningInChat(true);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/webm')
          ? 'audio/webm'
          : 'audio/ogg';

      const recorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (ev) => {
        if (ev.data.size > 0) audioChunksRef.current.push(ev.data);
      };

      recorder.onstop = async () => {
        stream.getTracks().forEach((tr) => tr.stop());
        mediaRecorderRef.current = null;
        setChatMicStatus(`Transcribing with ${engine === 'sarvam' ? 'Sarvam AI' : 'Bhashini'}...`);

        try {
          const blob = new Blob(audioChunksRef.current, { type: mimeType });
          const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(String(reader.result || ''));
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });

          const endpoint = engine === 'sarvam' ? '/api/sarvam/stt' : '/api/bhashini/stt';
          const payload =
            engine === 'sarvam'
              ? { audioBase64: base64, mimeType, languageCode: selectedLanguage.code }
              : { audioBase64: base64, sourceLanguage: selectedLanguage.code, audioFormat: mimeType.includes('ogg') ? 'ogg' : 'webm' };

          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) {
            throw new Error(data?.error || `${engine} transcription failed.`);
          }

          const transcript = (data.transcript || '').trim();
          if (transcript) {
            setInputMessage(transcript);
            setVoiceTranscript(transcript);
            handleSendMessage(transcript, true);
          } else {
            setVoiceNotice('No speech detected in the recording. Please speak clearly and try again.');
          }
        } catch (err: any) {
          setVoiceNotice(err?.message || 'Cloud speech-to-text failed.');
        } finally {
          setIsListeningInChat(false);
          setChatMicStatus('');
        }
      };

      recorder.start();
    } catch (err) {
      setIsListeningInChat(false);
      setChatMicStatus('');
      setShowVoiceFallbackModal(true);
    }
  };

  // Chat inline voice recognition (routes to Browser, Sarvam AI, or Bhashini)
  const toggleChatVoice = async () => {
    if (voiceEngine === 'sarvam' || voiceEngine === 'bhashini') {
      await toggleCloudVoice(voiceEngine);
      return;
    }

    if (isListeningInChat) {
      if (chatRecognitionRef.current) {
        const rec = chatRecognitionRef.current;
        chatRecognitionRef.current = null;
        rec.onend = null;
        rec.onresult = null;
        rec.onerror = null;
        try {
          rec.abort();
        } catch (e) {}
      }
      setIsListeningInChat(false);
      setChatMicStatus('');
      return;
    }

    stopAudioPlayback();

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsListeningInChat(false);
      setChatMicStatus('');
      setShowVoiceFallbackModal(true);
      return;
    }

    try {
      setChatMicStatus(t.voiceMicRequesting);
      setIsListeningInChat(true);

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((track) => track.stop());
        } catch (mediaErr) {
          console.warn('getUserMedia notice in chat:', mediaErr);
          if (isInIframe) {
            setIsListeningInChat(false);
            setChatMicStatus('');
            setShowVoiceFallbackModal(true);
            return;
          }
        }
      }

      const recognition = new SpeechRecognition();
      chatRecognitionRef.current = recognition;

      recognition.lang = selectedLanguage.bcp47;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      setChatMicStatus(t.voiceListening);

      let finalAudioText = '';

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((r: any) => r[0].transcript)
          .join('');
        finalAudioText = transcript;
        setInputMessage(transcript);
      };

      recognition.onerror = (event: any) => {
        console.warn('Voice error in chat:', event.error);
        setIsListeningInChat(false);
        setChatMicStatus('');
        if (event.error === 'not-allowed' || event.error === 'permission-denied') {
          setShowVoiceFallbackModal(true);
        }
      };

      recognition.onend = () => {
        chatRecognitionRef.current = null;
        setIsListeningInChat(false);
        setChatMicStatus('');
        if (finalAudioText.trim()) {
          setVoiceTranscript(finalAudioText.trim());
          handleSendMessage(finalAudioText.trim(), true);
        }
      };

      recognition.start();
    } catch (err) {
      console.warn('Mic access caught in chat:', err);
      setIsListeningInChat(false);
      setChatMicStatus('');
      setShowVoiceFallbackModal(true);
    }
  };

  const stopAudioPlayback = () => {
    if (audioPlayerRef.current) {
      try {
        audioPlayerRef.current.pause();
        audioPlayerRef.current = null;
      } catch (e) {}
    }
    if (synthRef.current) {
      try {
        synthRef.current.cancel();
      } catch (e) {}
    }
    setPlayingMsgId(null);
  };

  // Text-To-Speech Read Aloud: tries Sarvam AI Indian-language TTS first, falls back to Browser SpeechSynthesis if Sarvam isn't configured
  const handleReadAloud = async (msgId: string, text: string) => {
    if (playingMsgId === msgId) {
      stopAudioPlayback();
      return;
    }

    stopAudioPlayback();
    setPlayingMsgId(msgId);

    const cleanText = text.replace(/[*#_`]/g, '').trim();

    try {
      const res = await fetch('/api/sarvam/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: cleanText,
          languageCode: selectedLanguage.code,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.audioBase64) {
          const audio = new Audio(`data:${data.mimeType || 'audio/wav'};base64,${data.audioBase64}`);
          audioPlayerRef.current = audio;
          audio.onended = () => setPlayingMsgId(null);
          audio.onerror = () => setPlayingMsgId(null);
          await audio.play();
          return;
        }
      }
    } catch {
      // Fall through cleanly to browser speech synthesis
    }

    if (!synthRef.current) {
      setPlayingMsgId(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = selectedLanguage.bcp47;
    utterance.rate = 0.95;
    utterance.onend = () => setPlayingMsgId(null);
    utterance.onerror = () => setPlayingMsgId(null);
    synthRef.current.speak(utterance);
  };

  // Translate an assistant message via Sarvam AI or Bhashini
  const handleTranslateMessage = async (msgId: string, text: string) => {
    setTranslatingMsgId(msgId);
    setTranslateError((prev) => ({ ...prev, [msgId]: '' }));

    const targetLangInfo = SUPPORTED_LANGUAGES.find((l) => l.code === translateTargetLang);
    const endpoint = translateEngine === 'sarvam' ? '/api/sarvam/translate' : '/api/bhashini/translate';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          sourceLanguage: selectedLanguage.code,
          targetLanguage: translateTargetLang,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'Translation request failed.');
      }

      setTranslatedReplies((prev) => ({
        ...prev,
        [msgId]: {
          text: data.translatedText || '',
          langLabel: targetLangInfo ? `${targetLangInfo.nativeName} (${targetLangInfo.name})` : translateTargetLang,
          provider: translateEngine === 'sarvam' ? 'Sarvam AI' : 'Bhashini',
        },
      }));
      setTranslatePanelMsgId(null);
    } catch (err: any) {
      setTranslateError((prev) => ({
        ...prev,
        [msgId]: err?.message || 'Translation service unavailable.',
      }));
    } finally {
      setTranslatingMsgId(null);
    }
  };

  const handleCopy = async (id: string, text: string) => {
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
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="relative flex flex-col h-[calc(100vh-140px)] sm:h-[calc(100vh-160px)] max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl border border-white/60 shadow-xs overflow-hidden animate-in fade-in duration-200">
      {/* Chat Header */}
      <div className="p-3.5 sm:p-4 border-b border-slate-200/80 bg-white/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0284c7] via-[#06b6d4] to-[#10b981] flex items-center justify-center text-white shadow-xs flex-shrink-0">
            <Bot className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-[#091526] leading-tight flex items-center gap-2">
              <span className="truncate">{t.aiGuideHeading}</span>
              <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-semibold border border-sky-200/80 flex-shrink-0">
                {selectedLanguage.nativeName}
              </span>
            </h2>
            <p className="text-[11px] text-slate-500 truncate max-w-xs sm:max-w-md">
              {t.aiGuideSubtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Voice Engine Selector (Browser / Sarvam AI / Bhashini) */}
          <select
            value={voiceEngine}
            onChange={(e) => setVoiceEngine(e.target.value as VoiceEngine)}
            aria-label="Voice Recognition Engine"
            title="Voice Recognition Engine"
            className="text-[11px] bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-slate-700 font-semibold focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="browser">Mic: Browser</option>
            <option value="sarvam">Mic: Sarvam AI</option>
            <option value="bhashini">Mic: Bhashini</option>
          </select>

          {/* Chat History Button */}
          <button
            type="button"
            onClick={() => setShowHistoryDrawer((prev) => !prev)}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              showHistoryDrawer
                ? 'bg-sky-100 text-sky-900 border-sky-300'
                : 'bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-800 border-slate-200'
            }`}
            title="Chat History"
          >
            <History className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">History</span>
            {chatSessions.length > 0 && (
              <span className="text-[10px] bg-sky-600 text-white px-1.5 py-0.2 rounded-full font-bold leading-4">
                {chatSessions.length}
              </span>
            )}
          </button>

          {/* Clear Chat Button */}
          <button
            type="button"
            disabled={chatMessages.length === 0 && !analysisResult}
            onClick={() => {
              clearChat();
              setAnalysisResult(null);
              setAnalysisError(null);
            }}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-red-50 hover:border-red-200 text-slate-600 hover:text-red-600 disabled:opacity-40 disabled:pointer-events-none transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
            title="Clear Current Chat"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Clear Chat</span>
          </button>
        </div>
      </div>

      {/* Slide-over Chat History Drawer */}
      {showHistoryDrawer && (
        <div className="absolute inset-0 z-30 flex justify-end bg-slate-900/35 backdrop-blur-[1px] animate-in fade-in duration-150">
          <div className="w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-sky-700" />
                <h3 className="text-sm font-bold text-[#091526]">Chat History</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowHistoryDrawer(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Close Chat History"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 border-b border-slate-100 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  startNewChat();
                  setAnalysisResult(null);
                  setAnalysisError(null);
                  setShowHistoryDrawer(false);
                }}
                className="flex-1 py-2 px-3 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Chat</span>
              </button>

              {chatSessions.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    clearAllChatHistory();
                    setAnalysisResult(null);
                    setAnalysisError(null);
                  }}
                  className="py-2 px-3 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  title="Clear All Saved History"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {chatSessions.length === 0 ? (
                <div className="text-center py-10 px-4 space-y-2">
                  <MessageSquare className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs font-semibold text-slate-600">No saved conversations yet</p>
                  <p className="text-[11px] text-slate-400">
                    Your chats with NIRVAHA AI will automatically appear here.
                  </p>
                </div>
              ) : (
                chatSessions.map((session) => {
                  const isActive = session.id === activeChatSessionId;
                  return (
                    <div
                      key={session.id}
                      className={`group rounded-xl border p-3 transition-all flex items-start justify-between gap-2 ${
                        isActive
                          ? 'bg-sky-50 border-sky-300'
                          : 'bg-slate-50/70 hover:bg-sky-50/50 border-slate-200 hover:border-cyan-300'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          loadChatSession(session.id);
                          setShowHistoryDrawer(false);
                        }}
                        className="flex-1 text-left min-w-0 cursor-pointer"
                      >
                        <p className="text-xs font-bold text-[#091526] truncate">
                          {session.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500">
                          <span>{session.messages.length} msgs</span>
                          <span>•</span>
                          <span>
                            {new Date(session.updatedAt).toLocaleDateString([], {
                              month: 'short',
                              day: 'numeric',
                            })}{' '}
                            {new Date(session.updatedAt).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteChatSession(session.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer flex-shrink-0"
                        title="Delete conversation"
                        aria-label="Delete conversation"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        {/* Structured Problem Analysis Card (Gemini API) */}
        {analysisError && (
          <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{analysisError}</span>
            </div>
            <button onClick={() => setAnalysisError(null)} className="text-red-500 hover:text-red-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {analysisResult && (
          <div className="bg-gradient-to-br from-sky-50 via-white to-emerald-50/70 rounded-2xl border border-cyan-200/90 p-4 sm:p-5 shadow-xs space-y-3.5 animate-in fade-in">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0284c7] to-[#10b981] text-white flex items-center justify-center">
                  <FileSearch className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#091526]">
                    AI Problem Analysis & Scheme Recommendations
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Personalized for {userProfile.role.toUpperCase()} • {userProfile.state || 'India'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setAnalysisResult(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 bg-white/90 p-3 rounded-xl border border-slate-200/80 leading-relaxed">
              {analysisResult.problemSummary}
            </p>

            {analysisResult.recommendedSchemes.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-sky-800">
                  Recommended Government Schemes
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {analysisResult.recommendedSchemes.map((rec, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-3 border border-slate-200/80 space-y-1 shadow-2xs"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-xs sm:text-sm text-[#091526]">{rec.title}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            rec.priority === 'HIGH'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-sky-50 text-sky-700 border border-sky-200'
                          }`}
                        >
                          {rec.priority} MATCH
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{rec.matchReason}</p>
                      <p className="text-xs font-semibold text-teal-800">{rec.estimatedBenefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {analysisResult.requiredDocuments.length > 0 && (
                <div className="bg-white/90 p-3 rounded-xl border border-slate-200/70 space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                    Required Documents
                  </h4>
                  <ul className="space-y-1 text-slate-700">
                    {analysisResult.requiredDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {analysisResult.actionSteps.length > 0 && (
                <div className="bg-white/90 p-3 rounded-xl border border-slate-200/70 space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                    Recommended Next Steps
                  </h4>
                  <ol className="space-y-1 text-slate-700 list-decimal list-inside">
                    {analysisResult.actionSteps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={() => setActiveTab('assist-fill')}
                className="px-3 py-1.5 bg-gradient-to-r from-[#0369a1] to-[#0d9488] text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>{t.btnStartAssistFill}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveTab('human-support')}
                className="px-3 py-1.5 bg-white hover:bg-sky-50 text-sky-800 border border-sky-200 font-semibold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Find Nearby {analysisResult.suggestedOfficeType || 'Govt Office'}</span>
              </button>
            </div>
          </div>
        )}

        {chatMessages.length === 0 && !analysisResult ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-cyan-200/80 flex items-center justify-center text-sky-700 shadow-xs">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="max-w-sm">
              <h3 className="font-bold text-[#091526] text-base mb-1">
                {userProfile.fullName ? `${userProfile.fullName}` : t.appName}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.aiGuideSubtitle}
              </p>
            </div>

            {/* 100% Localized Suggestions Chips */}
            <div className="w-full max-w-md pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                {t.suggestionsLabel}
              </span>
              <div className="flex flex-col gap-2">
                {chips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(chip)}
                    className="text-left text-xs bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-800 p-3 rounded-xl border border-slate-200 hover:border-cyan-300 transition-all cursor-pointer shadow-2xs font-medium"
                  >
                    💬 {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          chatMessages.map((msg) => {
            const isUser = msg.sender === 'user';
            const isPlaying = playingMsgId === msg.id;
            const translated = translatedReplies[msg.id];
            const msgTranslateErr = translateError[msg.id];

            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 sm:gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0284c7] to-[#0d9488] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    isUser
                      ? 'bg-gradient-to-br from-[#0369a1] to-[#0d9488] text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none'
                  }`}
                >
                  {!isUser && !msg.text && (
                    <div className="flex items-center gap-2 text-sky-700 italic text-xs py-1">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>{t.thinkingNotice}</span>
                    </div>
                  )}

                  {isUser && msg.isVoice && (
                    <div className="flex items-center gap-1 text-[10px] text-cyan-100 mb-1 font-semibold">
                      <Mic className="w-3 h-3 text-cyan-100" />
                      <span>Spoken to NIRVAHA AI (Speech-to-Text)</span>
                    </div>
                  )}
                  <div className="whitespace-pre-wrap select-text">{msg.text}</div>

                  {/* Translated Output Block */}
                  {translated && (
                    <div className="mt-2.5 p-2.5 rounded-xl bg-sky-50/80 border border-sky-200/80 text-xs text-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-bold text-sky-800 uppercase">
                        <span>{translated.langLabel}</span>
                        <span>via {translated.provider}</span>
                      </div>
                      <p className="whitespace-pre-wrap leading-relaxed">{translated.text}</p>
                    </div>
                  )}

                  {msgTranslateErr && (
                    <div className="mt-2 p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[11px]">
                      {msgTranslateErr}
                    </div>
                  )}

                  {/* Inline Translation Controls (Sarvam AI / Bhashini) */}
                  {!isUser && translatePanelMsgId === msg.id && (
                    <div className="mt-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-2 text-xs">
                      <select
                        value={translateEngine}
                        onChange={(e) => setTranslateEngine(e.target.value as TranslateEngine)}
                        className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        <option value="sarvam">Sarvam AI</option>
                        <option value="bhashini">Bhashini</option>
                      </select>
                      <select
                        value={translateTargetLang}
                        onChange={(e) => setTranslateTargetLang(e.target.value)}
                        className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                          <option key={lang.code} value={lang.code}>
                            {lang.nativeName} ({lang.name})
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        disabled={translatingMsgId === msg.id}
                        onClick={() => handleTranslateMessage(msg.id, msg.text)}
                        className="px-2.5 py-1 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-[11px] font-semibold cursor-pointer disabled:opacity-50"
                      >
                        {translatingMsgId === msg.id ? 'Translating...' : 'Translate'}
                      </button>
                    </div>
                  )}

                  {/* Assistant Message Actions */}
                  {!isUser && msg.text && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleReadAloud(msg.id, msg.text)}
                          className={`flex items-center gap-1 transition-colors cursor-pointer font-medium ${
                            isPlaying ? 'text-sky-700 font-bold' : 'hover:text-slate-800'
                          }`}
                        >
                          {isPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                          <span>{isPlaying ? t.btnStopAudio : t.btnReadAloud}</span>
                        </button>

                        <button
                          onClick={() =>
                            setTranslatePanelMsgId(translatePanelMsgId === msg.id ? null : msg.id)
                          }
                          className="flex items-center gap-1 hover:text-sky-700 transition-colors cursor-pointer font-medium"
                        >
                          <Languages className="w-3.5 h-3.5" />
                          <span>Translate</span>
                        </button>

                        <button
                          onClick={() => handleCopy(msg.id, msg.text)}
                          className="flex items-center gap-1 hover:text-slate-800 transition-colors cursor-pointer"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>{copiedId === msg.id ? t.copiedNotice : t.btnCopy}</span>
                        </button>
                      </div>

                      <span className="text-[10px] text-slate-400">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips Bar if there are messages */}
      {chatMessages.length > 0 && (
        <div className="px-3 sm:px-4 py-1.5 border-t border-slate-100 bg-slate-50/60 overflow-x-auto flex items-center gap-1.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex-shrink-0 mr-1">
            {t.suggestionsLabel}:
          </span>
          {chips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(chip)}
              className="text-[11px] bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-800 px-2.5 py-1 rounded-full border border-slate-200 hover:border-cyan-300 whitespace-nowrap transition-all cursor-pointer font-medium flex-shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>
      )}

      {/* Voice Error Notice */}
      {voiceNotice && (
        <div className="px-4 py-1.5 bg-amber-50 text-amber-800 text-xs flex items-center justify-between border-t border-amber-200">
          <span>{voiceNotice}</span>
          <button onClick={() => setVoiceNotice(null)} className="text-amber-600 hover:text-amber-900">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Voice status banner in chat */}
      {isListeningInChat && (
        <div className="px-4 py-1.5 bg-sky-50 text-sky-800 text-xs flex items-center justify-between border-t border-sky-200 animate-pulse">
          <div className="flex items-center gap-1.5">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>{chatMicStatus}</span>
          </div>
          <button
            onClick={toggleChatVoice}
            className="text-[11px] underline font-semibold text-sky-900 cursor-pointer"
          >
            {voiceEngine === 'browser' ? t.btnCancel : 'Stop & Transcribe'}
          </button>
        </div>
      )}

      {/* Input Box with Microphone, Analyze Problem, and Send Buttons */}
      <div className="p-3 sm:p-4 border-t border-slate-200/80 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <button
            type="button"
            onClick={toggleChatVoice}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all cursor-pointer shadow-xs flex-shrink-0 ${
              isListeningInChat
                ? 'bg-red-500 text-white animate-pulse ring-4 ring-red-200'
                : 'bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200'
            }`}
            title={t.speakToAi}
          >
            {isListeningInChat ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={t.chatPlaceholder}
            disabled={isStreaming || isAnalyzing}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white transition-all disabled:opacity-50"
          />

          <button
            type="button"
            onClick={handleAnalyzeProblem}
            disabled={isStreaming || isAnalyzing || !inputMessage.trim()}
            title="Analyze Problem & Recommend Matching Schemes"
            className="px-3 h-10 rounded-2xl bg-sky-50 hover:bg-sky-100 disabled:opacity-40 text-sky-800 border border-sky-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer flex-shrink-0"
          >
            {isAnalyzing ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <FileSearch className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">Analyze</span>
          </button>

          <button
            type="submit"
            disabled={isStreaming || isAnalyzing || !inputMessage.trim()}
            className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shadow-md shadow-cyan-700/20 flex-shrink-0"
          >
            {isStreaming ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </form>
      </div>

      {/* Voice Fallback Modal for Iframe Sandbox & Denied Permissions */}
      {showVoiceFallbackModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150 text-left">
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
                  Embedded preview iframes restrict microphone recording. Open NIRVAHA AI in a <strong>standalone browser tab</strong> to grant microphone permissions directly and talk to the assistant.
                </>
              ) : (
                <>
                  Microphone permission was not granted by your browser. You can allow it via the address bar or type directly in the chat box.
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
                <span>Open in Standalone Window</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setShowVoiceFallbackModal(false);
                    toggleChatVoice();
                  }}
                  className="py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Try Again</span>
                </button>

                <button
                  onClick={() => {
                    setShowVoiceFallbackModal(false);
                  }}
                  className="py-2.5 px-3 bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Type Here</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
