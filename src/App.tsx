import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './features/PrivacyPolicy';
import TermsAndConditions from './features/TermsAndConditions';
import Disclaimer from './features/Disclaimer';
import { LandingPage } from './features/landing/components/LandingPage';
import { FormPage } from './features/form/components/FormPage';
import ScrollToTop from './common/components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/apply" element={<FormPage />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
