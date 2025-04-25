
import { Pet, HealthCheck, FeedingSchedule, VetAppointment } from '../types';
import { addDays, addMonths, addHours } from 'date-fns';

// Mock Data
const today = new Date();

export const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Buddy',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 4,
    weight: 65,
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    name: 'Whiskers',
    type: 'cat',
    breed: 'Tabby',
    age: 3,
    weight: 10,
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

export const mockHealthChecks: HealthCheck[] = [
  {
    id: '1',
    petId: '1',
    date: addDays(today, 7),
    title: 'Routine Health Check',
    notes: 'Check weight and general health',
    completed: false
  },
  {
    id: '2',
    petId: '1',
    date: addMonths(today, 3),
    title: 'Quarterly Checkup',
    notes: 'Full examination and vaccinations',
    completed: false
  },
  {
    id: '3',
    petId: '2',
    date: addDays(today, 14),
    title: 'Dental Check',
    notes: 'Check teeth and gums',
    completed: false
  }
];

export const mockFeedingSchedules: FeedingSchedule[] = [
  {
    id: '1',
    petId: '1',
    foodType: 'Dry Kibble',
    portionSize: '2 cups',
    times: ['08:00', '18:00']
  },
  {
    id: '2',
    petId: '2',
    foodType: 'Wet Food',
    portionSize: '1/2 can',
    times: ['07:00', '19:00']
  }
];

export const mockVetAppointments: VetAppointment[] = [
  {
    id: '1',
    petId: '1',
    date: addDays(today, 5),
    clinicName: 'Paws & Claws Clinic',
    reason: 'Annual checkup and vaccinations',
    completed: false
  },
  {
    id: '2',
    petId: '2',
    date: addDays(addHours(today, 3), 2),
    clinicName: 'Feline Friends Veterinary',
    reason: 'Dental cleaning',
    completed: false
  }
];
