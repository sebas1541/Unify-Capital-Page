import React from 'react';
import { Navbar } from '../common/components/Navbar/Navbar';
import { Footer } from './landing/components/Footer/Footer';
import { Container } from '../common/components/Container/Container';

const Disclaimer: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <Container className="bg-white py-12 px-6 md:px-10 rounded-xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c243c] mb-6 text-center">
            Disclaimer
          </h1>
          <p className="text-center text-gray-500 mb-12 text-sm md:text-base">
            Effective Date: January 1, 2025
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            The information provided by Unify Capital ("we", "us", or "our") on our
            website (www.unify-capital.com) and through our services is for
            general informational purposes only.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            1. No Financial or Legal Advice
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            Our website and services do not constitute legal, financial, or
            investment advice. Any decisions you make based on the information
            provided are your sole responsibility.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            2. No Guarantee of Approval
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            Submission of a form or personal information through our website does
            not constitute approval, pre-approval, or any binding agreement.
            Approval is subject to further review and verification.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            3. Accuracy of Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            While we strive to provide accurate and up-to-date information, Unify
            Capital makes no representations or warranties of any kind, express or
            implied, about the completeness, accuracy, or reliability of the
            information provided.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            To the fullest extent permitted by law, Unify Capital disclaims all
            liability for any loss or damage arising from your use of our website or
            reliance on any information provided therein.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            5. External Links
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            Our website may contain links to external websites that are not provided
            or maintained by Unify Capital. We do not guarantee the accuracy or
            relevance of any information on these third-party sites.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            6. Use Within the United States
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            Our services are intended exclusively for users located within the United
            States. We make no representation that the services are appropriate or
            available for use outside of the U.S.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            7. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            If you have any questions or concerns about this Disclaimer, please
            contact us:
          </p>
          <div className="text-gray-700 leading-relaxed space-y-1 text-base md:text-lg">
            <p className="font-semibold text-[#1c243c]">Unify Capital</p>
            <p>7715 NW 46th Street</p>
            <p>Miami, FL 33166</p>
            <p>
              Email:{' '}
              <a href="mailto:info@unify-capital.com" className="text-[#489094] hover:text-[#3a7a7e] underline">
                info@unify-capital.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:7867902919" className="text-[#489094] hover:text-[#3a7a7e] underline">
                (786) 790 2919
              </a>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer; 