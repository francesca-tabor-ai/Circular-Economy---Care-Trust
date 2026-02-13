
import React from 'react';
import { MOCK_PROVIDERS } from '../constants';

const ProviderPool: React.FC = () => {
  return (
    <div className="space-y-16 animate-slide-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-brand-grey-100 pb-12">
        <div>
          <h1 className="text-5xl font-bold text-brand-black tracking-tighter mb-4">The Network.</h1>
          <p className="text-xl text-brand-grey-600 font-light max-w-xl">
            Our multi-layer verification protocol ensures that every provider meets the highest standards of technical skill and emotional intelligence.
          </p>
        </div>
        <div className="flex items-center gap-3">
           <div className="w-3 h-3 bg-brand-turquoise rounded-full animate-pulse shadow-[0_0_8px_#2dd4bf]"></div>
           <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-grey-600">42 Nodes Active Locally</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {MOCK_PROVIDERS.map((p) => (
          <div key={p.id} className="bg-brand-white rounded-[2rem] border border-brand-grey-100 overflow-hidden group hover:border-brand-black transition-all duration-500">
            <div className="p-10">
              <div className="flex items-start justify-between">
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden ring-1 ring-brand-grey-100 group-hover:ring-brand-black transition-all grayscale group-hover:grayscale-0 duration-700">
                    <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  {p.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-brand-black text-brand-white p-2 rounded-xl shadow-lg border border-brand-grey-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.633.304 1.225.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold tracking-tighter text-brand-black">{p.rating}</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-grey-400 mt-1">{p.completedBookings} OPS</p>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-2xl font-bold text-brand-black tracking-tight">{p.name}</h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.specialties.map(s => (
                    <span key={s} className="text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1 bg-brand-grey-50 text-brand-grey-600 rounded-md border border-brand-grey-100">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-[15px] text-brand-grey-600 mt-8 font-light leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {p.bio}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-brand-grey-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-brand-grey-400 uppercase tracking-[0.2em] mb-1">Trust Integrity</p>
                  <span className="text-2xl font-bold text-brand-black">{p.trustScore}<span className="text-brand-turquoise">%</span></span>
                </div>
                <button className="px-6 py-3 bg-brand-black text-brand-white text-xs font-bold rounded-full tracking-widest uppercase hover:scale-105 transition-all shadow-md">
                  Request Match
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderPool;
