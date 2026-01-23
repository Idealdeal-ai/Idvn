
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { useLanguage } from '../App';

// Helper component for typing effect
const Typewriter = ({ text, delay = 15, onCharacterTyped }: { text: string, delay?: number, onCharacterTyped?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        onCharacterTyped?.();
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay, onCharacterTyped]);

  return <span className="whitespace-pre-wrap">{displayedText}</span>;
};

const ChatBot: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot' | 'system', text: string }[]>([
    { role: 'bot', text: t('bot_welcome') }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState('');
  const [errorType, setErrorType] = useState<'generic' | 'quota' | 'offline' | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading, errorType]);

  const bookAppointmentDeclaration: FunctionDeclaration = {
    name: 'bookAppointment',
    parameters: {
      type: Type.OBJECT,
      description: 'Book a business consultation appointment with Ideal Deal Vietnam.',
      properties: {
        name: { type: Type.STRING, description: 'The full name of the client.' },
        email: { type: Type.STRING, description: 'The contact email of the client.' },
        date: { type: Type.STRING, description: 'The preferred date for the appointment (YYYY-MM-DD).' },
        time: { type: Type.STRING, description: 'The preferred time slot (e.g., 10:00 AM).' },
        topic: { type: Type.STRING, description: 'The main topic of discussion (e.g., Sourcing Coffee, Furniture Export).' },
      },
      required: ['name', 'email', 'date'],
    },
  };

  const trackShipmentDeclaration: FunctionDeclaration = {
    name: 'trackShipment',
    parameters: {
      type: Type.OBJECT,
      description: 'Track the status of a shipment using its unique tracking ID.',
      properties: {
        trackingId: { type: Type.STRING, description: 'The shipment tracking number provided to the client.' },
      },
      required: ['trackingId'],
    },
  };

  const handleSend = async (overrideInput?: string) => {
    const userMessage = overrideInput || input.trim();
    if (!userMessage || isLoading) return;

    if (!overrideInput) setInput('');
    
    // If it's a new message (not a retry), add it to the chat
    if (!overrideInput) {
      setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    }

    setErrorType(null);
    setLastPrompt(userMessage);
    setIsLoading(true);

    const languageMap = {
        'ar': 'Arabic',
        'en': 'English',
        'vi': 'Vietnamese',
        'zh': 'Simplified Chinese',
        'es': 'Spanish',
        'fr': 'French'
    };

    try {
      if (!navigator.onLine) {
        throw new Error('offline');
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
          role: m.role === 'bot' ? 'model' : 'user',
          parts: [{ text: m.text }]
        })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `You are 'Ideal', the premium AI assistant for Ideal Deal Vietnam. 
          Your goal is to help international buyers source products from Vietnam (Agriculture, Manufacturing, Consumer Goods). 
          You are professional, polite, and efficient. 
          You can provide info on company services (Product Sourcing, Supplier ID, QA, Logistics). 
          If a user wants to book an appointment, use the bookAppointment tool. 
          If a user wants to track a shipment, use the trackShipment tool.
          Respond in ${languageMap[language]}.`,
          tools: [{ functionDeclarations: [bookAppointmentDeclaration, trackShipmentDeclaration] }],
        },
      });

      let botResponseText = response.text || "";

      if (response.functionCalls && response.functionCalls.length > 0) {
        for (const fc of response.functionCalls) {
          if (fc.name === 'bookAppointment') {
            const { name, date, time, topic } = fc.args as any;
            let confirmation = "";
            if (language === 'ar') {
                confirmation = `تم تسجيل طلب الموعد بنجاح لـ ${name} في تاريخ ${date}${time ? ' الساعة ' + time : ''}. سنقوم بالتواصل معكم قريباً بخصوص ${topic || 'طلبكم'}.`;
            } else if (language === 'vi') {
                confirmation = `Yêu cầu hẹn gặp đã được đăng ký thành công cho ${name} vào ngày ${date}${time ? ' lúc ' + time : ''}. Chúng tôi sẽ sớm liên hệ với bạn về ${topic || 'yêu cầu của bạn'}.`;
            } else if (language === 'zh') {
                confirmation = `已成功为 ${name} 登记预约请求，日期为 ${date}${time ? ' ' + time : ''}。我们将很快就 ${topic || '您的咨询'} 与您联系。`;
            } else if (language === 'es') {
                confirmation = `Solicitud de cita registrada con éxito para ${name} el ${date}${time ? ' a las ' + time : ''}. Nos pondremos en contacto con usted en breve con respecto a ${topic || 'su consulta'}.`;
            } else if (language === 'fr') {
                confirmation = `Demande de rendez-vous enregistrée avec succès pour ${name} le ${date}${time ? ' à ' + time : ''}. Nous vous contacterons sous peu concernant ${topic || 'votre demande'}.`;
            } else {
                confirmation = `Appointment request successfully registered for ${name} on ${date}${time ? ' at ' + time : ''}. We will contact you shortly regarding ${topic || 'your inquiry'}.`;
            }
            botResponseText += (botResponseText ? "\n\n" : "") + confirmation;
          } else if (fc.name === 'trackShipment') {
            const { trackingId } = fc.args as any;
            const id = trackingId.toString().toUpperCase();
            let statusInfo = "";
            
            if (!id || id.length < 5) {
              statusInfo = t('shipment_not_found');
            } else if (id.includes('123')) {
                statusInfo = `${t('status_label')}: ${t('status_delivered')}. ${t('location_label')}: Ho Chi Minh City, VN (2025-05-10).`;
            } else if (id.includes('456')) {
                statusInfo = `${t('status_label')}: ${t('status_in_transit')}. ${t('location_label')}: Singapore Hub (2025-05-14).`;
            } else if (id.includes('789')) {
                statusInfo = `${t('status_label')}: ${t('status_processing')}. ${t('location_label')}: Industrial Warehouse, Binh Duong (2025-05-15).`;
            } else {
                statusInfo = `${t('status_label')}: ${t('status_pending')}. ${t('location_label')}: Vietnam Origin Port.`;
            }

            botResponseText += (botResponseText ? "\n\n" : "") + (id.length >= 5 ? `[${id}] ${statusInfo}` : statusInfo);
          }
        }
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponseText || (language === 'ar' ? 'عذراً، لم أستطع فهم ذلك.' : (language === 'vi' ? 'Xin lỗi, tôi không thể xử lý yêu cầu đó.' : (language === 'zh' ? '抱歉，我无法处理该请求。' : (language === 'es' ? 'Lo siento, no pude procesar esa solicitud.' : (language === 'fr' ? 'Désolé, je n\'ai pas pu traiter cette demande.' : 'I am sorry, I could not process that.'))))) }]);
    } catch (error: any) {
      console.error(error);
      const errorMessage = error?.message?.toLowerCase() || "";
      
      if (errorMessage === 'offline') {
        setErrorType('offline');
        setMessages(prev => [...prev, { role: 'bot', text: t('bot_error_offline') }]);
      } else if (errorMessage.includes('429') || errorMessage.includes('quota')) {
        setErrorType('quota');
        setMessages(prev => [...prev, { role: 'bot', text: t('bot_error_quota') }]);
      } else {
        setErrorType('generic');
        setMessages(prev => [...prev, { role: 'bot', text: t('bot_error') }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bot FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 w-14 h-14 rounded-full bg-primary shadow-2xl flex items-center justify-center z-[100] text-brandNavy transition-all hover:scale-110 active:scale-95 ${language === 'ar' ? 'left-6' : 'right-6'}`}
      >
        <span className="material-icons-round text-3xl">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 w-[90vw] md:w-[400px] max-h-[600px] h-[70vh] bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-800 z-[110] flex flex-col overflow-hidden transition-all animate-in slide-in-from-bottom-5 duration-300 ${language === 'ar' ? 'left-4' : 'right-4'}`}>
          {/* Header */}
          <div className="bg-brandNavy p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-icons text-primary">support_agent</span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{t('bot_title')}</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">{language === 'ar' ? 'نشط الآن' : (language === 'vi' ? 'Đang Trực Tuyến' : (language === 'zh' ? '在线' : (language === 'es' ? 'En Línea' : (language === 'fr' ? 'En Ligne' : 'Online Now'))))}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <span className="material-icons">expand_more</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-primary text-brandNavy rounded-tr-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                }`}>
                  {msg.role === 'bot' && idx === messages.length - 1 && !isLoading && !errorType ? (
                    <Typewriter 
                      text={msg.text} 
                      onCharacterTyped={scrollToBottom}
                    />
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
                <a 
                  href="#/contact"
                  className="text-[10px] text-slate-500 hover:text-primary transition-colors uppercase font-bold tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {t('bot_suggestion_contact')}
                </a>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
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
                className={`absolute ${language === 'ar' ? 'left-2' : 'right-2'} p-1.5 text-primary hover:text-brandNavy transition-colors disabled:opacity-50`}
              >
                <span className={`material-icons-round ${language === 'ar' ? 'rotate-180' : ''}`}>send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
