export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  hasDropdown?: boolean;
  megaMenuType?: "courses" | "locations";
}

export interface MegaMenuCourseItem {
  title: string;
  slug: string;
  badge?: "Bestseller" | "Trending" | "Hot Tech" | "High Salary";
  categorySlug?: string;
}

export interface MegaMenuColumn {
  columnTitle: string;
  categorySlug: string;
  courses: MegaMenuCourseItem[];
  viewAllHref: string;
  viewAllLabel: string;
}

export interface LocationDropdownItem {
  name: string;
  slug: string;
  isFlagship?: boolean;
  area: string;
}

export const topUtilityBarData = {
  announcement: "🌟 Next Classroom Batch Starts This Monday | 100% Placement Guarantee",
  phone: "+91 90365 24555",
  whatsappPhone: "+919036524555",
  whatsappText: "Hi LearnMore, I would like details on upcoming courses",
  campusesHighlight: "📍 3 Campuses: Marathahalli • BTM Layout • Kalyan Nagar",
};

export interface CompanyDropdownItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

export const moreDropdownData: CompanyDropdownItem[] = [
  { title: "Expert Faculty", href: "/trainers", description: "Active senior architects from top MNCs" },
  { title: "Student Reviews", href: "/testimonials", description: "45,000+ placed alumni stories", badge: "4.9 ★" },
  { title: "Become a Trainer", href: "/become-a-teacher", description: "Join our distinguished teaching panel" },
];

export const primaryHeaderNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "All Courses", href: "/courses", hasDropdown: true, megaMenuType: "courses" },
  { label: "Corporate", href: "/corporate-training" },
  { label: "Placement", href: "/placement", badge: "100%" },
  { label: "More", href: "/internship", hasDropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "Locations", href: "/locations", hasDropdown: true, megaMenuType: "locations" },
  { label: "Contact Us", href: "/contact-us" },
];

export const mainNavItems = primaryHeaderNav;

export const coursesMegaMenuData: MegaMenuColumn[] = [
  {
    columnTitle: "Cloud & DevOps",
    categorySlug: "cloud-computing",
    courses: [
      { title: "AWS Certified Solutions Architect", slug: "aws-certified-solutions-architect", badge: "Bestseller" },
      { title: "AWS Cloud Practitioner", slug: "aws-cloud-practitioner-training" },
      { title: "Microsoft Azure Administrator (AZ-104)", slug: "microsoft-azure-training" },
      { title: "DevOps & Kubernetes Master", slug: "devops-training", badge: "Hot Tech" },
    ],
    viewAllHref: "/courses/category/cloud-computing",
    viewAllLabel: "View All Cloud & DevOps →",
  },
  {
    columnTitle: "Programming & Full Stack",
    categorySlug: "programming-and-development",
    courses: [
      { title: "Python Full Stack Developer", slug: "python-full-stack-course", badge: "Bestseller" },
      { title: "Java Full Stack Developer", slug: "java-full-stack-course", badge: "Bestseller" },
      { title: "Core & Advanced Python", slug: "python-course" },
      { title: "Core & Advanced Java", slug: "java-course" },
      { title: "Windows PowerShell Scripting", slug: "windows-powershell-training" },
    ],
    viewAllHref: "/courses/category/programming-and-development",
    viewAllLabel: "View All Development →",
  },
  {
    columnTitle: "Data Science, AI & QA",
    categorySlug: "data-science-and-analytics",
    courses: [
      { title: "Agentic AI & Multi-Agent Systems", slug: "agentic-ai-course", badge: "Trending" },
      { title: "Data Science Master Program", slug: "data-science-course", badge: "Trending" },
      { title: "Data Analytics with Python & SQL", slug: "data-analytics-course" },
      { title: "Power BI Certification (PL-300)", slug: "power-bi-course", badge: "Trending" },
      { title: "Software Testing (Manual + Selenium)", slug: "software-testing-course", badge: "Bestseller" },
      { title: "Snowflake Cloud Data Platform", slug: "snowflake-training" },
    ],
    viewAllHref: "/courses/category/data-science-and-analytics",
    viewAllLabel: "View All Data & AI →",
  },
];

export const locationsDropdownData: LocationDropdownItem[] = [
  { name: "Marathahalli Campus (HQ)", slug: "marathahalli", isFlagship: true, area: "Outer Ring Road" },
  { name: "BTM Layout Campus", slug: "btm", area: "2nd Stage Ring Road" },
  { name: "Kalyan Nagar Branch", slug: "kalyan-nagar", area: "Kammanahalli Main Rd" },
  { name: "Live Online Hub (Global)", slug: "online", area: "Live Interactive Cohorts" },
];

export const footerQuickLinks = [
  { label: "About LearnMore", href: "/about-us" },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "100% Placement Cell", href: "/placement" },
  { label: "Industrial IT Internship", href: "/internship" },
  { label: "Become an Instructor", href: "/become-a-teacher" },
  { label: "Student Reviews", href: "/testimonials" },
  { label: "Expert Faculty", href: "/trainers" },
  { label: "Tech Blog & Interview Qs", href: "/blog" },
  { label: "FAQ Knowledge Base", href: "/faq" },
  { label: "Contact Us & Directions", href: "/contact-us" },
];

export const footerNavigationData = {
  column1Brand: {
    description: "LearnMore Technologies is Bangalore's premier IT training institute. Empowering engineering students and professionals with hands-on labs and 100% job placement support.",
    flagshipAddress: "#43/2, Outer Ring Road, Above HDFC Bank, Marathahalli, Bangalore, KA 560037",
    phone: "+91 9036524555",
    email: "office.learnmore@gmail.com",
  },
  column2Courses: [
    { label: "Python Full Stack Developer", href: "/courses/python-full-stack-course" },
    { label: "AWS Solutions Architect", href: "/courses/aws-certified-solutions-architect" },
    { label: "Java Full Stack Developer", href: "/courses/java-full-stack-course" },
    { label: "Data Science & AI Master", href: "/courses/data-science-course" },
    { label: "DevOps & Kubernetes Master", href: "/courses/devops-training" },
    { label: "Power BI Certification", href: "/courses/power-bi-course" },
    { label: "Software Testing Master", href: "/courses/software-testing-course" },
    { label: "Snowflake Data Cloud", href: "/courses/snowflake-training" },
    { label: "Explore All 50+ Courses →", href: "/courses" },
  ],
  column3Campuses: [
    { label: "📍 Marathahalli Flagship Campus", href: "/locations/marathahalli" },
    { label: "📍 BTM Layout Campus", href: "/locations/btm" },
    { label: "📍 Kalyan Nagar Branch", href: "/locations/kalyan-nagar" },
    { label: "🌐 Live Online Batches (Pan-India & Global)", href: "/locations/online" },
    { label: "View All Locations & Maps →", href: "/locations" },
  ],
  column4Company: footerQuickLinks,
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};
