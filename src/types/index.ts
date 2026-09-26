export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  shortDescription: string;
  longDescription?: string;
  popularCourseSlugs: string[];
  totalCoursesCount: number;
}

export interface CourseModule {
  moduleNumber: number;
  title: string;
  durationHours: number;
  topics: string[];
  handsOnLab: string;
}

export interface CourseProject {
  title: string;
  description: string;
  technologies: string[];
  keyOutcome: string;
}

export interface CourseBatch {
  id: string;
  startDate: string;
  scheduleType: "Weekdays" | "Weekends" | "Fast-Track";
  timeSlot: string;
  mode: "Classroom" | "Live Online" | "Hybrid";
  seatsLeft: number;
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface CourseTrainer {
  name: string;
  designation: string;
  experienceYears: number;
  companies: string[];
  avatarUrl?: string;
  bio: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  badge?: "Bestseller" | "Trending" | "High Salary" | "Hot Tech";
  rating: {
    score: number;
    reviewCount: number;
  };
  duration: {
    hours: number;
    weeks: number;
    modes: ("Classroom" | "Live Online" | "Weekend Batches")[];
  };
  level?: string;
  overview: string;
  highlights: string[];
  skillsGained: string[];
  prerequisites?: string[];
  targetAudience?: string[];
  practicalTraining?: {
    labHours?: number;
    labCount?: number;
    description: string;
    keyFeatures: string[];
  };
  placementAssistance?: {
    guaranteeText: string;
    features: string[];
    partnerCount: number;
    highestPackage?: string;
    averageHike?: string;
  };
  toolsAndTechnologies: {
    name: string;
    category?: string;
  }[];
  curriculum: CourseModule[];
  projects: CourseProject[];
  certifications: {
    title: string;
    organization: string;
    examCode?: string;
    description: string;
  }[];
  trainers: CourseTrainer[];
  upcomingBatches: CourseBatch[];
  faqs: CourseFAQ[];
  relatedCourseSlugs: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
  };
}

export interface LocationHub {
  slug: string;
  name: string;
  city: string;
  state: string;
  type: "Physical Campus" | "Online Hub";
  isFlagship?: boolean;
  address: string;
  landmark?: string;
  phone: string;
  whatsapp: string;
  email: string;
  googleMapUrl: string;
  nearbyTransit: string[];
  labFacilities: string[];
  popularCourses: string[];
  overview: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readingTimeMinutes: number;
  summary: string;
  content: string; // Markdown or rich HTML sections
  tableOfContents: {
    id: string;
    title: string;
  }[];
  relatedCourseSlug?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface Testimonial {
  id: string;
  studentName: string;
  courseTaken: string;
  placedCompany: string;
  salaryPackage?: string;
  reviewText: string;
  rating: number;
  verifiedStudent: boolean;
  avatarUrl?: string;
  location: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experienceYears: number;
  formerCompanies: string[];
  studentsTrainedCount: number;
  bio: string;
  avatarUrl?: string;
  tags?: string[];
  rating?: string;
  reviewsCount?: number;
}

export interface LeadSubmissionPayload {
  fullName: string;
  email: string;
  phone: string;
  courseSlug?: string;
  courseTitle?: string;
  preferredCampus?: string;
  preferredMode?: "Classroom" | "Live Online" | "Hybrid";
  companyName?: string;
  teamSize?: string;
  resumeUrl?: string;
  message?: string;
  formType: "ContactMain" | "CourseSidebar" | "CorporateB2B" | "Application" | "QuickDemoModal" | "BrochureDownload";
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  timestamp?: string;
}

