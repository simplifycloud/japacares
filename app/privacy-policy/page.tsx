import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | JapaCares",
  description: "How JapaCares collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 py-10 px-5">
      <div className="max-w-3xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-gray-700 hover:text-pink-600 font-semibold px-5 py-3 rounded-full shadow-md border border-gray-200 transition-all hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: July 29, 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          JapaCares (&quot;JapaCares&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates japacares.com
          and connects families with verified Jaapa caregivers for postpartum
          mother and newborn care across India. This Privacy Policy explains
          what personal data we collect, why we collect it, how we protect it,
          and the rights you have over it. This policy is drafted with
          reference to India&apos;s Digital Personal Data Protection Act, 2023
          (DPDP Act) and other applicable Indian laws.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          By using japacares.com or submitting any form on our website, you
          agree to the practices described in this policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">1. Who This Policy Applies To</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 mb-6">
          <li><strong className="text-gray-900">Families / clients</strong> who book a caregiver through our website.</li>
          <li><strong className="text-gray-900">Caregivers</strong> who apply to join our network via the &quot;Become a Caregiver&quot; form.</li>
          <li><strong className="text-gray-900">Visitors</strong> who browse our website or contact us.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">2. Information We Collect</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">2.1 From Families / Clients (Booking)</h3>
        <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 mb-6">
          <li>Full name, mobile number, email address</li>
          <li>Address / city of service</li>
          <li>Care plan selected and message/notes submitted via the contact or booking form</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">2.2 From Caregivers (Application)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We collect a limited set of information from caregiver applicants
          through our online form: personal details (name, age, mobile,
          WhatsApp, email, address, city), professional details (qualification,
          experience, languages, availability, services offered), and an
          emergency contact&apos;s name, number, and relationship.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We do <strong className="text-gray-900">not</strong> collect Aadhaar numbers, PAN numbers, or
          identity documents through this online form. These sensitive
          identity documents are collected only during an in-person or
          WhatsApp-based verification step conducted by our team, in line
          with the Aadhaar Act, 2016 and the DPDP Act, 2023.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">2.3 Automatically Collected Information</h3>
        <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 mb-6">
          <li>IP address, browser type, device information</li>
          <li>Pages visited, time spent, referring website (via analytics/cookies, if enabled)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">3. Why We Collect This Information</h2>
        <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-700 mb-6">
          <li>To connect families with caregivers and process bookings</li>
          <li>To verify caregiver identity and conduct background/police verification (in-person)</li>
          <li>To issue a &quot;Jaapa Verified Caregiver&quot; badge upon successful verification</li>
          <li>To communicate booking confirmations, updates, and support (via call, SMS, WhatsApp, or email)</li>
          <li>To contact your emergency contact only in a genuine emergency involving your safety</li>
          <li>To improve our website and services</li>
          <li>To comply with legal and regulatory obligations</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">4. How We Protect Your Data</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Data submitted through our forms is transmitted securely over
          HTTPS/TLS. Sensitive identity documents are never collected online —
          they are handled directly by our team during verification, reducing
          the risk of online exposure. Access to applicant information is
          restricted to authorized personnel only.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">5. Sharing of Information</h2>
        <p className="text-gray-700 leading-relaxed mb-3">We do <strong className="text-gray-900">not sell</strong> your personal data. We may share information only:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 mb-6">
          <li>With <strong className="text-gray-900">background/police verification partners</strong>, solely to complete caregiver screening</li>
          <li>With <strong className="text-gray-900">families/clients</strong>, limited to a caregiver&apos;s verified profile details — never sensitive identity documents</li>
          <li>With <strong className="text-gray-900">service providers</strong> (e.g., form processing, hosting, SMS/WhatsApp/email delivery) bound by confidentiality obligations</li>
          <li>When <strong className="text-gray-900">required by law</strong>, court order, or government/regulatory request</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">6. Data Retention</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We retain caregiver and client information only as long as needed to
          provide our services and for legitimate business/legal records. You
          may request earlier deletion, subject to Section 8 below.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">7. Cookies</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our website may use cookies or similar technologies to remember
          preferences and understand site usage. You can control cookies
          through your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">8. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Under the DPDP Act and applicable Indian law, you have the right to:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 mb-6">
          <li><strong className="text-gray-900">Access</strong> the personal data we hold about you</li>
          <li><strong className="text-gray-900">Correct or update</strong> inaccurate or incomplete data</li>
          <li><strong className="text-gray-900">Withdraw consent</strong> for processing</li>
          <li><strong className="text-gray-900">Request deletion</strong> of your data, subject to legal retention requirements</li>
          <li><strong className="text-gray-900">Raise a grievance</strong> regarding how your data is handled (see Section 10)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">9. Children&apos;s Privacy</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our services relate to newborn and postpartum care, but our website
          and forms are intended to be used by adults (parents, family
          members, or caregiver applicants aged 18+). We do not knowingly
          collect personal data directly from children.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">10. Grievance Officer</h2>
        <p className="text-gray-700 leading-relaxed mb-3">In accordance with applicable Indian law, the contact details of our Grievance Officer are:</p>
        <div className="bg-pink-50 rounded-xl p-5 space-y-1 text-gray-700 mb-6">
          <p><strong className="text-gray-900">Name:</strong> Pardeep Kumar</p>
          <p><strong className="text-gray-900">Designation:</strong> Grievance Officer, JapaCares</p>
          <p><strong className="text-gray-900">Email:</strong> support@japacares.com</p>
          <p><strong className="text-gray-900">Address:</strong> Sector 76, Gurgaon, Haryana, India</p>
          <p><strong className="text-gray-900">Response time:</strong> We aim to acknowledge grievances within 48 hours and resolve them within 30 days.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">11. Contact Us</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 mb-6">
          <li><strong className="text-gray-900">Email:</strong> support@japacares.com</li>
          <li><strong className="text-gray-900">Phone:</strong> +91 82395 48307</li>
          <li><strong className="text-gray-900">Address:</strong> Sector 76, Gurgaon, Haryana, India</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">12. Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date at the top will reflect the most recent revision.
          Continued use of our website after changes constitutes acceptance
          of the updated policy.
        </p>
      </div>
    </section>
  );
}