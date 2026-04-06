import React from 'react';
import Link from 'next/link';
import { siteName, contact, address } from '@/siteidentity';

export const metadata = {
  title: `Privacy Policy | ${siteName}`,
  description: 'Privacy Policy for Key2Global - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to {siteName}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website and services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and other identification details</li>
              <li><strong>Educational Information:</strong> Academic records, test scores, qualifications, and educational preferences</li>
              <li><strong>Contact Information:</strong> Address, city, state, country, and postal code</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and browsing behavior</li>
              <li><strong>Communication Data:</strong> Records of your communications with us via email, phone, or chat</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To provide educational consulting and admission guidance services</li>
              <li>To process your applications and connect you with partner institutions</li>
              <li>To communicate with you about our services, updates, and opportunities</li>
              <li>To improve our website and user experience</li>
              <li>To comply with legal obligations and prevent fraud</li>
              <li>To send you marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Partner Institutions:</strong> Universities and colleges to facilitate your admission process</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and services</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Subsidiary Companies:</strong> Our subsidiary websites (MedicalCounselling, Edugaydoverseas, AlphaWorldEducation) for related services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not sell, trade, or rent your personal information to third parties for their marketing purposes without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. You can control cookie settings through your browser preferences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Types of cookies we use include essential cookies, analytics cookies, and marketing cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data under certain conditions</li>
              <li><strong>Restriction:</strong> Request restriction of processing your personal data</li>
              <li><strong>Objection:</strong> Object to our processing of your personal data</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another organization</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent to process your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
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

        </div>
      </main>
    </div>
  );
}
