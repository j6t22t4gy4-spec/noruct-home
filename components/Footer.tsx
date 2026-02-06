
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-blue-900">{t('common.appName')}</span>
            </Link>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed">
              {t('home.heroSub')}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('common.product')}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-blue-600">{t('common.features')}</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600">{t('common.pricing')}</Link></li>
              <li><a href="https://noruct.app" className="hover:text-blue-600">Web App</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('common.company')}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link to="/company" className="hover:text-blue-600">{t('company.storyTag')}</Link></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('common.contact')}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="mailto:support@noruct.com" className="hover:text-blue-600">support@noruct.com</a></li>
              <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} {t('common.appName')} Inc. {t('common.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
