import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square, Info, Calendar, Sparkles } from 'lucide-react';
import { VACCINE_SCHEDULE } from '../data/clinicData';
import { Language } from '../types';

interface VaccineTrackerProps {
  lang: Language;
}

const vaccineThemes = [
  {
    gradient: 'from-indigo-600 via-blue-600 via-cyan-600 to-teal-600',
    border: 'border-cyan-400/60',
    ageBadge: 'bg-cyan-950/80 text-cyan-200 border-cyan-400/50',
    essentialBadge: 'bg-indigo-950/80 text-indigo-200 border-indigo-400/50',
  },
  {
    gradient: 'from-purple-600 via-pink-600 via-rose-600 to-amber-600',
    border: 'border-pink-400/60',
    ageBadge: 'bg-pink-950/80 text-pink-200 border-pink-400/50',
    essentialBadge: 'bg-rose-950/80 text-rose-200 border-rose-400/50',
  },
  {
    gradient: 'from-emerald-600 via-teal-600 via-cyan-600 to-blue-600',
    border: 'border-emerald-400/60',
    ageBadge: 'bg-emerald-950/80 text-emerald-200 border-emerald-400/50',
    essentialBadge: 'bg-teal-950/80 text-teal-200 border-teal-400/50',
  },
  {
    gradient: 'from-rose-600 via-red-600 via-orange-600 to-amber-600',
    border: 'border-orange-400/60',
    ageBadge: 'bg-rose-950/80 text-rose-200 border-rose-400/50',
    essentialBadge: 'bg-orange-950/80 text-orange-200 border-orange-400/50',
  },
  {
    gradient: 'from-violet-600 via-fuchsia-600 via-pink-600 to-purple-600',
    border: 'border-fuchsia-400/60',
    ageBadge: 'bg-violet-950/80 text-violet-200 border-violet-400/50',
    essentialBadge: 'bg-fuchsia-950/80 text-fuchsia-200 border-fuchsia-400/50',
  },
  {
    gradient: 'from-blue-600 via-sky-600 via-teal-600 to-emerald-600',
    border: 'border-sky-400/60',
    ageBadge: 'bg-sky-950/80 text-sky-200 border-sky-400/50',
    essentialBadge: 'bg-teal-950/80 text-teal-200 border-teal-400/50',
  },
];

export const VaccineTracker: React.FC<VaccineTrackerProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';
  const [checkedVaccines, setCheckedVaccines] = useState<number[]>([]);

  const toggleVaccine = (index: number) => {
    setCheckedVaccines((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="vaccines" className="py-20 bg-slate-950/40 border-y border-purple-900/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-xl shadow-lg">
            <span className="text-cyan-300 text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>{isUrdu ? 'حفاظتی ٹیکوں کا شیڈول' : 'PEDIATRIC IMMUNIZATION PROGRAM'}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
            {isUrdu ? 'بچوں کے تمام حفاظتی ٹیکوں کا ٹریکر' : 'Vaccination & EPI Schedule Tracker'}
          </h2>
          <p className={`text-slate-300 text-sm sm:text-base leading-relaxed ${isUrdu ? 'font-urdu text-slate-200' : ''}`}>
            {isUrdu
              ? 'پاکستان کے قومی ای پی آئی (EPI) شیڈول کے مطابق بچے کی پیدائش سے لے کر تمام حفاظتی ٹیکوں کا ریکارڈ اور رہنمائی۔'
              : 'Track your child’s essential immunization milestones according to National EPI Guidelines.'}
          </p>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {VACCINE_SCHEDULE.map((item, idx) => {
            const isCompleted = checkedVaccines.includes(idx);
            const theme = vaccineThemes[idx % vaccineThemes.length];

            return (
              <div
                key={idx}
                className={`relative overflow-hidden p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-xl group hover:scale-101 backdrop-blur-md ${
                  isCompleted
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-100 shadow-emerald-950/50'
                    : `bg-slate-900/40 ${theme.border}`
                }`}
              >
                {/* Dynamic Animated Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} ${
                    isCompleted ? 'opacity-30' : 'opacity-40 group-hover:opacity-65'
                  } transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
                  
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      onClick={() => toggleVaccine(idx)}
                      className="mt-1 p-1 bg-slate-950/60 rounded-xl border border-white/30 text-emerald-300 hover:scale-115 active:scale-95 transition-transform cursor-pointer shadow-md backdrop-blur-md shrink-0"
                    >
                      {isCompleted ? (
                        <CheckSquare className="w-7 h-7 text-emerald-300 fill-emerald-500/30" />
                      ) : (
                        <Square className="w-7 h-7 text-white/70 group-hover:text-white" />
                      )}
                    </button>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`font-black text-[11px] uppercase px-3 py-1 rounded-lg border shadow-md backdrop-blur-md ${theme.ageBadge}`}>
                          {isUrdu ? item.ageUr : item.ageEn}
                        </span>
                        {item.essential && (
                          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-sm backdrop-blur-md ${theme.essentialBadge}`}>
                            {isUrdu ? 'انتہائی ضروری' : 'Essential'}
                          </span>
                        )}
                      </div>

                      <h3 className={`text-lg sm:text-xl font-extrabold text-white drop-shadow-md ${isUrdu ? 'font-urdu' : ''}`}>
                        {isUrdu ? item.vaccineUr : item.vaccineEn}
                      </h3>

                      <p className={`text-xs sm:text-sm text-cyan-100 font-medium ${isUrdu ? 'font-urdu' : ''}`}>
                        <span className="font-bold text-white drop-shadow-xs">{isUrdu ? 'تحفظ (Prevents):' : 'Protects against:'} </span>
                        {isUrdu ? item.preventsUr : item.preventsEn}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => toggleVaccine(idx)}
                      className={`text-xs font-black px-4 py-1.5 rounded-full shadow-lg border backdrop-blur-md transition-all cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-500 text-white border-emerald-300'
                          : 'bg-slate-950/80 border-white/40 text-white hover:bg-white hover:text-slate-950'
                      }`}
                    >
                      {isCompleted ? (isUrdu ? 'مکمل ہو گیا ✓' : 'Completed ✓') : (isUrdu ? 'باقی ہے' : 'Pending')}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info Box */}
        <div className="mt-8 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 space-y-1">
            <span className="font-bold block text-white">{isUrdu ? 'ڈاکٹر صاحب کی خاص التماس:' : 'Important Vaccination Note:'}</span>
            <p className={isUrdu ? 'font-urdu text-slate-300' : ''}>
              {isUrdu
                ? 'کسی بھی ویکسین میں تاخیر بچے کو نمونیہ، تپ دق، پولیو یا خسرہ کا شکار بنا سکتی ہے۔ کسی بھی رہنمائی کے لیے کلینک تشریف لائیں۔'
                : 'Never skip or delay vaccines. Immunization protects children from severe life-threatening infections.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
