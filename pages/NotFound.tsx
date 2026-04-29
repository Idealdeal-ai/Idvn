import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const NotFound: React.FC = () => {
  const { language } = useLanguage();

  const messages: Record<string, { heading: string; body: string; cta: string }> = {
    en: { heading: 'Page Not Found', body: "The page you're looking for doesn't exist or has been moved.", cta: 'Back to Home' },
    ar: { heading: 'الصفحة غير موجودة', body: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.', cta: 'العودة إلى الرئيسية' },
    vi: { heading: 'Không Tìm Thấy Trang', body: 'Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.', cta: 'Về Trang Chủ' },
    zh: { heading: '页面未找到', body: '您正在查找的页面不存在或已被移动。', cta: '返回首页' },
    es: { heading: 'Página No Encontrada', body: 'La página que busca no existe o ha sido movida.', cta: 'Volver al Inicio' },
    fr: { heading: 'Page Introuvable', body: 'La page que vous cherchez n\'existe pas ou a été déplacée.', cta: 'Retour à l\'Accueil' },
  };

  const msg = messages[language] || messages.en;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-background-dark px-4 pt-20">
      <div className="text-center max-w-md">
        <p className="text-8xl font-extrabold text-primary mb-4">404</p>
        <h1 className="text-3xl font-bold text-brandNavy dark:text-white mb-4">
          {msg.heading}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          {msg.body}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-brandNavy font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all"
        >
          <span className="material-icons-outlined">arrow_back</span>
          {msg.cta}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
