import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-25 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Professional information (company name, job title)</li>
              <li>Technical information about your devices and usage of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
            <p className="text-gray-600 mb-4">
              The security of your data is important to us. We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@vespineit.com
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-700 rounded-xl">
          <p className="text-white text-sm">
            Last updated: April 24, 2025
          </p>
        </div>
      </div>
    </div>
  );
}