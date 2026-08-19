import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, Stethoscope, RefreshCw, MessageSquare, ShieldAlert, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface SymptomCheckerProps {
  lang: Language;
  onBookUrgent: (symptomsNote: string) => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({
  lang,
  onBookUrgent,
}) => {
  const isUrdu = lang === 'ur';

  const [childAgeGroup, setChildAgeGroup] = useState<'infant' | 'toddler' | 'child'>('infant');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [resultShown, setResultShown] = useState(false);

  const symptomList = [
    { 
      id: 'fever_high', 
      labelEn: 'High Fever (>101°F / تیز بخار)', 
      labelUr: 'تیز بخار (101 یا اس سے زائد)', 
      danger: false,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      border: 'border-blue-400/50'
    },
    { 
      id: 'fast_breathing', 
      labelEn: 'Fast Breathing / Rib Pulling (پسلیاں چلنا)', 
      labelUr: 'تیز سانس یا پسلیاں چلنا', 
      danger: true,
      gradient: 'from-indigo-600 via-purple-600 to-indigo-700',
      border: 'border-indigo-400/50'
    },
    { 
      id: 'seizure', 
      labelEn: 'Fits / Convulsions (جھٹکے یا دورے)', 
      labelUr: 'جھٹکے، دورے یا بے ہوشی', 
      danger: true,
      gradient: 'from-purple-600 via-violet-600 to-blue-600',
      border: 'border-purple-400/50'
    },
    { 
      id: 'jaundice', 
      labelEn: 'Yellow eyes or skin (یرقان)', 
      labelUr: 'جلد یا آنکھوں کی پیلاہٹ (یرقان)', 
      danger: false,
      gradient: 'from-blue-700 via-indigo-600 to-cyan-600',
      border: 'border-cyan-400/50'
    },
    { 
      id: 'vomiting_diarrhea', 
      labelEn: 'Repeated Vomiting & Loose Stools (الٹی و دست)', 
      labelUr: 'بار بار الٹیاں اور پتلے دست', 
      danger: false,
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      border: 'border-cyan-400/50'
    },
    { 
      id: 'refusing_feed', 
      labelEn: 'Refusing Breastfeeding / Fluids (دودھ نہ پینا)', 
      labelUr: 'دودھ یا پانی نہ پینا', 
      danger: true,
      gradient: 'from-purple-700 via-indigo-600 to-blue-600',
      border: 'border-purple-400/50'
    },
    { 
      id: 'persistent_cough', 
      labelEn: 'Severe Chest Cough / Wheezing (شدید کھانسی)', 
      labelUr: 'شدید کھانسی اور سینے کی کھڑکھڑاہٹ', 
      danger: false,
      gradient: 'from-indigo-600 via-blue-600 to-cyan-600',
      border: 'border-blue-400/50'
    },
    { 
      id: 'skin_rash', 
      labelEn: 'Red Spots or Blisters (خسرہ / چیچک دانے)', 
      labelUr: 'سرخ دانے يا پانی والے چھالے', 
      danger: false,
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      border: 'border-violet-400/50'
    },
    { 
      id: 'poor_growth', 
      labelEn: 'Low Weight / Stunted Height (قد و وزن نہ بڑھنا)', 
      labelUr: 'وزن نہ بڑھنا يا قد چھوٹا رہنا', 
      danger: false,
      gradient: 'from-indigo-600 via-purple-600 to-blue-600',
      border: 'border-indigo-400/50'
    },
  ];

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateResult = () => {
    if (selectedSymptoms.length === 0) return null;

    const hasDangerSymptom = selectedSymptoms.some((sId) =>
      symptomList.find((s) => s.id === sId)?.danger
    );

    if (hasDangerSymptom || (childAgeGroup === 'infant' && selectedSymptoms.length >= 2)) {
      return {
        urgency: 'high' as const,
        titleEn: 'Urgent Medical Attention Recommended',
        titleUr: 'فوری ڈاکٹری معائنے کی ضرورت ہے',
        descEn: 'Your child exhibits high-risk symptoms (such as fast breathing, seizures, or feed refusal). Please visit Child Care Clinic during consultation hours (5:00 PM – 9:00 PM) or seek immediate emergency pediatric care.',
        descUr: 'بچے میں پسلیاں چلنے، دورے یا دودھ نہ پینے جیسی اہم علامات ہیں۔ براہ کرم شام 5 سے 9 کے درمیان فوری چائلڈ کیئر کلینک لائیں یا ایمرجنسی میں رجوع کریں۔',
      };
    } else {
      return {
        urgency: 'medium' as const,
        titleEn: 'Same-Day Pediatric Consultation Recommended',
        titleUr: 'آج ہی کلینک میں معائنہ کروائیں',
        descEn: 'These symptoms require proper clinical checkup by Dr. Shakeel Ahmed to prevent complications. Book your appointment for this evening (5:00 PM to 9:00 PM).',
        descUr: 'یہ علامات چائلڈ سپیشلسٹ ڈاکٹر شکیل احمد سے باقاعدہ معائنے کی تقاضا کرتی ہیں۔ شام 5:00 سے 9:00 کے لیے اپائنٹمنٹ بک کریں۔',
      };
    }
  };

  const result = resultShown ? calculateResult() : null;

  return (
    <section id="symptom-checker" className="py-20 bg-slate-950/40 border-y border-purple-900/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-indigo-400" />
              <span>{isUrdu ? 'والدین کے لیے گائیڈ' : 'INTERACTIVE PARENTS TOOL'}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
            {isUrdu ? 'بچوں کی علامات کی جانچ (Symptom Checker)' : 'Pediatric Symptom Checker'}
          </h2>
          <p className={`text-slate-400 text-sm sm:text-base leading-relaxed ${isUrdu ? 'font-urdu text-slate-300' : ''}`}>
            {isUrdu
              ? 'اپنے بچے کی عمر اور علامات منتخب کریں تاکہ آپ کو درست طبی مشورہ اور فوری رہنمائی مل سکے۔'
              : 'Select your child’s age and current symptoms to evaluate consultation urgency.'}
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-slate-900/40 rounded-3xl p-6 sm:p-10 border-2 border-purple-500/50 shadow-2xl space-y-8 backdrop-blur-xl">
          
          {/* Step 1: Child Age */}
          <div className="space-y-3">
            <label className={`block text-xs font-bold uppercase tracking-wider text-slate-300 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? '1. بچے کی عمر کا انتخاب کریں:' : '1. Select Child’s Age Group:'}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { 
                  id: 'infant', 
                  labelEn: '0 – 12 Months (Infant)', 
                  labelUr: 'نوزائیدہ (0 - 12 ماہ)',
                  activeGrad: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white border-cyan-300 shadow-xl scale-102 border-2',
                  inactiveGrad: 'bg-gradient-to-r from-blue-900/60 to-indigo-950/80 text-blue-100 border-blue-500/50 hover:border-cyan-300'
                },
                { 
                  id: 'toddler', 
                  labelEn: '1 – 5 Years (Toddler)', 
                  labelUr: 'چھوٹا بچہ (1 - 5 سال)',
                  activeGrad: 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 text-white border-pink-300 shadow-xl scale-102 border-2',
                  inactiveGrad: 'bg-gradient-to-r from-purple-900/60 to-pink-950/80 text-purple-100 border-purple-500/50 hover:border-pink-300'
                },
                { 
                  id: 'child', 
                  labelEn: '5+ Years (Child)', 
                  labelUr: 'بڑا بچہ (5 سال سے زائد)',
                  activeGrad: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white border-teal-300 shadow-xl scale-102 border-2',
                  inactiveGrad: 'bg-gradient-to-r from-teal-900/60 to-emerald-950/80 text-teal-100 border-teal-500/50 hover:border-teal-300'
                },
              ].map((age) => (
                <button
                  key={age.id}
                  type="button"
                  onClick={() => setChildAgeGroup(age.id as any)}
                  className={`relative overflow-hidden py-3.5 px-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer text-center border ${
                    childAgeGroup === age.id
                      ? age.activeGrad
                      : age.inactiveGrad
                  } ${isUrdu ? 'font-urdu' : ''}`}
                >
                  <span className="relative z-10 drop-shadow-sm">
                    {isUrdu ? age.labelUr : age.labelEn}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Symptoms Selection */}
          <div className="space-y-3">
            <label className={`block text-xs font-bold uppercase tracking-wider text-slate-300 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? '2. بچے کی علامات منتخب کریں (ایک یا ایک سے زائد):' : '2. Select Current Symptoms (Select all that apply):'}
            </label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {symptomList.map((symptom) => {
                const isSelected = selectedSymptoms.includes(symptom.id);
                return (
                  <button
                    key={symptom.id}
                    type="button"
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`relative overflow-hidden p-4 rounded-2xl text-left border-2 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 shadow-xl hover:scale-103 group ${
                      isSelected
                        ? `bg-gradient-to-r ${symptom.gradient} text-white ${symptom.border} shadow-2xl scale-102 border-white`
                        : `bg-slate-900/80 ${symptom.border} text-white hover:border-white`
                    }`}
                  >
                    {/* Distinct vibrant gradient background for each individual box */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${symptom.gradient} ${
                        isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                      } transition-opacity duration-300 pointer-events-none`}
                    />

                    {/* Inner subtle glow highlight */}
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/15 transition-colors pointer-events-none" />

                    <span className={`relative z-10 ${isUrdu ? 'font-urdu text-right w-full block text-sm' : 'text-left font-extrabold'} text-white drop-shadow-md`}>
                      {isUrdu ? symptom.labelUr : symptom.labelEn}
                    </span>
                    <div
                      className={`relative z-10 w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
                        isSelected 
                          ? 'bg-white text-slate-950 border-white shadow-lg' 
                          : 'border-white/80 bg-slate-950/70 text-white group-hover:border-white group-hover:bg-slate-950/90'
                      }`}
                    >
                      {isSelected && <CheckCircle className="w-4 h-4 fill-emerald-500 text-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit / Check Button */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                setSelectedSymptoms([]);
                setResultShown(false);
              }}
              className="text-xs text-slate-500 hover:text-slate-300 font-medium flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isUrdu ? 'ری سیٹ کریں' : 'Reset Selection'}</span>
            </button>

            <button
              type="button"
              onClick={() => setResultShown(true)}
              disabled={selectedSymptoms.length === 0}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-xl shadow-blue-900/30 border border-blue-400/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
            >
              {isUrdu ? 'علامات کی جانچ کریں' : 'Check Assessment'}
            </button>
          </div>

          {/* Assessment Result Box */}
          {result && (
            <div
              className={`p-6 rounded-2xl border-2 space-y-4 transition-all duration-200 ${
                result.urgency === 'high'
                  ? 'bg-rose-950/40 border-rose-500/60 text-rose-100'
                  : 'bg-blue-950/40 border-blue-500/60 text-blue-100'
              }`}
            >
              <div className="flex items-center gap-3">
                {result.urgency === 'high' ? (
                  <ShieldAlert className="w-8 h-8 text-rose-400 shrink-0" />
                ) : (
                  <Stethoscope className="w-8 h-8 text-blue-400 shrink-0" />
                )}
                <div>
                  <h3 className="text-xl font-extrabold font-urdu text-white">
                    {isUrdu ? result.titleUr : result.titleEn}
                  </h3>
                  <p className="text-xs font-bold text-slate-400">
                    Clinic Consultation Hours: 5:00 PM – 9:00 PM Daily
                  </p>
                </div>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed ${isUrdu ? 'font-urdu text-slate-200' : 'text-slate-300'}`}>
                {isUrdu ? result.descUr : result.descEn}
              </p>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    const notes = selectedSymptoms
                      .map((s) => symptomList.find((item) => item.id === s)?.labelEn)
                      .join(', ');
                    onBookUrgent(`Selected symptoms: ${notes}`);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-xl shadow-blue-900/30 transition-all cursor-pointer"
                >
                  {isUrdu ? 'ڈاکٹر شکیل احمد سے اپائنٹمنٹ لیں' : 'Book Appointment for this Evening'}
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Dr. Shakeel Ahmed, I am contacting from Child Care Clinic website regarding my child (${childAgeGroup}). Symptoms: ${selectedSymptoms.join(', ')}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>{isUrdu ? 'واٹس ایپ پر میسج کریں' : 'Send WhatsApp Message'}</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
