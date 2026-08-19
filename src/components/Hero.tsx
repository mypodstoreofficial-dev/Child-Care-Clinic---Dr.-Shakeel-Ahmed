import React from 'react';
import { Phone, MessageSquare, Clock, ShieldCheck, Award, Stethoscope, Heart, Calendar, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import bg3DImage from '../assets/images/pediatric_3d_bg_1786187621356.jpg';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
  onExploreServices: () => void;
  onViewBoard: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onBookClick,
  onExploreServices,
  onViewBoard,
}) => {
  const isUrdu = lang === 'ur';

  return (
    <section className="relative overflow-hidden bg-slate-950/40 text-white py-12 sm:py-20 lg:py-28 z-10 backdrop-blur-xs">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy & Actions */}
          <div className={`lg:col-span-7 space-y-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
            
            {/* Timings Badge - Clean Single Cyan Color */}
            <div className="inline-block px-4 py-1.5 bg-cyan-950/80 border border-cyan-400/40 rounded-full shadow-md">
              <span className="text-cyan-300 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {isUrdu ? 'روزانہ شام 5:00 سے رات 9:00 بجے تک' : 'Daily Evening Clinic: 5:00 PM – 9:00 PM'}
              </span>
            </div>

            {/* Title & Headline with Clean Single Color */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                {isUrdu ? (
                  <>
                    <span className="block font-urdu font-extrabold text-white">
                      CHILD CARE CLINIC
                    </span>
                    <span className="block mt-2 font-urdu font-extrabold text-2xl sm:text-4xl lg:text-5xl text-cyan-400 leading-snug">
                      بچوں کا ہسپتال و بہترین چائلڈ سپیشلسٹ
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block font-sans uppercase text-white">
                      CHILD CARE CLINIC
                    </span>
                    <span className="block mt-2 font-sans uppercase text-3xl sm:text-5xl lg:text-6xl text-cyan-400">
                      NEXT-GEN PEDIATRIC CARE
                    </span>
                  </>
                )}
              </h1>

              <p className={`text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl ${isUrdu ? 'font-urdu text-slate-300' : ''}`}>
                {isUrdu
                  ? `${CLINIC_INFO.doctorNameUrdu} (${CLINIC_INFO.doctorTitleUrdu}) کی زیرِ نگرانی نوزائیدہ بچوں سے لے کر 15 سال تک کے تمام بچوں کی صحت اور علاج کا مکمل مرکز۔`
                  : `Comprehensive pediatric medical care led by ${CLINIC_INFO.doctorNameEnglish}. Specialized diagnosis and treatment for childhood infections, epilepsy, pneumonia, jaundice, growth delays, and routine care.`}
              </p>
            </div>

            {/* Highlights Grid - Unified Single Color Slate/Cyan Palette */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* Box 1: Specialist Doctor */}
              <div className="bg-slate-900/80 border border-cyan-500/30 p-3.5 rounded-2xl flex items-center gap-3 backdrop-blur-md shadow-lg shadow-cyan-950/40 hover:border-cyan-400 hover:scale-103 transition-all">
                <div className="p-2 bg-cyan-500/20 rounded-xl border border-cyan-400/40 text-cyan-300 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-cyan-300 font-black uppercase tracking-wider">{isUrdu ? 'چائلڈ سپیشلسٹ' : 'Specialist Doctor'}</div>
                  <div className={`text-sm font-black text-white ${isUrdu ? 'font-urdu' : ''}`}>
                    {isUrdu ? CLINIC_INFO.doctorNameUrdu : CLINIC_INFO.doctorNameEnglish}
                  </div>
                </div>
              </div>

              {/* Box 2: Hotline & WhatsApp */}
              <div className="bg-slate-900/80 border border-cyan-500/30 p-3.5 rounded-2xl flex items-center gap-3 backdrop-blur-md shadow-lg shadow-cyan-950/40 hover:border-cyan-400 hover:scale-103 transition-all">
                <div className="p-2 bg-cyan-500/20 rounded-xl border border-cyan-400/40 text-cyan-300 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-cyan-300 font-black uppercase tracking-wider">{isUrdu ? 'فون / واٹس ایپ' : 'Hotline & WhatsApp'}</div>
                  <div className="text-sm font-black text-white font-mono" dir="ltr">
                    0336-6624000
                  </div>
                </div>
              </div>

              {/* Box 3: Conditions Treated */}
              <div className="bg-slate-900/80 border border-cyan-500/30 p-3.5 rounded-2xl flex items-center gap-3 backdrop-blur-md shadow-lg shadow-cyan-950/40 hover:border-cyan-400 hover:scale-103 transition-all">
                <div className="p-2 bg-cyan-500/20 rounded-xl border border-cyan-400/40 text-cyan-300 shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-cyan-300 font-black uppercase tracking-wider">{isUrdu ? 'اہم بیماریاں' : 'Conditions Treated'}</div>
                  <div className={`text-sm font-black text-white ${isUrdu ? 'font-urdu' : ''}`}>
                    {isUrdu ? '12 بنیادی بیماریاں' : '12 Core Conditions'}
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs - Single Primary Color Scheme */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onBookClick}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-2xl font-black shadow-2xl shadow-cyan-950/80 border border-cyan-400/50 transition-all cursor-pointer flex items-center gap-2.5 text-sm sm:text-base hover:scale-105 active:scale-95 backdrop-blur-md"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>{isUrdu ? 'آن لائن وقت بک کریں (واٹس ایپ)' : 'Book Appointment (WhatsApp)'}</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900/90 hover:bg-slate-800 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-200 hover:text-white px-6 py-4 rounded-2xl font-black shadow-xl shadow-cyan-950/60 transition-all hover:scale-105 cursor-pointer flex items-center gap-2 text-sm sm:text-base"
              >
                <MessageSquare className="w-5 h-5 fill-cyan-400 text-slate-900" />
                <span>0336-6624000</span>
              </a>

              <button
                onClick={onViewBoard}
                className="bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white px-6 py-4 rounded-2xl font-bold backdrop-blur-md transition-all cursor-pointer flex items-center gap-2 text-sm hover:scale-103 shadow-lg"
              >
                <Stethoscope className="w-4 h-4 text-cyan-300" />
                <span>{isUrdu ? 'کلینک کا مرکزی بورڈ دیکھیں' : 'View Banner Replica'}</span>
              </button>
            </div>

          </div>

          {/* Right Card: Digital Doctor & Clinic Showcase Card with 4-Color Running Border */}
          <div className="lg:col-span-5 relative">
            {/* Outer 4-Color Animated Running Border Frame */}
            <div className="w-full rounded-[42px] p-[3px] border-animated-4colors shadow-2xl shadow-black/90 group relative">
              <div className="aspect-[4/5] w-full bg-black rounded-[39px] p-4 sm:p-5 overflow-hidden relative flex flex-col justify-between shadow-inner">
                {/* 3D Background Image Layer for Card */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
                  style={{ backgroundImage: `url(${bg3DImage})` }}
                />
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                {/* Inner Window Frame with Subtle 4-color Running Aura */}
                <div className="w-full h-full rounded-[28px] bg-black flex flex-col relative overflow-hidden p-5 sm:p-6 z-10 border border-slate-900 shadow-inner">
                  <div className="box-run-inner-aura opacity-60 pointer-events-none"></div>
                  
                  {/* Window Dots header */}
                  <div className="flex items-center gap-2 mb-5 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-md shadow-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-md shadow-yellow-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 shadow-md shadow-green-400/50"></div>
                    <span className="text-[10px] text-cyan-200/90 font-mono ml-auto font-bold tracking-wider">CHILD CARE CLINIC v2.0</span>
                  </div>

                  {/* Doctor Header */}
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    {/* Doctor Avatar with 4-Color Running Border */}
                    <div className="w-16 h-16 rounded-2xl p-[2.5px] border-animated-4colors-fast shadow-xl shadow-black/80 shrink-0">
                      <div className="w-full h-full bg-black rounded-[13px] flex items-center justify-center">
                        <Stethoscope className="w-8 h-8 text-cyan-300 animate-pulse" />
                      </div>
                    </div>

                    <div>
                      <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-black bg-black text-cyan-300 border border-cyan-400/50 mb-1 uppercase tracking-wider">
                        Child Specialist
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
                        {CLINIC_INFO.doctorNameEnglish}
                      </h2>
                      <p className="text-xs font-bold text-amber-300 font-urdu">
                        {CLINIC_INFO.doctorNameUrdu}
                      </p>
                    </div>
                  </div>

                  {/* Clinic Timings Box with 4-Color Running Border */}
                  <div className="rounded-2xl p-[2px] border-animated-4colors shadow-2xl shadow-black/80 mb-4 relative z-10">
                    <div className="bg-black rounded-[14px] p-4 shadow-inner">
                      <div className="flex items-center justify-between text-xs text-slate-300 font-medium mb-1">
                        <span className="flex items-center gap-1.5 text-cyan-200 font-bold">
                          <Clock className="w-4 h-4 text-amber-400" />
                          {isUrdu ? 'کلینک کے اوقات' : 'Clinic Hours'}
                        </span>
                        <span className="text-emerald-300 font-black uppercase text-[10px] tracking-wider bg-black border border-emerald-400/40 px-2 py-0.5 rounded-full">
                          {isUrdu ? 'اوپن' : 'Evening Clinic'}
                        </span>
                      </div>
                      <div className="text-lg sm:text-xl font-black text-white flex items-center justify-between">
                        <span className="text-run-4colors">5:00 PM – 9:00 PM</span>
                        <span className="text-xs text-purple-200 font-urdu font-bold">شام 5:00 سے 9:00</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2 border-t border-slate-900 pt-2 font-medium">
                        {isUrdu ? '7 اکتوبر 2024 سے نافذ العمل نیا وقت' : 'Effective daily schedule: 5:00 PM to 9:00 PM'}
                      </p>
                    </div>
                  </div>

                  {/* Quick Checklist of Key Services with Running 4-Color Borders */}
                  <div className="space-y-2 text-xs text-slate-100 mb-4 relative z-10">
                    {/* Item 1 */}
                    <div className="rounded-xl p-[1.5px] border-animated-4colors hover:scale-[1.02] transition-transform">
                      <div className="flex items-center gap-2.5 bg-black p-2.5 rounded-[10px] shadow-inner">
                        <div className="w-5 h-5 rounded-full bg-black border border-cyan-400/50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="font-bold text-white text-xs">{isUrdu ? 'نمونیا، چیسٹ انفیکشن اور سانس کی بیماریاں' : 'Pneumonia & Chest Infections Care'}</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="rounded-xl p-[1.5px] border-animated-4colors hover:scale-[1.02] transition-transform">
                      <div className="flex items-center gap-2.5 bg-black p-2.5 rounded-[10px] shadow-inner">
                        <div className="w-5 h-5 rounded-full bg-black border border-emerald-400/50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="font-bold text-white text-xs">{isUrdu ? 'مرگی، جھٹکے اور بخار کے دورے' : 'Pediatric Seizures & Epilepsy'}</span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="rounded-xl p-[1.5px] border-animated-4colors hover:scale-[1.02] transition-transform">
                      <div className="flex items-center gap-2.5 bg-black p-2.5 rounded-[10px] shadow-inner">
                        <div className="w-5 h-5 rounded-full bg-black border border-pink-400/50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-pink-400" />
                        </div>
                        <span className="font-bold text-white text-xs">{isUrdu ? 'نوزائیدہ یرقان اور دماغی و جسمانی کمزوری' : 'Neonatal Jaundice & Growth Delays'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Hotline with 4-Color Running Border */}
                  <div className="mt-auto rounded-2xl p-[2px] border-animated-4colors shadow-2xl shadow-black/80 relative z-10">
                    <div className="p-3.5 bg-black rounded-[14px] flex justify-between items-center shadow-inner">
                      <div>
                        <div className="text-[10px] text-cyan-300 font-black uppercase tracking-wider">Direct Helpline</div>
                        <div className="text-sm sm:text-base font-extrabold font-mono text-white tracking-wider">0336-6624000</div>
                      </div>
                      <a
                        href={`tel:${CLINIC_INFO.phone}`}
                        className="w-10 h-10 bg-run-4colors rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30"
                      >
                        <Phone className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/10 rounded-full mix-blend-screen blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
