import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DigitalBoardReplica } from './components/DigitalBoardReplica';
import { ServicesSection } from './components/ServicesSection';
import { SymptomChecker } from './components/SymptomChecker';
import { GrowthCalculator } from './components/GrowthCalculator';
import { VaccineTracker } from './components/VaccineTracker';
import { AppointmentSection } from './components/AppointmentSection';
import { DoctorProfile } from './components/DoctorProfile';
import { LocationHours } from './components/LocationHours';
import { ReviewsFaq } from './components/ReviewsFaq';
import { Footer } from './components/Footer';
import bg3DImage from './assets/images/clinic_3d_bg_1786444246445.jpg';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [bookingConditionId, setBookingConditionId] = useState<string>('');
  const [bookingSymptomsNote, setBookingSymptomsNote] = useState<string>('');
  const [showTopBtn, setShowTopBtn] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(true); // Always keep active so user can test and see it instantly
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJumpToTop = () => {
    // Direct instant jump to top without any slow scrolling delay
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleBookWithCondition = (conditionId: string) => {
    setBookingConditionId(conditionId);
    handleNavigate('appointment');
  };

  const handleBookWithSymptoms = (symptomsNote: string) => {
    setBookingSymptomsNote(symptomsNote);
    handleNavigate('appointment');
  };

  return (
    <div className={`min-h-screen text-slate-100 font-sans relative overflow-x-hidden ${lang === 'ur' ? 'dir-rtl' : ''}`} dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      {/* 3D Fixed Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-100 transform-gpu transition-all duration-1000"
        style={{ backgroundImage: `url(${bg3DImage})` }}
      />
      
      {/* Soft Pediatric Tint Overlay for High Contrast and Vivid 3D Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-950/50 via-slate-900/40 to-slate-950/60 pointer-events-none" />

      {/* Background Ambient Blur Orbs in Pediatric Gem Colors */}
      <div className="fixed top-[-10%] right-[-10%] w-[650px] h-[650px] bg-cyan-500/25 rounded-full blur-[160px] pointer-events-none z-0 animate-pulse" />
      <div className="fixed top-[30%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[10%] w-[650px] h-[650px] bg-purple-500/25 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-[60%] right-[-5%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Sticky Top Navigation */}
      <div className="relative z-10">
        <Navbar
          lang={lang}
          setLang={setLang}
          onBookClick={() => handleNavigate('appointment')}
          activeSection={activeSection}
          setActiveSection={handleNavigate}
        />

        {/* Page View Switcher */}
        <main className="py-4">
          {/* Back to Home & Page Context Header Bar when inside a sub-page */}
          {activeSection !== 'home' && activeSection !== 'all' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-900/90 border-2 border-cyan-400/60 p-4 sm:p-5 rounded-2xl backdrop-blur-xl shadow-2xl gap-4">
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => handleNavigate('home')}
                    className="px-4 py-2.5 bg-run-4colors text-white font-black text-xs sm:text-sm rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-lg border border-white/30 shrink-0"
                  >
                    <span className="text-base font-bold">←</span>
                    <span>{lang === 'ur' ? 'صفحہ اول (ہوم) پر جائیں' : 'Return to Home Page'}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium hidden md:inline">
                      {lang === 'ur' ? 'موجودہ صفحہ:' : 'Current Page:'}
                    </span>
                    <span className="px-3.5 py-1.5 bg-cyan-500/20 text-cyan-200 border border-cyan-400/50 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                      {activeSection === 'digital-board' && (lang === 'ur' ? '📋 کلینک بورڈ پیج' : '📋 Digital Signboard Page')}
                      {activeSection === 'services' && (lang === 'ur' ? '🩺 امراض و علاج پیج' : '🩺 Pediatric Diseases Page')}
                      {activeSection === 'symptoms' && (lang === 'ur' ? '🔍 علامات کی پڑتال پیج' : '🔍 Symptom Checker Page')}
                      {activeSection === 'growth' && (lang === 'ur' ? '⚖️ قد و وزن کیلکولیٹر پیج' : '⚖️ Growth Calculator Page')}
                      {activeSection === 'vaccines' && (lang === 'ur' ? '💉 ویکسین شیڈول پیج' : '💉 Vaccine Schedule Page')}
                      {activeSection === 'appointment' && (lang === 'ur' ? '📅 آن لائن اپائنٹمنٹ پیج' : '📅 Book Appointment Page')}
                      {activeSection === 'doctor' && (lang === 'ur' ? '👨‍⚕️ ڈاکٹر پروفائل پیج' : '👨‍⚕️ Doctor Profile Page')}
                      {activeSection === 'location' && (lang === 'ur' ? '📍 پتہ و اوقات کار پیج' : '📍 Location & Hours Page')}
                    </span>
                  </div>
                </div>

                {/* Sub-pages quick navigation chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 text-xs no-scrollbar">
                  <button
                    onClick={() => handleNavigate('all')}
                    className="px-3 py-1.5 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-400/40 text-purple-200 font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap"
                  >
                    {lang === 'ur' ? 'تمام صفحات' : 'All in One'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PAGE 1: HOME */}
          {activeSection === 'home' && (
            <div className="space-y-12">
              <Hero
                lang={lang}
                onBookClick={() => handleNavigate('appointment')}
                onExploreServices={() => handleNavigate('services')}
                onViewBoard={() => handleNavigate('digital-board')}
              />

              {/* Pages Directory Grid */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 mb-8">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-black uppercase tracking-widest border border-cyan-400/40">
                    {lang === 'ur' ? 'الگ الگ صفحات کا انتخاب کریں' : 'Select Separate Pages'}
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-black text-white ${lang === 'ur' ? 'font-urdu' : ''}`}>
                    {lang === 'ur' ? 'کلینک کے تمام الگ الگ صفحات' : 'Separate Website Pages'}
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {/* Card 1: Clinic Board */}
                  <div className="rounded-2xl p-[2.5px] border-animated-4colors shadow-2xl shadow-black/80 hover:scale-105 transition-all group">
                    <button
                      onClick={() => handleNavigate('digital-board')}
                      className="w-full h-full p-5 sm:p-6 bg-black rounded-[14px] text-center space-y-3 cursor-pointer flex flex-col items-center justify-between shadow-inner"
                    >
                      <div className="w-12 h-12 rounded-2xl p-[1.5px] border-animated-4colors-fast shadow-md flex items-center justify-center shrink-0">
                        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          📋
                        </div>
                      </div>
                      <div className={`font-black text-white text-base sm:text-lg ${lang === 'ur' ? 'font-urdu' : ''}`}>
                        {lang === 'ur' ? 'کلینک بورڈ' : 'Clinic Board'}
                      </div>
                      <div className="text-xs text-purple-300 font-black">
                        {lang === 'ur' ? 'ڈیجیٹل سائن بورڈ' : 'Digital Signboard'}
                      </div>
                    </button>
                  </div>

                  {/* Card 2: Conditions */}
                  <div className="rounded-2xl p-[2.5px] border-animated-4colors shadow-2xl shadow-black/80 hover:scale-105 transition-all group">
                    <button
                      onClick={() => handleNavigate('services')}
                      className="w-full h-full p-5 sm:p-6 bg-black rounded-[14px] text-center space-y-3 cursor-pointer flex flex-col items-center justify-between shadow-inner"
                    >
                      <div className="w-12 h-12 rounded-2xl p-[1.5px] border-animated-4colors-fast shadow-md flex items-center justify-center shrink-0">
                        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          🩺
                        </div>
                      </div>
                      <div className={`font-black text-white text-base sm:text-lg ${lang === 'ur' ? 'font-urdu' : ''}`}>
                        {lang === 'ur' ? 'امراض و علاج' : 'Conditions'}
                      </div>
                      <div className="text-xs text-cyan-300 font-black">
                        {lang === 'ur' ? '12 بچوں کی بیماریاں' : 'Pediatric Diseases'}
                      </div>
                    </button>
                  </div>

                  {/* Card 3: Symptom Checker */}
                  <div className="rounded-2xl p-[2.5px] border-animated-4colors shadow-2xl shadow-black/80 hover:scale-105 transition-all group">
                    <button
                      onClick={() => handleNavigate('symptoms')}
                      className="w-full h-full p-5 sm:p-6 bg-black rounded-[14px] text-center space-y-3 cursor-pointer flex flex-col items-center justify-between shadow-inner"
                    >
                      <div className="w-12 h-12 rounded-2xl p-[1.5px] border-animated-4colors-fast shadow-md flex items-center justify-center shrink-0">
                        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          🔍
                        </div>
                      </div>
                      <div className={`font-black text-white text-base sm:text-lg ${lang === 'ur' ? 'font-urdu' : ''}`}>
                        {lang === 'ur' ? 'علامات کی پڑتال' : 'Symptom Checker'}
                      </div>
                      <div className="text-xs text-emerald-300 font-black">
                        {lang === 'ur' ? 'فوری بیماری چیک کریں' : 'Quick Symptom Tool'}
                      </div>
                    </button>
                  </div>

                  {/* Card 4: Growth Calculator */}
                  <div className="rounded-2xl p-[2.5px] border-animated-4colors shadow-2xl shadow-black/80 hover:scale-105 transition-all group">
                    <button
                      onClick={() => handleNavigate('growth')}
                      className="w-full h-full p-5 sm:p-6 bg-black rounded-[14px] text-center space-y-3 cursor-pointer flex flex-col items-center justify-between shadow-inner"
                    >
                      <div className="w-12 h-12 rounded-2xl p-[1.5px] border-animated-4colors-fast shadow-md flex items-center justify-center shrink-0">
                        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          ⚖️
                        </div>
                      </div>
                      <div className={`font-black text-white text-base sm:text-lg ${lang === 'ur' ? 'font-urdu' : ''}`}>
                        {lang === 'ur' ? 'قد و وزن کیلکولیٹر' : 'Growth Calculator'}
                      </div>
                      <div className="text-xs text-fuchsia-300 font-black">
                        {lang === 'ur' ? 'WHO معیار کے مطابق' : 'WHO Standard Chart'}
                      </div>
                    </button>
                  </div>

                  {/* Card 5: Vaccine Chart */}
                  <div className="rounded-2xl p-[2.5px] border-animated-4colors shadow-2xl shadow-black/80 hover:scale-105 transition-all group">
                    <button
                      onClick={() => handleNavigate('vaccines')}
                      className="w-full h-full p-5 sm:p-6 bg-black rounded-[14px] text-center space-y-3 cursor-pointer flex flex-col items-center justify-between shadow-inner"
                    >
                      <div className="w-12 h-12 rounded-2xl p-[1.5px] border-animated-4colors-fast shadow-md flex items-center justify-center shrink-0">
                        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          💉
                        </div>
                      </div>
                      <div className={`font-black text-white text-base sm:text-lg ${lang === 'ur' ? 'font-urdu' : ''}`}>
                        {lang === 'ur' ? 'ویکسین چارٹ' : 'Vaccine Chart'}
                      </div>
                      <div className="text-xs text-amber-300 font-black">
                        {lang === 'ur' ? 'حکومتی شیڈول' : 'Schedule Tracker'}
                      </div>
                    </button>
                  </div>

                  {/* Card 6: Book Visit */}
                  <div className="rounded-2xl p-[2.5px] border-animated-4colors shadow-2xl shadow-black/80 hover:scale-105 transition-all group">
                    <button
                      onClick={() => handleNavigate('appointment')}
                      className="w-full h-full p-5 sm:p-6 bg-black rounded-[14px] text-center space-y-3 cursor-pointer flex flex-col items-center justify-between shadow-inner"
                    >
                      <div className="w-12 h-12 rounded-2xl p-[1.5px] border-animated-4colors-fast shadow-md flex items-center justify-center shrink-0">
                        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          📅
                        </div>
                      </div>
                      <div className={`font-black text-white text-base sm:text-lg ${lang === 'ur' ? 'font-urdu' : ''}`}>
                        {lang === 'ur' ? 'اپائنٹمنٹ بکنگ' : 'Book Visit'}
                      </div>
                      <div className="text-xs text-rose-300 font-black">
                        {lang === 'ur' ? 'آن لائن فارم' : 'WhatsApp Form'}
                      </div>
                    </button>
                  </div>

                  {/* Card 7: Location & Hours */}
                  <div className="rounded-2xl p-[2.5px] border-animated-4colors shadow-2xl shadow-black/80 hover:scale-105 transition-all group">
                    <button
                      onClick={() => handleNavigate('location')}
                      className="w-full h-full p-5 sm:p-6 bg-black rounded-[14px] text-center space-y-3 cursor-pointer flex flex-col items-center justify-between shadow-inner"
                    >
                      <div className="w-12 h-12 rounded-2xl p-[1.5px] border-animated-4colors-fast shadow-md flex items-center justify-center shrink-0">
                        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          📍
                        </div>
                      </div>
                      <div className={`font-black text-white text-base sm:text-lg ${lang === 'ur' ? 'font-urdu' : ''}`}>
                        {lang === 'ur' ? 'پتہ و اوقات کار' : 'Location & Hours'}
                      </div>
                      <div className="text-xs text-teal-300 font-black">
                        {lang === 'ur' ? 'کلینک کا ایڈریس' : 'Clinic Address'}
                      </div>
                    </button>
                  </div>

                  {/* Card 8: View All Pages */}
                  <div className="rounded-2xl p-[2.5px] border-animated-4colors shadow-2xl shadow-black/80 hover:scale-105 transition-all group">
                    <button
                      onClick={() => handleNavigate('all')}
                      className="w-full h-full p-5 sm:p-6 bg-black rounded-[14px] text-center space-y-3 cursor-pointer flex flex-col items-center justify-between shadow-inner"
                    >
                      <div className="w-12 h-12 rounded-2xl p-[1.5px] border-animated-4colors-fast shadow-md flex items-center justify-center shrink-0">
                        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          🌐
                        </div>
                      </div>
                      <div className={`font-black text-white text-base sm:text-lg ${lang === 'ur' ? 'font-urdu' : ''}`}>
                        {lang === 'ur' ? 'تمام صفحات' : 'View All Pages'}
                      </div>
                      <div className="text-xs text-indigo-300 font-black">
                        {lang === 'ur' ? 'پورا پیج ایک ساتھ' : 'Full Page Scroll'}
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <DoctorProfile lang={lang} />
            </div>
          )}

          {/* PAGE: DIGITAL BOARD */}
          {activeSection === 'digital-board' && (
            <DigitalBoardReplica
              lang={lang}
              onBookCondition={handleBookWithCondition}
            />
          )}

          {/* PAGE: SERVICES & CONDITIONS */}
          {activeSection === 'services' && (
            <ServicesSection
              lang={lang}
              onSelectCondition={handleBookWithCondition}
            />
          )}

          {/* PAGE: SYMPTOM CHECKER */}
          {activeSection === 'symptoms' && (
            <SymptomChecker
              lang={lang}
              onBookUrgent={handleBookWithSymptoms}
            />
          )}

          {/* PAGE: GROWTH CALCULATOR */}
          {activeSection === 'growth' && (
            <GrowthCalculator
              lang={lang}
              onConsultGrowth={(note) => handleBookWithSymptoms(note)}
            />
          )}

          {/* PAGE: VACCINE TRACKER */}
          {activeSection === 'vaccines' && (
            <VaccineTracker lang={lang} />
          )}

          {/* PAGE: APPOINTMENT SECTION */}
          {activeSection === 'appointment' && (
            <AppointmentSection
              lang={lang}
              initialConditionId={bookingConditionId}
              initialSymptomsNote={bookingSymptomsNote}
            />
          )}

          {/* PAGE: DOCTOR PROFILE */}
          {activeSection === 'doctor' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DoctorProfile lang={lang} />
            </div>
          )}

          {/* PAGE: LOCATION & HOURS */}
          {activeSection === 'location' && (
            <div className="space-y-12">
              <LocationHours lang={lang} />
              <ReviewsFaq lang={lang} />
            </div>
          )}

          {/* ALL PAGES VIEW */}
          {activeSection === 'all' && (
            <div className="space-y-12">
              <Hero
                lang={lang}
                onBookClick={() => handleNavigate('appointment')}
                onExploreServices={() => handleNavigate('services')}
                onViewBoard={() => handleNavigate('digital-board')}
              />
              <DigitalBoardReplica
                lang={lang}
                onBookCondition={handleBookWithCondition}
              />
              <DoctorProfile lang={lang} />
              <ServicesSection
                lang={lang}
                onSelectCondition={handleBookWithCondition}
              />
              <SymptomChecker
                lang={lang}
                onBookUrgent={handleBookWithSymptoms}
              />
              <GrowthCalculator
                lang={lang}
                onConsultGrowth={(note) => handleBookWithSymptoms(note)}
              />
              <VaccineTracker lang={lang} />
              <AppointmentSection
                lang={lang}
                initialConditionId={bookingConditionId}
                initialSymptomsNote={bookingSymptomsNote}
              />
              <LocationHours lang={lang} />
              <ReviewsFaq lang={lang} />
            </div>
          )}
        </main>

        {/* Footer */}
        <Footer lang={lang} onNavigate={handleNavigate} />

        {/* Fixed Instant Jump-To-Top Floating Button */}
        {showTopBtn && (
          <button
            onClick={handleJumpToTop}
            title={lang === 'ur' ? 'ڈائریکٹ اوپر جائیں' : 'Jump to Top'}
            aria-label="Jump to Top"
            className="fixed bottom-6 right-6 z-50 p-[3px] rounded-2xl border-run-vibrant-squircle shadow-2xl shadow-cyan-950/80 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group shrink-0"
          >
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-[13px] bg-slate-950/85 backdrop-blur-xl flex flex-col items-center justify-center transition-all group-hover:bg-slate-900/95">
              <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform group-hover:-translate-y-1 stroke-[2.5]" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
