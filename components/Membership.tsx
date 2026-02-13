
import React from 'react';
import { PLANS } from '../constants';

const Membership: React.FC = () => {
  return (
    <div className="space-y-24 animate-slide-up">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-brand-black tracking-tighter leading-none">
          Infrastructure for <span className="gradient-text">Modern Parenting.</span>
        </h1>
        <p className="text-xl text-brand-grey-600 font-light leading-relaxed">
          Predictable local care coverage with zero maintenance. Choose your capacity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PLANS.map((plan) => (
          <div key={plan.id} className={`relative bg-brand-white rounded-[2.5rem] border ${plan.id === 'Plus' ? 'border-brand-black shadow-2xl' : 'border-brand-grey-100'} p-10 flex flex-col h-full transition-all hover:scale-[1.02]`}>
            {plan.id === 'Plus' && (
              <span className="absolute -top-3 left-10 bg-brand-black text-brand-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest">
                RECOMMENDED SYSTEM
              </span>
            )}
            <div className="mb-12">
              <h3 className="text-[13px] font-black text-brand-grey-400 uppercase tracking-[0.2em] mb-6">{plan.id}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tighter text-brand-black">${plan.price}</span>
                <span className="text-brand-grey-400 text-lg">/mo</span>
              </div>
              <p className="text-[13px] font-medium text-brand-grey-600 mt-4">
                {plan.includedHours > 0 ? `${plan.includedHours} care hours included` : 'On-demand hour access'}
              </p>
            </div>

            <ul className="space-y-6 flex-grow mb-12">
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-brand-grey-600 font-medium leading-tight">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-turquoise flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-full text-sm font-bold tracking-wide transition-all ${
              plan.id === 'Plus' 
                ? 'bg-brand-black text-brand-white hover:bg-brand-grey-900 shadow-xl' 
                : 'bg-brand-grey-50 text-brand-black hover:bg-brand-grey-100 border border-brand-grey-100'
            }`}>
              {plan.id === 'Core' ? 'Current Active' : `Deploy ${plan.id}`}
            </button>
          </div>
        ))}
      </div>

      <div className="signature-gradient p-[1px] rounded-[3rem]">
        <div className="bg-brand-black rounded-[calc(3rem-1px)] p-16 text-brand-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turquoise/10 blur-[120px] -mr-32 -mt-32"></div>
          <div className="relative z-10 space-y-4 max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight">Corporate Sponsoring</h2>
            <p className="text-brand-grey-400 text-lg font-light leading-relaxed">
              Leading organizations provide CareTrust as a standard utility for high-performing parents. Connect your professional benefits.
            </p>
          </div>
          <button className="relative z-10 px-10 py-5 bg-brand-white text-brand-black rounded-full font-bold text-[15px] hover:scale-105 transition-all shadow-2xl">
            Verify HR Benefits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
