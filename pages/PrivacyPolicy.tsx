import React from 'react';
import { Link } from 'react-router-dom';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-brandNavy dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
      {title}
    </h2>
    <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
      {children}
    </div>
  </section>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brandNavy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-[11px] font-bold tracking-[0.25em] uppercase mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">Last updated: 30 April 2026</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-12">

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10">
            Ideal Deal Vietnam — operated by <strong className="text-brandNavy dark:text-white">CÔNG TY TNHH GIAO DỊCH THƯƠNG MẠI VIỆT NAM</strong> (Tax code: 0111274380), 103 Đ. Âu Cơ, Tứ Liên, Tây Hồ, Hà Nội, Việt Nam — is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights in relation to it.
          </p>

          <Section title="1. Information We Collect">
            <p><strong className="text-slate-700 dark:text-slate-300">Information you provide directly:</strong> When you fill in our contact or inquiry forms, we collect your name, email address, company name, and the content of your message.</p>
            <p><strong className="text-slate-700 dark:text-slate-300">Usage data:</strong> We may automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on pages.</p>
            <p><strong className="text-slate-700 dark:text-slate-300">Cookies:</strong> We use cookies and similar tracking technologies. See our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> for full details.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Respond to your inquiries and communicate with you about our services.</li>
              <li>Send you information about products, services, or promotions you have requested.</li>
              <li>Improve and optimise our website and user experience.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>
            <p>We will never sell your personal data to third parties.</p>
          </Section>

          <Section title="3. Legal Basis for Processing">
            <p>We process your personal data on the following legal bases:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-slate-700 dark:text-slate-300">Consent</strong> — when you submit a contact form or subscribe to communications.</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Legitimate interests</strong> — to maintain and improve our website and services.</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Legal obligation</strong> — where required by Vietnamese law or international regulations.</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing">
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-slate-700 dark:text-slate-300">EmailJS</strong> — our email delivery provider, used to transmit form submissions to our team.</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Hosting providers</strong> — Vercel (frontend) and Render (AI backend), which process data on our behalf under data processing agreements.</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Legal authorities</strong> — if required by law, court order, or regulatory authority.</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain personal data submitted through contact forms for up to <strong className="text-slate-700 dark:text-slate-300">24 months</strong> from the date of submission, or as long as necessary to fulfil the purpose for which it was collected. You may request deletion at any time.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Withdraw consent at any time (where processing is consent-based).</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:info@idealdealvn.com" className="text-primary hover:underline">info@idealdealvn.com</a>.</p>
          </Section>

          <Section title="7. Security">
            <p>We implement industry-standard technical and organisational measures to protect your personal data from unauthorised access, alteration, disclosure, or destruction. Our website is served over HTTPS, and sensitive backend credentials are never exposed to the client.</p>
          </Section>

          <Section title="8. International Transfers">
            <p>Your data may be processed in countries outside of Vietnam, including the United States (Vercel, Render, EmailJS servers). Where this occurs, we ensure appropriate safeguards are in place in accordance with applicable data protection laws.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 mt-3 space-y-1">
              <p className="font-semibold text-brandNavy dark:text-white">CÔNG TY TNHH GIAO DỊCH THƯƠNG MẠI VIỆT NAM</p>
              <p>103 Đ. Âu Cơ, Tứ Liên, Tây Hồ, Hà Nội, Việt Nam</p>
              <p>Email: <a href="mailto:info@idealdealvn.com" className="text-primary hover:underline">info@idealdealvn.com</a></p>
              <p>Phone: +84 828 278 808</p>
            </div>
          </Section>

          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-sm">
            <Link to="/terms-of-service" className="text-primary hover:underline font-semibold">Terms of Service →</Link>
            <Link to="/cookie-policy" className="text-primary hover:underline font-semibold">Cookie Policy →</Link>
            <Link to="/contact" className="text-primary hover:underline font-semibold">Contact Us →</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
