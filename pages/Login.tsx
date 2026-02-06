
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { supabase } from '../supabaseService';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleOAuthLogin = async (provider: 'google' | 'apple') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) {
      console.error('OAuth Error:', error.message);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 bg-white flex flex-col items-center">
      <div className="max-w-md w-full px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-widest text-blue-900 mb-4">{t('common.appName')}</h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('auth.loginTitle')}</h2>
          <p className="text-slate-500">{t('auth.loginSub')}</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleOAuthLogin('google')}
            className="w-full flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
            {t('auth.google')}
          </button>

          <button
            onClick={() => handleOAuthLogin('apple')}
            className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-sm active:scale-95"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.85 17.5 4.3 12.5 6.55 10.3c1.13-1.12 2.5-1.12 3.52-.4.6.43 1.15.4 1.74 0 .9-.68 2.5-.88 3.6.4 2.1 1.25 1.7 4.2 1.7 4.2-.02.04-.04.08-.06.12-.48 1.4-.92 2.76-2.02 4.06zm-4.76-13.3c-.3 2.53-2.3 4.45-4.58 4.3.05-2.4 2.1-4.5 4.58-4.3z" />
            </svg>
            {t('auth.apple')}
          </button>
        </div>

        <div className="my-8 flex items-center gap-4 text-slate-300">
          <div className="h-px bg-slate-100 flex-1"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('auth.or')}</span>
          <div className="h-px bg-slate-100 flex-1"></div>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
              {t('auth.email')}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-slate-700 bg-slate-50/50"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
              {t('auth.password')}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-slate-700 bg-slate-50/50"
              placeholder="••••••••"
            />
          </div>

          {errorMsg && (
            <div className="text-red-500 text-sm font-medium px-1">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95 disabled:opacity-50"
          >
            {loading ? '...' : t('auth.loginWithEmail')}
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-400">
            {t('common.appName')} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
