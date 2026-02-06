
import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Layout, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('home.feature1Title'),
      description: t('home.feature1Desc'),
      icon: <Layout className="w-6 h-6 text-blue-600" />
    },
    {
      title: t('home.feature2Title'),
      description: t('home.feature2Desc'),
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: t('home.feature3Title'),
      description: t('home.feature3Desc'),
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: t('home.feature4Title'),
      description: t('home.feature4Desc'),
      icon: <Users className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] gradient-bg pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            {t('home.heroTitle1')} <br/><span className="text-blue-600">{t('home.heroTitle2')}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            {t('home.heroSub')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://noruct.app" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
              {t('common.getStarted')} <ArrowRight className="w-5 h-5" />
            </a>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              {t('common.watchDemo')}
            </button>
          </div>
          
          <div className="mt-20 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Noruct App Interface" 
              className="w-full h-auto object-cover opacity-90 max-h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('home.featuresTitle')}</h2>
            <p className="text-slate-600">{t('home.featuresSub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-6 h-6 text-blue-600 group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 italic">{t('home.ctaTitle')}</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            {t('home.ctaSub')}
          </p>
          <a href="https://noruct.app" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
            Go to noruct.app
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
