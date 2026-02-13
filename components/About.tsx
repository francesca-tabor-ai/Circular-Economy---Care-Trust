
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-32 animate-slide-up pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl">
        <h1 className="text-[56px] md:text-[72px] font-bold text-brand-black tracking-tighter leading-[1.05] mb-8">
          Circular economy principles <br />
          <span className="gradient-text">for community care.</span>
        </h1>
        <p className="text-2xl text-brand-grey-600 font-light leading-relaxed max-w-3xl">
          We're building community-owned care networks that reduce waste, build resilience, and keep resources circulating locally. When childcare falls through, the community network responds — no waste, no breakdown, just care that circulates.
        </p>
      </section>

      {/* Philosophy Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-grey-100 pt-16">
        <div className="space-y-4">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-grey-400">Core Principle 01</h3>
          <h4 className="text-xl font-bold tracking-tight">Community-owned networks</h4>
          <p className="text-[15px] text-brand-grey-600 leading-relaxed font-light">
            Care resources circulate within communities, reducing waste and building local resilience. Every provider strengthens the community network.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-grey-400">Core Principle 02</h3>
          <h4 className="text-xl font-bold tracking-tight">Shared economy models</h4>
          <p className="text-[15px] text-brand-grey-600 leading-relaxed font-light">
            Resources are shared, not wasted. When care needs arise, the community network responds — sustainable, predictable, resilient.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-grey-400">Core Principle 03</h3>
          <h4 className="text-xl font-bold tracking-tight">Circular, not linear</h4>
          <p className="text-[15px] text-brand-grey-600 leading-relaxed font-light">
            Care circulates within communities. No breakdown, no waste — just resources flowing where they're needed, when they're needed.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            <p className="text-lg text-brand-grey-600 font-light leading-relaxed">
              We build circular economy care networks — community-owned infrastructure that reduces waste, builds resilience, and keeps care resources circulating locally.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Community-owned care networks",
                "Shared local resources that circulate",
                "Sustainable economic models for providers",
                "Reduced waste through network resilience"
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
            We design for communities committed to circular economy principles — families and providers who believe care should be shared, sustainable, and community-owned.
          </p>
          <div className="p-8 bg-brand-white rounded-2xl border border-brand-grey-200">
            <p className="italic text-brand-black font-medium text-lg leading-relaxed">
              "This isn't just about finding care — it's about building a community network that supports everyone. We're all part of something bigger."
            </p>
            <p className="text-[12px] font-bold text-brand-grey-400 mt-4 uppercase tracking-widest">— Circular Economy Advocate, Member since 2025</p>
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
               To build circular economy care networks that become essential community infrastructure — reducing waste, building resilience, and keeping care resources circulating locally.
             </p>
             <div className="mt-16 pt-16 border-t border-brand-grey-900 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-brand-turquoise font-bold text-lg mb-2">For Communities</h4>
                  <p className="text-brand-grey-400 text-sm leading-relaxed">Shared resources, reduced waste, community-owned infrastructure that builds resilience.</p>
                </div>
                <div>
                  <h4 className="text-brand-yellow font-bold text-lg mb-2">For Providers</h4>
                  <p className="text-brand-grey-400 text-sm leading-relaxed">Sustainable income through community networks that value local resources.</p>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
