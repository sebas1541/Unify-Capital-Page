import React from 'react';
import { Container } from '../../../../common/components/Container/Container';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';
import { Logo } from '../../../../common/components/Logo/Logo';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1c243c] text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Company */}
          <div>
            <Logo variant="light" className="mb-6" />
            <p className="text-gray-400 mb-6">
              Empowering Floridians with fast, reliable down payment assistance for their dream vehicles.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#489094] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#489094] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#489094] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#489094] transition-colors">
                <LinkedIn size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'How It Works', href: '/#features' },
                { name: 'Calculator', href: '/#calculator' },
                { name: 'Testimonials', href: '/#testimonials' },
                { name: 'Apply Now', href: '/apply' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-[#489094] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#489094] mr-3 mt-0.5" />
                <span className="text-gray-400">
                  7715 NW 46TH STREET SUITE #8A<br />
                  DORAL, FL 33166
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#489094] mr-3" />
                <a href="tel:+13055551234" className="text-gray-400 hover:text-[#489094] transition-colors">
                  (305) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#489094] mr-3" />
                <a href="mailto:info@unifycapital.com" className="text-gray-400 hover:text-[#489094] transition-colors">
                  support@unify-capital.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Unify Capital. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#489094] transition-colors mr-4">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#489094] transition-colors mr-4">Terms & Conditions</Link>
            <Link to="/disclaimer" className="hover:text-[#489094] transition-colors">Disclaimer</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};