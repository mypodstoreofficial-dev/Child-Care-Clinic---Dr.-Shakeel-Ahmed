import { MedicalCondition, VaccineItem } from '../types';

export const CLINIC_INFO = {
  nameEnglish: "Child Care Clinic",
  nameUrdu: "چائلڈ کیئر کلینک",
  doctorNameEnglish: "Dr. Shakeel Ahmed",
  doctorNameUrdu: "ڈاکٹر شکیل احمد",
  doctorTitleEnglish: "Child Specialist & Pediatric Healthcare Consultant",
  doctorTitleUrdu: "ماہر امراضِ بچوں (چائلڈ سپیشلسٹ)",
  phone: "0336-6624000",
  whatsappNumber: "923366624000",
  formattedPhone: "+92 336 6624000",
  timingEnglish: "5:00 PM to 9:00 PM (Daily)",
  timingUrdu: "شام 5:00 بجے سے رات 9:00 بجے تک",
  noticeEnglish: "Notice: Effective timing for clinic consultation is 5:00 PM to 9:00 PM daily.",
  noticeUrdu: "اطلاع: کلینک کے اوقات کار روزانہ شام 5:00 سے رات 9:00 بجے تک ہیں۔",
  addressEnglish: "Child Care Clinic, Main Hospital Road / Commercial Market",
  addressUrdu: "چائلڈ کیئر کلینک، مین روڈ، نزد سول ہسپتال",
};

