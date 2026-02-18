import React, { useRef, useState } from "react";
import { useLanguage } from "../App";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "general",
    message: "",
  });

  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setSendError(null);

  if (!validateEmail(formState.email)) {
    setEmailError("Invalid email address");
    return;
  }

  setEmailError(null);
  setLoading(true);
  setSendError(null);

  if (!formRef.current) {
    setSendError("Form not found.");
    setLoading(false);
    return;
  }

  const subjectInput = formRef.current.querySelector('input[name="subject"]') as HTMLInputElement | null;
  const messageInput = formRef.current.querySelector('textarea[name="message"]') as HTMLTextAreaElement | null;

  if (subjectInput) {
    subjectInput.value = subjectInput.value.replace(/-/g, " ");
  }

  if (messageInput) {
    messageInput.value = messageInput.value.replace(/-/g, " ");
  }

  emailjs.send(
    "service_gih8d89",          // Service ID
    "service_idvn2025",         // Template ID
    {
      from_name: formState.name,
      from_email: formState.email,
      company: formState.company,
      inquiryType: formState.inquiryType,
      message: formState.message,
    },
    "w9BCLA8UHnXFzQUI0"          // Public Key
  )
  .then(() => {
    setSubmitted(true);
    setLoading(false);
    setFormState({
      name: "",
      email: "",
      company: "",
      inquiryType: "general",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  })
  .catch((err) => {
    console.error("EmailJS Error:", err);
    setSendError("An error occurred while sending. Please try again.");
    setLoading(false);
  });
};

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, email: value });
    if (emailError && validateEmail(value)) {
      setEmailError(null);
    }
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative py-20 bg-brandNavy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            alt="Shipping Containers Background"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfyDlS7GiE0DRb57dvA1tjK95nBBGqZpcXqXqVBYcJ0Ko1-Cszxojt4Wdhg61dqQoa8zIBevgX1M1AYgB8dYHcjXBRnvUoTJpT3wZgHEBtQfzU-j5wkYLFxVdumq7hSJn6eJkJrimnu99jVqjdOSBNk8wsfNEIFRfKMePX07OZpmwthZhZO6N-_StNsGBywhOHbky1Q6uyAOpZ8fhVy_YloXOeFjUBB8RIfH4Y4_xHXcbmOU8fVNT3lbcT4E5RsK-FdHr5nbe20YE"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-display uppercase">
            {t("discuss_needs")}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            {t("contact_hero_desc")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT COLUMN - FORM */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-800 transition-colors">
            <h2 className="text-2xl font-bold mb-8 text-brandNavy dark:text-primary">
              {t("send_message")}
            </h2>

            {submitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-6 rounded-lg mb-6 border border-green-200">
                Message sent successfully. We will contact you soon.
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input type="hidden" name="user_name" value={formState.name} />
                <input type="hidden" name="user_email" value={formState.email} />
                <input
                  type="hidden"
                  name="user_company"
                  value={formState.company}
                />
                <input
                  type="hidden"
                  name="inquiry_type"
                  value={formState.inquiryType}
                />
                <input type="hidden" name="message" value={formState.message} />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={handleEmailChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      emailError
                        ? "border-red-500 ring-red-500"
                        : "border-slate-200 dark:border-slate-700"
                    } dark:bg-slate-800 focus:ring-primary focus:border-primary transition-colors`}
                  />
                  {emailError && (
                    <p className="text-xs text-red-500 mt-1 font-medium">
                      {emailError}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Company
                  </label>
                  <input
                    required
                    type="text"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Inquiry Type
                  </label>
                  <select
                    required
                    value={formState.inquiryType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        inquiryType: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-colors appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sourcing">Product Sourcing</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-8 py-4 bg-primary text-brandNavy font-bold rounded-lg shadow-lg hover:brightness-110 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>

                {sendError && (
                  <div className="md:col-span-2 text-red-500 text-sm font-medium">
                    {sendError}
                  </div>
                )}
              </form>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            <div className="bg-brandNavy text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-primary">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <span className="material-icons text-primary mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="font-semibold text-lg">Office</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      103 Đ. Âu Cơ, Tứ Liên, Tây Hồ, Hà Nội 100000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <span className="material-icons text-primary mt-1">email</span>
                  <div>
                    <p className="font-semibold text-lg">Email Us</p>
                    <a
                      href="mailto:info@idealdealvn.com"
                      className="text-slate-300 text-sm hover:text-white transition-colors"
                    >
                      info@idealdealvn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <span className="material-icons text-primary mt-1">
                    phone_iphone
                  </span>
                  <div>
                    <p className="font-semibold text-lg">Call Us</p>
                    <p className="text-slate-300 text-sm">+84 (0) 828 278 808</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <span className="material-icons text-primary mt-1">
                    schedule
                  </span>
                  <div>
                    <p className="font-semibold text-lg">Business Hours</p>
                    <p className="text-slate-300 text-sm whitespace-pre-line">
                      {"Monday – Friday: 8:30 AM – 4:00 PM\nBreak Time: 11:30 AM – 1:00 PM\nSaturday & Sunday: Closed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl h-64 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-md">
              <iframe
                src="https://www.google.com/maps?q=103+Duong+Au+Co,+Tu+Lien,+Tay+Ho,+Ha+Noi&z=16&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;