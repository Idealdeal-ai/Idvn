import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useLanguage } from '../App';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isTrackLoading, setIsTrackLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsTrackLoading(true);
    setTrackingResult(null);

    // Enhanced Mock tracking logic
    setTimeout(() => {
      setIsTrackLoading(false);
      const num = trackingNumber.toUpperCase().trim();
      
      // Validation: Must start with IDV and be at least 5 characters total
      const isValidFormat = num.startsWith('IDV') && num.length >= 5;

      if (!isValidFormat) {
        setTrackingResult('error');
        return;
      }

      if (num.includes('123')) {
        setTrackingResult({
          id: num,
          status: t('status_delivered'),
          location: 'Ho Chi Minh City, VN',
          date: '2025-05-10',
          progress: 100
        });
      } else if (num.includes('456')) {
        setTrackingResult({
          id: num,
          status: t('status_in_transit'),
          location: 'Singapore Hub',
          date: '2025-05-14',
          progress: 65
        });
      } else if (num.includes('789')) {
        setTrackingResult({
          id: num,
          status: t('status_processing'),
          location: 'Industrial Warehouse, Binh Duong',
          date: '2025-05-15',
          progress: 25
        });
      } else {
        // Valid format but unknown ID
        setTrackingResult({
          id: num,
          status: t('status_pending'),
          location: 'Vietnam Origin Port',
          date: '2025-05-16',
          progress: 10
        });
      }
    }, 1500); // Slightly increased delay for better visual feedback of the spinner
  };

  const services = [
    {
      title: t('sourcing'),
      num: '01',
      icon: 'search',
      desc: t('sourcing_desc'),
      points: language === 'ar' ? [
        'بحث عميق في السوق ومقارنة الأسعار',
        'المساعدة في تطوير المنتجات المخصصة',
        'الحصول على العينات ومراجعتها'
      ] : (language === 'vi' ? [
        'Nghiên cứu thị trường sâu và định giá cạnh tranh',
        'Hỗ trợ phát triển sản phẩm tùy chỉnh',
        'Thu thập và đánh giá mẫu hàng'
      ] : (language === 'zh' ? [
        '深入的市场调研和价格基准测试',
        '定制化产品开发协助',
        '样品获取和审查'
      ] : (language === 'es' ? [
        'Investigación profunda de mercado y comparación de precios',
        'Asistencia en el desarrollo de productos personalizados',
        'Adquisición y revisión de muestras'
      ] : (language === 'fr' ? [
        'Étude de marché approfondie et analyse comparative des prix',
        'Aide au développement de produits personnalisés',
        'Acquisition et examen d\'échantillons'
      ] : [
        'Deep market research and price benchmarking',
        'Custom product development assistance',
        'Sample acquisition and review'
      ])))),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvdJhaYTyxILuNBEVJJ9Z0IAJIjB917Cs2aLBpIuiBPht3bUZ2uFju1Ynl84ARF6PdV-J6KAdmZamKkzkm8Sa6OpEIv0N1VeTcI5G-FQYS_u-RV1EKQErhNoMbk1-80AmYNJZmMkyTULyTsQuNtvJmZ1NFpF-Xpl8OdMUtcZT-K_w_VY0XA1xkybyUuY8MfJXp7EzxvMzhoqjhHNQvLfDvE4VCrrJ0FCYma1E2SE91nBhU2OQgH0DcHuNgetidUB_4EkrUZCPR9PY'
    },
    {
      title: t('supplier_id'),
      num: '02',
      icon: 'handshake',
      desc: t('supplier_desc'),
      points: language === 'ar' ? [
        'تدقيق صارم للمصانع وفحص الخلفية',
        'التحقق من القدرة الإنتاجية',
        'التفاوض على العقود والحماية القانونية'
      ] : (language === 'vi' ? [
        'Kiểm tra nhà máy và thẩm định lý lịch nghiêm ngặt',
        'Xác minh năng lực sản xuất thực tế',
        'Thương lượng hợp đồng và bảo vệ pháp lý'
      ] : (language === 'zh' ? [
        '严格的工厂审计和背景调查',
        '生产能力验证',
        '合同谈判和法律保护'
      ] : (language === 'es' ? [
        'Auditorías de fábrica rigurosas y verificaciones de antecedentes',
        'Verificación de la capacidad de producción',
        'Negociación de contratos y protección legal'
      ] : (language === 'fr' ? [
        'Audits d\'usine rigoureux et vérification des antécédents',
        'Vérification de la capacité de production',
        'Négociation de contrats et de protection juridique'
      ] : [
        'Rigorous factory audits and background checks',
        'Production capacity verification',
        'Contract negotiation and legal protection'
      ])))),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgyeAawBAeLy5HauCVdlJpMqh0MWh1SG_S0RsK38FELhr2wlW5DsahrJTUbd_0ikfjM82Slh-kypPSUf3CSHUqMZBgty1fFXlqfGXzUtGICnJJbmnxKZ73cKrrAxp0PSSXI3t6V1WwUCmVz9Rs1mRoH6aWypatW67Rq7itSHrASXKThe4kMSD4I4Q8ccZZsimRc3-Mzmt-Yr5w4vODHVvZ1EGj6CztBN69JfZ60Snr3a5FEgscacunf9hG3lCF1OF6p2KnFmNy3KQ'
    },
    {
      title: t('quality_assurance'),
      num: '03',
      icon: 'verified',
      desc: t('qa_desc'),
      points: language === 'ar' ? [
        'عمليات التفتيش قبل وأثناء الإنتاج',
        'عمليات التفتيش العشوائية النهائية (FRI)',
        'تقرير جودة مفصل مع أدلة صور وفيديو'
      ] : (language === 'vi' ? [
        'Kiểm tra trước và trong quá trình sản xuất',
        'Kiểm tra ngẫu nhiên cuối cùng (FRI)',
        'Báo cáo chất lượng chi tiết với bằng chứng ảnh/video'
      ] : (language === 'zh' ? [
        '生产前和生产中检查',
        '最终随机抽检 (FRI)',
        '带有照片/视频证据的详细质量报告'
      ] : (language === 'es' ? [
        'Inspecciones previas y durante la producción',
        'Inspecciones aleatorias finales (FRI)',
        'Informe de calidad detallado con evidencia de fotos y video'
      ] : (language === 'fr' ? [
        'Inspections avant et en cours de production',
        'Inspections aléatoires finales (FRI)',
        'Rapport de qualité détaillé avec preuves photos et vidéos'
      ] : [
        'Pre production and mid production inspections',
        'Final random inspections (FRI)',
        'Detailed quality report with photo/video evidence'
      ])))),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqvYWsdEAMUTk8kZapDNhOLPMlA5x1jO2rQhpJJQmh2kZGf65b_b47uuHNOLKrLCedocss8qvDeYalFFJrMaBRq8kfUqArulIerlyOG5K0Pci7bma7Y6tJwuDkfc9P5-MW74AZcfXdKnQnmrhLH2c6VHEEolaD3p48v7ZNz0PyhiqGfXJ6Lg4pQMDhS--4JzGa-SFmoLPvB6O1QJ0rCzqpfv_ha-L_SxbPjzejYFTpu8yVAwOXduysmfamnimi7GCCcEh7QoszdPg'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brandNavy">
        <div className="absolute inset-0 opacity-20">
          <img 
            alt="Shipping Containers Background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAPPPljFkibNfOaI4XJZKj80f40rg22A8DDds052dz1ywAyG6gyNfFQndEanBZ3EJkp4GxxFFk70MmsUKeUm1V1TOFqkXad-aVDF3ko4TxxOiK-CbZiC861xIqlPQlzXahuocIeVGOn3FmTZfzn5NWhkJmOR_yuKms2m2wPhv2M_4W5z9YRskNJG4foYOx90XNVWMmRuDCSox8BUJbDbN9yitZ4j70o62e1DUuuEBXTxiey6U76JzOovSmED3ymNFSbY0HXXBKfmM"
          />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-r ${language === 'ar' ? 'from-transparent via-brandNavy/80 to-brandNavy' : 'from-brandNavy via-brandNavy/80 to-transparent'}`}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="text-primary font-bold tracking-widest text-sm mb-4 block uppercase">
            {language === 'ar' ? 'حلول التجارة العالمية' : (language === 'vi' ? 'GIẢI PHÁP THƯƠNG MẠI TOÀN CẦU' : (language === 'zh' ? '全球贸易解决方案' : (language === 'es' ? 'SOLUCIONES DE COMERCIO GLOBAL' : (language === 'fr' ? 'SOLUTIONS DE COMMERCE MONDIAL' : 'GLOBAL TRADE SOLUTIONS'))))}
          </span>
          <h1 className="text-5xl md:text-7xl font-display mb-6">{t('services_hero_title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            {t('services_hero_desc')}
          </p>
        </div>
      </section>

      {/* Shipment Tracking Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden relative">
            <div className={`absolute top-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-32 h-32 bg-primary/5 rounded-full -translate-y-12 translate-x-12 blur-2xl`}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center text-brandNavy shadow-lg">
                  <span className="material-icons-round">local_shipping</span>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-extrabold text-brandNavy dark:text-white uppercase tracking-tight">
                    {t('track_shipment')}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-wider uppercase mt-0.5">
                    {language === 'ar' ? 'تتبع فوري' : (language === 'vi' ? 'THEO DÕI THỜI GIAN THỰC' : (language === 'zh' ? '实时追踪' : (language === 'es' ? 'SEGUIMIENTO EN TIEMPO REAL' : (language === 'fr' ? 'SUIVI EN TEMPS RÉEL' : 'REAL-TIME TRACKING'))))}
                  </p>
                </div>
              </div>

              <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow relative">
                  <input 
                    type="text" 
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder={t('tracking_placeholder')}
                    className="w-full px-6 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium"
                  />
                </div>
                <button 
                  disabled={isTrackLoading}
                  className="bg-brandNavy dark:bg-primary text-white dark:text-brandNavy font-black px-10 py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 uppercase tracking-widest text-xs flex items-center justify-center gap-3 min-w-[160px]"
                >
                  {isTrackLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white dark:border-brandNavy border-t-transparent rounded-full animate-spin"></div>
                      <span className="opacity-70">{language === 'ar' ? 'جاري التحميل...' : (language === 'vi' ? 'ĐANG XỬ LÝ...' : 'TRACKING...')}</span>
                    </>
                  ) : (
                    t('track_now')
                  )}
                </button>
              </form>

              {/* Enhanced Results Area with Loading State */}
              <div className="mt-8">
                {isTrackLoading && (
                  <div className="py-12 flex flex-col items-center justify-center animate-in fade-in duration-300">
                    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest animate-pulse">
                      {language === 'ar' ? 'جارٍ جلب البيانات...' : (language === 'vi' ? 'ĐANG LẤY DỮ LIỆU...' : 'FETCHING DATA...')}
                    </p>
                  </div>
                )}

                {!isTrackLoading && trackingResult === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-800 text-sm font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <span className="material-icons-round">error_outline</span>
                    {t('shipment_not_found')}
                  </div>
                )}

                {!isTrackLoading && trackingResult && trackingResult !== 'error' && (
                  <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{t('status_label')}</p>
                        <h3 className="text-xl font-extrabold text-primary flex items-center gap-2">
                          <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                          {trackingResult.status}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{t('location_label')}</p>
                        <p className="text-lg font-bold text-brandNavy dark:text-white">{trackingResult.location}</p>
                      </div>
                    </div>

                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2.5 mb-4 text-xs flex rounded-full bg-slate-200 dark:bg-slate-700">
                        <div 
                          style={{ width: `${trackingResult.progress}%` }} 
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center gold-gradient transition-all duration-1000 ease-out"
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span>Vietnam Hub</span>
                        <span>Transit</span>
                        <span>Destination</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refactored Services Grid Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={service.img}
                  />
                  <div className={`absolute top-6 ${language === 'ar' ? 'right-6' : 'left-6'} gold-gradient p-3.5 rounded-2xl shadow-xl z-10 border border-white/20`}>
                    <span className="material-icons-round text-3xl text-brandNavy">{service.icon}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/40 to-transparent"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary font-black text-xl italic leading-none">{service.num}.</span>
                    <h3 className="text-2xl font-display font-extrabold text-brandNavy dark:text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 group/item">
                        <span className="material-icons-round text-primary text-xl flex-shrink-0 transition-transform group-hover/item:scale-110">check_circle</span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-slate-50 dark:border-slate-800">
                    <button className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest hover:gap-3 transition-all">
                      {t('learn_more')}
                      <span className={`material-icons-round text-sm ${language === 'ar' ? 'rotate-180' : ''}`}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy relative overflow-hidden">
        <div className={`absolute top-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-1/2 h-full gold-gradient ${language === 'ar' ? '-skew-x-12 -translate-x-32' : 'skew-x-12 translate-x-32'} opacity-10`}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">{t('ready_expand')}</h2>
          <p className="text-xl text-slate-300 mb-10">
            {t('ready_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
  to="/contact"
  className="gold-gradient text-brandNavy px-10 py-4 rounded-lg font-bold text-lg shadow-2xl transition-transform hover:scale-105 inline-flex items-center justify-center"
>
  {t('request_quote')}
</Link>
           <Link
  to="/contact"
  className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
>
  {t('case_studies')}
</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
