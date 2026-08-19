import React from 'react';
import { Stethoscope, Award, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface DoctorProfileProps {
  lang: Language;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  return (
    <section className="py-20 bg-slate-950/40 border-y border-purple-900/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Doctor Info Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded-md">
              <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">
                {isUrdu ? 'معالج کا تعارف' : 'MEET YOUR PEDIATRIC SPECIALIST'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight">
              {isUrdu ? CLINIC_INFO.doctorNameUrdu : CLINIC_INFO.doctorNameEnglish}
              <span className="block text-xl sm:text-2xl text-purple-300 font-normal mt-1 font-urdu">
                {isUrdu ? CLINIC_INFO.doctorTitleUrdu : CLINIC_INFO.doctorTitleEnglish}
              </span>
            </h2>

            <p className={`text-slate-300 text-base sm:text-lg leading-relaxed ${isUrdu ? 'font-urdu text-slate-300' : ''}`}>
              {isUrdu
                ? 'ڈاکٹر شکیل احمد بچوں کے تجربہ کار چائلڈ سپیشلسٹ ہیں۔ آپ نوزائیدہ بچوں سے لے کر بالغ ہونے تک بچوں کے تمام پیچیدہ و عام امراض (نمونیا، مرگی، یرقان، چیسٹ انفیکشن، قد و وزن کی کمی اور شوگر) کی ماہرانہ تشخیص اور شفقت بھرے انداز میں علاج کے لیے معروف ہیں۔'
                : 'Dr. Shakeel Ahmed brings years of dedicated clinical practice in pediatric care. Specialized in treating respiratory disorders, neonatal jaundice, childhood epilepsy, growth issues, and general child illnesses.'}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {/* Box 1: Experienced Clinical Expertise */}
              <div className="rounded-2xl p-[2px] border-animated-4colors shadow-2xl shadow-black/80 group hover:scale-102 transition-transform">
                <div className="bg-black rounded-[14px] p-5 h-full flex items-start gap-3 shadow-inner">
                  <div className="p-2.5 rounded-xl bg-black border border-cyan-400/40 text-cyan-300 shrink-0 mt-0.5 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm drop-shadow-sm">
                      {isUrdu ? 'تجربہ کار طبی ٹیم' : 'Experienced Clinical Expertise'}
                    </h3>
                    <p className="text-xs text-cyan-200 font-medium mt-1">
                      {isUrdu ? 'بچوں کے علاج میں سالہا سال کا بھروسہ' : 'Dedicated care for infants and young children.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2: Child-Friendly Environment */}
              <div className="rounded-2xl p-[2px] border-animated-4colors shadow-2xl shadow-black/80 group hover:scale-102 transition-transform">
                <div className="bg-black rounded-[14px] p-5 h-full flex items-start gap-3 shadow-inner">
                  <div className="p-2.5 rounded-xl bg-black border border-pink-400/40 text-pink-200 shrink-0 mt-0.5 shadow-md">
                    <Heart className="w-6 h-6 text-pink-300 fill-pink-400/30" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm drop-shadow-sm">
                      {isUrdu ? 'بچوں کے لیے دوستانہ ماحول' : 'Child-Friendly Environment'}
                    </h3>
                    <p className="text-xs text-pink-200 font-medium mt-1">
                      {isUrdu ? 'پُرسکون اور آرام دہ کلینک' : 'Comfortable waiting area and gentle checkup.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                {isUrdu ? 'کلینک کی نمایاں خصوصیات:' : 'Key Clinic Facilities:'}
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isUrdu ? 'نیبولائزر اور آکسیجن کی سہولت' : 'Nebulizer & Oxygen Support'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isUrdu ? 'بلیروبن اور ہیموگلوبن معائنہ' : 'Jaundice & Hb Evaluation'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isUrdu ? 'قد و وزن کا الیکٹرانک گراف' : 'Digital Weight & Growth Chart'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isUrdu ? 'واٹس ایپ پر پیشگی اپائنٹمنٹ' : 'WhatsApp Instant Appointment'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Doctor Showcase Badge / Visual Right Column with 4-Color Running Border */}
          <div className="lg:col-span-5">
            <div className="rounded-[32px] p-[3px] border-animated-4colors shadow-2xl shadow-black/90 group">
              <div className="bg-black rounded-[29px] p-7 sm:p-8 text-white relative overflow-hidden shadow-inner">
                <div className="box-run-inner-aura opacity-70 pointer-events-none" />
                
                <div className="w-16 h-16 rounded-2xl p-[2px] border-animated-4colors-fast mb-6 shadow-lg relative z-10">
                  <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-white">
                    <Stethoscope className="w-8 h-8 text-cyan-300 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300 bg-black px-3.5 py-1 rounded-full border border-cyan-400/50 inline-block">
                    Child Specialist
                  </span>
                  <h3 className="text-3xl font-black text-white">
                    {CLINIC_INFO.doctorNameEnglish}
                  </h3>
                  <p className="text-lg font-bold text-amber-300 font-urdu">
                    {CLINIC_INFO.doctorNameUrdu}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-900 pt-4">
                    {isUrdu
                      ? 'روزانہ شام 5:00 سے رات 9:00 بجے تک چائلڈ کیئر کلینک میں بچوں کی دیکھ بھال کے لیے دستیاب ہیں۔'
                      : 'Available daily from 5:00 PM to 9:00 PM for pediatric consultations and follow-up reviews.'}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900 flex items-center justify-between text-xs relative z-10">
                  <div>
                    <span className="text-slate-400 block">{isUrdu ? 'کلینک فون' : 'Hotline'}</span>
                    <span className="font-mono text-sm font-black text-cyan-200" dir="ltr">0336-6624000</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">{isUrdu ? 'ٹائمنگ' : 'Hours'}</span>
                    <span className="font-black text-amber-300">5:00 PM – 9:00 PM</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
