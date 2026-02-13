
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-32 animate-slide-up pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl">
        <h1 className="text-[56px] md:text-[72px] font-bold text-brand-black tracking-tighter leading-[1.05] mb-8">
          Reliability is not a luxury. <br />
          <span className="gradient-text">It’s infrastructure.</span>
        </h1>
        <p className="text-2xl text-brand-grey-600 font-light leading-relaxed max-w-3xl">
          Modern families are balancing more than ever. When childcare falls through, the impact is immediate: missed work, lost income, and intense anxiety. We exist to make sure families are never left without care when they need it most.
        </p>
      </section>

      {/* Philosophy Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-grey-100 pt-16">
        <div className="space-y-4">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-grey-400">Core Belief 01</h3>
          <h4 className="text-xl font-bold tracking-tight">Trust is built-in</h4>
          <p className="text-[15px] text-brand-grey-600 leading-relaxed font-light">
            Trust shouldn't be a variable. Every provider on our platform is verified, vetted, and held accountable to our community standards.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-grey-400">Core Belief 02</h3>
          <h4 className="text-xl font-bold tracking-tight">Economic Stability</h4>
          <p className="text-[15px] text-brand-grey-600 leading-relaxed font-light">
            When families are protected from care emergencies, they protect their careers and income. Peace of mind has a tangible ROI.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-grey-400">Core Belief 03</h3>
          <h4 className="text-xl font-bold tracking-tight">Zero Starting Over</h4>
          <p className="text-[15px] text-brand-grey-600 leading-relaxed font-light">
            No endless searching. No risky last-minute decisions. Families shouldn’t have to start from zero every time care cancels.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            <p className="text-lg text-brand-grey-600 font-light leading-relaxed">
              We provide membership-based access to a trusted local network of pre-verified childcare providers. We're building the safety net for the modern professional household.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Guaranteed backup care access",
                "Priority booking with trusted providers",
                "Predictable monthly costs",
                "Secure, centralized family care logs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[15px] font-medium text-brand-black">
                  <div className="w-1.5 h-1.5 bg-brand-turquoise rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-brand-grey-50 rounded-[3rem] p-12 border border-brand-grey-100">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Who We Build For</h2>
          <p className="text-brand-grey-600 leading-relaxed mb-8 font-light">
            We design for working families who value safety and trust over the lowest possible price. Our members are often tech, healthcare, or professional services workers who need absolute stability to perform.
          </p>
          <div className="p-8 bg-brand-white rounded-2xl border border-brand-grey-200">
            <p className="italic text-brand-black font-medium text-lg leading-relaxed">
              "We didn't just want a babysitter app. We wanted a system that ensured our careers didn't stop because of a school holiday or a sick day."
            </p>
            <p className="text-[12px] font-bold text-brand-grey-400 mt-4 uppercase tracking-widest">— Director of Engineering, Member since 2025</p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="signature-gradient p-[1px] rounded-[3rem]">
        <div className="bg-brand-black text-brand-white rounded-[calc(3rem-1px)] p-16 md:p-24 overflow-hidden relative">
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[150px] -mr-40 -mb-40"></div>
           <div className="relative z-10 max-w-3xl">
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-brand-grey-400 mb-8">Long-term Mission</h2>
             <p className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">
               To build trusted local care networks that become essential community infrastructure — supporting families, strengthening local providers, and creating safer, more resilient communities.
             </p>
             <div className="mt-16 pt-16 border-t border-brand-grey-900 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-brand-turquoise font-bold text-lg mb-2">For Parents</h4>
                  <p className="text-brand-grey-400 text-sm leading-relaxed">No more panic when childcare cancels. Absolute confidence in every match.</p>
                </div>
                <div>
                  <h4 className="text-brand-yellow font-bold text-lg mb-2">For Providers</h4>
                  <p className="text-brand-grey-400 text-sm leading-relaxed">Stable, predictable income through a verified professional network.</p>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
