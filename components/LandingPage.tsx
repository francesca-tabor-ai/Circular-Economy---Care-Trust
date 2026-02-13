import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Navigation with Dashboard Button */}
      <nav className="bg-brand-white border-b border-brand-grey-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-brand-black rounded flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-3 h-3 bg-brand-white rounded-sm"></div>
              </div>
              <span className="text-lg font-bold tracking-tight text-brand-black">
                CareTrust
              </span>
            </Link>
            
            <Link 
              to="/dashboard"
              className="bg-brand-black text-brand-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-brand-grey-900 transition-all shadow-sm"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-brand-black tracking-tight leading-tight mb-6">
          Childcare that doesn't fall apart when life does.
        </h1>
        <p className="text-xl md:text-2xl text-brand-grey-600 font-light leading-relaxed mb-4 max-w-2xl mx-auto">
          Membership access to trusted, verified local carers — with guaranteed backup when plans change.
        </p>
        <p className="text-lg text-brand-grey-500 mb-12">
          Because families shouldn't have to panic when childcare cancels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/request"
            className="bg-brand-black text-brand-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-all shadow-xl shadow-brand-grey-200"
          >
            Check Availability
          </Link>
          <Link 
            to="/membership"
            className="bg-brand-white text-brand-black border-2 border-brand-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-grey-50 transition-all"
          >
            How Membership Works
          </Link>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-brand-grey-50 border-y border-brand-grey-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center">
            <p className="text-sm font-bold text-brand-black uppercase tracking-widest">
              Trusted by working families.
            </p>
            <p className="text-sm font-bold text-brand-black uppercase tracking-widest">
              Verified providers.
            </p>
            <p className="text-sm font-bold text-brand-black uppercase tracking-widest">
              Designed for reliability, not luck.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-8">
          When childcare fails, everything else does too.
        </h2>
        <div className="space-y-4 mb-12">
          <p className="text-xl text-brand-grey-700 font-medium">Missed meetings.</p>
          <p className="text-xl text-brand-grey-700 font-medium">Lost income.</p>
          <p className="text-xl text-brand-grey-700 font-medium">Last-minute panic messages.</p>
          <p className="text-xl text-brand-grey-700 font-medium">Risky "I hope this works" decisions.</p>
        </div>
        <p className="text-lg text-brand-grey-600 leading-relaxed mb-4">
          Modern families are running on fragile care systems — and when they break, the cost is immediate.
        </p>
        <p className="text-xl font-bold text-brand-black">
          You deserve something stronger.
        </p>
      </section>

      {/* SOLUTION SECTION */}
      <section className="bg-brand-grey-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-8">
            A membership network built for reliability.
          </h2>
          <p className="text-xl text-brand-grey-600 mb-8">We combine:</p>
          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-2xl text-brand-black font-bold mt-1">✓</span>
              <p className="text-lg text-brand-grey-700">Pre-verified, trusted local care providers</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl text-brand-black font-bold mt-1">✓</span>
              <p className="text-lg text-brand-grey-700">Priority booking for members</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl text-brand-black font-bold mt-1">✓</span>
              <p className="text-lg text-brand-grey-700">Emergency backup care access</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl text-brand-black font-bold mt-1">✓</span>
              <p className="text-lg text-brand-grey-700">Predictable monthly cost — no panic pricing</p>
            </div>
          </div>
          <div className="space-y-3 text-lg text-brand-grey-600">
            <p>No endless searching.</p>
            <p>No risky last-minute decisions.</p>
            <p>No starting from zero every time.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-16 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-5xl font-bold text-brand-black mb-4">1.</div>
            <h3 className="text-2xl font-bold text-brand-black mb-4">Join the Membership</h3>
            <p className="text-lg text-brand-grey-600">
              Get access to a trusted local care network.
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-black mb-4">2.</div>
            <h3 className="text-2xl font-bold text-brand-black mb-4">Set Up Your Family Profile</h3>
            <p className="text-lg text-brand-grey-600">
              So providers already know what matters for your children.
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-black mb-4">3.</div>
            <h3 className="text-2xl font-bold text-brand-black mb-4">Book or Request Backup Care Anytime</h3>
            <p className="text-lg text-brand-grey-600">
              When plans change, you're already covered.
            </p>
          </div>
        </div>
      </section>

      {/* CARE GUARANTEE SECTION */}
      <section className="bg-brand-black text-brand-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            When care falls through, you don't start from scratch.
          </h2>
          <p className="text-xl text-brand-grey-300 mb-4 leading-relaxed">
            Members get priority access to backup care requests — even at short notice.
          </p>
          <p className="text-lg text-brand-grey-400">
            Because reliability shouldn't depend on luck or group chats.
          </p>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-8">
          Every provider is verified — before they ever meet your family.
        </h2>
        <p className="text-xl text-brand-grey-600 mb-8">We verify:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <span className="text-xl text-brand-black font-bold">•</span>
            <p className="text-lg text-brand-grey-700">Identity</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl text-brand-black font-bold">•</span>
            <p className="text-lg text-brand-grey-700">Background checks</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl text-brand-black font-bold">•</span>
            <p className="text-lg text-brand-grey-700">Experience and references</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl text-brand-black font-bold">•</span>
            <p className="text-lg text-brand-grey-700">Ongoing trust and performance signals</p>
          </div>
        </div>
        <p className="text-xl font-bold text-brand-black mt-12">
          Trust is designed into the system — not left to chance.
        </p>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-brand-grey-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-8">
            Built by someone who believes reliability is infrastructure.
          </h2>
          <p className="text-lg text-brand-grey-600 leading-relaxed mb-4">
            Our founder built this platform after seeing how fragile modern systems are when they rely on speed over resilience.
          </p>
          <p className="text-lg text-brand-grey-600 leading-relaxed mb-4">
            Families need systems that hold under pressure — not ones that work only when everything goes perfectly.
          </p>
          <p className="text-xl font-bold text-brand-black">
            This is care infrastructure designed to last.
          </p>
        </div>
      </section>

      {/* ICP ROI SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-8">
          What membership really gives you
        </h2>
        <p className="text-xl text-brand-grey-600 mb-8">More than childcare access:</p>
        <div className="space-y-4 mb-12">
          <div className="flex items-start gap-3">
            <span className="text-xl text-brand-black font-bold">•</span>
            <p className="text-lg text-brand-grey-700">Fewer missed workdays</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl text-brand-black font-bold">•</span>
            <p className="text-lg text-brand-grey-700">Less emergency stress</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl text-brand-black font-bold">•</span>
            <p className="text-lg text-brand-grey-700">Less time spent searching and vetting</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl text-brand-black font-bold">•</span>
            <p className="text-lg text-brand-grey-700">More confidence saying "yes" to work and life</p>
          </div>
        </div>
        <p className="text-xl font-bold text-brand-black">
          Peace of mind is not a luxury.<br />
          It's economic stability.
        </p>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-brand-grey-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl text-brand-grey-700 font-light italic mb-4">
            "Knowing we have backup care changed how I work and plan our week."
          </blockquote>
          <p className="text-sm text-brand-grey-500 uppercase tracking-widest">
            — Member Parent
          </p>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-6">
          Simple monthly membership. No surprises.
        </h2>
        <p className="text-xl text-brand-grey-600 mb-8">
          Plans designed for different family needs.<br />
          Use included hours or keep them ready for emergencies.
        </p>
        <Link 
          to="/membership"
          className="inline-block bg-brand-black text-brand-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-all shadow-xl shadow-brand-grey-200"
        >
          See Plans
        </Link>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-brand-black text-brand-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            You shouldn't have to wonder what happens when childcare cancels.
          </h2>
          <p className="text-2xl text-brand-grey-300 mb-12">
            You should already know you're covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/membership"
              className="bg-brand-white text-brand-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-all"
            >
              Join Membership
            </Link>
            <Link 
              to="/request"
              className="bg-transparent text-brand-white border-2 border-brand-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-grey-900 transition-all"
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
            Reliable care is community infrastructure.<br />
            We're here to build it with you.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
