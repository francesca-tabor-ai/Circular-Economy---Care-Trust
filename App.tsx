
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import CareRequestFlow from './components/CareRequestFlow';
import ProviderPool from './components/ProviderPool';
import Membership from './components/Membership';
import About from './components/About';
import FounderChat from './components/FounderChat';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
            <FounderChat />
          </Layout>
        } />
        <Route path="/request" element={
          <Layout>
            <CareRequestFlow />
            <FounderChat />
          </Layout>
        } />
        <Route path="/providers" element={
          <Layout>
            <ProviderPool />
            <FounderChat />
          </Layout>
        } />
        <Route path="/membership" element={
          <Layout>
            <Membership />
            <FounderChat />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About />
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
