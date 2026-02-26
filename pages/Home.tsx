
import {  useState } from "react";
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import emailjs from "@emailjs/browser";


const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
  'service_gih8d89',
  'template_yhrlqso',
  {
    from_name: formState.name,
    from_email: formState.email,
    subject: "Home Page Inquiry",
    message: formState.message,
  },
  'w9BCLA8UHnXFzQUI0'
).then(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }).catch(() => {
      alert('Error sending message, please try again later.');
    });
  };

 
  // Using a container port image matching the screenshot aesthetics
  const heroBackground = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop";

  return (
    <div>
      <header 
        className="min-h-screen flex items-center justify-center text-center pt-20 relative overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(17, 55, 100, 0.65), rgba(17, 55, 100, 0.75)), url('${heroBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/40 mb-10 bg-brandNavy/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(217,168,78,0.8)]"></span>
            <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">
              {language === 'ar' ? 'حلول التجارة العالمية' : (language === 'fr' ? 'SOLUTIONS DE COMMERCE MONDIAL' : 'Global Trade Solutions')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-10 leading-[1.1] tracking-tight">
            {language === 'ar' ? (
              <>شريككم <span className="text-primary">الموثوق</span> للاستيراد والتصدير في فيتنام</>
            ) : (language === 'fr' ? (
              <>Votre Partenaire d'Import-Export de <span className="text-primary">Confiance</span> au Vietnam</>
            ) : (
              <>Your Trusted Import & Export <span className="text-primary">Partner</span> in Vietnam</>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-14 leading-relaxed max-w-3xl mx-auto font-light">
            {t('hero_subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/services" 
              className="bg-primary hover:bg-opacity-90 text-brandNavy font-extrabold px-10 py-5 rounded-md transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl"
            >
              {t('explore')} 
              
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 font-extrabold px-12 py-5 rounded-md transition-all text-sm uppercase tracking-widest backdrop-blur-sm"
            >
              {t('learn_more')}
            </Link>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                alt="Cargo Ship Aerial View" 
                className="rounded-2xl shadow-xl w-full h-[480px] object-cover" 
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop"
              />
              <div className={`absolute -bottom-6 ${language === 'ar' ? '-left-6' : '-right-6'} bg-brandNavy px-10 py-6 rounded-md shadow-xl hidden md:block border-b-4 border-primary`}>
                <p className="text-primary text-4xl font-display font-extrabold leading-tight">01</p>
                <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">{t('years_trust')}</p>
              </div>
            </div>
            <div>
              <h2 className="text-primary font-display font-bold text-[10px] tracking-[0.3em] uppercase mb-4">{t('about_title')}</h2>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-brandNavy dark:text-white mb-8 leading-tight">
                {t('about_heading')}
              </h3>
              <div className="space-y-6 text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                <p>{t('about_p1')}</p>
                <p>{t('about_p2')}</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                  <div>
                    <h4 className="font-bold text-brandNavy text-sm dark:text-white mb-1">{t('quality_first')}</h4>
                    <p className="text-[11px] text-slate-500">{t('quality_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5">public</span>
                  <div>
                    <h4 className="font-bold text-brandNavy text-sm dark:text-white mb-1">{t('global_reach')}</h4>
                    <p className="text-[11px] text-slate-500">{t('global_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brandNavy py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-primary mb-1">12+</p>
              <p className="text-sm uppercase tracking-widest text-slate-400">{language === 'ar' ? 'منتجات مصدرة' : (language === 'fr' ? 'Produits Sourcés' : 'Products Sourced')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">05+</p>
              <p className="text-sm uppercase tracking-widest text-slate-400">{language === 'ar' ? 'دول شريكة' : (language === 'fr' ? 'Pays Partenaires' : 'Partner Countries')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">98%</p>
              <p className="text-sm uppercase tracking-widest text-slate-400">{language === 'ar' ? 'جودة مضمونة' : (language === 'fr' ? 'Qualité Vérifiée' : 'Quality Verified')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">24/7</p>
              <p className="text-sm uppercase tracking-widest text-slate-400">{language === 'ar' ? 'دعم عالمي' : (language === 'fr' ? 'Support Mondial' : 'Global Support')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Full-Spectrum Trade Services */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accentGold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">{language === 'ar' ? 'خبرتنا' : (language === 'fr' ? 'NOTRE EXPERTISE' : 'OUR EXPERTISE')}</span>
          <h2 className="text-4xl font-display font-extrabold text-brandNavy dark:text-white mb-6">{t('full_spectrum_title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 text-sm">
            {t('full_spectrum_desc')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                <span className="material-icons-outlined text-primary group-hover:text-brandNavy">search</span>
              </div>
              <h3 className="text-lg font-bold text-brandNavy dark:text-white mb-4">{t('strategic_sourcing')}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t('strategic_sourcing_desc')}</p>
            </div>
            <div className="p-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                <span className="material-icons-outlined text-primary group-hover:text-brandNavy">inventory_2</span>
              </div>
              <h3 className="text-lg font-bold text-brandNavy dark:text-white mb-4">{t('qa_card_title')}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t('qa_card_desc')}</p>
            </div>
            <div className="p-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                <span className="material-icons-outlined text-primary group-hover:text-brandNavy">local_shipping</span>
              </div>
              <h3 className="text-lg font-bold text-brandNavy dark:text-white mb-4">{t('logistics_mgmt')}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t('logistics_mgmt_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why Choose Us (Quadrant Grid) */}
      <section className="py-24 bg-[#0B1221] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">{language === 'ar' ? 'لماذا تختارنا' : (language === 'fr' ? 'POURQUOI NOUS CHOISIR' : 'WHY CHOOSE US')}</span>
              <h2 className="text-4xl font-display font-extrabold mb-10 leading-tight max-w-md">{t('ideal_choice_title')}</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-icons-round text-primary mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('unmatched_network')}</h4>
                    <p className="text-sm text-slate-300">{t('unmatched_network_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-icons-round text-primary mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('total_transparency')}</h4>
                    <p className="text-sm text-slate-300">{t('total_transparency_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-icons-round text-primary mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('risk_mitigation')}</h4>
                    <p className="text-sm text-slate-300">{t('risk_mitigation_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Revised 4-Quadrant Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                {/* Top Left: Shipping Containers */}
                <img 
                  alt="Shipping Containers" 
                  className="rounded-xl h-64 w-full object-cover shadow-2xl" 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                />
                {/* Bottom Left: Commitment Text Block */}
                <div className="bg-[#12325F]/60 backdrop-blur-md p-8 rounded-xl border border-white/5 shadow-2xl flex flex-col justify-center min-h-[200px]">
                   <span className="material-icons-round text-primary mb-4 text-3xl">verified_user</span>
                   <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{t('trust_integrity_title')}</h4>
                   <p className="text-[11px] text-slate-300 leading-relaxed italic">
                     "{t('trust_integrity_quote')}"
                   </p>
                </div>
              </div>
              <div className="space-y-4">
                {/* Top Right: Laptop / Analytics */}
                <img 
                  alt="Trade Analytics" 
                  className="rounded-xl h-48 w-full object-cover shadow-2xl" 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                />
                {/* Bottom Right: Brainstorming Meeting (sticky notes) */}
                <img 
                  alt="Business Brainstorming" 
                  className="rounded-xl h-64 w-full object-cover shadow-2xl border border-white/5" 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact / Inquiry Form */}
      <section className="py-24 bg-white dark:bg-background-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-accentGold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">{language === 'ar' ? 'تواصل معنا' : (language === 'fr' ? 'CONTACTEZ-NOUS' : 'GET IN TOUCH')}</span>
              <h2 className="text-4xl font-display font-extrabold text-brandNavy dark:text-white mb-6">{t('discuss_next_deal')}</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-12 text-sm leading-relaxed max-w-md">
                {t('discuss_next_deal_desc')}
              </p>
              
              {submitted ? (
  <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-8 rounded-xl border border-green-100 dark:border-green-800">
    {t('success_msg')}
  </div>
) : (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="grid grid-cols-2 gap-4">

      <input
        required
        type="text"
        placeholder={t('full_name')}
        value={formState.name}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        className="w-full px-4 py-3 text-black placeholder-gray-500 bg-white dark:text-black dark:placeholder-gray-500 dark:bg-white"
      />

      <input
        required
        type="email"
        placeholder={t('email')}
        value={formState.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormState({ ...formState, email: e.target.value })
        }
        className="w-full px-4 py-3 text-black placeholder-gray-500 bg-white dark:text-black dark:placeholder-gray-500 dark:bg-white"
      />

    </div>   {/* ← مهم جدًا: قفل div grid هنا */}

    <input
      required
      type="text"
      placeholder={t('subject')}
      value={formState.subject}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setFormState({ ...formState, subject: e.target.value })
      }
     className="w-full px-4 py-3 text-black placeholder-gray-500 bg-white dark:text-black dark:placeholder-gray-500 dark:bg-white"
    />

    <textarea
      required
      rows={4}
      placeholder={t('message')}
      value={formState.message}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setFormState({ ...formState, message: e.target.value })
      }
      className="w-full px-4 py-3 text-black placeholder-gray-500 bg-white dark:text-black dark:placeholder-gray-500 dark:bg-white"
    />

    <button
      type="submit"
      className="w-full py-4 bg-brandNavy dark:bg-slate-800 text-white font-bold rounded-lg shadow-xl hover:brightness-110 transition"
    >
      {t('send_inquiry')}
    </button>

  </form>
)}
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
              <img 
                alt="Sea Background" 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-brandNavy/20"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-sm w-full border border-white/20">
                  <h3 className="text-xl font-bold text-brandNavy dark:text-white mb-8">{t('contact_info')}</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-icons-outlined text-primary text-xl">location_on</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">{t('103 Đ. Âu Cơ, Tứ Liên, Tây Hồ, Hà Nội 100000')}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-icons-outlined text-primary text-xl">mail</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">info@idealdealvn.com</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">call</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">+84 (0) 8282 78 808</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
