import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../common/components/Navbar/Navbar';
import { Footer } from '../landing/components/Footer/Footer';
import { Container } from '../../common/components/Container/Container';
import { Button } from '../../common/components/Button/Button';
import { PrivacyPolicyContent } from './PrivacyPolicyContent';
import { TermsAndConditionsContent } from './TermsAndConditionsContent';
import { LoadingSpinner } from '../../common/components/LoadingSpinner/LoadingSpinner';
import { cn } from '../../utils/cn';

const LEGAL_ACCEPTANCE_KEY = 'userLegalAcceptance';
const ACCEPTANCE_EXPIRY_MS = 60 * 60 * 1000; // 1 hour in milliseconds

export const PolicyAgreementPage: React.FC = () => {
  const navigate = useNavigate();
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isCheckingAcceptance, setIsCheckingAcceptance] = useState(true);
  const scrollableContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedAcceptance = localStorage.getItem(LEGAL_ACCEPTANCE_KEY);
    if (storedAcceptance) {
      try {
        const acceptanceData = JSON.parse(storedAcceptance);
        const currentTime = Date.now();
        if (
          acceptanceData &&
          acceptanceData.hasAccepted === true &&
          acceptanceData.acceptanceTimestamp &&
          (currentTime - acceptanceData.acceptanceTimestamp < ACCEPTANCE_EXPIRY_MS)
        ) {
          navigate('/apply', { replace: true });
          return;
        }
        localStorage.removeItem(LEGAL_ACCEPTANCE_KEY);
      } catch (error) {
        console.error("Error parsing legal acceptance from localStorage on agreement page:", error);
        localStorage.removeItem(LEGAL_ACCEPTANCE_KEY);
      }
    }
    setIsCheckingAcceptance(false);
  }, [navigate]);

  useEffect(() => {
    if (isNavigating || isCheckingAcceptance) return;

    const scrollableDiv = scrollableContentRef.current;
    const handleScroll = () => {
      if (scrollableDiv) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableDiv;
        if (scrollHeight - scrollTop - clientHeight < 1) {
          setHasScrolledToBottom(true);
        }
      }
    };

    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);
      handleScroll(); 
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isNavigating, isCheckingAcceptance]);

  const handleContinue = () => {
    if (hasScrolledToBottom) {
      const acceptanceData = {
        hasAccepted: true,
        acceptanceTimestamp: Date.now(),
      };
      localStorage.setItem(LEGAL_ACCEPTANCE_KEY, JSON.stringify(acceptanceData));
      
      setIsNavigating(true);
      setTimeout(() => {
        navigate('/apply');
      }, 100);
    }
  };

  if (isCheckingAcceptance || isNavigating) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <LoadingSpinner fullScreen size="lg" message={isNavigating ? "Proceeding to Application..." : "Loading..."} />
        <Footer /> 
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <Container className="bg-white py-12 px-6 md:px-10 rounded-xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c243c] mb-4 text-center">
            Review Our Policies
          </h1>
          <p className="text-center text-gray-600 mb-10 text-base md:text-lg">
            Please scroll through and review our Privacy Policy and Terms & Conditions below before proceeding.
          </p>

          <div 
            ref={scrollableContentRef} 
            className="h-[60vh] overflow-y-auto border border-gray-300 rounded-lg p-6 bg-gray-50 mb-10 shadow-inner"
          >
            <PrivacyPolicyContent />
            <div className="my-8 border-t border-gray-300"></div> {/* Separator */}
            <TermsAndConditionsContent />
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={handleContinue}
              disabled={!hasScrolledToBottom || isNavigating}
              className={cn(
                "w-full md:w-auto",
                (!hasScrolledToBottom || isNavigating) && "opacity-50 cursor-not-allowed"
              )}
            >
              {hasScrolledToBottom ? 'Accept & Continue to Application' : 'Scroll to Read All Policies'}
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}; 