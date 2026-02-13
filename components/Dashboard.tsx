
import React from 'react';
import { MembershipTier } from '../types';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const user = {
    name: 'The Millers',
    tier: MembershipTier.PLUS,
    walletHours: 14.5,
    emergencyHours: 2,
    nextBooking: {
      provider: 'Elena Rodriguez',
      date: 'Tomorrow, 5:00 PM',
      type: 'Planned'
    }
  };

  return (
    <div className="space-y-16 animate-slide-up">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-brand-grey-100 pb-12">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-brand-black tracking-tight leading-[1.1] mb-4">
            Hello, {user.name}.
          </h1>
          <p className="text-xl text-brand-grey-600 font-light leading-relaxed">
            Your network is healthy. We have <span className="font-medium text-brand-black underline decoration-brand-turquoise decoration-2">42 providers</span> available for backup care today.
          </p>
        </div>
        <Link to="/request" className="w-full md:w-auto px-8 py-4 bg-brand-black text-brand-white rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-all shadow-xl shadow-brand-grey-200 text-center">
          Request Backup Care
        </Link>
      </header>

      {/* Infrastructure Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-brand-white p-10 rounded-[2rem] border border-brand-grey-100 group hover:border-brand-turquoise transition-all duration-500">
          <p className="text-[11px] font-bold text-brand-grey-400 uppercase tracking-[0.2em] mb-6">Care Wallet Balance</p>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold tracking-tighter text-brand-black">{user.walletHours}</span>
            <span className="text-brand-grey-400 text-lg font-medium">hours</span>
          </div>
          <div className="mt-8 h-1 w-full bg-brand-grey-100 rounded-full overflow-hidden">
            <div className="h-full bg-brand-black w-3/4 rounded-full transition-all duration-1000"></div>
          </div>
        </div>

        <div className="bg-brand-white p-10 rounded-[2rem] border border-brand-grey-100 group hover:border-brand-yellow transition-all duration-500">
          <p className="text-[11px] font-bold text-brand-grey-400 uppercase tracking-[0.2em] mb-6">Emergency Sprints</p>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold tracking-tighter text-brand-black">{user.emergencyHours}</span>
            <span className="text-brand-grey-400 text-lg font-medium">instances</span>
          </div>
          <p className="text-[13px] text-brand-black mt-8 font-semibold flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-brand-yellow rounded-full animate-pulse shadow-[0_0_8px_#fbbf24]"></span>
            Priority queue active
          </p>
        </div>

        <div className="signature-gradient p-[1px] rounded-[2rem] group hover:scale-[1.02] transition-transform duration-500">
          <div className="bg-brand-white p-10 rounded-[calc(2rem-1px)] h-full flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-bold text-brand-grey-400 uppercase tracking-[0.2em] mb-6">Subscription Tier</p>
              <h3 className="text-3xl font-bold tracking-tight">{user.tier}</h3>
            </div>
            <Link to="/membership" className="text-[13px] font-bold text-brand-blue flex items-center gap-2 group-hover:gap-3 transition-all mt-8">
              Upgrade System 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-8">
        {/* Next Booking - Functional Refinement */}
        <section className="space-y-8">
          <h2 className="text-sm font-bold text-brand-grey-400 uppercase tracking-[0.2em]">Scheduled Operations</h2>
          <div className="bg-brand-grey-50 rounded-[2rem] p-8 flex items-center gap-8 border border-brand-grey-100">
            <div className="w-24 h-24 bg-brand-grey-200 rounded-2xl overflow-hidden flex-shrink-0 grayscale">
               <img src="https://picsum.photos/seed/elena/200" alt="Provider" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-brand-black tracking-tight">{user.nextBooking.provider}</h4>
                  <p className="text-brand-grey-600 text-[15px] font-medium mt-1">{user.nextBooking.date}</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-brand-black text-brand-white rounded-full">
                  MATCHED
                </span>
              </div>
              <div className="flex gap-4 mt-4">
                <span className="text-[11px] font-bold text-brand-grey-400 uppercase">{user.nextBooking.type} Session</span>
                <span className="text-[11px] font-bold text-brand-grey-400 uppercase">•</span>
                <span className="text-[11px] font-bold text-brand-grey-400 uppercase">4hr Duration</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Rebook - Abstracted Imagery */}
        <section className="space-y-8">
          <h2 className="text-sm font-bold text-brand-grey-400 uppercase tracking-[0.2em]">Instant Access Network</h2>
          <div className="flex flex-wrap gap-6">
            {['Sarah', 'David', 'Elena'].map((name, i) => (
              <button key={i} className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 rounded-full border border-brand-grey-100 p-1 group-hover:border-brand-turquoise transition-all">
                  <img src={`https://picsum.photos/seed/${name.toLowerCase()}/200`} alt={name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <span className="text-[11px] font-bold text-brand-grey-400 group-hover:text-brand-black transition-colors uppercase tracking-widest">{name}</span>
              </button>
            ))}
            <button className="w-20 h-20 rounded-full border-2 border-dashed border-brand-grey-100 flex items-center justify-center text-brand-grey-400 hover:border-brand-turquoise hover:text-brand-turquoise transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