export const MEDICAL_CONDITIONS: MedicalCondition[] = [
  {
    id: "mirgi",
    titleUrdu: "مرگی اور دورے",
    titleEnglish: "Pediatric Epilepsy & Seizures",
    category: "chronic",
    shortDescUrdu: "بچوں میں مرگی، جھٹکے اور بخار کے دوروں کی تشخیص اور مکمل علاج۔",
    shortDescEnglish: "Specialized diagnosis and management for pediatric seizures and febrile convulsions.",
    detailedSymptoms: {
      en: [
        "Uncontrolled twitching or shaking of arms and legs",
        "Loss of consciousness or staring spells",
        "Stiffening of body during high fever (febrile seizure)",
        "Confusion or drowsiness following an episode"
      ],
      ur: [
        "ہاتھوں اور پاؤں کا بے اختیار کانپنا یا جھٹکے لگنا",
        "بے ہوشی یا آنکھوں کا اچانک ساکت ہو جانا",
        "تیز بخار میں جسم کا اکڑ جانا",
        "دورے کے بعد غنودگی یا الجھن"
      ]
    },
    careAdvice: {
      en: "Keep child on their side during seizure. Never put anything in child's mouth. Seek immediate expert pediatric review.",
      ur: "دورے کے دوران بچے کو کروٹ دلا دیں۔ منہ میں کوئی چیز نہ ڈالیں اور فوری ڈاکٹر سے رجوع کریں۔"
    },
    urgencyLevel: "high",
    iconName: "Activity"
  },
  {
    id: "yarqan",
    titleUrdu: "یرقان (پیلاہٹ)",
    titleEnglish: "Jaundice in Newborns & Children",
    category: "infectious",
    shortDescUrdu: "نوزائیدہ اور بڑے بچوں میں جلد اور آنکھوں کی پیلاہٹ (یرقان) کا علاج۔",
    shortDescEnglish: "Comprehensive checkup for neonatal and childhood jaundice, liver care, and bilirubin monitoring.",
    detailedSymptoms: {
      en: [
        "Yellowish tint in eyes, skin, and face",
        "Dark yellow urine and pale stools",
        "Excessive lethargy or refusal to feed in newborns",
        "Abdominal discomfort or mild swelling"
      ],
      ur: [
        "آنکھوں اور جلد کا پیلا ہونا",
        "گاڑھا پیلا پیشاب اور سفید یا زرد پاخانہ",
        "بچے میں شدید سستی اور دودھ نہ پینا",
        "پیٹ میں درد یا سوجن"
      ]
    },
    careAdvice: {
      en: "Ensure adequate infant feeding. Bilirubin test recommended if jaundice spreads past chest.",
      ur: "نوزائیدہ کو باقاعدگی سے دودھ پلائیں۔ اگر پیلاہٹ بڑھے تو فوری بلیروبن ٹیسٹ اور معائنہ کرائیں۔"
    },
    urgencyLevel: "medium",
    iconName: "Sun"
  },
  {
    id: "dimaghi-kamzori",
    titleUrdu: "دماغی کمزوری و نشوونما",
    titleEnglish: "Neurological & Developmental Delay",
    category: "developmental",
    shortDescUrdu: "بچوں میں گردن سنبھالنے، بیٹھنے، بولنے یا سیکھنے میں تاخیر کا معائنہ۔",
    shortDescEnglish: "Careful assessment for motor delays, speech delay, brain health, and child growth milestones.",
    detailedSymptoms: {
      en: [
        "Delayed sitting, crawling, or neck holding",
        "Speech delays compared to age milestones",
        "Poor eye contact or lack of social smile",
        "Learning or memory difficulties in school-going children"
      ],
      ur: [
        "گردن سنبھالنے، بیٹھنے یا چلنے میں تاخیر",
        "عمر کے لحاظ سے بولنے میں کمی",
        "توجہ نہ دینا یا آنکھیں نہ ملانا",
        "سیکھنے اور یادداشت میں دشواری"
      ]
    },
    careAdvice: {
      en: "Early intervention and proper nutrition supplements significantly improve developmental outcomes.",
      ur: "بروقت معائنہ اور مناسب غذائیت سے بچے کی نشوونما میں نمایاں بہتری ممکن ہے۔"
    },
    urgencyLevel: "medium",
    iconName: "Brain"
  },
  {
    id: "pneumonia",
    titleUrdu: "نمونیا",
    titleEnglish: "Pediatric Pneumonia",
    category: "respiratory",
    shortDescUrdu: "بچوں کے پھیپھڑوں کے انفیکشن اور نمونیا کی بروقت تشخیص اور علاج۔",
    shortDescEnglish: "Expert care for chest infections, fast breathing, and lung congestion in infants.",
    detailedSymptoms: {
      en: [
        "Rapid or difficult breathing with chest retractions",
        "High fever with severe cough",
        "Wheezing or grunting sound when breathing out",
        "Blueish lips or nails (oxygen alert)"
      ],
      ur: [
        "تیز سانس چلنا یا پسلیاں چلنا",
        "تیز بخار کے ساتھ شدید کھانسی",
        "سانس لیتے وقت سیٹی کی آواز آنا",
        "ہونٹوں کا نیلا ہونا (آکسیجن کی کمی)"
      ]
    },
    careAdvice: {
      en: "Pneumonia requires immediate expert medical care. Keep child warm and hydrated.",
      ur: "نمونیا میں تاخیر نہ کریں۔ پسلیاں چلنے پر فوری کلینک لائیں۔"
    },
    urgencyLevel: "high",
    iconName: "Stethoscope"
  },
  {
    id: "pet-amraz",
    titleUrdu: "پیٹ اور معدے کے امراض",
    titleEnglish: "Stomach, Vomiting & Diarrhea",
    category: "nutritional",
    shortDescUrdu: "بچوں میں الٹی، دست، موشن، پیٹ درد اور ڈائریا کا علاج۔",
    shortDescEnglish: "Effective management for gastroenteritis, dehydration, food allergies, and colic.",
    detailedSymptoms: {
      en: [
        "Repeated loose stools or watery diarrhea",
        "Frequent vomiting and inability to retain fluids",
        "Abdominal cramps and excessive crying",
        "Sunken eyes, dry mouth, or reduced urination"
      ],
      ur: [
        "بار بار پتلے دست یا موشن آنا",
        "الٹیاں ہونا اور پیاس نہ بجھنا",
        "پیٹ میں درد اور بچے کا شدید رونا",
        "آنکھوں کا اندر دھنسنا اور خشک زبان"
      ]
    },
    careAdvice: {
      en: "Start ORS (نمکول) immediately to prevent dehydration. Consult doctor if vomiting persists.",
      ur: "پانی کی کمی دور کرنے کے لیے فوری نمکول (ORS) شروع کریں اور کلینک تشریف لائیں۔"
    },
    urgencyLevel: "medium",
    iconName: "Thermometer"
  },
  {
    id: "khansi",
    titleUrdu: "کھانسی اور سانس کی تکلیف",
    titleEnglish: "Cough, Asthma & Cold",
    category: "respiratory",
    shortDescUrdu: "بچوں کی پرانی کھانسی، ریشہ، نزلہ زکام اور دمہ کا علاج۔",
    shortDescEnglish: "Relief for chronic cough, allergic rhinitis, seasonal croup, and pediatric asthma.",
    detailedSymptoms: {
      en: [
        "Persistent dry or phlegm-filled cough",
        "Nasal congestion and difficulty sleeping",
        "Wheezing sound in chest",
        "Nighttime cough spasms"
      ],
      ur: [
        "مستقل خشک یا ریشے والی کھانسی",
        "ناک بند ہونا اور رات کو سانس لینے میں دشواری",
        "سینے سے سیٹی یا کھڑکھڑاہٹ کی آواز",
        "رات کو کھانسی کے دورے"
      ]
    },
    careAdvice: {
      en: "Steam inhalation under supervision and prescribed pediatric fluids help clear airways.",
      ur: "گرم بھاپ اور مناسب ڈوز کی ادویات سے سانس نالی کی سوزش ختم کی جاتی ہے۔"
    },
    urgencyLevel: "low",
    iconName: "Wind"
  },
  {
    id: "chest-infection",
    titleUrdu: "چیسٹ انفیکشن اور خناق",
    titleEnglish: "Severe Chest Infection & Diphtheria",
    category: "respiratory",
    shortDescUrdu: "سینے کا شدید انفیکشن، ٹانسلز اور گلے کا وائرل/بیکٹیریل علاج۔",
    shortDescEnglish: "Specialized management for lower respiratory infections, croup, and throat swelling.",
    detailedSymptoms: {
      en: [
        "Barking cough sound (Croup)",
        "High fever with throat pain and difficulty swallowing",
        "Stricture or swelling in neck area",
        "Extreme irritability in infants"
      ],
      ur: [
        "کتو ں جیسی آواز والی کھانسی (کپ)",
        "گلے میں درد اور نگلنے میں دشواری",
        "تیز بخار اور سوجن",
        "بچے کی شدید بے چینی"
      ]
    },
    careAdvice: {
      en: "Requires pediatric clinical assessment to distinguish viral vs bacterial chest infection.",
      ur: "بچے کو اینٹی بائیوٹک یا نیبولائزر کی ضرورت کا فیصلہ چائلڈ سپیشلسٹ کرتا ہے۔"
    },
    urgencyLevel: "high",
    iconName: "ShieldAlert"
  },
  {
    id: "cheechak-khasra",
    titleUrdu: "چیچک اور خسرہ",
    titleEnglish: "Measles & Chickenpox Care",
    category: "infectious",
    shortDescUrdu: "خسرہ، چیچک، سرخ دانوں اور وائرل بخار کی نگہداشت۔",
    shortDescEnglish: "Targeted support for viral rash infections, measles complications, and skin sores.",
    detailedSymptoms: {
      en: [
        "Red spots/rashes starting from face spreading to body",
        "High fever with red watery eyes and runny nose",
        "Itchy fluid-filled blisters (chickenpox)",
        "Loss of appetite and lethargy"
      ],
      ur: [
        "جسم پر سرخ دانے جو چہرے سے شروع ہوں",
        "تیز بخار، سرخ آنکھیں اور ناک بہنا",
        "پانی بھرے چھالے اور خارش",
        "شدید سستی اور کھانا پینا چھوڑنا"
      ]
    },
    careAdvice: {
      en: "Maintain isolation, give fever medication, and keep child hydrated. Ensure Measles vaccine is given.",
      ur: "بچے کو الگ رکھیں۔ پانی کی مقدار پوری رکھیں اور خسرہ کی ویکسین لازمی لگوائیں۔"
    },
    urgencyLevel: "medium",
    iconName: "Flame"
  },
  {
    id: "khoon-ki-kami",
    titleUrdu: "یرقان کی کمی / خون کی کمی",
    titleEnglish: "Anemia & Iron Deficiency",
    category: "nutritional",
    shortDescUrdu: "بچوں میں رنگت کا پیلا ہونا، ہیموگلوبن (Hb) کی کمی اور آئرن کے مسائل۔",
    shortDescEnglish: "Diagnosis and dietary/iron therapy for pediatric anemia and pale weakness.",
    detailedSymptoms: {
      en: [
        "Pale skin, lips, and inner eyelids",
        "Child gets tired easily during regular play",
        "Craving non-food items like soil, chalk, or ice (Pica)",
        "Frequent illness or slow weight gain"
      ],
      ur: [
        "جلد، ہونٹوں اور آنکھوں کے اندر سفیدی یا پیلاہٹ",
        "کھیل کود کے دوران جلدی تھک جانا",
        "مٹی، چاک یا برف کھانے کی عادت (پائیکا)",
        "بار بار بیمار ہونا اور وزن نہ بڑھنا"
      ]
    },
    careAdvice: {
      en: "Balanced iron-rich nutrition, reduction of excessive cow milk, and prescribed iron drops restore vitality.",
      ur: "آئرن سے بھرپور غذا اور ڈاکٹر کے تجویز کردہ آئرن سپلیمنٹ سے ہیموگلوبن معمول پر آتا ہے۔"
    },
    urgencyLevel: "low",
    iconName: "Droplet"
  },
  {
    id: "bhook-na-lagna",
    titleUrdu: "بھوک نہ لگنا و بدہضمی",
    titleEnglish: "Loss of Appetite & Nutrition Deficit",
    category: "nutritional",
    shortDescUrdu: "بچوں میں کھانا نہ کھانے کی عادت، غذائی قلت اور پیٹ کی اصلاح۔",
    shortDescEnglish: "Solutions for picky eaters, poor appetite, intestinal worms, and nutritional deficiency.",
    detailedSymptoms: {
      en: [
        "Refusal to eat solid foods or healthy meals",
        "Stunted weight gain or weakness",
        "Frequent stomach aches or bloating",
        "Grinding teeth at night (possible worm infestation)"
      ],
      ur: [
        "کھانا کھانے سے انکار اور ضدی پن",
        "وزن کا رک جانا اور جسمانی کمزوری",
        "پیٹ میں بار بار درد یا گیس",
        "رات کو دانت پیسنا (پیٹ کے کیڑے)"
      ]
    },
    careAdvice: {
      en: "Deworming medication and appetite stimulants under pediatric guidance show rapid improvements.",
      ur: "پیٹ کے کیڑوں کی دوا اور وٹامنز کی مناسب خوراک سے بھوک واپس آتی ہے۔"
    },
    urgencyLevel: "low",
    iconName: "Apple"
  },
  {
    id: "wazan-kad",
    titleUrdu: "قد نہ بڑھنا / وزن کی کمی",
    titleEnglish: "Stunted Growth & Low Weight",
    category: "developmental",
    shortDescUrdu: "عمر کے حساب سے قد چھوٹا رہنا اور وزن کم ہونے کا حل۔",
    shortDescEnglish: "Growth percentiles evaluation, hormone assessment, and personalized child nutrition plans.",
    detailedSymptoms: {
      en: [
        "Child looks significantly smaller than age peers",
        "No increase in height/weight for 6+ months",
        "Weak bones or delayed tooth growth",
        "Lack of physical energy"
      ],
      ur: [
        "ہم عمر بچوں کے مقابلے میں قد چھوٹا رہنا",
        "6 ماہ سے قد یا وزن میں کوئی اضافہ نہ ہونا",
        "ہڈیوں اور دانتوں کی سست نشوونما",
        "جسمانی طاقت میں کمی"
      ]
    },
    careAdvice: {
      en: "Check height percentile against standard WHO charts. Dr. Shakeel Ahmed provides custom growth guidance.",
      ur: "ڈبلیو ایچ او (WHO) چارٹ پر بچے کے قد و وزن کا گراف بنا کر علاج کیا جاتا ہے۔"
    },
    urgencyLevel: "medium",
    iconName: "TrendingUp"
  },
  {
    id: "sugar",
    titleUrdu: "بچوں کی شوگر",
    titleEnglish: "Childhood Diabetes (Type 1)",
    category: "chronic",
    shortDescUrdu: "بچوں میں شوگر (ٹائپ 1 ڈائیبیٹیز) کی بروقت تشخیص اور علاج۔",
    shortDescEnglish: "Careful monitoring and treatment for juvenile diabetes, excessive thirst, and urination.",
    detailedSymptoms: {
      en: [
        "Excessive thirst and dry mouth",
        "Frequent urination (or sudden bedwetting)",
        "Rapid unexplained weight loss despite eating",
        "Fatigue, weakness, or fruity breath odor"
      ],
      ur: [
        "شدید پیاس لگنا اور بار بار پانی مانگنا",
        "بار بار پیشاب آنا (یا بستر گلا کرنا)",
        "بغیر کسی وجہ کے اچانک وزن گرنا",
        "شدید تھکاوٹ اور غنودگی"
      ]
    },
    careAdvice: {
      en: "Type 1 diabetes in children requires immediate blood sugar check and specialist pediatric management.",
      ur: "بچوں میں شوگر کی تشخیص کے لیے فوری بلڈ شوگر ٹیسٹ اور چائلڈ سپیشلسٹ سے مشورہ ضروری ہے۔"
    },
    urgencyLevel: "high",
    iconName: "HeartPulse"
  }
];

