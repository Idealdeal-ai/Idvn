import React, { useState } from 'react';
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

interface CookieRowProps {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  type: 'Essential' | 'Functional' | 'Analytics';
}

const typeColors: Record<CookieRowProps['type'], string> = {
  Essential:  'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Functional: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Analytics:  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
};

const CookieRow: React.FC<CookieRowProps> = ({ name, provider, purpose, duration, type }) => (
  <tr className="border-b border-slate-100 dark:border-slate-800 last:border-0">
    <td className="py-3 pr-4 font-mono text-xs text-brandNavy dark:text-white font-semibold whitespace-nowrap">{name}</td>
    <td className="py-3 pr-4 text-xs">{provider}</td>
    <td className="py-3 pr-4 text-xs">{purpose}</td>
    <td className="py-3 pr-4 text-xs whitespace-nowrap">{duration}</td>
    <td className="py-3 text-xs">
      <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ${typeColors[type]}`}>
        {type}
      </span>
    </td>
  </tr>
);

const CookiePolicy: React.FC = () => {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brandNavy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-[11px] font-bold tracking-[0.25em] uppercase mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-slate-400 text-sm">Last updated: 30 April 2026</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-12">

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10">
            This Cookie Policy explains how <strong className="text-brandNavy dark:text-white">Ideal Deal Vietnam</strong> (operated by CÔNG TY TNHH GIAO DỊCH THƯƠNG MẠI VIỆT NAM) uses cookies and similar technologies when you visit <strong className="text-slate-700 dark:text-slate-300">idealdealvn.com</strong>.
          </p>

          <Section title="1. What Are Cookies?">
            <p>Cookies are small text files placed on your device when you visit a website. They allow the site to remember your preferences and actions over time, and help us understand how visitors interact with our content.</p>
            <p>Similar technologies include <strong className="text-slate-700 dark:text-slate-300">localStorage</strong> (used to remember your dark/light theme preference) and session storage.</p>
          </Section>

          <Section title="2. Types of Cookies We Use">
            <p>We use three categories of cookies:</p>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-xl p-4">
                <p className="font-bold text-green-700 dark:text-green-400 mb-1 flex items-center gap-1.5">
                  <span className="material-icons text-base">check_circle</span> Essential
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Required for the website to function. Cannot be disabled.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className="font-bold text-blue-700 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                  <span className="material-icons text-base">tune</span> Functional
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Remember your preferences like language and theme.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="font-bold text-amber-700 dark:text-amber-400 mb-1 flex items-center gap-1.5">
                  <span className="material-icons text-base">bar_chart</span> Analytics
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Help us understand visitor behaviour to improve the site.</p>
              </div>
            </div>
          </Section>

          <Section title="3. Cookies We Use">
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-left min-w-[580px]">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                    <th className="pb-3 pr-4 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">Name</th>
                    <th className="pb-3 pr-4 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">Provider</th>
                    <th className="pb-3 pr-4 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">Purpose</th>
                    <th className="pb-3 pr-4 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">Duration</th>
                    <th className="pb-3 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow
                    name="theme"
                    provider="idealdealvn.com"
                    purpose="Stores your dark / light mode preference using localStorage"
                    duration="Persistent"
                    type="Functional"
                  />
                  <CookieRow
                    name="language"
                    provider="idealdealvn.com"
                    purpose="Stores your selected display language (EN, AR, VI, ZH, ES, FR)"
                    duration="Persistent"
                    type="Functional"
                  />
                  <CookieRow
                    name="_vercel_*"
                    provider="Vercel"
                    purpose="Infrastructure cookies used by our hosting provider for routing and performance"
                    duration="Session"
                    type="Essential"
                  />
                  <CookieRow
                    name="__cf_bm"
                    provider="Cloudflare / CDN fonts"
                    purpose="Bot management cookie set by Cloudflare when loading Google Fonts"
                    duration="30 minutes"
                    type="Essential"
                  />
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3 italic">* We do not currently use third-party advertising or retargeting cookies.</p>
          </Section>

          <Section title="4. Google Fonts & External Resources">
            <p>Our website loads fonts from <strong className="text-slate-700 dark:text-slate-300">Google Fonts</strong> (fonts.googleapis.com). When your browser fetches these fonts, Google may receive your IP address and set its own cookies in accordance with <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Privacy Policy</a>.</p>
          </Section>

          <Section title="5. How to Manage Cookies">
            <p>You can control cookies in several ways:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-slate-700 dark:text-slate-300">Browser settings:</strong> Most browsers allow you to view, block, or delete cookies via their settings. Visit your browser's help pages for instructions:
                <div className="flex flex-wrap gap-2 mt-2 ml-2">
                  {[
                    { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                    { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
                    { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                    { name: 'Edge', url: 'https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d' },
                  ].map((b) => (
                    <a
                      key={b.name}
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-brandNavy dark:text-white hover:bg-primary hover:text-brandNavy transition-colors"
                    >
                      {b.name}
                      <span className="material-icons text-sm">open_in_new</span>
                    </a>
                  ))}
                </div>
              </li>
              <li><strong className="text-slate-700 dark:text-slate-300">Opt-out tools:</strong> For Google services, you can use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
            </ul>
            <p className="mt-2 text-xs italic">Note: Disabling essential cookies may affect the functionality of our website.</p>
          </Section>

          {/* Inline consent panel */}
          <Section title="6. Your Consent">
            <p>By continuing to browse our website, you consent to our use of functional cookies as described above. Essential cookies are set automatically as they are required for the site to operate.</p>
            {consent === null ? (
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setConsent('accepted')}
                  className="px-6 py-2.5 bg-primary text-brandNavy font-bold rounded-lg text-sm hover:brightness-110 transition-all"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={() => setConsent('declined')}
                  className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                  Essential Only
                </button>
              </div>
            ) : (
              <div className={`mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold ${
                consent === 'accepted'
                  ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}>
                <span className="material-icons text-base">
                  {consent === 'accepted' ? 'check_circle' : 'info'}
                </span>
                {consent === 'accepted'
                  ? 'Preferences saved — all cookies accepted.'
                  : 'Preferences saved — essential cookies only.'}
              </div>
            )}
          </Section>

          <Section title="7. Changes to This Policy">
            <p>We may update this Cookie Policy periodically. Any changes will be posted on this page with a revised date. We encourage you to review this policy whenever you visit our website.</p>
          </Section>

          <Section title="8. Contact">
            <p>For questions about our use of cookies, please contact:</p>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 mt-3 space-y-1">
              <p className="font-semibold text-brandNavy dark:text-white">CÔNG TY TNHH GIAO DỊCH THƯƠNG MẠI VIỆT NAM</p>
              <p>103 Đ. Âu Cơ, Tứ Liên, Tây Hồ, Hà Nội, Việt Nam</p>
              <p>Email: <a href="mailto:info@idealdealvn.com" className="text-primary hover:underline">info@idealdealvn.com</a></p>
            </div>
          </Section>

          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy →</Link>
            <Link to="/terms-of-service" className="text-primary hover:underline font-semibold">Terms of Service →</Link>
            <Link to="/contact" className="text-primary hover:underline font-semibold">Contact Us →</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
