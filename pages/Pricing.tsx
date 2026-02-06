
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plan = {
    name: t('pricing.basic.name'),
    price: '₩13,900',
    description: t('pricing.basic.desc'),
    features: [
      t('pricing.features.projects'),
      t('pricing.features.analytics'),
      t('pricing.features.support'),
      t('pricing.features.integrations'),
      t('pricing.features.collaboration'),
      t('pricing.features.sync'),
    ],
    cta: t('pricing.basic.cta'),
  };

  return (
    <div className="pt-24 pb-16 min-h-[calc(100vh-80px)] flex flex-col items-center">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{t('pricing.title')}</h1>
          <p className="text-lg text-slate-600 max-w-lg mx-auto">{t('pricing.sub')}</p>
        </div>

        <div className="w-full max-w-md">
          <div 
            className="relative p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-blue-100 transition-all hover:shadow-blue-200"
          >
            {/* 'Recommended' badge and related logic removed as requested */}
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">{plan.name}</h3>
            <p className="text-slate-500 text-sm mb-8 text-center">{plan.description}</p>
            
            <div className="flex items-baseline justify-center mb-10">
              <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
              <span className="text-slate-500 ml-2 text-lg">/{t('pricing.month')}</span>
            </div>
            
            <ul className="space-y-4 mb-12">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-4 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <a 
              href="https://noruct.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              {plan.cta}
            </a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-4">{t('pricing.alreadySubscribed')}</p>
          <Link to="/account" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-2">
            {t('pricing.manageBilling')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
