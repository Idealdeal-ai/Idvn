
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../App';
import axios from 'axios';

interface ProductCardProps {
  category: string;
  title: string;
  desc: string;
  infoLabel: string;
  infoValue: string;
  images: string[];
  onInteraction?: () => void;
}
const tabs = [
  { key: "all_sectors", label: "All Sectors" },
  { key: "agriculture", label: "Agriculture" },
  { key: "food", label: "Food Processing" },
  { key: "textile", label: "Textile" },
];
const ProductCarousel: React.FC<{ images: string[], title: string, onInteraction?: () => void }> = ({ images, title, onInteraction }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 const next = async (e: React.MouseEvent) => {
  e.stopPropagation();
  e.preventDefault();

  setCurrentIndex((prev) => (prev + 1) % images.length);

  // AI interaction trigger
  if (onInteraction) {
    onInteraction();
  }
};

const prev = async (e: React.MouseEvent) => {
  e.stopPropagation();
  e.preventDefault();

  setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // AI interaction trigger
  if (onInteraction) {
    onInteraction();
  }
};
  return (
    <div className="relative h-64 overflow-hidden group/carousel rounded-t-lg">
      <div 
        className="flex h-full transition-transform duration-500 ease-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`${title} view ${idx + 1}`} 
            className="w-full h-full object-cover flex-shrink-0" 
          />
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-primary border border-white/30"
          >
            <span className="material-icons text-xl">chevron_left</span>
          </button>
          <button 
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-primary border border-white/30"
          >
            <span className="material-icons text-xl">chevron_right</span>
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-4' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const AgricultureCard: React.FC<ProductCardProps> = ({ category, title, desc, infoLabel, infoValue, images, onInteraction }) => (
  <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-slate-100 dark:border-slate-800">
    <ProductCarousel images={images} title={title} onInteraction={onInteraction} />
    <div className="p-8 flex flex-col flex-grow">
      <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-2 block">{category}</span>
      <h3 className="text-xl font-bold text-brandNavy dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-10 flex-grow">{desc}</p>
      <div className="flex justify-between items-center pt-6 border-t border-slate-50 dark:border-slate-800">
        <span className="text-[11px] font-medium text-slate-400 tracking-wide">{infoLabel}: {infoValue}</span>
        <button className="text-primary hover:translate-x-2 transition-transform" onClick={onInteraction}>
          <span className="material-icons-round">east</span>
        </button>
      </div>
    </div>
  </div>
);

const Products: React.FC = () => {
  const { t, language } = useLanguage();

  const [activeTab, setActiveTab] = useState<'all_sectors' | 'agriculture' | 'manufacturing' | 'consumer_goods'>('all_sectors');
  const [history, setHistory] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const recSectionRef = useRef<HTMLDivElement>(null);

  const tabs: { key: 'all_sectors' | 'agriculture' | 'manufacturing' | 'consumer_goods'; label: string }[] = [
  { key: 'all_sectors', label: t('all_sectors') },
  { key: 'agriculture', label: t('agriculture') },
  { key: 'manufacturing', label: t('manufacturing') },
  { key: 'consumer_goods', label: t('consumer_goods') },
  ];

  const trackInteraction = (productName: string) => {
    setHistory(prev => {
      const updated = [productName, ...prev.filter(p => p !== productName)].slice(0, 5);
      return updated;
    });
  };

  const handleAIInteraction = async (productName: string) => {
    try {
      await axios.post("http://localhost:3001/track", {
        product: productName,
        tab: activeTab,
        history
      });
    } catch (err) {
      console.error("AI tracking error:", err);
    }
  };
    
  const getAiRecommendations = async () => {
  if (isAiLoading) return;
  setIsAiLoading(true);

  try {
    const res = await axios.post("http://localhost:3001/recommend", {
      tab: activeTab,
      history
    });

    if (Array.isArray(res.data)) {
      setRecommendations(res.data);
    } else if (Array.isArray(res.data?.Products)) {
      setRecommendations(res.data.Products);
    } else {
      setRecommendations([]);
    }

    recSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  } catch (err) {
    console.error("AI recommendation error:", err);
  } finally {
    setIsAiLoading(false);
  }
};

  // Trigger recommendations automatically after 3 interactions or manually
useEffect(() => {
  if (
    history.length >= 3 &&
    Array.isArray(recommendations) &&
    recommendations.length === 0 &&
    !isAiLoading
  ) {
    getAiRecommendations();
  }
}, [history, recommendations, isAiLoading]);

  const agricultureData = [
    {
      category: 'EXPORTS',
      title: 'Premium Coffee Beans',
      desc: 'Sourced from the Central Highlands, our Robusta and Arabica beans meet international standards for aroma and flavor profile.',
      infoLabel: 'Certifications',
      infoValue: 'FairTrade, Organic',
      images: [
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497933321188-941f9ad36b12?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      category: 'PREMIUM GRADE',
      title: 'Processed Cashew Nuts',
      desc: "Vietnam's finest cashews, available in various grades (W240, W320). Processed with state-of-the-art hygiene technology.",
      infoLabel: 'Packaging',
      infoValue: 'Bulk, Retail',
      images: [
        'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1623110503978-66ef816f1a8b?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      category: 'SPECIALTY',
      title: 'Black & White Pepper',
      desc: 'High-density peppercorns with intense pungency. Cleaned and graded using ultrasonic and steam sterilization methods.',
      infoLabel: 'Origins',
      infoValue: 'Binh Phuoc, Gia Lai',
      images: [
        'https://images.unsplash.com/photo-1554973653-c9071bd14011?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509358271172-ca8135c65927?q=80&w=2070&auto=format&fit=crop'
      ]
    }
  ];

  const manufacturingIcons = [
    { icon: 'precision_manufacturing', title: 'Precision Components', desc: 'Mechanical parts and electronics assembly for the global tech supply chain.' },
    { icon: 'chair', title: 'Wooden Furniture', desc: 'Sustainably sourced acacia and teak furniture for indoor and outdoor use.' },
    { icon: 'eco', title: 'Eco-Packaging', desc: 'Biodegradable packaging solutions for food service and retail sectors.' },
    { icon: 'architecture', title: 'Raw Materials', desc: 'Cement, clinker, and steel exports for international infrastructure projects.' },
  ];

  const consumerImages = [
    'https://images.unsplash.com/photo-1590080875515-8a03b1447d90?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563911191470-85aa161b4028?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <div className="pt-20 bg-[#F8FAFC] dark:bg-background-dark min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#2D4A53]">
        <img 
          alt="World Map Overlay" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Industries & Products
          </h1>
          <div className="flex justify-center items-start gap-8 max-w-2xl mx-auto border-l-4 border-primary pl-8 text-left">
             <p className="text-xl text-slate-200 font-light leading-relaxed">
               Connecting Vietnam's manufacturing excellence and natural abundance to the global marketplace with unwavering reliability and deep industry expertise.
             </p>
          </div>
        </div>

        {/* Floating Tab Bar */}
        <div className="absolute -bottom-10 left-0 w-full px-4 z-[60]">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-full p-2 flex justify-center gap-2 border border-slate-100 dark:border-slate-800">
         
         
          {tabs.map((tab) => (
  <button

    key={tab.key}
    onClick={() => setActiveTab(tab.key)}
    className={`px-8 py-4 rounded-full transition-all font-bold text-[11px] tracking-[0.1em] uppercase whitespace-nowrap
  ${
    activeTab === tab.key
      ? 'bg-brandNavy text-white shadow-lg scale-105'
      : 'bg-transparent text-black hover:text-brandNavy hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800'
  }
`}
  >
    {tab.label}
  </button>
))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        
        {/* Agriculture Section */}
       {(activeTab === 'all_sectors' || activeTab === 'agriculture') && (
  <section className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-2xl font-display font-bold text-primary italic whitespace-nowrap">01. Agriculture</h2>
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800/50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {agricultureData.map((item, idx) => (
                <AgricultureCard 
                  key={idx} 
                  {...item} 
                  onInteraction={() => trackInteraction(item.title)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Manufacturing Section */}
        {(activeTab === 'all_sectors' || activeTab === 'manufacturing') && (
          <section className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-2xl font-display font-bold text-primary italic whitespace-nowrap">02. Manufacturing</h2>
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800/50"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              <div 
                className="relative group rounded-2xl overflow-hidden shadow-sm h-[600px] flex flex-col justify-end cursor-pointer"
                onClick={() => trackInteraction('Textile OEM')}
              >
                <img 
                  alt="Textile Manufacturing" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandNavy via-brandNavy/30 to-transparent"></div>
                <div className="relative p-12 text-white z-10">
                  <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-3 block">INDUSTRIAL SCALE</span>
                  <h3 className="text-4xl font-display font-bold mb-6">Textile & Apparel OEM</h3>
                  <p className="text-slate-300 mb-10 max-w-md leading-relaxed">
                    Full-cycle production services for global fashion brands, utilizing Vietnam's highly skilled workforce and modern garment facilities.
                  </p>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all">Custom Sizing</button>
                    <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all">Sustainable Fabrics</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {manufacturingIcons.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => trackInteraction(item.title)}
                    className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brandNavy dark:text-primary mb-8 group-hover:scale-110 transition-transform">
                      <span className="material-icons-round text-3xl">{item.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-brandNavy dark:text-white mb-4 leading-tight">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Consumer Goods Section */}
        {(activeTab === 'all_sectors' || activeTab === 'consumer_goods') && (
          <section className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-2xl font-display font-bold text-primary italic whitespace-nowrap">03. Consumer Goods</h2>
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800/50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {consumerImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => trackInteraction('Consumer Item ' + (idx + 1))}
                  className="rounded-2xl overflow-hidden h-[450px] shadow-sm hover:shadow-2xl transition-all group relative cursor-pointer"
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Consumer Product" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AI Recommendations Section */}
        <section ref={recSectionRef} className="mt-24 pt-24 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons-round">auto_awesome</span>
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white">{t('ai_recommended')}</h2>
                <p className="text-sm text-slate-500">{language === 'ar' ? 'توصيات ذكية بناءً على اهتماماتك' : 'Smart matches based on your trading focus'}</p>
              </div>
            </div>
            <button 
              onClick={getAiRecommendations}
              disabled={isAiLoading}
              className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg text-xs tracking-widest uppercase transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isAiLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  {t('ai_analyzing')}
                </>
              ) : (
                <>
                  <span className="material-icons text-sm">refresh</span>
                  {language === 'ar' ? 'تحديث' : 'REFRESH INSIGHTS'}
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isAiLoading ? (
              [1, 2, 3].map(i => (
                <div key={i} className="h-[300px] bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse border border-slate-200 dark:border-slate-700"></div>
              ))
            ) : recommendations.length > 0 ? (
              recommendations.map((rec, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-primary/20 shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-transform">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors"></div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase rounded-full mb-6">
                    <span className="material-icons text-[14px]">psychology</span>
                    {t('ai_insight')}
                  </span>
                  <h4 className="text-xl font-bold text-brandNavy dark:text-white mb-3">{rec.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">{rec.description}</p>
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] text-primary font-bold italic leading-relaxed">
                      "{rec.reason}"
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-slate-50 dark:bg-slate-900/40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                <span className="material-icons text-4xl text-slate-300 dark:text-slate-700 mb-4">history_toggle_off</span>
                <p className="text-slate-500 text-sm">{t('ai_no_data')}</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Stats Strip */}
      <section className="bg-brandNavy py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { value: '35+', label: 'PRODUCTS SOURCED' },
            { value: '07+', label: 'PARTNER COUNTRIES' },
            { value: '100%', label: 'QUALITY VERIFIED' },
            { value: '24/7', label: 'GLOBAL SUPPORT' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 border-r last:border-0 border-white/10 px-6">
              <span className="text-5xl font-bold text-primary mb-3">{stat.value}</span>
              <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-white dark:bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-display font-bold text-primary mb-8 tracking-tight uppercase">Talk To Us</h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl mb-14 leading-relaxed max-w-3xl mx-auto">
            At Ideal Deal Vietnam, we value clear communication and strong partnerships. Whether you're seeking reliable suppliers, business collaborations, or product information, our team is ready to assist with professionalism and efficiency.
          </p>
          <a 
            href="#/contact" 
            className="inline-block px-14 py-6 bg-primary text-brandNavy font-black rounded-xl shadow-[0_20px_40px_rgba(217,168,78,0.2)] hover:shadow-[0_25px_50px_rgba(217,168,78,0.3)] hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em] text-sm"
          >
            CONTACT US NOW
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
