import React from 'react';
import { Navbar } from '../common/components/Navbar/Navbar';
import { Footer } from './landing/components/Footer/Footer';
import { Container } from '../common/components/Container/Container';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <Container className="bg-white py-12 px-6 md:px-10 rounded-xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c243c] mb-6 text-center">
            TERMS AND CONDITIONS
          </h1>
          <p className="text-center text-gray-500 mb-12 text-sm md:text-base">
            Effective Date: January 1, 2025
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            These Terms and Conditions ("Terms") govern your use of the services
            provided by Unify Capital ("Company," "we," "us," or "our") through our
            website (www.unify-capital.com). By accessing or using our services,
            you agree to comply with these Terms. If you do not agree, do not use
            our services.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            2. Services Offered
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            Unify Capital facilitates down payment financing for vehicle loans (the
            "Service"). We process payments, verify financial information, and
            coordinate with lenders on behalf of users. This is not a lending
            platform; we act solely as a payment intermediary.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            3. Eligibility
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            To use our Service:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>You must be at least 18 years old.</li>
            <li>
              You must be a resident of the United States. Services are unavailable
              internationally.
            </li>
            <li>
              You must provide accurate, truthful, and complete information during
              the application process.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            4. User Obligations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            By using our Service, you agree to:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>
              Provide truthful, current, and verifiable information (e.g., name,
              contact details, financial data).
            </li>
            <li>
              Make timely payments for down payment obligations as agreed with your
              lender.
            </li>
            <li>Not submit false, fraudulent, or misleading information.</li>
            <li>
              Use the Service only for lawful purposes (e.g., not for money
              laundering, fraud, or illegal activities).
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            5. Prohibited Activities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            You may not:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>Use automated tools (bots, scrapers) to access our systems.</li>
            <li>
              Attempt to disrupt, hack, or compromise our website's security.
            </li>
            <li>
              Share sensitive financial information of others without authorization.
            </li>
            <li>Violate any applicable U.S. or Florida laws.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            6. No Warranties
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            The Service is provided "AS IS" and "AS AVAILABLE" without warranties of
            any kind, express or implied. We disclaim all implied warranties,
            including merchantability, fitness for a particular purpose, and
            non-infringement. We do not guarantee uninterrupted, error-free, or
            secure service.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            To the fullest extent permitted by law:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>
              Unify Capital shall not be liable for any indirect, incidental, or
              consequential damages (e.g., lost profits, data breaches) arising
              from your use of the Service.
            </li>
            <li>
              Our total liability for direct damages is limited to $100 USD or the
              fees paid to us in the prior 3 months (whichever is greater).
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            8. Fees and Penalties
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>No fees are charged by Unify Capital for submitting applications.</li>
            <li>
              Penalties for late payments or defaults (e.g., interest, fines) are
              governed solely by your loan agreement with the lender. We are not
              responsible for lender-imposed charges.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            9. Dispute Resolution & Governing Law
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>
              Governing Law: These Terms are governed by the laws of Florida,
              without regard to conflict-of-law principles.
            </li>
            <li>
              Jurisdiction: Any disputes must be resolved exclusively in the state
              or federal courts located in Miami-Dade County, Florida.
            </li>
            <li>Waiver of Jury Trial: Both parties waive the right to a jury trial.</li>
            <li>
              Class Action Waiver: Claims must be brought individually, not as a
              class or representative action.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            10. Consent to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            Your continued use of our website or services constitutes acceptance of
            these Terms. No explicit checkbox or separate agreement is required.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            11. Modifications
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            We may update these Terms periodically. Changes will be posted on our
            website with a revised "Effective Date." Continued use after updates
            constitutes acceptance.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            12. Termination
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            We may suspend or terminate your access to the Service if you violate
            these Terms, applicable laws, or for any operational reason, without
            prior notice.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            13. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            Our Service may involve lenders, payment processors, or other third
            parties. We are not responsible for their terms, fees, or actions.
            Review their agreements separately.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            14. Entire Agreement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            These Terms, together with our Privacy Policy, constitute the entire
            agreement between you and Unify Capital.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            15. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            For questions or disputes:
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

export default TermsAndConditions; 