export const VACCINE_SCHEDULE: VaccineItem[] = [
  {
    ageEn: "At Birth",
    ageUr: "پیدائش کے وقت",
    vaccineEn: "BCG, OPV-0, Hepatitis B",
    vaccineUr: "بی سی جی، پولیو قطرے، ہیپاٹائٹس بی",
    preventsEn: "Tuberculosis, Polio, Hepatitis B",
    preventsUr: "ٹی بی، پولیو اور ہیپاٹائٹس",
    essential: true
  },
  {
    ageEn: "6 Weeks",
    ageUr: "6 ہفتے (ڈیڑھ ماہ)",
    vaccineEn: "OPV-1, Penta-1, Pneumo-1, Rotavirus-1",
    vaccineUr: "پولیو، پینٹا ویلنٹ-1، نمونیہ-1، روٹا وائرس-1",
    preventsEn: "Diphtheria, Tetanus, Pertussis, Hep B, Hib, Pneumonia, Diarrhea",
    preventsUr: "کالی کھانسی، تپ دق، کزاق، گردن توڑ بخار، نمونیہ اور دست",
    essential: true
  },
  {
    ageEn: "10 Weeks",
    ageUr: "10 ہفتے (ڈھائی ماہ)",
    vaccineEn: "OPV-2, Penta-2, Pneumo-2, Rotavirus-2",
    vaccineUr: "پولیو، پینٹا ویلنٹ-2، نمونیہ-2، روٹا وائرس-2",
    preventsEn: "Booster protection for core childhood diseases",
    preventsUr: "بچوں کی بنیادی مہلک بیماریوں کی دوسری خوراک",
    essential: true
  },
  {
    ageEn: "14 Weeks",
    ageUr: "14 ہفتے (ساڑھے تین ماہ)",
    vaccineEn: "OPV-3, IPV-1, Penta-3, Pneumo-3",
    vaccineUr: "پولیو، انجیکشن پولیو، پینٹا ویلنٹ-3، نمونیہ-3",
    preventsEn: "Complete primary infant immunization series",
    preventsUr: "شیر خوار بچوں کی حفاظت کی مکمل ابتدائی سیریز",
    essential: true
  },
  {
    ageEn: "9 Months",
    ageUr: "9 ماہ",
    vaccineEn: "Measles-1, Typhoid Conjugate",
    vaccineUr: "خسرہ ویکسین-1، ٹائیفائیڈ ویکسین",
    preventsEn: "Measles virus and Typhoid Fever",
    preventsUr: "خسرہ اور ٹائیفائیڈ کے بخار سے تحفظ",
    essential: true
  },
  {
    ageEn: "15 Months",
    ageUr: "15 ماہ (سوا سال)",
    vaccineEn: "Measles-2, Chickenpox (Optional)",
    vaccineUr: "خسرہ ویکسین-2، چیچک ویکسین",
    preventsEn: "Long-term immunity against Measles outbreaks",
    preventsUr: "خسرہ اور لاپتہ دانوں سے مستقل تحفظ",
    essential: true
  }
];

