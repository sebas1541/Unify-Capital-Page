import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './features/PrivacyPolicy';
import TermsAndConditions from './features/TermsAndConditions';
import Disclaimer from './features/Disclaimer';
import { LandingPage } from './features/landing/components/LandingPage';
import { FormPage } from './features/form/components/FormPage';
import { PolicyAgreementPage } from './features/legal/PolicyAgreementPage';
import ScrollToTop from './common/components/ScrollToTop/ScrollToTop';
import { ProtectedRoute } from './common/components/ProtectedRoute/ProtectedRoute';

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
            <Route path="/legal-agreement" element={<PolicyAgreementPage />} />
            <Route 
              path="/apply" 
              element={
                <ProtectedRoute>
                  <FormPage />
                </ProtectedRoute>
              } 
            />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
