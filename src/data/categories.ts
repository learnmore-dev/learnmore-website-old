import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-cloud",
    name: "Cloud Computing & DevOps",
    slug: "cloud-computing",
    iconName: "Cloud",
    shortDescription: "Master AWS, Microsoft Azure, Google Cloud (GCP), Kubernetes, and modern Infrastructure as Code.",
    longDescription: "Our Cloud Computing & DevOps programs equip you with real-world infrastructure automation, cloud architecture, CI/CD pipelines, and multi-cloud management skills with direct hands-on project labs.",
    popularCourseSlugs: [
      "aws-certified-solutions-architect",
      "microsoft-azure-training",
      "devops-training",
      "aws-cloud-practitioner-training",
    ],
    totalCoursesCount: 8,
  },
  {
    id: "cat-dev",
    name: "Programming & Full Stack",
    slug: "programming-and-development",
    iconName: "Code",
    shortDescription: "Master Python Full Stack, Java Full Stack, MERN Stack, modern JavaScript, and software engineering principles.",
    longDescription: "Become an industry-ready full-stack developer. Learn frontend, backend, databases, REST APIs, microservices, and system design with 100% job placement support.",
    popularCourseSlugs: [
      "python-full-stack-course",
      "java-full-stack-course",
      "python-course",
      "java-course",
      "windows-powershell-training",
    ],
    totalCoursesCount: 12,
  },
  {
    id: "cat-data",
    name: "Data Science & AI",
    slug: "data-science-and-analytics",
    iconName: "BrainCircuit",
    shortDescription: "Build real-world AI models, Agentic AI systems, Data Analytics dashboards, Power BI, and Machine Learning pipelines.",
    longDescription: "Accelerate your career in data. Master Python for Data Science, SQL, Power BI, Tableau, Agentic AI, and Machine Learning with real enterprise datasets.",
    popularCourseSlugs: [
      "data-science-course",
      "data-analytics-course",
      "power-bi-course",
      "agentic-ai-course",
      "advance-excel-training-content",
    ],
    totalCoursesCount: 9,
  },
  {
    id: "cat-testing",
    name: "Software Testing & QA",
    slug: "software-testing",
    iconName: "CheckSquare",
    shortDescription: "Automation Testing with Selenium (Python/Java), Manual Testing, API Testing, and Framework Development.",
    longDescription: "Become a high-demand QA Automation Engineer. Learn TestNG, Cucumber, Selenium WebDriver, Postman API testing, and continuous integration workflows.",
    popularCourseSlugs: [
      "software-testing-course",
      "selenium-with-python-training",
      "selenium-with-java-training",
    ],
    totalCoursesCount: 5,
  },
  {
    id: "cat-db",
    name: "Databases & Data Warehousing",
    slug: "database-and-warehousing",
    iconName: "Database",
    shortDescription: "Cloud Data Warehousing with Snowflake, Oracle DBA, DataStax Cassandra, and Enterprise SQL tuning.",
    longDescription: "Gain deep proficiency in managing, tuning, and scaling enterprise database systems and next-generation cloud data warehouses.",
    popularCourseSlugs: [
      "snowflake-training",
      "oracle-dba-training",
      "datastax-apache-cassandra",
      "certified-data-management-professional-cdmp",
    ],
    totalCoursesCount: 6,
  },
  {
    id: "cat-enterprise",
    name: "Enterprise ERP & SAP",
    slug: "sap-enterprise",
    iconName: "Layers",
    shortDescription: "SAP Leonardo, SAP FICO, S/4HANA, and digital enterprise transformation consulting.",
    longDescription: "Certified SAP consultant modules designed by real-world enterprise architects with live system configuration access.",
    popularCourseSlugs: ["sap-leonardo-training"],
    totalCoursesCount: 4,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
