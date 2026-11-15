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
  AlertCircle,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ROLE_SUGGESTIONS } from '../../data/suggestions';

export const AIGuideTab: React.FC = () => {
  const {
    t,
    userProfile,
    selectedLanguage,
    chatMessages,
    addChatMessage,
    updateChatMessage,
    clearChat,
    pendingVoiceQuery,
    setPendingVoiceQuery,
    setVoiceTranscript,
  } = useApp();

  const [inputMessage, setInputMessage] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingMsgId, setPlayingMsgId] = useState<string | null>(null);
  const [isListeningInChat, setIsListeningInChat] = useState(false);
  const [chatMicStatus, setChatMicStatus] = useState<string>('');
  const [showVoiceFallbackModal, setShowVoiceFallbackModal] = useState(false);

  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const chatRecognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isStreaming]);

  // Handle auto-sent query from voice input if present
  useEffect(() => {
    if (pendingVoiceQuery) {
      const query = pendingVoiceQuery;
      setPendingVoiceQuery(null);
      // Explicitly paste into chatbot input field
      setInputMessage(query);
      // Auto-send query marked as voice input to trigger AI chatbot response
      handleSendMessage(query, true);
    }
  }, [pendingVoiceQuery]);

  // Retrieve 100% localized suggestion chips for citizen's exact role and language
  const chips =
    ROLE_SUGGESTIONS[userProfile.role]?.[selectedLanguage.code] ||
    ROLE_SUGGESTIONS[userProfile.role]?.en ||
    [];

  const handleSendMessage = async (textToSend?: string, isVoiceInput: boolean = false) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isStreaming) return;

    setInputMessage('');

    // Add user message to state with voice tag
    addChatMessage({ sender: 'user', text: query, isVoice: isVoiceInput });

    // Add placeholder assistant message
    const assistantMsgId = addChatMessage({ sender: 'assistant', text: '' });
    setIsStreaming(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...chatMessages.map((m) => ({ sender: m.sender, text: m.text })),
            { sender: 'user', text: query },
          ],
          userProfile,
          language: selectedLanguage,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Connection to NIRVAHA AI server failed');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data:')) {
            const dataStr = trimmed.replace('data:', '').trim();
            if (dataStr === '[DONE]') {
              break;
            }
            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.text) {
                updateChatMessage(assistantMsgId, parsed.text);
              }
            } catch (e) {}
          }
        }
      }
    } catch (err: any) {
      console.error('Chat stream error:', err);
      updateChatMessage(
        assistantMsgId,
        `I am experiencing a temporary connection issue. Please verify with your nearest Grama One or Seva Kendra office.`
      );
    } finally {
      setIsStreaming(false);
    }
  };

  // Chat inline voice recognition
  const toggleChatVoice = async () => {
    if (isListeningInChat) {
      if (chatRecognitionRef.current) {
        try {
          chatRecognitionRef.current.abort();
        } catch (e) {}
      }
      setIsListeningInChat(false);
      setChatMicStatus('');
      return;
    }

    try {
      setChatMicStatus(t.voiceMicRequesting);
      setIsListeningInChat(true);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setIsListeningInChat(false);
        setChatMicStatus('');
        setShowVoiceFallbackModal(true);
        return;
      }

      // Immediately release tracks after permission verification to free audio hardware
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());

      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        setIsListeningInChat(false);
        setChatMicStatus('');
        setShowVoiceFallbackModal(true);
        return;
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

  // Text-To-Speech Read Aloud
  const handleReadAloud = (msgId: string, text: string) => {
    if (!synthRef.current) return;

    if (playingMsgId === msgId) {
      synthRef.current.cancel();
      setPlayingMsgId(null);
      return;
    }

    synthRef.current.cancel();

    const cleanText = text.replace(/[*#_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = selectedLanguage.bcp47;
    utterance.rate = 0.95;

    utterance.onend = () => setPlayingMsgId(null);
    utterance.onerror = () => setPlayingMsgId(null);

    setPlayingMsgId(msgId);
    synthRef.current.speak(utterance);
  };

  // Copy to clipboard
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] sm:h-[calc(100vh-160px)] max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl border border-white/60 shadow-xs overflow-hidden animate-in fade-in duration-200">
      {/* Chat Header */}
      <div className="p-3.5 sm:p-4 border-b border-slate-200/80 bg-white/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0284c7] via-[#06b6d4] to-[#10b981] flex items-center justify-center text-white shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-[#091526] leading-tight flex items-center gap-2">
              <span>{t.aiGuideHeading}</span>
              <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-semibold border border-sky-200/80">
                {selectedLanguage.nativeName}
              </span>
            </h2>
            <p className="text-[11px] text-slate-500 truncate max-w-xs sm:max-w-md">
              {t.aiGuideSubtitle}
            </p>
          </div>
        </div>

        {chatMessages.length > 0 && (
          <button
            onClick={clearChat}
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors text-xs flex items-center gap-1 cursor-pointer"
            title="Clear Chat History"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Clear</span>
          </button>
        )}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        {chatMessages.length === 0 ? (
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

                  {/* Assistant Message Actions */}
                  {!isUser && msg.text && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
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

      {/* Voice status banner in chat */}
      {isListeningInChat && (
        <div className="px-4 py-1.5 bg-sky-50 text-sky-800 text-xs flex items-center justify-between border-t border-sky-200 animate-pulse">
          <div className="flex items-center gap-1.5">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>{chatMicStatus}</span>
          </div>
          <button
            onClick={toggleChatVoice}
            className="text-[11px] underline font-semibold text-sky-900"
          >
            {t.btnCancel}
          </button>
        </div>
      )}

      {/* Input Box with Microphone Button */}
      <div className="p-3 sm:p-4 border-t border-slate-200/80 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          {/* Microphone button inside chat input */}
          <button
            type="button"
            onClick={toggleChatVoice}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all cursor-pointer shadow-xs ${
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
            disabled={isStreaming}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white transition-all disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isStreaming || !inputMessage.trim()}
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
