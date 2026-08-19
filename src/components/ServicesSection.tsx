import React, { useState } from 'react';
import { MEDICAL_CONDITIONS } from '../data/clinicData';
import { Language, MedicalCondition } from '../types';
import { Search, Stethoscope, CheckCircle2, ArrowRight, ShieldAlert, HeartPulse, Activity, Sun, Brain, Thermometer, Wind, Flame, Droplet, Apple, TrendingUp } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectCondition: (conditionId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectCondition,
}) => {
  const isUrdu = lang === 'ur';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', nameEn: 'All 12 Conditions', nameUr: 'تمام 12 امراض' },
    { id: 'respiratory', nameEn: 'Respiratory & Chest', nameUr: 'سانس و چیسٹ' },
    { id: 'developmental', nameEn: 'Growth & Brain', nameUr: 'نشوونما و دماغ' },
    { id: 'nutritional', nameEn: 'Nutrition & Anemia', nameUr: 'غذائیت و خون' },
    { id: 'infectious', nameEn: 'Infections & Jaundice', nameUr: 'یرقان و انوائرس' },
    { id: 'chronic', nameEn: 'Chronic Care', nameUr: 'پرانے و پیچیدہ امراض' },
  ];

  const filteredConditions = MEDICAL_CONDITIONS.filter((condition) => {
    const matchesCategory = selectedCategory === 'all' || condition.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      condition.titleEnglish.toLowerCase().includes(q) ||
      condition.titleUrdu.includes(q) ||
      condition.shortDescEnglish.toLowerCase().includes(q) ||
      condition.shortDescUrdu.includes(q);
    return matchesCategory && matchesSearch;
  });

  const BOX_COLOR_THEMES: Record<string, {
    border: string;
    bg: string;
    glowColor: string;
    iconBg: string;
    iconColor: string;
    textAccent: string;
    badge: string;
    btnHover: string;
  }> = {
    mirgi: {
      border: 'border-purple-500/70 shadow-purple-900/40 hover:border-purple-400 hover:shadow-purple-500/50',
      bg: 'bg-gradient-to-br from-purple-950/40 via-indigo-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(168, 85, 247, 0.35)',
      iconBg: 'bg-purple-500/25 border-purple-400/50',
      iconColor: 'text-purple-300',
      textAccent: 'text-purple-300',
      badge: 'bg-purple-500/20 text-purple-200 border-purple-400/40',
      btnHover: 'hover:from-purple-600 hover:to-indigo-600 group-hover:border-purple-400',
    },
    yarqan: {
      border: 'border-blue-500/70 shadow-blue-900/40 hover:border-blue-400 hover:shadow-blue-500/50',
      bg: 'bg-gradient-to-br from-blue-950/40 via-indigo-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(59, 130, 246, 0.35)',
      iconBg: 'bg-blue-500/25 border-blue-400/50',
      iconColor: 'text-cyan-300',
      textAccent: 'text-cyan-300',
      badge: 'bg-blue-500/20 text-cyan-200 border-blue-400/40',
      btnHover: 'hover:from-blue-600 hover:to-indigo-600 group-hover:border-blue-400',
    },
    damaghimayus: {
      border: 'border-cyan-500/70 shadow-cyan-900/40 hover:border-cyan-400 hover:shadow-cyan-500/50',
      bg: 'bg-gradient-to-br from-cyan-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(6, 182, 212, 0.35)',
      iconBg: 'bg-cyan-500/25 border-cyan-400/50',
      iconColor: 'text-cyan-300',
      textAccent: 'text-cyan-300',
      badge: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40',
      btnHover: 'hover:from-cyan-600 hover:to-blue-600 group-hover:border-cyan-400',
    },
    namunia: {
      border: 'border-indigo-500/70 shadow-indigo-900/40 hover:border-indigo-400 hover:shadow-indigo-500/50',
      bg: 'bg-gradient-to-br from-indigo-950/40 via-purple-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(99, 102, 241, 0.35)',
      iconBg: 'bg-indigo-500/25 border-indigo-400/50',
      iconColor: 'text-indigo-300',
      textAccent: 'text-indigo-300',
      badge: 'bg-indigo-500/20 text-indigo-200 border-indigo-400/40',
      btnHover: 'hover:from-indigo-600 hover:to-purple-600 group-hover:border-indigo-400',
    },
    seena_pait: {
      border: 'border-purple-500/70 shadow-purple-900/40 hover:border-purple-400 hover:shadow-purple-500/50',
      bg: 'bg-gradient-to-br from-purple-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(168, 85, 247, 0.35)',
      iconBg: 'bg-purple-500/25 border-purple-400/50',
      iconColor: 'text-purple-300',
      textAccent: 'text-purple-300',
      badge: 'bg-purple-500/20 text-purple-200 border-purple-400/40',
      btnHover: 'hover:from-purple-600 hover:to-blue-600 group-hover:border-purple-400',
    },
    khansi: {
      border: 'border-blue-500/70 shadow-blue-900/40 hover:border-blue-400 hover:shadow-blue-500/50',
      bg: 'bg-gradient-to-br from-blue-950/40 via-cyan-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(59, 130, 246, 0.35)',
      iconBg: 'bg-blue-500/25 border-blue-400/50',
      iconColor: 'text-blue-300',
      textAccent: 'text-blue-300',
      badge: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
      btnHover: 'hover:from-blue-600 hover:to-indigo-600 group-hover:border-blue-400',
    },
    chest_infection: {
      border: 'border-indigo-500/70 shadow-indigo-900/40 hover:border-indigo-400 hover:shadow-indigo-500/50',
      bg: 'bg-gradient-to-br from-indigo-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(99, 102, 241, 0.35)',
      iconBg: 'bg-indigo-500/25 border-indigo-400/50',
      iconColor: 'text-indigo-300',
      textAccent: 'text-indigo-300',
      badge: 'bg-indigo-500/20 text-indigo-200 border-indigo-400/40',
      btnHover: 'hover:from-indigo-600 hover:to-purple-600 group-hover:border-indigo-400',
    },
    cheechak: {
      border: 'border-purple-500/70 shadow-purple-900/40 hover:border-purple-400 hover:shadow-purple-500/50',
      bg: 'bg-gradient-to-br from-purple-950/40 via-indigo-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(168, 85, 247, 0.35)',
      iconBg: 'bg-purple-500/25 border-purple-400/50',
      iconColor: 'text-purple-300',
      textAccent: 'text-purple-300',
      badge: 'bg-purple-500/20 text-purple-200 border-purple-400/40',
      btnHover: 'hover:from-purple-600 hover:to-indigo-600 group-hover:border-purple-400',
    },
    khoon_kami: {
      border: 'border-cyan-500/70 shadow-cyan-900/40 hover:border-cyan-400 hover:shadow-cyan-500/50',
      bg: 'bg-gradient-to-br from-cyan-950/40 via-indigo-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(6, 182, 212, 0.35)',
      iconBg: 'bg-cyan-500/25 border-cyan-400/50',
      iconColor: 'text-cyan-300',
      textAccent: 'text-cyan-300',
      badge: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40',
      btnHover: 'hover:from-cyan-600 hover:to-blue-600 group-hover:border-cyan-400',
    },
    bhook: {
      border: 'border-blue-500/70 shadow-blue-900/40 hover:border-blue-400 hover:shadow-blue-500/50',
      bg: 'bg-gradient-to-br from-blue-950/40 via-purple-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(59, 130, 246, 0.35)',
      iconBg: 'bg-blue-500/25 border-blue-400/50',
      iconColor: 'text-blue-300',
      textAccent: 'text-blue-300',
      badge: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
      btnHover: 'hover:from-blue-600 hover:to-indigo-600 group-hover:border-blue-400',
    },
    qad_wazan: {
      border: 'border-indigo-500/70 shadow-indigo-900/40 hover:border-indigo-400 hover:shadow-indigo-500/50',
      bg: 'bg-gradient-to-br from-indigo-950/40 via-purple-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(99, 102, 241, 0.35)',
      iconBg: 'bg-indigo-500/25 border-indigo-400/50',
      iconColor: 'text-indigo-300',
      textAccent: 'text-indigo-300',
      badge: 'bg-indigo-500/20 text-indigo-200 border-indigo-400/40',
      btnHover: 'hover:from-indigo-600 hover:to-purple-600 group-hover:border-indigo-400',
    },
    sugar: {
      border: 'border-purple-500/70 shadow-purple-900/40 hover:border-purple-400 hover:shadow-purple-500/50',
      bg: 'bg-gradient-to-br from-purple-950/40 via-blue-950/35 to-slate-950/50 backdrop-blur-md',
      glowColor: 'rgba(168, 85, 247, 0.35)',
      iconBg: 'bg-purple-500/25 border-purple-400/50',
      iconColor: 'text-purple-300',
      textAccent: 'text-purple-300',
      badge: 'bg-purple-500/20 text-purple-200 border-purple-400/40',
      btnHover: 'hover:from-purple-600 hover:to-blue-600 group-hover:border-purple-400',
    },
  };

  const PALETTE_ARRAY = Object.values(BOX_COLOR_THEMES);

  const getThemeForCondition = (conditionId: string, index: number) => {
    return BOX_COLOR_THEMES[conditionId] || PALETTE_ARRAY[index % PALETTE_ARRAY.length];
  };

  const getIcon = (name: string, customColorClass?: string) => {
    const colorClass = customColorClass || "text-purple-300";
    switch (name) {
      case 'Activity': return <Activity className={`w-6 h-6 ${colorClass}`} />;
      case 'Sun': return <Sun className={`w-6 h-6 ${colorClass}`} />;
      case 'Brain': return <Brain className={`w-6 h-6 ${colorClass}`} />;
      case 'Stethoscope': return <Stethoscope className={`w-6 h-6 ${colorClass}`} />;
      case 'Thermometer': return <Thermometer className={`w-6 h-6 ${colorClass}`} />;
      case 'Wind': return <Wind className={`w-6 h-6 ${colorClass}`} />;
      case 'ShieldAlert': return <ShieldAlert className={`w-6 h-6 ${colorClass}`} />;
      case 'Flame': return <Flame className={`w-6 h-6 ${colorClass}`} />;
      case 'Droplet': return <Droplet className={`w-6 h-6 ${colorClass}`} />;
      case 'Apple': return <Apple className={`w-6 h-6 ${colorClass}`} />;
      case 'TrendingUp': return <TrendingUp className={`w-6 h-6 ${colorClass}`} />;
      case 'HeartPulse': return <HeartPulse className={`w-6 h-6 ${colorClass}`} />;
      default: return <Stethoscope className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded-md">
            <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">
              {isUrdu ? 'امراض و علاج کا مکمل مرکز' : 'COMPREHENSIVE PEDIATRIC CARE'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
            {isUrdu ? 'کلینک کے اہم امراض اور علاج' : 'Conditions Treated by Dr. Shakeel Ahmed'}
          </h2>
          <p className={`text-slate-300 text-base sm:text-lg leading-relaxed ${isUrdu ? 'font-urdu text-slate-300' : ''}`}>
            {isUrdu
              ? 'بچوں کی دیکھ بھال، فوری معائنہ اور بہترین تشخیص۔ اپنے بچے کی علامات یا بیماری منتخب کریں۔'
              : 'Specialized diagnosis and treatment for all infant and pediatric health concerns. Search or select a category below.'}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isUrdu ? 'بیماری کا نام تلاش کریں (مثلاً: نمونیا، یرقان، مرگی، شوگر...)' : 'Search condition (e.g., Pneumonia, Jaundice, Seizures, Diabetes)...'}
              className="w-full pl-12 pr-4 py-4 bg-slate-900/90 border border-purple-900/40 text-white placeholder-slate-500 rounded-2xl shadow-xl text-sm sm:text-base focus:outline-none focus:border-purple-500/60 transition-all font-sans"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/30 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-purple-900/30 hover:bg-slate-800'
                } ${isUrdu ? 'font-urdu' : ''}`}
              >
                {isUrdu ? cat.nameUr : cat.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredConditions.map((condition, idx) => {
            const theme = getThemeForCondition(condition.id, idx);
            return (
              <div
                key={condition.id}
                className={`${theme.bg} rounded-2xl p-6 border-run-4colors transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 backdrop-blur-md relative overflow-hidden shadow-xl`}
              >
                {/* 4 Full Color Running Animated Inner Background */}
                <div className="absolute inset-0 bg-run-4colors opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Specific radial color aura glow inside box */}
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 85% 15%, ${theme.glowColor}, transparent 65%)`
                  }}
                />
                
                <div className="space-y-4 relative z-10">
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`p-3.5 rounded-2xl border ${theme.iconBg} shadow-md transition-transform group-hover:scale-105`}>
                      {getIcon(condition.iconName, theme.iconColor)}
                    </div>
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs ${
                        condition.urgencyLevel === 'high'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-400/40'
                          : condition.urgencyLevel === 'medium'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                          : theme.badge
                      }`}
                    >
                      {condition.urgencyLevel === 'high'
                        ? (isUrdu ? 'فوری توجہ' : 'Urgent Care')
                        : condition.urgencyLevel === 'medium'
                        ? (isUrdu ? 'عام معائنہ' : 'Moderate')
                        : (isUrdu ? 'روٹین معائنہ' : 'Routine Care')}
                    </span>
                  </div>

                  {/* Titles */}
                  <div>
                    <h3 className="text-2xl font-black text-white font-urdu leading-tight drop-shadow-sm">
                      {condition.titleUrdu}
                    </h3>
                    <p className={`text-xs font-extrabold uppercase tracking-wider ${theme.textAccent} mt-1`}>
                      {condition.titleEnglish}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className={`text-sm text-slate-200 leading-relaxed ${isUrdu ? 'font-urdu text-slate-200' : ''}`}>
                    {isUrdu ? condition.shortDescUrdu : condition.shortDescEnglish}
                  </p>

                  {/* Key Symptoms Bullet points */}
                  <div className="pt-3.5 border-t border-white/10 space-y-2 text-xs text-slate-200">
                    <span className={`font-bold ${theme.textAccent} block text-[11px] uppercase tracking-wider`}>
                      {isUrdu ? 'اہم علامات:' : 'Key Symptoms:'}
                    </span>
                    {(isUrdu ? condition.detailedSymptoms.ur : condition.detailedSymptoms.en).slice(0, 2).map((sym, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${theme.iconColor} shrink-0 mt-0.5`} />
                        <span className="font-medium">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                  <button
                    onClick={() => onSelectCondition(condition.id)}
                    className={`w-full flex items-center justify-center gap-2 bg-slate-950/80 ${theme.btnHover} border border-white/10 text-white py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer`}
                  >
                    <span>{isUrdu ? 'اپائنٹمنٹ لیں / مشورہ کریں' : 'Book Consultation'}</span>
                    <ArrowRight className={`w-4 h-4 ${theme.textAccent} group-hover:text-white group-hover:translate-x-1 transition-transform`} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredConditions.length === 0 && (
          <div className="text-center py-12 bg-slate-900 rounded-3xl border border-slate-800">
            <p className="text-slate-400 font-medium">
              {isUrdu ? 'کوئی معائنہ یا بیماری نہیں ملی۔ برائے کرم دوبارہ تلاش کریں۔' : 'No conditions found matching your search term.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
