export type PetType = 'dog' | 'cat' | 'fish' | 'bird' | 'other';

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  breed?: string;
  age?: number;
  weight?: number;
  imageUrl?: string;
}

export interface HealthCheck {
  id: string;
  petId: string;
  date: Date;
  title: string;
  notes?: string;
  completed: boolean;
}

export interface FeedingSchedule {
  id: string;
  petId: string;
  foodType: string;
  portionSize: string;
  times: string[]; // Array of times in "HH:MM" format
}

export interface VetAppointment {
  id: string;
  petId: string;
  date: Date;
  clinicName: string;
  reason: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  enrollmentCount: number;
  duration: string;
  level: string;
  categories: string[];
  recommended: boolean;
  isSaved: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  courseCount: number;
  category: string;
}
