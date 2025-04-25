
import * as z from 'zod';
import { PetType } from '@/types';

// Schema for pet registration form validation
export const petRegistrationSchema = z.object({
  name: z.string()
    .min(2, { message: "Pet name must be at least 2 characters" })
    .max(50, { message: "Pet name cannot exceed 50 characters" }),
  type: z.enum(['dog', 'cat', 'fish', 'bird', 'other'] as const, {
    required_error: "Please select a pet type",
  }),
  breed: z.string()
    .min(2, { message: "Breed must be at least 2 characters" })
    .max(50, { message: "Breed cannot exceed 50 characters" })
    .optional(),
  age: z.coerce
    .number()
    .min(0, { message: "Age cannot be negative" })
    .max(30, { message: "Please enter a valid age (0-30 years)" })
    .optional(),
  weight: z.coerce
    .number()
    .min(0, { message: "Weight cannot be negative" })
    .max(500, { message: "Please enter a valid weight (0-500 lbs)" })
    .optional(),
});

// Type inference from the schema
export type PetRegistrationFormData = z.infer<typeof petRegistrationSchema>;
