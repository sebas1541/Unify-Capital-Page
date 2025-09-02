import React, { useState, useEffect } from 'react';
import { Container } from '../Container/Container';
import { cn } from '../../../utils/cn';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isFormPage = location.pathname === '/apply';
  const isPolicyAgreementPage = location.pathname === '/legal-agreement';

  const legalPagePaths = ['/privacy', '/terms', '/disclaimer'];
  const isLegalPage = legalPagePaths.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Only add scroll listener if not on a page that always has the dark variant
    if (!isFormPage && !isLegalPage && !isPolicyAgreementPage) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrolled, isFormPage, isLegalPage, isPolicyAgreementPage]);

  const handleNavigateToForm = () => {
    navigate('/apply');
  };

  const scrollToSection = (sectionId: string) => {
    // If on a page that isn't the main landing page, redirect to landing then scroll
    if (isFormPage || isLegalPage || isPolicyAgreementPage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine if the dark variant of the navbar should be used
  // Always use dark variant for form page or legal pages.
  // For other pages (e.g. landing), use dark variant only when scrolled.
  const shouldUseDarkVariant = isFormPage || isLegalPage || isPolicyAgreementPage || scrolled;

  // Reset scrolled state if navigating to a page that forces dark variant, 
  // so that if we navigate away from it, scroll behavior is fresh.
  useEffect(() => {
    if (isFormPage || isLegalPage || isPolicyAgreementPage) {
      setScrolled(false); // Reset scroll state, as it's overridden
    }
  }, [isFormPage, isLegalPage, isPolicyAgreementPage]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        shouldUseDarkVariant
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Logo variant={shouldUseDarkVariant ? 'dark' : 'light'} />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection('features')}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#489094] cursor-pointer',
                shouldUseDarkVariant ? 'text-[#1c243c]' : 'text-white'
              )}
            >
              How It Works
            </a>
            <a
              onClick={() => scrollToSection('calculator')}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#489094] cursor-pointer',
                shouldUseDarkVariant ? 'text-[#1c243c]' : 'text-white'
              )}
            >
              Calculator
            </a>
            <a
              onClick={() => scrollToSection('testimonials')}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#489094] cursor-pointer',
                shouldUseDarkVariant ? 'text-[#1c243c]' : 'text-white'
              )}
            >
              Testimonials
            </a>
            <a
              onClick={() => scrollToSection('features')}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#489094] cursor-pointer',
                shouldUseDarkVariant ? 'text-[#1c243c]' : 'text-white'
              )}
            >
              Features
            </a>
          </nav>
          
          <Button
            variant={shouldUseDarkVariant ? 'primary' : 'outline'}
            size="sm"
            className={!shouldUseDarkVariant ? 'border-white text-white hover:bg-white/10' : ''}
            onClick={handleNavigateToForm}
          >
            Get My Quote
          </Button>
        </div>
      </Container>
    </header>
  );
};