export const CLINIC_REVIEWS = [
  {
    nameEn: "Muhammad Imran",
    nameUr: "محمد عمران",
    rating: 5,
    commentEn: "Dr. Shakeel Ahmed is very patient and gentle with infants. My 1-year-old had chest infection and recovered within 2 days with his prescribed treatment.",
    commentUr: "ڈاکٹر شکیل احمد صاحب بچوں کے ساتھ بہت شفقت سے پیش آتے ہیں۔ میرے بیٹے کا چیسٹ انفیکشن الحمدللہ دو دن میں ٹھیک ہو گیا۔",
    date: "1 week ago"
  },
  {
    nameEn: "Ayesha Malik",
    nameUr: "عائشہ ملک",
    rating: 5,
    commentEn: "Best Child Specialist clinic. The timing 5:00 PM to 9:00 PM is super convenient after office hours. Booking on WhatsApp was seamless.",
    commentUr: "بہترین چائلڈ سپیشلسٹ کلینک۔ شام 5 سے 9 کا وقت بہت مناسب ہے اور واٹس ایپ پر وقت ملنا بہت آسان رہا۔",
    date: "2 weeks ago"
  },
  {
    nameEn: "Tariq Mahmood",
    nameUr: "طارق محمود",
    rating: 5,
    commentEn: "We visited for my daughter's growth and weight issues. Dr. Shakeel's guidance and diet chart worked wonders. Highly recommended!",
    commentUr: "ہم بیٹی کے وزن نہ بڑھنے کی وجہ سے آئے۔ ڈاکٹر صاحب کی دی گئی ہدایت سے بیٹی کی صحت میں بہت بہتری آئی۔",
    date: "1 month ago"
  }
];

