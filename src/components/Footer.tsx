import React from 'react';
import { Stethoscope, Phone, MessageSquare, Heart, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const isUrdu = lang === 'ur';

  return (
    <footer className="bg-slate-950/40 backdrop-blur-xl text-slate-300 pt-16 pb-12 border-t-2 border-run-4colors text-xs sm:text-sm relative z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-run-4colors text-white flex items-center justify-center font-bold shadow-xl shadow-purple-900/40 border border-white/20">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-run-4colors-fast text-base tracking-tight font-sans uppercase drop-shadow-sm">
                  {CLINIC_INFO.nameEnglish}
                </h3>
                <p className="text-xs text-run-4colors-vibrant font-urdu font-bold">
                  {CLINIC_INFO.nameUrdu}
                </p>
              </div>
            </div>

            <p className={`text-slate-300 text-xs leading-relaxed ${isUrdu ? 'font-urdu text-slate-200' : ''}`}>
              {isUrdu
                ? `${CLINIC_INFO.doctorNameUrdu} کی زیرِ نگرانی بچوں کی دیکھ بھال اور علاج کا مستند مرکز۔`
                : `Pediatric healthcare clinic led by ${CLINIC_INFO.doctorNameEnglish}. Specialized diagnosis for infant and childhood illnesses.`}
            </p>

            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold bg-amber-500/15 border border-amber-400/40 px-3 py-1.5 rounded-xl w-fit backdrop-blur-md">
              <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>5:00 PM – 9:00 PM Daily</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-widest text-cyan-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              {isUrdu ? 'اہم لنکس' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-slate-300 font-medium">
              <li>
                <button onClick={() => onNavigate('digital-board')} className="hover:text-cyan-300 hover:translate-x-1.5 transition-all flex items-center gap-1.5 cursor-pointer">
                  <span className="text-purple-400">›</span>
                  <span>{isUrdu ? 'کلینک کا ڈسپلے بورڈ' : 'Digital Signboard'}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-cyan-300 hover:translate-x-1.5 transition-all flex items-center gap-1.5 cursor-pointer">
                  <span className="text-purple-400">›</span>
                  <span>{isUrdu ? 'امراض و علاج (Conditions Treated)' : 'Conditions Treated'}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('symptoms')} className="hover:text-cyan-300 hover:translate-x-1.5 transition-all flex items-center gap-1.5 cursor-pointer">
                  <span className="text-purple-400">›</span>
                  <span>{isUrdu ? 'علامات کی جانچ (Symptom Checker)' : 'Symptom Checker'}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('growth')} className="hover:text-cyan-300 hover:translate-x-1.5 transition-all flex items-center gap-1.5 cursor-pointer">
                  <span className="text-purple-400">›</span>
                  <span>{isUrdu ? 'قد و وزن کیلکولیٹر' : 'Growth Percentile Calculator'}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vaccines')} className="hover:text-cyan-300 hover:translate-x-1.5 transition-all flex items-center gap-1.5 cursor-pointer">
                  <span className="text-purple-400">›</span>
                  <span>{isUrdu ? 'حفاظتی ٹیکوں کا شیڈول' : 'Vaccine Schedule'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Medical Conditions */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-widest text-cyan-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>KEY SPECIALTIES</span>
              <span className="text-[10px] text-purple-300 font-urdu font-normal">(اہم امراض)</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-gradient-to-br from-purple-950/70 to-indigo-950/80 border-2 border-purple-400/90 text-white p-2 rounded-xl shadow-lg shadow-purple-950/50 hover:scale-105 hover:border-purple-300 transition-all text-center backdrop-blur-md cursor-pointer flex flex-col justify-center items-center">
                <span className="font-black text-[11px] tracking-wide text-purple-200 uppercase">Epilepsy / Fits</span>
                <span className="font-urdu text-[11px] text-purple-300/90">مرگی / دورے</span>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-950/70 to-blue-950/80 border-2 border-cyan-400/90 text-white p-2 rounded-xl shadow-lg shadow-cyan-950/50 hover:scale-105 hover:border-cyan-300 transition-all text-center backdrop-blur-md cursor-pointer flex flex-col justify-center items-center">
                <span className="font-black text-[11px] tracking-wide text-cyan-200 uppercase">Jaundice</span>
                <span className="font-urdu text-[11px] text-cyan-300/90">یرقان</span>
              </div>

              <div className="bg-gradient-to-br from-blue-950/70 to-indigo-950/80 border-2 border-blue-400/90 text-white p-2 rounded-xl shadow-lg shadow-blue-950/50 hover:scale-105 hover:border-blue-300 transition-all text-center backdrop-blur-md cursor-pointer flex flex-col justify-center items-center">
                <span className="font-black text-[11px] tracking-wide text-blue-200 uppercase">Pneumonia</span>
                <span className="font-urdu text-[11px] text-blue-300/90">نمونیا</span>
              </div>

              <div className="bg-gradient-to-br from-teal-950/70 to-emerald-950/80 border-2 border-teal-400/90 text-white p-2 rounded-xl shadow-lg shadow-teal-950/50 hover:scale-105 hover:border-teal-300 transition-all text-center backdrop-blur-md cursor-pointer flex flex-col justify-center items-center">
                <span className="font-black text-[11px] tracking-wide text-teal-200 uppercase">Chest Infection</span>
                <span className="font-urdu text-[11px] text-teal-300/90">چیسٹ انفیکشن</span>
              </div>

              <div className="bg-gradient-to-br from-rose-950/70 to-pink-950/80 border-2 border-rose-400/90 text-white p-2 rounded-xl shadow-lg shadow-rose-950/50 hover:scale-105 hover:border-rose-300 transition-all text-center backdrop-blur-md cursor-pointer flex flex-col justify-center items-center">
                <span className="font-black text-[11px] tracking-wide text-rose-200 uppercase">Measles & Pox</span>
                <span className="font-urdu text-[11px] text-rose-300/90">خسرہ و چیچک</span>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-950/70 to-purple-950/80 border-2 border-fuchsia-400/90 text-white p-2 rounded-xl shadow-lg shadow-fuchsia-950/50 hover:scale-105 hover:border-fuchsia-300 transition-all text-center backdrop-blur-md cursor-pointer flex flex-col justify-center items-center">
                <span className="font-black text-[11px] tracking-wide text-fuchsia-200 uppercase">Brain & Neuro</span>
                <span className="font-urdu text-[11px] text-fuchsia-300/90">دماغی کمزوری</span>
              </div>

              <div className="bg-gradient-to-br from-emerald-950/70 to-teal-950/80 border-2 border-emerald-400/90 text-white p-2 rounded-xl shadow-lg shadow-emerald-950/50 hover:scale-105 hover:border-emerald-300 transition-all text-center backdrop-blur-md cursor-pointer flex flex-col justify-center items-center">
                <span className="font-black text-[11px] tracking-wide text-emerald-200 uppercase">Growth Stunting</span>
                <span className="font-urdu text-[11px] text-emerald-300/90">قد و وزن کی کمی</span>
              </div>

              <div className="bg-gradient-to-br from-amber-950/70 to-orange-950/80 border-2 border-amber-400/90 text-white p-2 rounded-xl shadow-lg shadow-amber-950/50 hover:scale-105 hover:border-amber-300 transition-all text-center backdrop-blur-md cursor-pointer flex flex-col justify-center items-center">
                <span className="font-black text-[11px] tracking-wide text-amber-200 uppercase">Child Diabetes</span>
                <span className="font-urdu text-[11px] text-amber-300/90">بچوں کی شوگر</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-widest text-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DIRECT HELPLINE</span>
              <span className="text-[10px] text-emerald-200 font-urdu font-normal">(براہِ راست رابطہ)</span>
            </h4>
            
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 border-2 border-emerald-300/70 text-white px-4 py-3.5 rounded-2xl font-black text-sm shadow-xl shadow-emerald-950/70 transition-all hover:scale-103 cursor-pointer backdrop-blur-md group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 fill-white text-emerald-900" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-100 font-bold">WhatsApp Helpline</div>
                  <div className="font-mono text-sm sm:text-base font-black tracking-wide" dir="ltr">0336-6624000</div>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-950/60 border border-emerald-400/40 text-emerald-200 px-2 py-0.5 rounded-full font-bold uppercase">
                Chat
              </span>
            </a>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center justify-between gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 hover:from-blue-500 hover:to-fuchsia-500 border-2 border-cyan-300/70 text-white px-4 py-3.5 rounded-2xl font-black text-sm shadow-xl shadow-indigo-950/70 transition-all hover:scale-103 cursor-pointer backdrop-blur-md group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-cyan-100 font-bold">Direct Phone Call</div>
                  <div className="font-mono text-sm sm:text-base font-black tracking-wide" dir="ltr">0336-6624000</div>
                </div>
              </div>
              <span className="text-[10px] bg-indigo-950/60 border border-cyan-400/40 text-cyan-200 px-2 py-0.5 rounded-full font-bold uppercase">
                Call
              </span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-purple-900/40 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {CLINIC_INFO.nameEnglish} ({CLINIC_INFO.doctorNameEnglish}). All rights reserved.
          </span>
          <span className="flex items-center gap-1 font-semibold text-purple-300">
            <span>Crafted for pediatric care</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
          </span>
        </div>

      </div>
    </footer>
  );
};
