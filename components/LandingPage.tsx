import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION with Background Image */}
      <section 
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: 'url(https://www.stellaraustralis.com/wp-content/gallery/nightscapes-2018/IMG_8850to8862-PT-PS-PI-web2160.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-black/60"></div>
        
        {/* Navigation with Dashboard Button */}
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between h-20 items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-7 h-7 bg-brand-white rounded flex items-center justify-center transition-transform group-hover:scale-105">
                  <div className="w-3 h-3 bg-brand-black rounded-sm"></div>
                </div>
                <span className="text-lg font-bold tracking-tight text-brand-white">
                  CareTrust
                </span>
              </Link>
              
              <Link 
                to="/dashboard"
                className="bg-brand-white text-brand-black px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-brand-grey-100 transition-all shadow-sm"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto py-32">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white tracking-tight leading-[1.1] mb-8">
            Community-powered childcare for the circular economy.
          </h1>
          <p className="text-xl md:text-2xl text-brand-white/90 font-normal leading-generous mb-6 max-w-2xl mx-auto">
            Join a local network of verified carers sharing resources, building resilience, and strengthening community infrastructure.
          </p>
          <p className="text-lg text-brand-white/80 font-light leading-relaxed mb-16">
            Because care should circulate within communities, not break down when families need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/request"
              className="bg-brand-white text-brand-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-brand-white/20"
            >
              Check Availability
            </Link>
            <Link 
              to="/membership"
              className="bg-transparent text-brand-white border-2 border-brand-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-white/10 hover:border-brand-white/80 active:scale-95 transition-all duration-200"
            >
              How Membership Works
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-brand-grey-50 border-y border-brand-grey-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center">
            <p className="text-sm font-bold text-brand-black uppercase tracking-widest">
              Community-owned networks.
            </p>
            <p className="text-sm font-bold text-brand-black uppercase tracking-widest">
              Shared local resources.
            </p>
            <p className="text-sm font-bold text-brand-black uppercase tracking-widest">
              Circular economy principles.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.2] mb-12">
          When childcare fails, everything else does too.
        </h2>
        <div className="space-y-5 mb-16">
          <p className="text-xl text-brand-grey-700 font-normal leading-relaxed">Missed meetings.</p>
          <p className="text-xl text-brand-grey-700 font-normal leading-relaxed">Lost income.</p>
          <p className="text-xl text-brand-grey-700 font-normal leading-relaxed">Last-minute panic messages.</p>
          <p className="text-xl text-brand-grey-700 font-normal leading-relaxed">Risky "I hope this works" decisions.</p>
        </div>
        <p className="text-lg text-brand-grey-600 font-light leading-generous mb-6">
          Traditional care models create waste — wasted time, wasted resources, wasted community potential. The circular economy approach builds resilience through shared local networks.
        </p>
        <p className="text-2xl font-bold text-brand-black leading-relaxed">
          Care that circulates, not care that breaks.
        </p>
      </section>

      {/* SOLUTION SECTION */}
      <section className="bg-brand-grey-50 py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.2] mb-10">
            A circular economy membership network.
          </h2>
          <p className="text-xl text-brand-grey-600 font-normal leading-relaxed mb-12">We build community resilience through:</p>
          <div className="space-y-6 mb-16">
            <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200">
              <span className="text-2xl text-brand-black font-bold mt-1 group-hover:scale-110 transition-transform duration-200">✓</span>
              <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Local provider networks that share resources within communities</p>
            </div>
            <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200">
              <span className="text-2xl text-brand-black font-bold mt-1 group-hover:scale-110 transition-transform duration-200">✓</span>
              <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Community-owned infrastructure that reduces waste and builds resilience</p>
            </div>
            <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200">
              <span className="text-2xl text-brand-black font-bold mt-1 group-hover:scale-110 transition-transform duration-200">✓</span>
              <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Shared economy principles that keep care circulating locally</p>
            </div>
            <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200">
              <span className="text-2xl text-brand-black font-bold mt-1 group-hover:scale-110 transition-transform duration-200">✓</span>
              <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Sustainable, predictable access — no resource waste, no panic pricing</p>
            </div>
          </div>
          <div className="space-y-4 text-lg text-brand-grey-600 font-light leading-relaxed">
            <p>No wasted time searching.</p>
            <p>No wasted resources on failed matches.</p>
            <p>No breaking down — only circulating care within your community.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.2] mb-20 text-center">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <div className="text-5xl font-bold text-brand-black mb-6 leading-none">1.</div>
            <h3 className="text-2xl font-bold text-brand-black mb-5 leading-relaxed">Join the circular network</h3>
            <p className="text-lg text-brand-grey-600 font-light leading-generous">
              Connect to your local community care network.
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-black mb-6 leading-none">2.</div>
            <h3 className="text-2xl font-bold text-brand-black mb-5 leading-relaxed">Share your family needs</h3>
            <p className="text-lg text-brand-grey-600 font-light leading-generous">
              Help the community understand how to support your family.
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-black mb-6 leading-none">3.</div>
            <h3 className="text-2xl font-bold text-brand-black mb-5 leading-relaxed">Access shared community resources</h3>
            <p className="text-lg text-brand-grey-600 font-light leading-generous">
              When you need care, the community network responds.
            </p>
          </div>
        </div>
      </section>

      {/* CARE GUARANTEE SECTION */}
      <section className="bg-brand-black text-brand-white py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] mb-8">
            When care falls through, the community network responds.
          </h2>
          <p className="text-xl text-brand-grey-300 font-normal mb-6 leading-generous">
            Members access shared community resources — care circulates, it doesn't break down.
          </p>
          <p className="text-lg text-brand-grey-400 font-light leading-relaxed">
            Because resilience comes from community infrastructure, not individual luck.
          </p>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-32">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.2] mb-10">
            Every provider strengthens the community network.
          </h2>
          <p className="text-xl text-brand-grey-600 font-normal mb-12 leading-relaxed">We build trust through:</p>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-start gap-4">
            <span className="text-xl text-brand-black font-bold mt-1">•</span>
            <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Identity</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl text-brand-black font-bold mt-1">•</span>
            <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Background checks</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl text-brand-black font-bold mt-1">•</span>
            <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Experience and references</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl text-brand-black font-bold mt-1">•</span>
            <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Ongoing trust and performance signals</p>
          </div>
        </div>
        <p className="text-2xl font-bold text-brand-black leading-relaxed">
          Community trust is built into the network — shared resources, shared responsibility.
        </p>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-brand-grey-50 py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.2] mb-12">
            Built for the circular economy movement.
          </h2>
          <p className="text-lg text-brand-grey-600 font-light leading-generous mb-6">
            Our platform applies circular economy principles to childcare — reducing waste, building community resilience, and keeping resources circulating locally.
          </p>
          <p className="text-lg text-brand-grey-600 font-light leading-generous mb-8">
            We believe care should be community-owned infrastructure, not a fragile individual burden.
          </p>
          <p className="text-2xl font-bold text-brand-black leading-relaxed">
            This is community care infrastructure for the circular economy.
          </p>
        </div>
      </section>

      {/* ICP ROI SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-32">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.2] mb-10">
            What the circular network gives your community
          </h2>
          <p className="text-xl text-brand-grey-600 font-normal mb-12 leading-relaxed">More than individual access:</p>
          <div className="space-y-6 mb-16">
            <div className="flex items-start gap-4">
              <span className="text-xl text-brand-black font-bold mt-1">•</span>
              <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Reduced resource waste — care circulates, not breaks down</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl text-brand-black font-bold mt-1">•</span>
              <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Community resilience through shared local networks</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl text-brand-black font-bold mt-1">•</span>
              <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Sustainable economic models that support local providers</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl text-brand-black font-bold mt-1">•</span>
              <p className="text-lg text-brand-grey-700 font-normal leading-relaxed">Stronger communities built on shared care infrastructure</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-brand-black leading-relaxed">
            Circular economy principles for care.<br />
            Community-owned, community-sustained.
          </p>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-brand-grey-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl text-brand-grey-700 font-light italic mb-4">
            "Being part of a community care network means we're all supporting each other. It's not just about us — it's about building something sustainable together."
          </blockquote>
          <p className="text-sm text-brand-grey-500 uppercase tracking-widest">
            — Circular Economy Member
          </p>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.2] mb-8">
          Simple monthly membership. No surprises.
        </h2>
        <p className="text-xl text-brand-grey-600 font-normal mb-12 leading-generous">
          Plans designed for different family needs.<br />
          Use included hours or keep them ready for emergencies.
        </p>
        <Link 
          to="/membership"
          className="inline-block bg-brand-black text-brand-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-brand-grey-200 hover:shadow-2xl"
        >
          See Plans
        </Link>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-brand-black text-brand-white py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] mb-8">
            Join the circular economy movement for childcare.
          </h2>
          <p className="text-2xl text-brand-grey-300 font-normal mb-16 leading-relaxed">
            Build community resilience through shared local care networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/membership"
              className="bg-brand-white text-brand-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-xl hover:shadow-brand-white/20"
            >
              Join Membership
            </Link>
            <Link 
              to="/request"
              className="bg-transparent text-brand-white border-2 border-brand-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-white/10 hover:border-brand-white/80 active:scale-95 transition-all duration-200"
            >
              Check Local Availability
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER MICRO COPY */}
      <footer className="bg-brand-white border-t border-brand-grey-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-brand-grey-500 font-light">
            Circular economy care networks.<br />
            Community-owned, community-sustained.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
