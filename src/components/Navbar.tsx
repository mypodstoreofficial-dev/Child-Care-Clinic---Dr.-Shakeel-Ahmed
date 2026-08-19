import React from 'react';
import { Phone, Clock, MessageSquare, Globe, Heart, Shield, Stethoscope } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onBookClick: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onBookClick,
  activeSection,
  setActiveSection,
}) => {
  const isUrdu = lang === 'ur';

  const navLinks = [
    { id: 'home', labelEn: 'Home', labelUr: 'صفحہ اول' },
    { id: 'digital-board', labelEn: 'Clinic Board', labelUr: 'کلینک بورڈ' },
    { id: 'services', labelEn: 'Conditions', labelUr: 'امراض و علاج' },
    { id: 'symptoms', labelEn: 'Symptom Checker', labelUr: 'علامات کی پڑتال' },
    { id: 'growth', labelEn: 'Growth Calc', labelUr: 'قد و وزن' },
    { id: 'vaccines', labelEn: 'Vaccine Chart', labelUr: 'ویکسین چارٹ' },
    { id: 'appointment', labelEn: 'Book Visit', labelUr: 'اپائنٹمنٹ' },
    { id: 'location', labelEn: 'Contact & Hours', labelUr: 'پتہ و اوقات' },
    { id: 'all', labelEn: 'View All', labelUr: 'تمام صفحات' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/30 text-white">
      {/* Top Notice & Emergency Hotline Bar with Single Unified Navy/Cyan Palette */}
      <div className="bg-slate-900/90 border-b border-cyan-500/20 py-1.5 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-white">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-cyan-950/80 text-cyan-200 px-3 py-0.5 rounded-full font-bold text-xs border border-cyan-400/40 backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {isUrdu ? 'اوقات کار: شام 5:00 سے رات 9:00' : 'Daily Hours: 5:00 PM – 9:00 PM'}
            </span>
            <span className="hidden md:inline text-slate-300 text-xs font-medium">
              {isUrdu ? CLINIC_INFO.noticeUrdu : CLINIC_INFO.noticeEnglish}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-cyan-300 hover:text-white font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-cyan-400 text-slate-950" />
              <span dir="ltr">{CLINIC_INFO.phone}</span>
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-300" />
              <span className="hidden sm:inline">{isUrdu ? 'کال کریں' : 'Call'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo Branding with Clean Single Color */}
          <div 
            onClick={() => setActiveSection('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-600/30 group-hover:scale-105 transition-all">
              <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white font-sans drop-shadow-sm">
                  {CLINIC_INFO.nameEnglish}<span className="text-cyan-400">.</span>
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Pediatric
                </span>
              </div>
              <p className={`text-xs sm:text-sm font-medium text-slate-400 ${isUrdu ? 'font-urdu text-cyan-300' : ''}`}>
                {isUrdu ? `${CLINIC_INFO.doctorNameUrdu} - ${CLINIC_INFO.doctorTitleUrdu}` : `${CLINIC_INFO.doctorNameEnglish} (${CLINIC_INFO.doctorTitleEnglish})`}
              </p>
            </div>
          </div>

          {/* Nav Items Desktop with Clean Single Color Active State */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs uppercase font-extrabold tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/50 scale-102 border border-cyan-400/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/80 border border-transparent'
                  } ${isUrdu ? 'font-urdu capitalize' : ''}`}
                >
                  {isUrdu ? link.labelUr : link.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Language Toggle & Single Color Book Button */}
          <div className="flex items-center gap-2.5">
            {/* Language switch */}
            <button
              onClick={() => setLang(isUrdu ? 'en' : 'ur')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-cyan-500/40 bg-slate-900/90 text-slate-200 hover:text-white hover:border-cyan-300 text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
              title="Toggle Language / زبان تبدیل کریں"
            >
              <Globe className="w-4 h-4 text-cyan-300" />
              <span>{isUrdu ? 'English' : 'اردو'}</span>
            </button>

            {/* Appointment CTA with Single Color Cyan Theme */}
            <button
              onClick={onBookClick}
              className="hidden sm:flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 hover:scale-105 active:scale-95 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-black shadow-xl shadow-cyan-900/40 border border-cyan-400/50 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 text-white fill-white" />
              <span>{isUrdu ? 'اپائنٹمنٹ لیں' : 'Book Visit'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Nav Bar with Single Color Active Button */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 gap-2 border-t border-slate-800 no-scrollbar text-xs">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`px-4 py-1.5 rounded-full whitespace-nowrap text-xs font-bold transition-all cursor-pointer ${
                activeSection === link.id
                  ? 'bg-cyan-600 text-white shadow-md border border-cyan-400/40 scale-102'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white'
              } ${isUrdu ? 'font-urdu' : ''}`}
            >
              {isUrdu ? link.labelUr : link.labelEn}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
