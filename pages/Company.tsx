
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Company: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">{t('company.storyTag')}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t('company.title')}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('company.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('company.missionTitle')}</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('company.missionDesc1')}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t('company.missionDesc2')}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" alt="Noruct Office" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">{t('company.statsTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-extrabold text-blue-600 mb-2">10k+</div>
              <div className="text-slate-500 text-sm">{t('company.activeUsers')}</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-blue-600 mb-2">50+</div>
              <div className="text-slate-500 text-sm">{t('company.countries')}</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-500 text-sm">{t('company.uptime')}</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-500 text-sm">{t('company.support')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
