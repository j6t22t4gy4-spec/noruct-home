
import React, { useState } from 'react';
import { CreditCard, History, ExternalLink } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'billing' | 'history'>('billing');
  const { t } = useTranslation();

  const transactions = [
    { date: '2023-11-01', amount: '₩13,900', status: t('account.paid'), method: '•••• 4242' },
    { date: '2023-10-01', amount: '₩13,900', status: t('account.paid'), method: '•••• 4242' },
    { date: '2023-09-01', amount: '₩13,900', status: t('account.paid'), method: '•••• 4242' },
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">{t('account.title')}</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-2">
            <button 
              onClick={() => setActiveTab('billing')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'billing' ? 'bg-blue-600 text-white shadow-md shadow-blue-100' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <CreditCard className="w-4 h-4" /> {t('account.billingTab')}
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'history' ? 'bg-blue-600 text-white shadow-md shadow-blue-100' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <History className="w-4 h-4" /> {t('account.historyTab')}
            </button>
            <a 
              href="https://noruct.app"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            >
              <ExternalLink className="w-4 h-4" /> {t('account.openApp')}
            </a>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {activeTab === 'billing' ? (
              <div className="space-y-6">
                {/* Current Plan Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">{t('account.currentSub')}</h2>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div>
                      <div className="text-blue-900 font-bold">Noruct Basic Plan</div>
                      <div className="text-blue-700 text-sm">₩13,900 / {t('pricing.month')}</div>
                    </div>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold uppercase">{t('account.activeStatus')}</span>
                  </div>
                  <div className="mt-4 text-sm text-slate-500">
                    {t('account.nextBilling')}: <span className="font-medium text-slate-900">2023년 12월 1일</span>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors">{t('account.changePlan')}</button>
                    <button className="px-4 py-2 bg-white border border-slate-200 text-red-600 text-sm font-bold rounded-lg hover:bg-red-50 transition-colors">{t('account.cancelSub')}</button>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900">{t('account.paymentMethod')}</h2>
                    <button className="text-blue-600 text-sm font-bold hover:underline">{t('account.update')}</button>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl">
                    <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center font-bold text-xs text-slate-400">VISA</div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Visa ending in 4242</div>
                      <div className="text-slate-500 text-xs">{t('account.expires')} 12/2025</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-slate-900">{t('account.historyTitle')}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 font-medium">
                      <tr>
                        <th className="px-6 py-4">{t('account.tableDate')}</th>
                        <th className="px-6 py-4">{t('account.tableAmount')}</th>
                        <th className="px-6 py-4">{t('account.tableStatus')}</th>
                        <th className="px-6 py-4">{t('account.tableMethod')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {transactions.map((tItem, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">{tItem.date}</td>
                          <td className="px-6 py-4 text-slate-600">{tItem.amount}</td>
                          <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">{tItem.status}</span>
                          </td>
                          <td className="px-6 py-4 text-slate-500">{tItem.method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
