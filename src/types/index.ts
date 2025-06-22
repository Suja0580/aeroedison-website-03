
export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  duration: string;
  imageUrl?: string;
  categories: string[];
  recommended?: boolean;
  isSaved?: boolean;
  enrollmentCount: number;
}

export interface Category {
  id: string;
  name: string;
  icon: any; // For Lucide React icons
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  category: string;
}
