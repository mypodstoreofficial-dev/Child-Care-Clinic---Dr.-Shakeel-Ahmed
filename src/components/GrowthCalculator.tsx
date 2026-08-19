import React, { useState } from 'react';
import { TrendingUp, Scale, Ruler, Heart, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface GrowthCalculatorProps {
  lang: Language;
  onConsultGrowth: (note: string) => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({
  lang,
  onConsultGrowth,
}) => {
  const isUrdu = lang === 'ur';

  const [gender, setGender] = useState<'boy' | 'girl'>('boy');
  const [ageMonths, setAgeMonths] = useState<number>(12);
  const [weightKg, setWeightKg] = useState<number>(9.5);
  const [heightCm, setHeightCm] = useState<number>(75);
  const [calculated, setCalculated] = useState(false);

  // WHO Growth standard approximate medians (for 0-60 months)
  // Standard median weight (kg) roughly = 3.3 + (0.5 * months) for first 2 years, etc.
  const getExpectedWeightRange = (months: number) => {
    let median = 3.5 + months * 0.45;
    if (months > 24) {
      median = 12 + (months - 24) * 0.2;
    }
    const min = parseFloat((median * 0.82).toFixed(1));
    const max = parseFloat((median * 1.18).toFixed(1));
    return { min, max, median: parseFloat(median.toFixed(1)) };
  };

  const getExpectedHeightRange = (months: number) => {
    let median = 50 + months * 1.25;
    if (months > 24) {
      median = 85 + (months - 24) * 0.5;
    }
    const min = parseFloat((median * 0.92).toFixed(1));
    const max = parseFloat((median * 1.08).toFixed(1));
    return { min, max, median: parseFloat(median.toFixed(1)) };
  };

  const expectedWeight = getExpectedWeightRange(ageMonths);
  const expectedHeight = getExpectedHeightRange(ageMonths);

  let weightStatus: 'underweight' | 'ideal' | 'overweight' = 'ideal';
  if (weightKg < expectedWeight.min) weightStatus = 'underweight';
  else if (weightKg > expectedWeight.max) weightStatus = 'overweight';

  let heightStatus: 'short' | 'ideal' | 'tall' = 'ideal';
  if (heightCm < expectedHeight.min) heightStatus = 'short';

  return (
    <section id="growth-calculator" className="py-20 bg-slate-950/40 border-y border-purple-900/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>{isUrdu ? 'صحت مند نشوونما چارٹ' : 'WHO CHILD GROWTH PERCENTILE'}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
            {isUrdu ? 'بچوں کا قد اور وزن کیلکولیٹر' : 'Child Growth & Weight Calculator'}
          </h2>
          <p className={`text-slate-400 text-sm sm:text-base leading-relaxed ${isUrdu ? 'font-urdu text-slate-300' : ''}`}>
            {isUrdu
              ? 'ڈبلیو ایچ او (WHO) کے عالمی معیار کے مطابق اپنے بچے کا قد اور وزن ناپیں اور چائلڈ سپیشلسٹ کا مشورہ حاصل کریں۔'
              : 'Calculate if your child’s height and weight align with standard WHO pediatric benchmarks.'}
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-slate-900/40 rounded-3xl p-6 sm:p-10 border-2 border-purple-500/50 shadow-2xl space-y-6 backdrop-blur-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Box 1: Gender - Dark Blue / Indigo Theme */}
            <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/35 to-slate-950/50 border-2 border-blue-500/60 rounded-2xl p-4 shadow-lg space-y-2 backdrop-blur-md">
              <label className="block text-xs font-black text-blue-200 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>{isUrdu ? 'جنس (Gender)' : 'Gender'}</span>
              </label>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setGender('boy')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                    gender === 'boy' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg border-cyan-300 scale-102' 
                      : 'bg-slate-950/80 text-slate-300 border-blue-900/60 hover:text-white hover:border-blue-400'
                  }`}
                >
                  {isUrdu ? 'لڑکا (Boy)' : 'Boy 👦'}
                </button>
                <button
                  type="button"
                  onClick={() => setGender('girl')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                    gender === 'girl' 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg border-purple-300 scale-102' 
                      : 'bg-slate-950/80 text-slate-300 border-purple-900/60 hover:text-white hover:border-purple-400'
                  }`}
                >
                  {isUrdu ? 'لڑکی (Girl)' : 'Girl 👧'}
                </button>
              </div>
            </div>

            {/* Box 2: Age in Months - Deep Purple / Violet Theme */}
            <div className="bg-gradient-to-r from-purple-950/40 via-violet-950/35 to-slate-950/50 border-2 border-purple-500/60 rounded-2xl p-4 shadow-lg space-y-2 backdrop-blur-md">
              <label className="block text-xs font-black text-purple-200 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>{isUrdu ? 'عمر (ماہ / Months)' : 'Age (Months)'}</span>
              </label>
              <input
                type="number"
                min="1"
                max="120"
                value={ageMonths}
                onChange={(e) => setAgeMonths(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3.5 py-2.5 bg-slate-950/80 border-2 border-purple-500/50 rounded-xl text-sm font-extrabold text-white focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-400/50 shadow-inner"
              />
              <span className="text-[11px] font-bold text-purple-300 block text-right pr-1">
                {Math.floor(ageMonths / 12)} {isUrdu ? 'سال' : 'years'} {ageMonths % 12} {isUrdu ? 'ماہ' : 'months'}
              </span>
            </div>

            {/* Box 3: Weight - Cyan / Royal Blue Theme */}
            <div className="bg-gradient-to-r from-cyan-950/40 via-blue-950/35 to-slate-950/50 border-2 border-cyan-500/60 rounded-2xl p-4 shadow-lg space-y-2 backdrop-blur-md">
              <label className="block text-xs font-black text-cyan-200 uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-cyan-400" />
                <span>{isUrdu ? 'موجودہ وزن (Kg)' : 'Current Weight (kg)'}</span>
              </label>
              <div className="relative">
                <Scale className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-300" />
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="60"
                  value={weightKg}
                  onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950/80 border-2 border-cyan-500/50 rounded-xl text-sm font-extrabold text-white focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/50 shadow-inner"
                />
              </div>
            </div>

            {/* Box 4: Height - Indigo / Lavender Theme */}
            <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/35 to-slate-950/50 border-2 border-indigo-500/60 rounded-2xl p-4 shadow-lg space-y-2 backdrop-blur-md">
              <label className="block text-xs font-black text-indigo-200 uppercase tracking-wider flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-indigo-400" />
                <span>{isUrdu ? 'قد (Height in cm)' : 'Current Height (cm)'}</span>
              </label>
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-300" />
                <input
                  type="number"
                  min="30"
                  max="180"
                  value={heightCm}
                  onChange={(e) => setHeightCm(parseFloat(e.target.value) || 30)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950/80 border-2 border-indigo-500/50 rounded-xl text-sm font-extrabold text-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-400/50 shadow-inner"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCalculated(true)}
            className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-indigo-950/80 border-2 border-cyan-300 transition-all hover:scale-101 cursor-pointer"
          >
            {isUrdu ? 'قد اور وزن کا معائنہ کیلکولیٹ کریں' : 'Calculate Growth Assessment'}
          </button>

          {calculated && (
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 space-y-4 transition-all duration-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-white font-sans">
                  {isUrdu ? 'نشوونما کی تفصیلی رپورٹ' : 'Pediatric Growth Assessment Report'}
                </h3>
                <span className="text-xs font-bold px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full">
                  WHO Benchmark
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Weight Assessment Box */}
                <div className={`p-4 rounded-xl border ${
                  weightStatus === 'ideal'
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-100'
                    : 'bg-amber-950/30 border-amber-500/40 text-amber-100'
                }`}>
                  <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-400">
                    {isUrdu ? 'وزن کا معائنہ (Weight Assessment):' : 'Weight Status:'}
                  </span>
                  <div className="text-xl font-extrabold mb-1 text-white">
                    {weightKg} kg
                    <span className="text-xs font-normal text-slate-400 ml-2">
                      ({isUrdu ? 'مثالی حد:' : 'Ideal:'} {expectedWeight.min} - {expectedWeight.max} kg)
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-300">
                    {weightStatus === 'underweight' && (isUrdu ? 'وزن مناسب حد سے کم ہے (قد نہ بڑھنا / وزن کی کمی)' : 'Child is below average WHO weight range.')}
                    {weightStatus === 'ideal' && (isUrdu ? 'وزن بالکل مناسب اور صحت مند حد میں ہے۔' : 'Child weight is within healthy standard range.')}
                    {weightStatus === 'overweight' && (isUrdu ? 'وزن اوسط سے زائد ہے۔' : 'Weight is above standard WHO median.')}
                  </p>
                </div>

                {/* Height Assessment Box */}
                <div className={`p-4 rounded-xl border ${
                  heightStatus === 'ideal'
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-100'
                    : 'bg-amber-950/30 border-amber-500/40 text-amber-100'
                }`}>
                  <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-400">
                    {isUrdu ? 'قد کا معائنہ (Height Assessment):' : 'Height Status:'}
                  </span>
                  <div className="text-xl font-extrabold mb-1 text-white">
                    {heightCm} cm
                    <span className="text-xs font-normal text-slate-400 ml-2">
                      ({isUrdu ? 'مثالی حد:' : 'Ideal:'} {expectedHeight.min} - {expectedHeight.max} cm)
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-300">
                    {heightStatus === 'short' && (isUrdu ? 'قد کی نشوونما میں تاخیر ہو سکتی ہے۔' : 'Height is below WHO standard median.')}
                    {heightStatus === 'ideal' && (isUrdu ? 'قد بالکل مناسب اور بہترین حد میں ہے۔' : 'Height is within healthy growth curve.')}
                  </p>
                </div>
              </div>

              {/* Advice */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <span className="font-bold block text-blue-400">
                  {isUrdu ? 'ڈاکٹر شکیل احمد (چائلڈ سپیشلسٹ) کی ہدایت:' : 'Dr. Shakeel Ahmed Growth Advice:'}
                </span>
                <p className={isUrdu ? 'font-urdu' : ''}>
                  {isUrdu
                    ? 'بچوں کے قد اور وزن کا باقاعدگی سے گراف بنانا بیماریوں اور غذائی قلت سے بچاؤ کے لیے انتہائی اہم ہے۔ کلینک پر آ کر مکمل چیک اپ کروائیں۔'
                    : 'Routine percentile tracking helps detect early nutritional deficits or hormone issues. Book a growth review at Child Care Clinic.'}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onConsultGrowth(`Growth Review: Age ${ageMonths}m, Weight ${weightKg}kg, Height ${heightCm}cm`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-xl shadow-blue-900/30 transition-all cursor-pointer"
                >
                  {isUrdu ? 'قد اور وزن کے لیے اپائنٹمنٹ لیں' : 'Book Growth Consultation'}
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
