import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../features/landing/components/LandingPage';
import { FormPage } from '../features/form/components/FormPage';
import { useScrollToTop } from '../common/hooks/useScrollToTop';

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useScrollToTop();
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/apply" element={<FormPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;