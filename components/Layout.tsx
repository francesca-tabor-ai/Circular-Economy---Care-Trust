
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Overview' },
    { path: '/providers', label: 'Network' },
    { path: '/membership', label: 'Membership' },
    { path: '/profile', label: 'Family' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-turquoise/30">
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
            
            <div className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-medium tracking-wide transition-all uppercase ${
                    location.pathname === link.path
                      ? 'text-brand-black'
                      : 'text-brand-grey-400 hover:text-brand-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button className="text-[13px] font-semibold text-brand-grey-600 hover:text-brand-black transition-colors">
                Support
              </button>
              <button className="bg-brand-black text-brand-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-brand-grey-900 transition-all shadow-sm">
                Account
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full animate-fade-in">
        {children}
      </main>

      <footer className="bg-brand-white border-t border-brand-grey-100 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50 grayscale">
            <div className="w-5 h-5 bg-brand-black rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-white rounded-sm"></div>
            </div>
            <span className="text-sm font-bold tracking-tight text-brand-black">CareTrust</span>
          </div>
          <div className="flex gap-8 text-[12px] font-medium text-brand-grey-400 uppercase tracking-widest">
            <Link to="/about" className="hover:text-brand-black transition-colors">About Us</Link>
            <a href="#" className="hover:text-brand-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-black transition-colors">Terms</a>
            <span className="opacity-50">v2.0 Beta</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
