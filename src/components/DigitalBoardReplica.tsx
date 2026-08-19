import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, Info, CheckCircle, ExternalLink, Sparkles, X, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO, MEDICAL_CONDITIONS } from '../data/clinicData';
import { Language, MedicalCondition } from '../types';

interface DigitalBoardReplicaProps {
  lang: Language;
  onBookCondition: (conditionId: string) => void;
}

export const DigitalBoardReplica: React.FC<DigitalBoardReplicaProps> = ({
  lang,
  onBookCondition,
}) => {
  const isUrdu = lang === 'ur';
  const [selectedCondition, setSelectedCondition] = useState<MedicalCondition | null>(null);

  // Map the exact 12 badges from the photo with unique distinct color styling
  const BADGE_COLOR_THEMES: Record<string, {
    border: string;
    bg: string;
    glow: string;
    titleUrduColor: string;
    titleEnColor: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
  }> = {
    mirgi: {
      border: 'border-purple-500/70 shadow-purple-950/50 hover:border-purple-400 hover:shadow-purple-500/60',
      bg: 'bg-gradient-to-br from-purple-950/40 via-indigo-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(168, 85, 247, 0.35)',
      titleUrduColor: 'text-purple-300',
      titleEnColor: 'text-purple-200/80',
      badgeBg: 'bg-purple-500/25',
      badgeText: 'text-purple-200',
      badgeBorder: 'border-purple-400/40',
    },
    yarqan: {
      border: 'border-blue-500/70 shadow-blue-950/50 hover:border-blue-400 hover:shadow-blue-500/60',
      bg: 'bg-gradient-to-br from-blue-950/40 via-indigo-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(59, 130, 246, 0.35)',
      titleUrduColor: 'text-cyan-300',
      titleEnColor: 'text-cyan-200/80',
      badgeBg: 'bg-blue-500/25',
      badgeText: 'text-cyan-200',
      badgeBorder: 'border-blue-400/40',
    },
    'dimaghi-kamzori': {
      border: 'border-cyan-500/70 shadow-cyan-950/50 hover:border-cyan-400 hover:shadow-cyan-500/60',
      bg: 'bg-gradient-to-br from-cyan-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(6, 182, 212, 0.35)',
      titleUrduColor: 'text-cyan-300',
      titleEnColor: 'text-cyan-200/80',
      badgeBg: 'bg-cyan-500/25',
      badgeText: 'text-cyan-200',
      badgeBorder: 'border-cyan-400/40',
    },
    pneumonia: {
      border: 'border-indigo-500/70 shadow-indigo-950/50 hover:border-indigo-400 hover:shadow-indigo-500/60',
      bg: 'bg-gradient-to-br from-indigo-950/40 via-purple-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(99, 102, 241, 0.35)',
      titleUrduColor: 'text-indigo-300',
      titleEnColor: 'text-indigo-200/80',
      badgeBg: 'bg-indigo-500/25',
      badgeText: 'text-indigo-200',
      badgeBorder: 'border-indigo-400/40',
    },
    'pet-amraz': {
      border: 'border-purple-500/70 shadow-purple-950/50 hover:border-purple-400 hover:shadow-purple-500/60',
      bg: 'bg-gradient-to-br from-purple-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(168, 85, 247, 0.35)',
      titleUrduColor: 'text-purple-300',
      titleEnColor: 'text-purple-200/80',
      badgeBg: 'bg-purple-500/25',
      badgeText: 'text-purple-200',
      badgeBorder: 'border-purple-400/40',
    },
    khansi: {
      border: 'border-blue-500/70 shadow-blue-950/50 hover:border-blue-400 hover:shadow-blue-500/60',
      bg: 'bg-gradient-to-br from-blue-950/40 via-cyan-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(59, 130, 246, 0.35)',
      titleUrduColor: 'text-blue-300',
      titleEnColor: 'text-blue-200/80',
      badgeBg: 'bg-blue-500/25',
      badgeText: 'text-blue-200',
      badgeBorder: 'border-blue-400/40',
    },
    'chest-infection': {
      border: 'border-indigo-500/70 shadow-indigo-950/50 hover:border-indigo-400 hover:shadow-indigo-500/60',
      bg: 'bg-gradient-to-br from-indigo-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(99, 102, 241, 0.35)',
      titleUrduColor: 'text-indigo-300',
      titleEnColor: 'text-indigo-200/80',
      badgeBg: 'bg-indigo-500/25',
      badgeText: 'text-indigo-200',
      badgeBorder: 'border-indigo-400/40',
    },
    'cheechak-khasra': {
      border: 'border-purple-500/70 shadow-purple-950/50 hover:border-purple-400 hover:shadow-purple-500/60',
      bg: 'bg-gradient-to-br from-purple-950/40 via-indigo-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(168, 85, 247, 0.35)',
      titleUrduColor: 'text-purple-300',
      titleEnColor: 'text-purple-200/80',
      badgeBg: 'bg-purple-500/25',
      badgeText: 'text-purple-200',
      badgeBorder: 'border-purple-400/40',
    },
    'khoon-ki-kami': {
      border: 'border-cyan-500/70 shadow-cyan-950/50 hover:border-cyan-400 hover:shadow-cyan-500/60',
      bg: 'bg-gradient-to-br from-cyan-950/40 via-indigo-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(6, 182, 212, 0.35)',
      titleUrduColor: 'text-cyan-300',
      titleEnColor: 'text-cyan-200/80',
      badgeBg: 'bg-cyan-500/25',
      badgeText: 'text-cyan-200',
      badgeBorder: 'border-cyan-400/40',
    },
    'bhook-na-lagna': {
      border: 'border-blue-500/70 shadow-blue-950/50 hover:border-blue-400 hover:shadow-blue-500/60',
      bg: 'bg-gradient-to-br from-blue-950/40 via-purple-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(59, 130, 246, 0.35)',
      titleUrduColor: 'text-blue-300',
      titleEnColor: 'text-blue-200/80',
      badgeBg: 'bg-blue-500/25',
      badgeText: 'text-blue-200',
      badgeBorder: 'border-blue-400/40',
    },
    'wazan-kad': {
      border: 'border-indigo-500/70 shadow-indigo-950/50 hover:border-indigo-400 hover:shadow-indigo-500/60',
      bg: 'bg-gradient-to-br from-indigo-950/40 via-purple-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(99, 102, 241, 0.35)',
      titleUrduColor: 'text-indigo-300',
      titleEnColor: 'text-indigo-200/80',
      badgeBg: 'bg-indigo-500/25',
      badgeText: 'text-indigo-200',
      badgeBorder: 'border-indigo-400/40',
    },
    sugar: {
      border: 'border-purple-500/70 shadow-purple-950/50 hover:border-purple-400 hover:shadow-purple-500/60',
      bg: 'bg-gradient-to-br from-purple-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
      glow: 'rgba(168, 85, 247, 0.35)',
      titleUrduColor: 'text-purple-300',
      titleEnColor: 'text-purple-200/80',
      badgeBg: 'bg-purple-500/25',
      badgeText: 'text-purple-200',
      badgeBorder: 'border-purple-400/40',
    },
  };

  const boardBadges = [
    { id: 'mirgi', textUr: 'مرگی', textEn: 'Epilepsy & Fits' },
    { id: 'yarqan', textUr: 'یرقان', textEn: 'Jaundice' },
    { id: 'dimaghi-kamzori', textUr: 'دماغی کمزوری', textEn: 'Developmental Delay' },
    { id: 'pneumonia', textUr: 'نمونیا', textEn: 'Pneumonia' },
    { id: 'pet-amraz', textUr: 'سینہ / پیٹ امراض', textEn: 'Chest & Digestive Care' },
    { id: 'khansi', textUr: 'کھانسی', textEn: 'Cough & Asthma' },
    { id: 'chest-infection', textUr: 'چیسٹ انفیکشن', textEn: 'Chest Infection' },
    { id: 'cheechak-khasra', textUr: 'چیچک / خسرہ', textEn: 'Measles & Chickenpox' },
    { id: 'khoon-ki-kami', textUr: 'خون کی کمی', textEn: 'Anemia Care' },
    { id: 'bhook-na-lagna', textUr: 'بھوک نہ لگنا', textEn: 'Loss of Appetite' },
    { id: 'wazan-kad', textUr: 'قد نہ بڑھنا / وزن کی کمی', textEn: 'Stunted Growth' },
    { id: 'sugar', textUr: 'شوگر', textEn: 'Childhood Diabetes' },
  ];

  return (
    <section id="digital-board" className="py-20 bg-slate-950/40 border-y border-purple-900/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded-md">
            <span className="text-purple-300 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              {isUrdu ? 'تصویر کا ڈیجیٹل ڈسپلے بورڈ' : 'DIGITAL REPLICA OF CLINIC BOARD'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans uppercase">
            {isUrdu ? 'چائلڈ کیئر کلینک - بورڈ ڈسپلے' : 'Child Care Clinic Main Signboard'}
          </h2>
          <p className={`text-slate-300 text-sm sm:text-base leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu
              ? 'کلینک کے مرکزی سائین بورڈ کا مکمل انٹرایکٹو ڈسپلے۔ کسی بھی کارڈ پر کلک کر کے بیماری کی تفصیلات اور علاج جانیں۔'
              : 'Interactive digital view of the physical signboard shown at the clinic entrance. Click any condition badge to explore symptoms and advice.'}
          </p>
        </div>

        {/* Replica Glass Door & Signboard Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/50 p-4 sm:p-8 rounded-[36px] shadow-3xl border-run-4colors relative overflow-hidden backdrop-blur-md">
          <div className="box-run-inner-aura opacity-60" />
          
          {/* Top Row: Doctor Signboard (Left) & Timing Notice Paper (Right) */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6 relative z-10">
            
            {/* Doctor Small Poster Box */}
            <div className="bg-slate-950/60 border-run-4colors p-5 rounded-2xl shadow-xl text-center flex flex-col justify-between backdrop-blur-md relative overflow-hidden">
              <div className="box-run-inner-aura opacity-80" />
              <div className="relative z-10">
                <div className="text-[10px] font-extrabold tracking-widest text-run-4colors uppercase">
                  CHILD CARE CLINIC
                </div>
                <div className="my-2 py-2 px-4 bg-run-4colors text-white rounded-xl inline-block shadow-lg">
                  <span className="text-2xl font-bold font-urdu block">
                    {CLINIC_INFO.doctorNameUrdu}
                  </span>
                  <span className="text-xs font-medium block text-white/90">
                    {CLINIC_INFO.doctorTitleUrdu}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-purple-900/30 text-xs text-slate-300 font-bold space-y-1 relative z-10">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-mono" dir="ltr">
                  <MessageSquare className="w-3.5 h-3.5 fill-emerald-400 text-slate-950" />
                  0336-6624000
                </div>
                <div className="flex items-center justify-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Time: 5:00 PM To 9:00 PM
                </div>
              </div>
            </div>

            {/* Paper Notice Box */}
            <div className="bg-amber-950/40 border border-amber-500/30 p-5 rounded-2xl shadow-xl flex flex-col justify-center text-right font-urdu text-amber-200 backdrop-blur-md">
              <div className="flex items-center justify-end gap-1.5 text-xs font-bold text-amber-400 mb-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>کلینک کے اوقات کا اہم نوٹس</span>
              </div>
              <p className="text-lg sm:text-xl font-extrabold text-amber-100 leading-relaxed border-y border-amber-500/20 py-2">
                7 اکتوبر 2024 سے کلینک کے اوقات کار شام 5:00 سے 9:00 تک ہیں
              </p>
              <p className="text-xs text-amber-300/80 mt-2 font-sans font-medium text-center" dir="ltr">
                From Oct 7: Clinic Hours 5:00 PM to 9:00 PM Daily
              </p>
            </div>

          </div>

          {/* Main Large Banner Replica */}
          <div className="bg-slate-950/90 rounded-2xl p-4 sm:p-8 shadow-2xl border border-purple-900/40">
            
            {/* Banner Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-wider font-sans uppercase">
                CHILD CARE CLINIC
              </h3>
              <p className="text-xs sm:text-sm text-purple-300 font-bold mt-1 font-urdu">
                {isUrdu ? 'بچوں کے تمام امراض کا علاج کیئر سینٹر' : 'Comprehensive Pediatric Care & Consultation'}
              </p>
            </div>

            {/* Grid of 12 Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {boardBadges.map((badge) => {
                const fullCondition = MEDICAL_CONDITIONS.find(c => c.id === badge.id);
                const theme = BADGE_COLOR_THEMES[badge.id] || BADGE_COLOR_THEMES['mirgi'];
                return (
                  <button
                    key={badge.id}
                    onClick={() => fullCondition && setSelectedCondition(fullCondition)}
                    className={`relative group ${theme.bg} text-white rounded-2xl p-3.5 sm:p-4 text-center shadow-xl transition-all duration-300 border-run-4colors hover:scale-105 cursor-pointer overflow-hidden backdrop-blur-md`}
                  >
                    {/* 4 Full Color Running Gradient Background filling the box */}
                    <div 
                      className="absolute inset-0 bg-run-4colors opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                    <div 
                      className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 20%, ${theme.glow}, transparent 70%)`
                      }}
                    />

                    <div className="relative z-10 space-y-1">
                      <span className="text-lg sm:text-2xl font-black font-urdu block text-white drop-shadow-md">
                        {badge.textUr}
                      </span>
                      <span className="text-[10px] sm:text-xs font-extrabold text-cyan-100 block font-sans drop-shadow-sm">
                        {badge.textEn}
                      </span>
                    </div>

                    <div className="mt-2.5 text-[10px] bg-slate-950/60 border border-white/30 text-white py-0.5 px-3 rounded-full inline-flex items-center gap-1 font-bold shadow-md relative z-10 backdrop-blur-md">
                      <Info className="w-3 h-3 text-amber-300" />
                      <span>{isUrdu ? 'تفصیل دیکھیں' : 'Details'}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Contact Bar */}
            <div className="mt-6 pt-4 border-t border-purple-900/30 flex flex-wrap items-center justify-between gap-3 text-white font-bold text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>{isUrdu ? 'ڈاکٹر شکیل احمد (چائلڈ سپیشلسٹ)' : 'Dr. Shakeel Ahmed'}</span>
              </div>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-mono shadow-md transition-all hover:scale-105"
                dir="ltr"
              >
                <MessageSquare className="w-4 h-4 fill-white text-emerald-950" />
                <span>0336-6624000</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Modal for condition selected from the board */}
      {selectedCondition && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 text-slate-100 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-3xl border border-purple-900/40 relative animate-in fade-in zoom-in duration-200">
            
            <button
              onClick={() => setSelectedCondition(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center font-bold text-xl">
                  <HeartHandshake className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-urdu">
                    {selectedCondition.titleUrdu}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    {selectedCondition.titleEnglish}
                  </p>
                </div>
              </div>

              <p className={`text-slate-300 text-base leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-purple-900/30 ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? selectedCondition.shortDescUrdu : selectedCondition.shortDescEnglish}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {isUrdu ? 'اہم علامات (Symptoms to watch for):' : 'Key Symptoms:'}
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {(isUrdu ? selectedCondition.detailedSymptoms.ur : selectedCondition.detailedSymptoms.en).map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-950/30 p-4 rounded-2xl border border-amber-500/20 text-xs sm:text-sm text-amber-200">
                <span className="font-bold uppercase tracking-wider text-amber-400 block mb-1">{isUrdu ? 'ڈاکٹر صاحب کا مشورہ:' : 'Pediatric Care Advice:'}</span>
                <p className={isUrdu ? 'font-urdu' : ''}>
                  {isUrdu ? selectedCondition.careAdvice.ur : selectedCondition.careAdvice.en}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-3 justify-end border-t border-purple-900/30">
                <button
                  onClick={() => setSelectedCondition(null)}
                  className="px-5 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl font-medium text-sm transition-colors cursor-pointer"
                >
                  {isUrdu ? 'بند کریں' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    const condId = selectedCondition.id;
                    setSelectedCondition(null);
                    onBookCondition(condId);
                  }}
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-purple-900/40 border border-purple-400/30 transition-all cursor-pointer"
                >
                  {isUrdu ? 'اس مرض کے لیے اپائنٹمنٹ لیں' : 'Book Appointment for this Condition'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
