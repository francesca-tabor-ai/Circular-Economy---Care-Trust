
import React, { useState } from 'react';
import { generateCareBrief, isApiKeyConfigured } from '../geminiService';

const CareRequestFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<'emergency' | 'planned' | null>(null);
  const [notes, setNotes] = useState('');
  const [isGeneratingBrief, setIsGeneratingBrief] = useState(false);
  const [brief, setBrief] = useState('');

  const handleGenerateBrief = async () => {
    setIsGeneratingBrief(true);
    
    if (!isApiKeyConfigured()) {
      setBrief("Google API key is required to generate care briefs. Please set GEMINI_API_KEY in your .env.local file.");
      setIsGeneratingBrief(false);
      return;
    }

    // Mock child data
    const children = [
      { name: 'Leo', age: 4, needs: ['Nap at 1PM'], allergies: ['Nuts'] },
      { name: 'Mia', age: 7, needs: ['Homework help'], allergies: [] }
    ];
    const result = await generateCareBrief(children, notes);
    setBrief(result || '');
    setIsGeneratingBrief(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Request Care</h1>
        <p className="text-slate-500">Fast, reliable help for your family.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="bg-slate-50 px-8 py-4 border-b border-slate-200 flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step {step} of 3</span>
          <div className="flex gap-1">
            {[1, 2, 3].map(s => (
              <div key={s} className={`h-1.5 w-8 rounded-full ${s <= step ? 'bg-indigo-600' : 'bg-slate-200'}`} />
            ))}
          </div>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold">What kind of care do you need?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => { setType('emergency'); setStep(2); }}
                  className="p-6 rounded-2xl border-2 border-slate-100 hover:border-rose-500 hover:bg-rose-50 transition-all text-left group"
                >
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg">Emergency Backup</h4>
                  <p className="text-sm text-slate-500 mt-1">Same-day or Next-day gap coverage.</p>
                </button>
                <button 
                  onClick={() => { setType('planned'); setStep(2); }}
                  className="p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg">Planned Session</h4>
                  <p className="text-sm text-slate-500 mt-1">Schedule ongoing or future care.</p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold">Special Instructions</h3>
              <p className="text-slate-500 text-sm">Tell us about any specific needs or routines for this session.</p>
              <textarea 
                className="w-full h-32 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                placeholder="e.g. Leo needs help with his science project. Mia might be a bit grumpy as she has a cold."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 px-6 rounded-xl border border-slate-200 font-semibold hover:bg-slate-50"
                >
                  Back
                </button>
                <button 
                  onClick={() => { handleGenerateBrief(); setStep(3); }}
                  className="flex-1 py-3 px-6 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-100"
                >
                  Confirm & Match
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold">Request Submitted!</h4>
                  <p className="text-sm">We are matching you with your priority pool.</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500">AI-GENERATED CARE BRIEF</span>
                  {isGeneratingBrief && <span className="text-xs text-indigo-600 animate-pulse">Processing...</span>}
                </div>
                <div className="p-6 text-slate-700 text-sm prose max-w-none">
                  {isGeneratingBrief ? (
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-100 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-slate-100 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-slate-100 rounded w-5/6 animate-pulse"></div>
                    </div>
                  ) : brief && brief.includes("Google API key is required") ? (
                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-200 text-red-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold mb-1">API Key Required</p>
                        <p className="text-sm">{brief}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap">{brief || "Brief will appear here once generated."}</div>
                  )}
                </div>
              </div>

              <Link to="/" className="block w-full text-center py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all">
                Return to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Re-using router Link if needed, but since it's a component we'll import it correctly in App.tsx
import { Link } from 'react-router-dom';
export default CareRequestFlow;
