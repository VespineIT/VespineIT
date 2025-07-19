import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-25 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using VespineIT's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Transfer the materials to another person or mirror the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              Our services are provided "as is". VespineIT makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
            <p className="text-gray-600 mb-4">
              In no event shall VespineIT or its suppliers be liable for any damages arising out of the use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Revisions</h2>
            <p className="text-gray-600 mb-4">
              VespineIT may revise these terms of service at any time without notice. By using our services, you agree to be bound by the current version of these terms of service.
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