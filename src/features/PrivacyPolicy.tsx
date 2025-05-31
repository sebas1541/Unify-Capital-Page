import React from 'react';
import { Navbar } from '../common/components/Navbar/Navbar';
import { Footer } from './landing/components/Footer/Footer';
import { Container } from '../common/components/Container/Container';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <Container className="bg-white py-12 px-6 md:px-10 rounded-xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c243c] mb-6 text-center">
            PRIVACY POLICY
          </h1>
          <p className="text-center text-gray-500 mb-12 text-sm md:text-base">
            Effective Date: January 1, 2025
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
            Unify Capital (“Company,” “we,” “us,” or “our”) is committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy describes how we collect, use,
            disclose, and protect your information when you visit our website
            (www.unify-capital.com) or use our services. This policy complies with
            applicable U.S. federal laws and the Florida Digital Bill of Rights
            (FDBR).
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            By using our services, you consent to the practices described in this
            Privacy Policy.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            We collect the following categories of information:
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1c243c] mt-6 mb-3">
            Personal Identifiers:
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>Full name</li>
            <li>Email address</li>
            <li>Postal address</li>
            <li>Phone number</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1c243c] mt-6 mb-3">
            Financial Information:
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>Credit and debit card numbers</li>
            <li>Bank account details</li>
            <li>Payment and billing history</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1c243c] mt-6 mb-3">
            Geolocation Data:
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>IP-based or GPS-based physical location</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1c243c] mt-6 mb-3">
            Online Identifiers and Device Information:
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>IP address</li>
            <li>Device type and identifiers</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1c243c] mt-6 mb-3">
            Internet or Other Electronic Network Activity:
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>Cookies and tracking data</li>
            <li>Browsing history on our site</li>
            <li>Time and date of access</li>
            <li>Referral sources</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            We do not knowingly collect personal information from individuals under
            the age of 18.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            Your data is used for:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>Processing payments and managing billing for vehicle loan down payments</li>
            <li>Account setup and customer support</li>
            <li>Fraud detection and legal compliance</li>
            <li>Improving website functionality and user experience</li>
            <li>Marketing communications (where legally permitted)</li>
            <li>Compliance with federal and state regulations</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            4. Legal Bases for Processing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            We process your data under the following legal bases:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>Contractual necessity: to fulfill service obligations</li>
            <li>Legal obligation: to comply with applicable laws</li>
            <li>Legitimate interest: in improving and securing our services</li>
            <li>Consent: when required for marketing and cookies</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            5. Disclosure of Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>
              Authorized service providers (e.g., payment processors, cloud storage
              providers) under strict confidentiality agreements
            </li>
            <li>Regulatory authorities where required by law or court order</li>
            <li>
              Successors and assigns in the event of a merger, sale, or acquisition
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            We do not sell your personal information.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
            Our website uses cookies and similar tracking technologies to enhance
            user experience, analyze site traffic, and support marketing efforts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            You may manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            7. Your Privacy Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            Subject to applicable law, you may have the following rights:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>Right to know what personal information we collect</li>
            <li>Right to access and receive a copy of your data</li>
            <li>Right to correct inaccurate personal data</li>
            <li>Right to delete your personal data</li>
            <li>Right to opt-out of targeted advertising or data sharing</li>
            <li>Right to limit use and disclosure of sensitive data</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            To exercise any of these rights, email us at{' '}
            <a href="mailto:info@unify-capital.com" className="text-[#489094] hover:text-[#3a7a7e] underline">
              info@unify-capital.com
            </a>{' '}
            or call us at{' '}
            <a href="tel:7867902919" className="text-[#489094] hover:text-[#3a7a7e] underline">
              (786) 790 2919
            </a>.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            8. Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            We retain your personal information for as long as is reasonably
            necessary to fulfill the purposes for which we collected it, including
            to satisfy any legal or accounting requirements.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            9. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            We implement appropriate administrative, technical, and physical
            safeguards to protect your personal information. These include:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 pl-4 text-base md:text-lg">
            <li>Secure socket layer (SSL) encryption</li>
            <li>Multi-factor authentication for internal systems</li>
            <li>Access controls and staff confidentiality agreements</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            10. International Data Transfers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            If your data is transferred to or stored in a location outside the
            United States, we implement adequate safeguards (e.g., contractual
            clauses) to ensure your data remains protected.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            11. Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of those sites. We recommend
            reviewing their privacy policies separately.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            12. Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
            We may update this Privacy Policy periodically. If we make significant
            changes, we will post a notice on our website and update the
            “Effective Date” above.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1c243c] mt-10 mb-5">
            13. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
            If you have questions, concerns, or would like to exercise your privacy
            rights, contact us at:
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
            <p>
              Website:{' '}
              <a href="https://www.unify-capital.com" target="_blank" rel="noopener noreferrer" className="text-[#489094] hover:text-[#3a7a7e] underline">
                www.unify-capital.com
              </a>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 