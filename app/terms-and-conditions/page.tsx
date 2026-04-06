import React from 'react';
import Link from 'next/link';
import { siteName, contact, address } from '@/siteidentity';

export const metadata = {
  title: `Terms and Conditions | ${siteName}`,
  description: 'Terms and Conditions for Key2Global - Understand the terms governing your use of our services.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Terms and Conditions</h1>
          <p className="text-slate-300 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using the {siteName} website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms apply to all visitors, users, and others who access or use our educational consulting services, including our subsidiary websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {siteName} provides educational consulting services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Admission guidance for undergraduate and postgraduate programs</li>
              <li>Overseas education counseling and placement assistance</li>
              <li>Medical education admission support through MedicalCounselling</li>
              <li>International student placement services through Edugaydoverseas</li>
              <li>Multi-disciplinary global education solutions through AlphaWorldEducation</li>
              <li>Career counseling and academic pathway planning</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We act as intermediaries between students and educational institutions. Final admission decisions rest solely with the respective institutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">By using our services, you agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information during registration and application processes</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Not attempt to interfere with or disrupt the integrity of our website or services</li>
              <li>Not engage in any fraudulent or deceptive practices</li>
              <li>Respect the intellectual property rights of {siteName} and third parties</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Admission Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Important notices regarding admission services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>We do not guarantee admission to any educational institution</li>
              <li>Admission is subject to meeting the institution's eligibility criteria and selection process</li>
              <li>Information provided on our website is for general guidance and may change without notice</li>
              <li>Students are responsible for verifying all information directly with institutions</li>
              <li>Fees, scholarships, and program details are determined by respective institutions</li>
              <li>Visa approval is at the discretion of immigration authorities and cannot be guaranteed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Payments</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our fee structure varies based on services provided:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Consultation fees will be clearly communicated before services begin</li>
              <li>Payment terms and refund policies will be outlined in service agreements</li>
              <li>Institution tuition fees are paid directly to the respective institutions</li>
              <li>We are not responsible for fees charged by third-party service providers</li>
              <li>All payments are non-refundable unless explicitly stated otherwise</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The content on our website, including text, graphics, logos, images, and software, is the property of {siteName} or its content suppliers and is protected by intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content from our website without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, {siteName} shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
              <li>Any errors or inaccuracies in content provided on our website</li>
              <li>Failure of educational institutions to provide promised services</li>
              <li>Visa rejections or immigration-related issues</li>
              <li>Changes in institutional policies, fees, or program availability</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites or services that are not owned or controlled by {siteName}. We have no control over and assume no responsibility for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>The content, privacy policies, or practices of third-party websites</li>
              <li>The accuracy or reliability of information on external sites</li>
              <li>Any damages or losses arising from your use of third-party services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You acknowledge that we are not responsible for any interactions with third-party institutions or service providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Breach of these Terms and Conditions</li>
              <li>Fraudulent or illegal activities</li>
              <li>Providing false or misleading information</li>
              <li>Conduct that harms our reputation or business interests</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon termination, your right to use our services will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless {siteName}, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of our services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="text-gray-700">
                <strong>Company:</strong> {siteName}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong>{' '}
                <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">{contact.phone}</a>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {address.fullAddress}
              </p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm italic">
              By using {siteName}'s services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
