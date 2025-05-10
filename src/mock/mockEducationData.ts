
import { BookOpen, Code, Database, LineChart, LayoutGrid, Palette, Tv, PenTool, Globe, Activity } from "lucide-react";

export const mockCourses = [
  {
    id: "course-1",
    title: "Modern JavaScript for Beginners",
    description: "Learn JavaScript from scratch and master the fundamentals of modern JavaScript programming.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    instructor: "Sarah Johnson",
    rating: 4.8,
    reviewCount: 1243,
    enrollmentCount: 12453,
    duration: "6h 30m",
    level: "Beginner",
    categories: ["javascript", "web-development", "programming"],
    recommended: true,
    isSaved: false
  },
  {
    id: "course-2",
    title: "React Masterclass: Build Real-World Applications",
    description: "Advanced React patterns, hooks, state management and building professional applications.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    instructor: "Michael Chen",
    rating: 4.9,
    reviewCount: 987,
    enrollmentCount: 8752,
    duration: "12h 45m",
    level: "Advanced",
    categories: ["react", "web-development", "javascript", "programming"],
    recommended: true,
    isSaved: true
  },
  {
    id: "course-3",
    title: "Data Science with Python",
    description: "Master data analysis, visualization, and machine learning with Python libraries.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    instructor: "Emily Rodriguez",
    rating: 4.7,
    reviewCount: 1564,
    enrollmentCount: 15234,
    duration: "18h 20m",
    level: "Intermediate",
    categories: ["data-science", "python", "machine-learning"],
    recommended: true,
    isSaved: false
  },
  {
    id: "course-4",
    title: "UX Design Principles",
    description: "Learn the fundamentals of user experience design to create intuitive digital products.",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    instructor: "David Wilson",
    rating: 4.6,
    reviewCount: 876,
    enrollmentCount: 7890,
    duration: "8h 15m",
    level: "Beginner",
    categories: ["ux-design", "design", "product-design"],
    recommended: false,
    isSaved: false
  },
  {
    id: "course-5",
    title: "Node.js API Development",
    description: "Build robust and scalable APIs with Node.js, Express, and MongoDB.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    instructor: "Alex Turner",
    rating: 4.8,
    reviewCount: 652,
    enrollmentCount: 5423,
    duration: "10h 30m",
    level: "Intermediate",
    categories: ["node-js", "backend", "web-development", "api"],
    recommended: false,
    isSaved: false
  },
  {
    id: "course-6",
    title: "SQL for Data Analysis",
    description: "Master SQL for effective data manipulation, querying, and analysis.",
    imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
    instructor: "Jessica Lee",
    rating: 4.7,
    reviewCount: 943,
    enrollmentCount: 8976,
    duration: "7h 45m",
    level: "Beginner",
    categories: ["sql", "data-analysis", "database"],
    recommended: false,
    isSaved: true
  },
  {
    id: "course-7",
    title: "Mobile App Design with Figma",
    description: "Create beautiful and functional mobile app interfaces using Figma.",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    instructor: "Olivia Martinez",
    rating: 4.9,
    reviewCount: 421,
    enrollmentCount: 3245,
    duration: "6h 15m",
    level: "Intermediate",
    categories: ["ui-design", "figma", "mobile-design", "design"],
    recommended: false,
    isSaved: false
  },
  {
    id: "course-8",
    title: "Introduction to Machine Learning",
    description: "Learn fundamental machine learning concepts and algorithms.",
    imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc",
    instructor: "Robert Chang",
    rating: 4.6,
    reviewCount: 832,
    enrollmentCount: 6789,
    duration: "14h 30m",
    level: "Intermediate",
    categories: ["machine-learning", "data-science", "python"],
    recommended: false,
    isSaved: false
  },
  {
    id: "course-9",
    title: "DevOps Engineering Fundamentals",
    description: "Master the principles and tools of modern DevOps practices.",
    imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    instructor: "Thomas Miller",
    rating: 4.8,
    reviewCount: 567,
    enrollmentCount: 4532,
    duration: "15h 20m",
    level: "Advanced",
    categories: ["devops", "cloud", "infrastructure"],
    recommended: false,
    isSaved: false
  },
  {
    id: "course-10",
    title: "Digital Marketing Strategy",
    description: "Develop effective digital marketing strategies for business growth.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    instructor: "Lisa Anderson",
    rating: 4.7,
    reviewCount: 789,
    enrollmentCount: 9876,
    duration: "8h 45m",
    level: "Beginner",
    categories: ["marketing", "digital-marketing", "business"],
    recommended: false,
    isSaved: false
  }
];

export const mockCategories = [
  {
    id: "web-development",
    name: "Web Development",
    icon: Globe
  },
  {
    id: "programming",
    name: "Programming",
    icon: Code
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: LineChart
  },
  {
    id: "design",
    name: "Design",
    icon: Palette
  },
  {
    id: "database",
    name: "Database",
    icon: Database
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Activity
  }
];

export const mockLearningPaths = [
  {
    id: "path-1",
    title: "Become a Full-Stack Developer",
    description: "Master frontend and backend technologies to build complete web applications",
    level: "Intermediate",
    duration: "6 months",
    courseCount: 8,
    category: "development"
  },
  {
    id: "path-2",
    title: "JavaScript Specialist",
    description: "Comprehensive path to master JavaScript, React, Node.js, and related technologies",
    level: "Beginner to Advanced",
    duration: "4 months",
    courseCount: 6,
    category: "development"
  },
  {
    id: "path-3",
    title: "Data Scientist Career Path",
    description: "Learn statistics, Python, machine learning, and data visualization",
    level: "Intermediate",
    duration: "8 months",
    courseCount: 10,
    category: "data"
  },
  {
    id: "path-4",
    title: "Business Intelligence Analyst",
    description: "Master data analysis tools, SQL, dashboarding, and business metrics",
    level: "Beginner",
    duration: "5 months",
    courseCount: 7,
    category: "data"
  },
  {
    id: "path-5",
    title: "UI/UX Designer",
    description: "Learn user research, wireframing, prototyping, and design systems",
    level: "Beginner",
    duration: "4 months",
    courseCount: 6,
    category: "design"
  },
  {
    id: "path-6",
    title: "Product Designer",
    description: "End-to-end product design process from ideation to final deliverables",
    level: "Intermediate",
    duration: "6 months",
    courseCount: 8,
    category: "design"
  }
];
