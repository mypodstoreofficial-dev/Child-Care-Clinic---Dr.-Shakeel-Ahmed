import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, HeartHandshake, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';
import { CLINIC_INFO, MEDICAL_CONDITIONS } from '../data/clinicData';
import { AppointmentData, Language } from '../types';

interface AppointmentSectionProps {
  lang: Language;
  initialConditionId?: string;
  initialSymptomsNote?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  lang,
  initialConditionId = '',
  initialSymptomsNote = '',
}) => {
  const isUrdu = lang === 'ur';

  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('5:30 PM');
  const [selectedCondition, setSelectedCondition] = useState(initialConditionId);
  const [symptomsNote, setSymptomsNote] = useState(initialSymptomsNote);
  const [bookedAppointment, setBookedAppointment] = useState<AppointmentData | null>(null);

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAppointment: AppointmentData = {
      id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
      parentName,
      childName,
      childAge,
      phone,
      date,
      timeSlot,
      selectedCondition,
      symptomsNote,
      status: 'confirmed',
      createdAt: new Date().toLocaleTimeString(),
    };

    setBookedAppointment(newAppointment);

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('childcare_appointments') || '[]');
      localStorage.setItem('childcare_appointments', JSON.stringify([newAppointment, ...existing]));
    } catch (err) {
      console.error(err);
    }
  };

  const getWhatsAppUrl = () => {
    if (!bookedAppointment) return '#';
    const condName = MEDICAL_CONDITIONS.find(c => c.id === bookedAppointment.selectedCondition)?.titleEnglish || 'General Checkup';
    const message = `Hello Dr. Shakeel Ahmed / Child Care Clinic,
I would like to book a consultation appointment:

📋 Booking Ref: ${bookedAppointment.id}
👤 Parent Name: ${bookedAppointment.parentName}
👶 Child Name: ${bookedAppointment.childName} (${bookedAppointment.childAge})
📞 Contact Phone: ${bookedAppointment.phone}
📅 Preferred Date: ${bookedAppointment.date}
⏰ Evening Time Slot: ${bookedAppointment.timeSlot}
🩺 Condition/Concern: ${condName}
💬 Notes/Symptoms: ${bookedAppointment.symptomsNote || 'Routine checkup'}

Please confirm my appointment slot. Thank you!`;

    return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="appointment" className="py-20 bg-slate-950/40 border-y border-purple-900/40 text-white relative z-10 backdrop-blur-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded-md">
            <span className="text-purple-300 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>{isUrdu ? 'آن لائن وقت کا انتخاب' : 'ONLINE BOOKING'}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase">
            {isUrdu ? 'ڈاکٹر شکیل احمد سے اپائنٹمنٹ لیں' : 'Book Clinic Appointment'}
          </h2>
          <p className={`text-slate-300 text-sm sm:text-base leading-relaxed ${isUrdu ? 'font-urdu text-slate-300' : ''}`}>
            {isUrdu
              ? 'کلینک کے اوقات: شام 5:00 بجے سے رات 9:00 بجے تک۔ نام درج کر کے فوری واٹس ایپ پر وقت لیں۔'
              : 'Consultation hours are 5:00 PM to 9:00 PM. Fill out the form below for fast confirmation.'}
          </p>
        </div>

        {/* Booking Form Card or Confirmation Ticket */}
        {!bookedAppointment ? (
          <form onSubmit={handleSubmit} className="bg-slate-900/50 border-run-4colors p-6 sm:p-10 rounded-3xl shadow-2xl shadow-purple-950/50 space-y-6 backdrop-blur-md relative overflow-hidden">
            <div className="box-run-inner-aura opacity-50 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-run-4colors z-20"></div>
            
            {/* Row 1: Parent & Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Box 1: Parent Name - Purple/Indigo Gradient */}
              <div className="space-y-2">
                <label className={`block text-xs font-black uppercase tracking-wider text-purple-200 flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <User className="w-4 h-4 text-purple-400" />
                  <span>{isUrdu ? 'والد / والدہ کا نام (Parent Name)' : 'Parent / Guardian Name'} *</span>
                </label>
                <div className="relative group">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300 transition-transform group-hover:scale-110" />
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder={isUrdu ? 'مثلاً: محمد علی' : 'e.g., Muhammad Ali'}
                    className="w-full pl-10 pr-4 py-3.5 bg-gradient-to-r from-purple-950/40 via-indigo-950/35 to-slate-950/50 border-2 border-purple-500/50 rounded-2xl text-sm font-bold text-white placeholder-purple-300/40 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-purple-400/50 shadow-lg transition-all backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Box 2: Phone - Blue/Indigo Gradient */}
              <div className="space-y-2">
                <label className={`block text-xs font-black uppercase tracking-wider text-cyan-200 flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{isUrdu ? 'موبائل / واٹس ایپ نمبر (Phone)' : 'Mobile / WhatsApp Number'} *</span>
                </label>
                <div className="relative group">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-300 transition-transform group-hover:scale-110" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0336-XXXXXXX"
                    className="w-full pl-10 pr-4 py-3.5 bg-gradient-to-r from-blue-950/40 via-indigo-950/35 to-slate-950/50 border-2 border-blue-500/50 rounded-2xl text-sm font-bold text-white placeholder-cyan-300/40 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-blue-400/50 font-mono shadow-lg transition-all backdrop-blur-md"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Child Name & Child Age */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Box 3: Child Name - Indigo/Purple Gradient */}
              <div className="space-y-2">
                <label className={`block text-xs font-black uppercase tracking-wider text-indigo-200 flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>{isUrdu ? 'بچے کا نام (Child Name)' : 'Child Name'} *</span>
                </label>
                <input
                  type="text"
                  required
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder={isUrdu ? 'مثلاً: احمد' : 'e.g., Ahmed'}
                  className="w-full px-4 py-3.5 bg-gradient-to-r from-indigo-950/40 via-purple-950/35 to-slate-950/50 border-2 border-indigo-500/50 rounded-2xl text-sm font-bold text-white placeholder-indigo-300/40 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-indigo-400/50 shadow-lg transition-all backdrop-blur-md"
                />
              </div>

              {/* Box 4: Child Age - Cyan/Blue Gradient */}
              <div className="space-y-2">
                <label className={`block text-xs font-black uppercase tracking-wider text-cyan-200 flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>{isUrdu ? 'بچے کی عمر (Age)' : 'Child Age'} *</span>
                </label>
                <input
                  type="text"
                  required
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  placeholder={isUrdu ? 'مثلاً: 2 سال / 6 ماہ' : 'e.g., 2 Years or 6 Months'}
                  className="w-full px-4 py-3.5 bg-gradient-to-r from-blue-950/90 via-sky-950/90 to-slate-950 border-2 border-blue-500/50 rounded-2xl text-sm font-bold text-white placeholder-sky-300/40 focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-blue-400/50 shadow-lg transition-all"
                />
              </div>
            </div>

            {/* Row 3: Date & Time Slots (5 PM to 9 PM) */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Box 5: Preferred Date - Amber/Orange Gradient */}
              <div className="space-y-2">
                <label className={`block text-xs font-black uppercase tracking-wider text-amber-200 flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>{isUrdu ? 'تاریخ (Preferred Date)' : 'Preferred Date'} *</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3.5 bg-gradient-to-r from-amber-950/90 via-orange-950/90 to-slate-950 border-2 border-amber-500/50 rounded-2xl text-sm font-bold text-white focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-400/50 shadow-lg transition-all cursor-pointer"
                />
              </div>

              {/* Box 6: Evening Time Slot - Fuchsia/Violet Gradient */}
              <div className="space-y-2">
                <label className={`block text-xs font-black uppercase tracking-wider text-fuchsia-200 flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                  <Clock className="w-4 h-4 text-fuchsia-400" />
                  <span>{isUrdu ? 'وقت (5:00 PM سے 9:00 PM)' : 'Evening Time Slot'} *</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3.5 bg-gradient-to-r from-fuchsia-950/90 via-violet-950/90 to-slate-950 border-2 border-fuchsia-500/50 rounded-2xl text-sm font-bold text-white focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-400/50 shadow-lg transition-all cursor-pointer"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-slate-950 text-white font-bold">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Box 7: Condition Selection - Emerald/Teal Gradient */}
            <div className="space-y-2">
              <label className={`block text-xs font-black uppercase tracking-wider text-emerald-200 flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                <Stethoscope className="w-4 h-4 text-emerald-400" />
                <span>{isUrdu ? 'معائنے کی وجہ / بیماری (Condition)' : 'Primary Health Concern / Disease'}</span>
              </label>
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full px-4 py-3.5 bg-gradient-to-r from-emerald-950/90 via-teal-950/90 to-slate-950 border-2 border-emerald-500/50 rounded-2xl text-sm font-bold text-white focus:outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-400/50 shadow-lg transition-all cursor-pointer"
              >
                <option value="" className="bg-slate-950 text-white">-- {isUrdu ? 'عام معائنہ (General Checkup)' : 'General Pediatric Consultation'} --</option>
                {MEDICAL_CONDITIONS.map((cond) => (
                  <option key={cond.id} value={cond.id} className="bg-slate-950 text-white font-bold">
                    {cond.titleUrdu} ({cond.titleEnglish})
                  </option>
                ))}
              </select>
            </div>

            {/* Box 8: Symptoms / Extra Note - Indigo/Violet Gradient */}
            <div className="space-y-2">
              <label className={`block text-xs font-black uppercase tracking-wider text-indigo-200 flex items-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>{isUrdu ? 'علامات یا اضافی معلومات (Symptoms / Message)' : 'Symptoms or Specific Notes'}</span>
              </label>
              <textarea
                rows={3}
                value={symptomsNote}
                onChange={(e) => setSymptomsNote(e.target.value)}
                placeholder={isUrdu ? 'بخار کب سے ہے، کھانسی یا دیگر علامات لکھیں...' : 'e.g., Fever since yesterday, mild cough, loss of appetite...'}
                className="w-full px-4 py-3.5 bg-gradient-to-r from-indigo-950/90 via-violet-950/90 to-slate-950 border-2 border-indigo-500/50 rounded-2xl text-sm font-bold text-white placeholder-indigo-300/40 focus:outline-none focus:border-violet-300 focus:ring-2 focus:ring-indigo-400/50 shadow-lg transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-run-4colors text-white font-extrabold py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-purple-900/40 transition-all cursor-pointer hover:scale-101 hover:brightness-110"
            >
              {isUrdu ? 'اپائنٹمنٹ بک کریں' : 'Confirm & Proceed to WhatsApp'}
            </button>

          </form>
        ) : (
          /* Confirmation Ticket */
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-emerald-500/60 space-y-6 text-center transition-all duration-200 backdrop-blur-md">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block">
                {isUrdu ? 'اپائنٹمنٹ کی سلپ تیار ہے' : 'Appointment Generated'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-white mt-2">
                {bookedAppointment.id}
              </h3>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-left text-sm space-y-2.5">
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">{isUrdu ? 'والد کا نام:' : 'Parent Name:'}</span>
                <span className="font-bold text-white">{bookedAppointment.parentName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">{isUrdu ? 'بچے کا نام و عمر:' : 'Child:'}</span>
                <span className="font-bold text-white">{bookedAppointment.childName} ({bookedAppointment.childAge})</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">{isUrdu ? 'تاریخ و وقت:' : 'Date & Time:'}</span>
                <span className="font-bold text-blue-400">{bookedAppointment.date} at {bookedAppointment.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isUrdu ? 'رابطہ نمبر:' : 'Phone:'}</span>
                <span className="font-mono font-bold text-white" dir="ltr">{bookedAppointment.phone}</span>
              </div>
            </div>

            <p className={`text-xs sm:text-sm text-slate-400 ${isUrdu ? 'font-urdu text-slate-300' : ''}`}>
              {isUrdu
                ? 'اپنا ٹائم سلوٹ کنفرم کروانے کے لیے نیچے دیے گئے بٹن پر کلک کر کے واٹس ایپ پر پیغام بھیجیں۔'
                : 'Click below to automatically send your appointment details to Clinic WhatsApp (0336-6624000).'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-8 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>{isUrdu ? 'واٹس ایپ پر میسج بھیجیں (0336-6624000)' : 'Send to WhatsApp (0336-6624000)'}</span>
              </a>

              <button
                type="button"
                onClick={() => setBookedAppointment(null)}
                className="bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold py-3.5 px-6 rounded-xl transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
              >
                {isUrdu ? 'نئی اپائنٹمنٹ لیں' : 'Book Another'}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
