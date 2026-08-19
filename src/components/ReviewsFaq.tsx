import React, { useState } from 'react';
import { Star, ChevronDown, MessageSquare, Quote } from 'lucide-react';
import { CLINIC_REVIEWS, FAQS } from '../data/clinicData';
import { Language } from '../types';

interface ReviewsFaqProps {
  lang: Language;
}

export const ReviewsFaq: React.FC<ReviewsFaqProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-950/40 border-y border-purple-900/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                {isUrdu ? 'والدین کی آراء' : 'PARENT REVIEWS'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
              {isUrdu ? 'والدین کا ڈاکٹر شکیل احمد پر بھروسہ' : 'Trusted by Thousands of Families'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CLINIC_REVIEWS.map((rev, idx) => {
              const reviewStyles = [
                {
                  bg: 'bg-gradient-to-b from-purple-950/40 via-indigo-950/35 to-slate-950/50',
                  border: 'border-2 border-purple-500/60 hover:border-purple-300',
                  accent: 'text-purple-300',
                  quote: 'text-purple-400/40',
                  shadow: 'shadow-purple-950/50'
                },
                {
                  bg: 'bg-gradient-to-b from-blue-950/40 via-indigo-950/35 to-slate-950/50',
                  border: 'border-2 border-blue-500/60 hover:border-blue-300',
                  accent: 'text-cyan-300',
                  quote: 'text-blue-400/40',
                  shadow: 'shadow-blue-950/50'
                },
                {
                  bg: 'bg-gradient-to-b from-indigo-950/40 via-purple-950/35 to-slate-950/50',
                  border: 'border-2 border-indigo-500/60 hover:border-indigo-300',
                  accent: 'text-indigo-300',
                  quote: 'text-indigo-400/40',
                  shadow: 'shadow-indigo-950/50'
                }
              ];
              const style = reviewStyles[idx % reviewStyles.length];

              return (
                <div
                  key={idx}
                  className={`${style.bg} ${style.border} ${style.shadow} p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4 backdrop-blur-md hover:scale-102 transition-all duration-300`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className={`text-sm text-slate-100 leading-relaxed italic ${isUrdu ? 'font-urdu' : ''}`}>
                      "{isUrdu ? rev.commentUr : rev.commentEn}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className={`font-black text-white text-sm ${isUrdu ? 'font-urdu' : ''}`}>
                        {isUrdu ? rev.nameUr : rev.nameEn}
                      </h3>
                      <span className={`text-[11px] font-bold ${style.accent}`}>{rev.date}</span>
                    </div>
                    <Quote className={`w-7 h-7 ${style.quote}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-slate-900">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white font-sans uppercase tracking-tight">
              {isUrdu ? 'عام طور پر پوچھے جانے والے سوالات (FAQs)' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const faqThemes = [
                {
                  border: 'border-2 border-indigo-500/60 hover:border-indigo-300',
                  bgHeader: 'bg-gradient-to-r from-indigo-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
                  bgBody: 'bg-slate-950/60 text-indigo-100 backdrop-blur-md',
                  arrow: 'text-indigo-300',
                  shadow: 'shadow-indigo-950/50'
                },
                {
                  border: 'border-2 border-purple-500/60 hover:border-purple-300',
                  bgHeader: 'bg-gradient-to-r from-purple-950/40 via-fuchsia-950/35 to-slate-950/50 backdrop-blur-md',
                  bgBody: 'bg-slate-950/60 text-purple-100 backdrop-blur-md',
                  arrow: 'text-purple-300',
                  shadow: 'shadow-purple-950/50'
                },
                {
                  border: 'border-2 border-emerald-500/60 hover:border-emerald-300',
                  bgHeader: 'bg-gradient-to-r from-emerald-950/40 via-teal-950/35 to-slate-950/50 backdrop-blur-md',
                  bgBody: 'bg-slate-950/60 text-emerald-100 backdrop-blur-md',
                  arrow: 'text-emerald-300',
                  shadow: 'shadow-emerald-950/50'
                },
                {
                  border: 'border-2 border-amber-500/60 hover:border-amber-300',
                  bgHeader: 'bg-gradient-to-r from-amber-950/40 via-orange-950/35 to-slate-950/50 backdrop-blur-md',
                  bgBody: 'bg-slate-950/60 text-amber-100 backdrop-blur-md',
                  arrow: 'text-amber-300',
                  shadow: 'shadow-amber-950/50'
                },
                {
                  border: 'border-2 border-rose-500/60 hover:border-rose-300',
                  bgHeader: 'bg-gradient-to-r from-rose-950/40 via-pink-950/35 to-slate-950/50 backdrop-blur-md',
                  bgBody: 'bg-slate-950/60 text-rose-100 backdrop-blur-md',
                  arrow: 'text-rose-300',
                  shadow: 'shadow-rose-950/50'
                },
                {
                  border: 'border-2 border-cyan-500/60 hover:border-cyan-300',
                  bgHeader: 'bg-gradient-to-r from-cyan-950/40 via-sky-950/35 to-slate-950/50 backdrop-blur-md',
                  bgBody: 'bg-slate-950/60 text-cyan-100 backdrop-blur-md',
                  arrow: 'text-cyan-300',
                  shadow: 'shadow-cyan-950/50'
                }
              ];
              const theme = faqThemes[idx % faqThemes.length];

              return (
                <div
                  key={idx}
                  className={`${theme.border} ${theme.shadow} rounded-2xl overflow-hidden shadow-xl transition-all duration-300`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={`w-full text-left p-4 sm:p-5 ${theme.bgHeader} font-extrabold text-white text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer transition-all hover:scale-[1.01]`}
                  >
                    <span className={isUrdu ? 'font-urdu text-right w-full text-base' : ''}>
                      {isUrdu ? faq.qUr : faq.qEn}
                    </span>
                    <ChevronDown className={`w-5 h-5 ${theme.arrow} shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className={`p-4 sm:p-5 ${theme.bgBody} text-sm leading-relaxed border-t border-white/10 font-bold`}>
                      <p className={isUrdu ? 'font-urdu text-right' : ''}>
                        {isUrdu ? faq.aUr : faq.aEn}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
