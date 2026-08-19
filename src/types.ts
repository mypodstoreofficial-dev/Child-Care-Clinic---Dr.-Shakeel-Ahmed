export type Language = 'ur' | 'en';

export interface MedicalCondition {
  id: string;
  titleUrdu: string;
  titleEnglish: string;
  category: 'respiratory' | 'developmental' | 'nutritional' | 'infectious' | 'chronic';
  shortDescUrdu: string;
  shortDescEnglish: string;
  detailedSymptoms: {
    en: string[];
    ur: string[];
  };
  careAdvice: {
    en: string;
    ur: string;
  };
  urgencyLevel: 'high' | 'medium' | 'low';
  iconName: string;
}

export interface AppointmentData {
  id: string;
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  date: string;
  timeSlot: string;
  selectedCondition?: string;
  symptomsNote: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface SymptomResult {
  urgency: 'emergency' | 'clinic_visit' | 'home_care';
  titleEn: string;
  titleUr: string;
  descEn: string;
  descUr: string;
  recommendedActionEn: string;
  recommendedActionUr: string;
}

export interface VaccineItem {
  ageEn: string;
  ageUr: string;
  vaccineEn: string;
  vaccineUr: string;
  preventsEn: string;
  preventsUr: string;
  essential: boolean;
}
