/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Direct Legacy Course URLs to Standardized Course Routes (301 Permanent)
      {
        source: "/aws-course",
        destination: "/courses/aws-certified-solutions-architect",
        permanent: true,
      },
      {
        source: "/aws-cloud-practitioner-training",
        destination: "/courses/aws-certified-solutions-architect",
        permanent: true,
      },
      {
        source: "/aws-trending-course",
        destination: "/courses/aws-certified-solutions-architect",
        permanent: true,
      },
      {
        source: "/python-course",
        destination: "/courses/python-full-stack-course",
        permanent: true,
      },
      {
        source: "/python-trending-course",
        destination: "/courses/python-full-stack-course",
        permanent: true,
      },
      {
        source: "/full-stack-training-course",
        destination: "/courses/python-full-stack-course",
        permanent: true,
      },
      {
        source: "/java-course",
        destination: "/courses/java-full-stack-course",
        permanent: true,
      },
      {
        source: "/devops-training",
        destination: "/courses/devops-training",
        permanent: true,
      },
      {
        source: "/software-testing-course",
        destination: "/courses/software-testing-course",
        permanent: true,
      },
      {
        source: "/data-science-course",
        destination: "/courses/data-science-course",
        permanent: true,
      },
      {
        source: "/power-bi-course",
        destination: "/courses/power-bi-course",
        permanent: true,
      },
      {
        source: "/snowflake",
        destination: "/courses/snowflake-training",
        permanent: true,
      },
      {
        source: "/microsoft-azure",
        destination: "/courses/microsoft-azure-training",
        permanent: true,
      },
      {
        source: "/microsoft-azure-course",
        destination: "/courses/microsoft-azure-training",
        permanent: true,
      },
      {
        source: "/data-analytics-course",
        destination: "/courses/data-analytics-course",
        permanent: true,
      },
      {
        source: "/oracle-dba",
        destination: "/courses/oracle-dba-training",
        permanent: true,
      },
      {
        source: "/agentic-ai-course-in-bangalore",
        destination: "/courses/agentic-ai-course",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/corporate-trainings",
        destination: "/corporate-training",
        permanent: true,
      },
      {
        source: "/placement-cell",
        destination: "/placement",
        permanent: true,
      },
      {
        source: "/internships",
        destination: "/internship",
        permanent: true,
      },
      {
        source: "/become-an-instructor",
        destination: "/become-a-teacher",
        permanent: true,
      },
      {
        source: "/become-a-trainer",
        destination: "/become-a-teacher",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/testimonial",
        destination: "/testimonials",
        permanent: true,
      },
      {
        source: "/review",
        destination: "/testimonials",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/testimonials",
        permanent: true,
      },
      {
        source: "/instructor",
        destination: "/trainers",
        permanent: true,
      },
      {
        source: "/instructors",
        destination: "/trainers",
        permanent: true,
      },
      {
        source: "/trainer",
        destination: "/trainers",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/campuses",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/branches",
        destination: "/locations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