export const FAQS = [
  {
    qEn: "What are the exact clinic consultation timings?",
    qUr: "کلینک کے وقت اور اوقات کار کیا ہیں؟",
    aEn: "Child Care Clinic is open daily from 5:00 PM to 9:00 PM. You can visit directly or pre-book your slot via WhatsApp (0336-6624000).",
    aUr: "چائلڈ کیئر کلینک روزانہ شام 5:00 بجے سے رات 9:00 بجے تک کھلا رہتا ہے۔ آپ براہ راست آ سکتے ہیں یا واٹس ایپ (0336-6624000) پر وقت بک کروا سکتے ہیں۔"
  },
  {
    qEn: "What should I do if my child has a high fever at night?",
    qUr: "اگر بچے کو رات کے وقت تیز بخار ہو جائے تو کیا کریں؟",
    aEn: "Keep the child lightly dressed, apply damp cloth sponges on forehead and arms with lukewarm water, and give weight-appropriate pediatric Paracetamol. If fever stays above 102°F or child has difficulty breathing, seek urgent medical care.",
    aUr: "بچے کو ہلکے کپڑے پہنائیں۔ نیم گرم پانی سے پٹیاں کریں۔ بچے کی عمر و وزن کے مطابق پیراسیٹامول سیرپ دیں۔ اگر بخار 102 سے تیز ہو یا پسلیاں چلیں تو فوری ڈاکٹر سے رجوع کریں۔"
  },
  {
    qEn: "How can I book an appointment with Dr. Shakeel Ahmed?",
    qUr: "ڈاکٹر شکیل احمد کے پاس اپائنٹمنٹ کیسے بک کی جا سکتی ہے؟",
    aEn: "You can click 'Book Appointment' on this website to send an automatic appointment message directly to clinic WhatsApp (0336-6624000) or call 0336-6624000 directly.",
    aUr: "آپ ویب سائٹ پر موجود 'اپائنٹمنٹ لیں' بٹن پر کلک کر کے واٹس ایپ (0336-6624000) کے ذریعے نام اور وقت بھیج سکتے ہیں یا براہ راست کال کر سکتے ہیں۔"
  },
  {
    qEn: "Are vaccinations available at Child Care Clinic?",
    qUr: "کیا کلینک پر بچوں کی ویکسینیشن (حفاظتی ٹیکے) کی سہولت موجود ہے؟",
    aEn: "Yes, expert guidance and routine pediatric immunization checkups are provided according to the standard vaccination schedule.",
    aUr: "جی ہاں، بچوں کو بیماریوں سے بچاؤ کی تمام ضروری ویکسینیشن اور مشورہ دیا جاتا ہے۔"
  }
];
