
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../App';

// ---------------------------------------------------------------------------
// Typing animation component
// ---------------------------------------------------------------------------
const Typewriter = ({
  text,
  delay = 15,
  onCharacterTyped,
}: {
  text: string;
  delay?: number;
  onCharacterTyped?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        onCharacterTyped?.();
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay, onCharacterTyped]);

  return <span className="whitespace-pre-wrap">{displayedText}</span>;
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Message {
  role: 'user' | 'bot';
  text: string;
}

// ---------------------------------------------------------------------------
// ChatBot
// ---------------------------------------------------------------------------
const ChatBot: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: t('bot_welcome') },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState('');
  const [errorType, setErrorType] = useState<'generic' | 'quota' | 'offline' | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const AI_SERVER_URL =
    import.meta.env.VITE_AI_SERVER_URL || 'https://idealdealvn.onrender.com';

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading, errorType]);

  // Online-now label per language
  const onlineLabel: Record<string, string> = {
    ar: 'نشط الآن',
    vi: 'Đang Trực Tuyến',
    zh: '在线',
    es: 'En Línea',
    fr: 'En Ligne',
    en: 'Online Now',
  };

  const handleSend = async (overrideInput?: string) => {
    const userMessage = overrideInput || input.trim();
    if (!userMessage || isLoading) return;

    if (!overrideInput) setInput('');

    // Add the user message to the chat (skip for retries — already shown)
    if (!overrideInput) {
      setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    }

    setErrorType(null);
    setLastPrompt(userMessage);
    setIsLoading(true);

    try {
      if (!navigator.onLine) throw new Error('offline');

      // Build the full conversation history to send to the proxy
      const history: Message[] = overrideInput
        ? messages
        : [...messages, { role: 'user', text: userMessage }];

      const response = await fetch(`${AI_SERVER_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, language }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(
          response.status === 429 ? '429' : body?.error || `HTTP ${response.status}`
        );
      }

      const data = await response.json();
      const botText: string =
        data.text ||
        (language === 'ar'
          ? 'عذراً، لم أستطع فهم ذلك.'
          : language === 'vi'
          ? 'Xin lỗi, tôi không thể xử lý yêu cầu đó.'
          : language === 'zh'
          ? '抱歉，我无法处理该请求。'
          : language === 'es'
          ? 'Lo siento, no pude procesar esa solicitud.'
          : language === 'fr'
          ? "Désolé, je n'ai pas pu traiter cette demande."
          : 'I am sorry, I could not process that.');

      setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
    } catch (error: unknown) {
      console.error(error);
      const msg = error instanceof Error ? error.message.toLowerCase() : '';

      if (msg === 'offline') {
        setErrorType('offline');
        setMessages((prev) => [...prev, { role: 'bot', text: t('bot_error_offline') }]);
      } else if (msg.includes('429') || msg.includes('quota')) {
        setErrorType('quota');
        setMessages((prev) => [...prev, { role: 'bot', text: t('bot_error_quota') }]);
      } else {
        setErrorType('generic');
        setMessages((prev) => [...prev, { role: 'bot', text: t('bot_error') }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 w-14 h-14 rounded-full bg-primary shadow-2xl flex items-center justify-center z-[100] text-brandNavy transition-all hover:scale-110 active:scale-95 ${
          language === 'ar' ? 'left-6' : 'right-6'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <span className="material-icons-round text-3xl">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 w-[90vw] md:w-[400px] max-h-[600px] h-[70vh] bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-800 z-[110] flex flex-col overflow-hidden transition-all animate-in slide-in-from-bottom-5 duration-300 ${
            language === 'ar' ? 'left-4' : 'right-4'
          }`}
        >
          {/* Header */}
          <div className="bg-brandNavy p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-icons text-primary">support_agent</span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{t('bot_title')}</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                    {onlineLabel[language] ?? onlineLabel.en}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Minimise chat"
            >
              <span className="material-icons">expand_more</span>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-brandNavy rounded-tr-none'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                  }`}
                >
                  {msg.role === 'bot' && idx === messages.length - 1 && !isLoading && !errorType ? (
                    <Typewriter text={msg.text} onCharacterTyped={scrollToBottom} />
                  ) : (
                    <span className="whitespace-pre-wrap">{msg.text}</span>
                  )}
                </div>
              </div>
            ))}

            {errorType && !isLoading && (
              <div className="flex flex-col items-center gap-3 mt-2 mb-4 animate-in fade-in duration-500">
                <button
                  onClick={() => handleSend(lastPrompt)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold rounded-full border border-red-100 dark:border-red-800 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <span className="material-icons text-sm">refresh</span>
                  {t('try_again')}
                </button>
                <button
                  className="text-[10px] text-slate-500 hover:text-primary transition-colors uppercase font-bold tracking-widest"
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/contact');
                  }}
                >
                  {t('bot_suggestion_contact')}
                </button>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('bot_placeholder')}
                className="w-full pl-4 pr-12 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading}
                className={`absolute ${
                  language === 'ar' ? 'left-2' : 'right-2'
                } p-1.5 text-primary hover:text-brandNavy transition-colors disabled:opacity-50`}
                aria-label="Send message"
              >
                <span className={`material-icons-round ${language === 'ar' ? 'rotate-180' : ''}`}>
                  send
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
