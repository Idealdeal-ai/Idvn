import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RFQFormProps {
  productName?: string;
  className?: string;
  compact?: boolean; // compact mode for sidebar
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

const WHATSAPP_NUMBER = '84828278808';

const RFQForm: React.FC<RFQFormProps> = ({ productName = '', className = '', compact = false }) => {
  const { t } = useTranslation('products');
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: productName,
    quantity: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
      setStatus('success');
      setFields({
        name: '',
        email: '',
        company: '',
        country: '',
        product: productName,
        quantity: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'm interested in: ${fields.product || productName || 'your products'}. My name is ${fields.name || '...'} from ${fields.company || '...'}.`
  )}`;

  if (status === 'success') {
    return (
      <div className={`bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center ${className}`}>
        <CheckCircle2 size={48} className="text-green-500 mb-4 mx-auto block" aria-hidden />
        <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">
          {t('ui.rfq_success_title', { defaultValue: 'Request Sent!' })}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {t('ui.rfq_success_body', { defaultValue: 'Thank you. Our team will respond to your inquiry within 24 hours.' })}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-primary hover:underline"
        >
          {t('ui.rfq_send_another', { defaultValue: 'Send another request' })}
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 ${compact ? 'p-6' : 'p-8'} ${className}`}>
      <h3 className={`font-bold text-brandNavy dark:text-white mb-1 ${compact ? 'text-lg' : 'text-2xl'}`}>
        {t('ui.rfq_title', { defaultValue: 'Request a Quote' })}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
        {t('ui.rfq_sub', { defaultValue: "Tell us what you need — we'll respond within 24 hours." })}
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className={compact ? '' : 'grid sm:grid-cols-2 gap-4'}>
          <div>
            <label htmlFor="rfq-name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
              {t('ui.rfq_name')} *
            </label>
            <input
              id="rfq-name"
              name="name"
              type="text"
              required
              value={fields.name}
              onChange={handleChange}
              placeholder="Ahmed Al-Tamimi"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="rfq-email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
              {t('ui.rfq_email')} *
            </label>
            <input
              id="rfq-email"
              name="email"
              type="email"
              required
              value={fields.email}
              onChange={handleChange}
              placeholder="ahmed@company.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className={compact ? '' : 'grid sm:grid-cols-2 gap-4'}>
          <div>
            <label htmlFor="rfq-company" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
              {t('ui.rfq_company')}
            </label>
            <input
              id="rfq-company"
              name="company"
              type="text"
              value={fields.company}
              onChange={handleChange}
              placeholder="Your Company Name"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="rfq-country" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
              {t('ui.rfq_country')} *
            </label>
            <input
              id="rfq-country"
              name="country"
              type="text"
              required
              value={fields.country}
              onChange={handleChange}
              placeholder="Saudi Arabia"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className={compact ? '' : 'grid sm:grid-cols-2 gap-4'}>
          <div>
            <label htmlFor="rfq-product" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
              {t('ui.rfq_product_label', { defaultValue: 'Product' })}
            </label>
            <input
              id="rfq-product"
              name="product"
              type="text"
              value={fields.product}
              onChange={handleChange}
              placeholder="e.g. Robusta Coffee Beans G1"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="rfq-quantity" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
              {t('ui.rfq_qty')}
            </label>
            <input
              id="rfq-quantity"
              name="quantity"
              type="text"
              value={fields.quantity}
              onChange={handleChange}
              placeholder="e.g. 1×20ft container / 20 MT"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="rfq-message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
            {t('ui.rfq_message')}
          </label>
          <textarea
            id="rfq-message"
            name="message"
            rows={compact ? 3 : 4}
            value={fields.message}
            onChange={handleChange}
            placeholder="Packaging preference, certifications needed, target price, Incoterms..."
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-sm">
            {t('ui.rfq_error', { defaultValue: 'Something went wrong. Please try WhatsApp below or email us directly at sales@idealdealvn.com.' })}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-3 px-6 rounded-xl bg-primary text-white font-bold text-sm uppercase tracking-wide hover:bg-amber-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? t('ui.rfq_sending', { defaultValue: 'Sending…' }) : t('ui.rfq_submit')}
        </button>

        {/* WhatsApp alternative */}
        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <div className="flex-1 border-t border-slate-200 dark:border-slate-700" />
          <span>{t('ui.rfq_or', { defaultValue: 'or' })}</span>
          <div className="flex-1 border-t border-slate-200 dark:border-slate-700" />
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl border-2 font-bold text-sm uppercase tracking-wide transition-colors"
          style={{ borderColor: '#25D366', color: '#25D366' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#25D366';
            (e.currentTarget as HTMLAnchorElement).style.color = 'white';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLAnchorElement).style.color = '#25D366';
          }}
        >
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M16.003 3C9.376 3 4 8.373 4 15.001c0 2.118.554 4.11 1.524 5.84L4 29l8.368-1.51A12.018 12.018 0 0 0 16.003 28C22.63 28 28 22.627 28 16s-5.37-13-11.997-13zm5.82 15.662c-.319-.159-1.887-.93-2.18-1.036-.292-.106-.505-.159-.717.16-.213.318-.824 1.036-.01 1.248.822.213 1.856-.187 2.074-.4.213-.213.319-.531.16-.849-.16-.319-.506-.822-.717-1.036-.213-.213-.453-.265-.663-.053-.213.213-.824.665-.93 1.035-.106.37.107.797.319 1.036.213.24.824.664 1.142.877.318.212.877.424 1.46.371.584-.053 1.035-.318 1.195-.637.16-.318.16-.796 0-1.114z" />
          </svg>
          {t('ui.whatsapp_cta')}
        </a>
      </form>
    </div>
  );
};

export default RFQForm;
