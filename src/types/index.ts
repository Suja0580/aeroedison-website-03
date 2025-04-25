
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
