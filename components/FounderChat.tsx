
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { chatWithFounder, isApiKeyConfigured } from '../geminiService';

const STARTER_PROBES: Record<string, string[]> = {
  '/': [
    "How does my care wallet work?",
    "Is there backup care available right now?",
    "Elena, tell me about your vision for CareTrust."
  ],
  '/providers': [
    "How are these providers vetted?",
    "What's the Trust Integrity score?",
    "Can I request a specific person for rebooking?"
  ],
  '/membership': [
    "Which plan is best for emergency-only needs?",
    "How do rollover hours work?",
    "Can my employer pay for this?"
  ],
  '/about': [
    "What is 'reliability infrastructure'?",
    "Elena, what is your long-term mission?",
    "How does this help local communities?"
  ],
  '/request': [
    "I need urgent childcare help right now.",
    "How fast is a backup care match?",
    "What protections exist for emergency sessions?"
  ],
  'default': [
    "I need urgent childcare help.",
    "How do I book someone?",
    "Tell me more about Elena Marceau."
  ]
};

// Updated to the specific image provided by the user
const FOUNDER_IMAGE_URL = "https://i.postimg.cc/0rLNhXQH/4-Cancer-Care-Trust.png";

const FounderChat: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasIntroduced, setHasIntroduced] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentProbes = STARTER_PROBES[location.pathname] || STARTER_PROBES['default'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle auto-introduction when first opened
  useEffect(() => {
    if (isOpen && !hasIntroduced && messages.length === 0) {
      setHasIntroduced(true);
      const triggerIntro = async () => {
        setIsLoading(true);
        if (!isApiKeyConfigured()) {
          setMessages([{ 
            role: 'model', 
            text: "Google API key is required to use this feature. Please set GEMINI_API_KEY in your .env.local file." 
          }]);
          setIsLoading(false);
          return;
        }
        const intro = await chatWithFounder([], "Please introduce yourself as Elena Marceau and briefly explain how you can help with care reliability.");
        setMessages([{ role: 'model', text: intro || "Hello. I'm Elena Marceau. I built CareTrust to ensure families have the infrastructure they need when care falls through. How can I assist you today?" }]);
        setIsLoading(false);
      };
      triggerIntro();
    }
  }, [isOpen, hasIntroduced, messages.length]);

  const handleSend = async (customMsg?: string) => {
    const userMsg = customMsg || input;
    if (!userMsg.trim() || isLoading) return;

    if (!customMsg) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    if (!isApiKeyConfigured()) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Google API key is required to use this feature. Please set GEMINI_API_KEY in your .env.local file." 
      }]);
      setIsLoading(false);
      return;
    }

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithFounder(history, userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response || '...' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[400px] h-[650px] bg-brand-white rounded-[2.5rem] shadow-2xl border border-brand-grey-100 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-brand-black p-8 text-brand-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-grey-900 border border-brand-grey-700 flex items-center justify-center overflow-hidden ring-2 ring-brand-grey-800">
                <img src={FOUNDER_IMAGE_URL} alt="Elena Marceau" className="w-full h-full object-cover brightness-105 transition-all duration-500" />
              </div>
              <div>
                <h4 className="font-bold tracking-tight">Elena Marceau</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-grey-400">Founder Assistant AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-8 space-y-6 bg-brand-white">
            {messages.length === 0 && !isLoading && (
              <div className="text-center py-10 opacity-20">
                <div className="w-12 h-12 border-2 border-brand-black rounded-lg mx-auto mb-4 animate-pulse"></div>
                <p className="text-xs font-bold uppercase tracking-widest">Initializing Connection...</p>
              </div>
            )}
            {messages.map((m, i) => {
              const isApiKeyError = m.role === 'model' && m.text.includes('Google API key is required');
              return (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[1.5rem] text-[14px] leading-relaxed shadow-sm ${
                    isApiKeyError
                      ? 'bg-red-50 border-2 border-red-200 text-red-800 font-medium'
                      : m.role === 'user' 
                        ? 'bg-brand-black text-brand-white font-medium' 
                        : 'bg-brand-grey-50 border border-brand-grey-100 text-brand-grey-900 font-light'
                  }`}>
                    {isApiKeyError && (
                      <div className="flex items-start gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="font-bold">API Key Required</span>
                      </div>
                    )}
                    {m.text}
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-grey-50 p-4 rounded-2xl border border-brand-grey-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-brand-grey-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-brand-grey-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-brand-grey-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Context Probes */}
          {!isLoading && messages.length > 0 && (
            <div className="px-8 py-4 bg-brand-white border-t border-brand-grey-50 flex flex-wrap gap-2">
              {currentProbes.map((probe, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(probe)}
                  className="text-[11px] font-bold text-brand-grey-600 bg-brand-grey-50 border border-brand-grey-100 px-3 py-1.5 rounded-full hover:bg-brand-grey-900 hover:text-brand-white hover:border-brand-black transition-all text-left"
                >
                  {probe}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-6 bg-brand-grey-50 border-t border-brand-grey-100">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask Elena about our care system..."
                className="w-full py-4 pl-6 pr-14 bg-brand-white border border-brand-grey-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-black transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className="absolute right-2 top-2 w-10 h-10 bg-brand-black text-brand-white rounded-full flex items-center justify-center hover:scale-105 transition-all disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger - Circular headshot frame */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all group relative overflow-hidden border-4 border-brand-white ring-2 ring-brand-grey-100"
      >
        <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-all z-10"></div>
        <img 
          src={FOUNDER_IMAGE_URL} 
          alt="Elena Marceau" 
          className={`w-full h-full object-cover transition-all duration-700 ${isOpen ? 'scale-110' : 'scale-100'}`} 
        />
        {isOpen && (
          <div className="absolute inset-0 bg-brand-black/60 flex items-center justify-center z-20 animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default FounderChat;
