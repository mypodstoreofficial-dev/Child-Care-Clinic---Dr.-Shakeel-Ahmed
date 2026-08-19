import React from 'react';
import { Clock, MapPin, Phone, MessageSquare, Shield, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface LocationHoursProps {
  lang: Language;
}

export const LocationHours: React.FC<LocationHoursProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  return (
    <section id="location" className="py-20 bg-slate-950/40 border-y border-purple-900/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              {isUrdu ? 'پتہ اور اوقات کار' : 'LOCATION & TIMINGS'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
            {isUrdu ? 'کلینک کا پتہ اور رابطہ' : 'Visit Child Care Clinic'}
          </h2>
          <p className={`text-slate-400 text-base leading-relaxed ${isUrdu ? 'font-urdu text-slate-300' : ''}`}>
            {isUrdu ? CLINIC_INFO.noticeUrdu : CLINIC_INFO.noticeEnglish}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Timings & Notice Box - Purple & Blue Card Theme */}
          <div className="bg-gradient-to-b from-purple-950/40 via-indigo-950/35 to-slate-950/50 rounded-3xl p-6 sm:p-8 border-2 border-purple-500/60 shadow-2xl flex flex-col justify-between space-y-6 backdrop-blur-md">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-500/20 text-purple-300 rounded-2xl border-2 border-purple-400/50 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white font-urdu">
                    {isUrdu ? 'کلینک کے اوقات کار' : 'Consultation Timings'}
                  </h3>
                  <p className="text-xs text-purple-300 font-bold uppercase tracking-wider">
                    {isUrdu ? 'روزانہ شام کا شفٹ' : 'Daily Evening Schedule'}
                  </p>
                </div>
              </div>

              {/* Notice Banner - Blue/Indigo Vibrant Box */}
              <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/35 to-slate-950/50 border-2 border-blue-400/80 p-4 rounded-2xl text-cyan-200 font-urdu text-base sm:text-lg font-black text-right leading-relaxed shadow-xl backdrop-blur-md">
                <p>7 اکتوبر 2024 سے کلینک کے اوقات کار شام 5:00 سے 9:00 تک ہیں</p>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                {/* Monday - Sunday Box - Blue/Indigo */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-950/40 via-indigo-950/35 to-slate-950/50 border-2 border-blue-500/50 rounded-2xl shadow-lg backdrop-blur-md">
                  <span className="font-bold text-blue-100">{isUrdu ? 'سوموار - اتوار (روزانہ)' : 'Monday – Sunday (Daily)'}</span>
                  <span className="font-black text-cyan-300 text-base">5:00 PM – 9:00 PM</span>
                </div>

                {/* Walk-in Box - Purple/Blue */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-950/40 via-indigo-950/35 to-slate-950/50 border-2 border-purple-500/50 rounded-2xl text-xs shadow-lg backdrop-blur-md">
                  <span className="font-bold text-purple-100">{isUrdu ? 'براہ راست وزٹ یا پیشگی اپائنٹمنٹ' : 'Walk-in & Pre-booked Slots'}</span>
                  <span className="text-purple-300 font-black text-sm px-2.5 py-1 bg-purple-900/60 rounded-lg border border-purple-400/50">{isUrdu ? 'کھلا ہے' : 'Open Evening'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-purple-800/60">
              <p className="text-xs text-purple-200 font-bold">
                {isUrdu ? '* ہنگامی علامات کی صورت میں تاخیر نہ کریں اور فوری معائنہ کروائیں۔' : '* For emergency symptoms, bring child immediately during clinic hours.'}
              </p>
            </div>
          </div>

          {/* Location & Contact Box - Blue/Purple Card Theme */}
          <div className="bg-gradient-to-b from-blue-950/40 via-indigo-950/35 to-slate-950/50 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-blue-500/60 flex flex-col justify-between space-y-6 backdrop-blur-md">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/20 text-cyan-300 rounded-2xl border-2 border-blue-400/50 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black font-urdu text-white">
                    {isUrdu ? 'کلینک کا پتہ اور فون نمبر' : 'Clinic Address & Contact'}
                  </h3>
                  <p className="text-xs text-cyan-300 font-bold uppercase tracking-wider">
                    Child Care Clinic – Dr. Shakeel Ahmed
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-200">
                {/* Address Box - Indigo/Purple */}
                <div className="p-4 bg-gradient-to-r from-indigo-950/40 via-purple-950/35 to-slate-950/50 rounded-2xl border-2 border-indigo-500/50 space-y-1 shadow-lg backdrop-blur-md">
                  <span className="text-[11px] font-black uppercase tracking-widest text-indigo-300 block">{isUrdu ? 'پتہ' : 'Address'}</span>
                  <p className="font-bold text-base font-urdu text-white">
                    {isUrdu ? CLINIC_INFO.addressUrdu : CLINIC_INFO.addressEnglish}
                  </p>
                </div>

                {/* Phone Box - Blue/Cyan */}
                <div className="p-4 bg-gradient-to-r from-blue-950/90 via-cyan-950/90 to-slate-950 rounded-2xl border-2 border-blue-500/50 space-y-1 shadow-lg">
                  <span className="text-[11px] font-black uppercase tracking-widest text-cyan-300 block">{isUrdu ? 'فون / واٹس ایپ نمبر' : 'Helpline & WhatsApp'}</span>
                  <div className="text-2xl font-mono font-black text-cyan-200 drop-shadow-md" dir="ltr">
                    0336-6624000
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3.5 rounded-2xl font-black text-center text-xs sm:text-sm uppercase tracking-wider shadow-xl border-2 border-cyan-300 transition-all hover:scale-103 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{isUrdu ? 'کال کریں' : 'Call Clinic'}</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-3.5 rounded-2xl font-black text-center text-xs sm:text-sm uppercase tracking-wider shadow-xl border-2 border-purple-300 transition-all hover:scale-103 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{isUrdu ? 'واٹس ایپ' : 'WhatsApp'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
