
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { supabase } from '../supabaseService';
import { Check } from 'lucide-react';

const Signup: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const handleComplete = async () => {
    if (!agreed.terms || !agreed.privacy) return;

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      // Create profile record in profiles table
      const { error } = await supabase
        .from('profiles')
        .upsert({ 
          id: user.id, 
          email: user.email, 
          terms_agreed: true,
          marketing_agreed: agreed.marketing 
        });
      
      if (!error) {
        navigate('/');
      } else {
        console.error('Profile creation error:', error.message);
      }
    }
  };

  const allAgreed = agreed.terms && agreed.privacy && agreed.marketing;

  const toggleAll = () => {
    const newVal = !allAgreed;
    setAgreed({ terms: newVal, privacy: newVal, marketing: newVal });
  };

  return (
    <div className="min-h-screen pt-32 pb-16 bg-white flex flex-col items-center">
      <div className="max-w-md w-full px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('auth.signupTitle')}</h2>
          <p className="text-slate-500">{t('auth.signupSub')}</p>
        </div>

        <div className="space-y-6">
          <button 
            onClick={toggleAll}
            className="w-full flex items-center gap-3 p-4 border border-blue-100 bg-blue-50/30 rounded-2xl text-slate-700 font-bold hover:bg-blue-50 transition-all"
          >
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${allAgreed ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}>
              <Check className={`w-3 h-3 text-white ${allAgreed ? 'block' : 'hidden'}`} />
            </div>
            {t('auth.agreeAll')}
          </button>

          <div className="space-y-4 px-2">
            {[
              { id: 'terms', label: t('auth.termsTitle'), required: true },
              { id: 'privacy', label: t('auth.privacyTitle'), required: true },
              { id: 'marketing', label: t('auth.marketingTitle'), required: false },
            ].map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={(agreed as any)[item.id]} 
                  onChange={() => setAgreed(prev => ({ ...prev, [item.id]: !(prev as any)[item.id] }))} 
                />
                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                  (agreed as any)[item.id] ? 'bg-blue-600 border-blue-600' : 'border-slate-300 group-hover:border-blue-400'
                }`}>
                  <Check className={`w-3 h-3 text-white ${(agreed as any)[item.id] ? 'block' : 'hidden'}`} />
                </div>
                <span className="text-slate-600 text-sm">{item.label}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleComplete}
            disabled={!agreed.terms || !agreed.privacy}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            {t('auth.complete')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
