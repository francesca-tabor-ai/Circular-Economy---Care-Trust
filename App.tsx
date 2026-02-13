
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './components/LandingPage';
import FounderChat from './components/FounderChat';

// Lazy load components for better performance
const Dashboard = lazy(() => import('./components/Dashboard'));
const CareRequestFlow = lazy(() => import('./components/CareRequestFlow'));
const ProviderPool = lazy(() => import('./components/ProviderPool'));
const Membership = lazy(() => import('./components/Membership'));
const About = lazy(() => import('./components/About'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-2 border-brand-grey-200 border-t-brand-black rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <Layout>
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
            <FounderChat />
          </Layout>
        } />
        <Route path="/request" element={
          <Layout>
            <Suspense fallback={<LoadingFallback />}>
              <CareRequestFlow />
            </Suspense>
            <FounderChat />
          </Layout>
        } />
        <Route path="/providers" element={
          <Layout>
            <Suspense fallback={<LoadingFallback />}>
              <ProviderPool />
            </Suspense>
            <FounderChat />
          </Layout>
        } />
        <Route path="/membership" element={
          <Layout>
            <Suspense fallback={<LoadingFallback />}>
              <Membership />
            </Suspense>
            <FounderChat />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
            <FounderChat />
          </Layout>
        } />
        <Route path="/profile" element={
          <Layout>
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold">Family Profile</h1>
              <p className="text-slate-500 font-light mt-2">Coming soon in v2.1</p>
            </div>
            <FounderChat />
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
