import React from "react";
import {
  Briefcase,
  TrendingUp,
  Award,
  Building2,
  CheckCircle2,
  DollarSign,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
} from "lucide-react";

export interface JobRoleItem {
  title: string;
  description: string;
  salaryRange: string;
  demandLevel: "High Demand" | "Trending" | "High Paying" | "Rapid Growth";
  keySkills: string[];
  openingsCount?: string;
}

interface JobRolesSectionProps {
  courseTitle: string;
  categorySlug?: string;
  courseSlug?: string;
  customRoles?: JobRoleItem[];
}

/**
 * Intelligent helper to resolve domain-specific job roles
 */
function getJobRolesForCourse(courseTitle: string, categorySlug?: string, courseSlug?: string): JobRoleItem[] {
  const normalized = `${courseTitle} ${categorySlug || ""} ${courseSlug || ""}`.toLowerCase();

  // 1. AWS / Cloud Computing
  if (normalized.includes("aws") || normalized.includes("cloud") || normalized.includes("azure") || normalized.includes("gcp")) {
    return [
      {
        title: "AWS Cloud Solutions Architect",
        description: "Designs scalable, cost-effective, and highly available multi-tier cloud architectures, VPC networks, and serverless enterprise systems on AWS.",
        salaryRange: "₹9.5 LPA – ₹24 LPA",
        demandLevel: "High Paying",
        keySkills: ["AWS VPC", "EC2 AutoScaling", "S3 Storage", "IAM Security", "CloudFormation"],
        openingsCount: "1,800+ Active Jobs",
      },
      {
        title: "Cloud Infrastructure Engineer",
        description: "Manages provisioning, deployment, disaster recovery, and day-to-day operations of enterprise cloud workloads across multi-region infrastructure.",
        salaryRange: "₹6.5 LPA – ₹16 LPA",
        demandLevel: "High Demand",
        keySkills: ["Linux", "Terraform", "AWS CLI", "Route53", "CloudWatch Observability"],
        openingsCount: "2,400+ Active Jobs",
      },
      {
        title: "Cloud Security Specialist",
        description: "Implements zero-trust security policies, compliance standards, IAM governance, encryption keys, and vulnerability monitoring across AWS estates.",
        salaryRange: "₹10 LPA – ₹26 LPA",
        demandLevel: "Trending",
        keySkills: ["AWS KMS", "WAF & Shield", "IAM Roles", "GuardDuty", "Audit Compliance"],
        openingsCount: "950+ Active Jobs",
      },
      {
        title: "AWS DevOps / SysOps Administrator",
        description: "Automates CI/CD deployment pipelines, container workloads, serverless services, and cloud billing optimization for production applications.",
        salaryRange: "₹8 LPA – ₹19 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["AWS Lambda", "ECS/EKS", "CodePipeline", "Docker", "Cost Explorer"],
        openingsCount: "1,500+ Active Jobs",
      },
    ];
  }

  // 2. DevOps & SRE
  if (normalized.includes("devops") || normalized.includes("sre") || normalized.includes("kubernetes") || normalized.includes("docker")) {
    return [
      {
        title: "DevOps Engineer / Automation Lead",
        description: "Builds and maintains robust automated CI/CD pipelines, container orchestration environments, and Infrastructure as Code (IaC) workflows.",
        salaryRange: "₹8.5 LPA – ₹22 LPA",
        demandLevel: "High Demand",
        keySkills: ["Kubernetes", "Docker", "Jenkins / GitHub Actions", "Terraform", "Ansible"],
        openingsCount: "3,200+ Active Jobs",
      },
      {
        title: "Site Reliability Engineer (SRE)",
        description: "Ensures maximum service availability, fault tolerance, latency reduction, automated incident response, and performance monitoring for distributed systems.",
        salaryRange: "₹11 LPA – ₹28 LPA",
        demandLevel: "High Paying",
        keySkills: ["Prometheus & Grafana", "Chaos Engineering", "Python / Go Scripting", "SLO/SLA Management"],
        openingsCount: "1,100+ Active Jobs",
      },
      {
        title: "Platform & Cloud Infrastructure Engineer",
        description: "Creates internal developer platforms (IDP), scalable multi-cluster Kubernetes environments, and automated cloud provisioning pipelines.",
        salaryRange: "₹9 LPA – ₹21 LPA",
        demandLevel: "Trending",
        keySkills: ["Helm Charts", "GitOps (ArgoCD)", "Terraform Cloud", "AWS / Azure"],
        openingsCount: "1,450+ Active Jobs",
      },
      {
        title: "CI/CD & Release Automation Engineer",
        description: "Designs automated build, testing, static code analysis, and production release pipelines for high-velocity software engineering teams.",
        salaryRange: "₹6.5 LPA – ₹15 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["GitLab CI", "SonarQube", "Nexus / Artifactory", "Bash Scripting"],
        openingsCount: "2,100+ Active Jobs",
      },
    ];
  }

  // 3. Python / Full Stack
  if (normalized.includes("python") || normalized.includes("full stack") || normalized.includes("web development") || normalized.includes("mern") || normalized.includes("mean")) {
    return [
      {
        title: "Full Stack Python Developer",
        description: "Develops end-to-end web applications combining robust backend APIs in Django/FastAPI with responsive, dynamic frontend UI in React or Angular.",
        salaryRange: "₹6.5 LPA – ₹18 LPA",
        demandLevel: "High Demand",
        keySkills: ["Python", "Django / FastAPI", "React.js", "PostgreSQL", "REST APIs"],
        openingsCount: "4,500+ Active Jobs",
      },
      {
        title: "Backend API & Microservices Engineer",
        description: "Architects scalable REST & GraphQL web services, asynchronous task queues, database schemas, and microservices architecture.",
        salaryRange: "₹7 LPA – ₹19 LPA",
        demandLevel: "High Paying",
        keySkills: ["Python OOP", "Celery & Redis", "Docker", "Database Optimization", "FastAPI"],
        openingsCount: "2,800+ Active Jobs",
      },
      {
        title: "Python Automation & Integration Engineer",
        description: "Automates complex business workflows, web scraping pipelines, third-party API integrations, and cloud backend utilities.",
        salaryRange: "₹5.5 LPA – ₹14 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["Python Scripting", "Selenium / Playwright", "BeautifulSoup", "JSON / XML APIs"],
        openingsCount: "1,900+ Active Jobs",
      },
      {
        title: "Frontend & UI/UX Developer",
        description: "Builds modern, responsive, component-driven user interfaces, state management workflows, and interactive web application features.",
        salaryRange: "₹5 LPA – ₹15 LPA",
        demandLevel: "Trending",
        keySkills: ["React.js / Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
        openingsCount: "3,100+ Active Jobs",
      },
    ];
  }

  // 4. Data Science / AI / Machine Learning / Agentic AI / Gen AI
  if (normalized.includes("data science") || normalized.includes("machine learning") || normalized.includes("ai") || normalized.includes("artificial intelligence") || normalized.includes("deep learning")) {
    return [
      {
        title: "Data Scientist / Predictive Modeler",
        description: "Applies statistical analysis, exploratory data analysis, and advanced machine learning algorithms to solve complex business problems and predict trends.",
        salaryRange: "₹9 LPA – ₹25 LPA",
        demandLevel: "High Paying",
        keySkills: ["Python", "Scikit-Learn", "Pandas & NumPy", "Statistical Modeling", "SQL"],
        openingsCount: "2,600+ Active Jobs",
      },
      {
        title: "Machine Learning / AI Engineer",
        description: "Designs, trains, fine-tunes, and deploys scalable ML models, LLMs, and neural network architectures to production cloud endpoints.",
        salaryRange: "₹10 LPA – ₹28 LPA",
        demandLevel: "High Demand",
        keySkills: ["PyTorch / TensorFlow", "LLMs & LangChain", "MLOps", "FastAPI", "HuggingFace"],
        openingsCount: "1,950+ Active Jobs",
      },
      {
        title: "AI Agent & GenAI Application Developer",
        description: "Builds generative AI systems, autonomous agentic workflows, RAG knowledge retrieval pipelines, and vector database architectures.",
        salaryRange: "₹12 LPA – ₹32 LPA",
        demandLevel: "Trending",
        keySkills: ["RAG Architecture", "Vector DBs (Pinecone/Chroma)", "Prompt Engineering", "OpenAI / Claude APIs"],
        openingsCount: "1,200+ Active Jobs",
      },
      {
        title: "Data Analyst & Business Intelligence Specialist",
        description: "Extracts insights from large enterprise datasets, performs trend analysis, and builds interactive KPI dashboards for executive stakeholders.",
        salaryRange: "₹5.5 LPA – ₹14 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["Advanced SQL", "Python Visualization", "Power BI / Tableau", "Excel Mastery"],
        openingsCount: "3,800+ Active Jobs",
      },
    ];
  }

  // 5. Software Testing & QA Automation
  if (normalized.includes("testing") || normalized.includes("qa") || normalized.includes("selenium") || normalized.includes("automation testing")) {
    return [
      {
        title: "QA Automation Test Engineer",
        description: "Develops automated test frameworks using Selenium, Java/Python, TestNG, and Cucumber for cross-browser, regression, and functional test suites.",
        salaryRange: "₹5 LPA – ₹14 LPA",
        demandLevel: "High Demand",
        keySkills: ["Selenium WebDriver", "Java / Python", "TestNG & Page Object Model", "Git"],
        openingsCount: "3,600+ Active Jobs",
      },
      {
        title: "API & Performance Testing Specialist",
        description: "Executes backend web service testing, REST API validation, load simulation, and system performance benchmarks using Postman, RestAssured, and JMeter.",
        salaryRange: "₹6 LPA – ₹16 LPA",
        demandLevel: "Trending",
        keySkills: ["Postman", "RestAssured", "Apache JMeter", "JSON Schema Validation"],
        openingsCount: "1,800+ Active Jobs",
      },
      {
        title: "SDET (Software Development Engineer in Test)",
        description: "Bridges software engineering and quality assurance by writing scalable test harnesses, CI/CD automated test gates, and mock servers.",
        salaryRange: "₹8.5 LPA – ₹22 LPA",
        demandLevel: "High Paying",
        keySkills: ["Core Java / Python", "CI/CD Integration", "Dockerized Test Grid", "BDD Frameworks"],
        openingsCount: "2,200+ Active Jobs",
      },
      {
        title: "Manual & Exploratory QA Analyst",
        description: "Performs end-to-end test planning, test case design, defect tracking in Jira, agile sprint testing, and user acceptance testing (UAT).",
        salaryRange: "₹4 LPA – ₹9 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["Jira & Zephyr", "STLC & Agile", "SQL Database Validation", "Bug Life Cycle"],
        openingsCount: "2,900+ Active Jobs",
      },
    ];
  }

  // 6. Java & Full Stack Java
  if (normalized.includes("java") || normalized.includes("spring boot") || normalized.includes("hibernate")) {
    return [
      {
        title: "Java Full Stack Developer",
        description: "Builds enterprise web applications utilizing Spring Boot microservices on the backend and modern frontend frameworks on the client side.",
        salaryRange: "₹6.5 LPA – ₹18 LPA",
        demandLevel: "High Demand",
        keySkills: ["Core Java", "Spring Boot", "Hibernate/JPA", "React / Angular", "MySQL/PostgreSQL"],
        openingsCount: "4,200+ Active Jobs",
      },
      {
        title: "Enterprise Java Backend Architect",
        description: "Architects scalable distributed enterprise backends, secure payment processing systems, multithreaded systems, and event-driven architectures.",
        salaryRange: "₹10 LPA – ₹26 LPA",
        demandLevel: "High Paying",
        keySkills: ["Microservices Architecture", "Apache Kafka", "Spring Security", "Redis Caching"],
        openingsCount: "1,700+ Active Jobs",
      },
      {
        title: "Java Spring Boot Cloud Engineer",
        description: "Deploys containerized Java services to AWS/Kubernetes with automated CI/CD pipelines, logging, metrics, and API gateway routing.",
        salaryRange: "₹8 LPA – ₹20 LPA",
        demandLevel: "Trending",
        keySkills: ["Spring Cloud", "Docker & Kubernetes", "AWS Elastic Beanstalk", "REST APIs"],
        openingsCount: "2,300+ Active Jobs",
      },
      {
        title: "Junior Java Software Engineer",
        description: "Implements business logic modules, writes unit test suites with JUnit/Mockito, and collaborates in Agile Scrum teams to deliver enterprise features.",
        salaryRange: "₹4.5 LPA – ₹10 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["Core Java Collections", "OOP Concepts", "Maven / Gradle", "Git Version Control"],
        openingsCount: "3,500+ Active Jobs",
      },
    ];
  }

  // 7. Power BI / Data Analytics / Tableau / SQL / Snowflake
  if (normalized.includes("power bi") || normalized.includes("data analytics") || normalized.includes("tableau") || normalized.includes("snowflake") || normalized.includes("sql")) {
    return [
      {
        title: "Power BI / Tableau BI Developer",
        description: "Develops interactive business intelligence reports, complex DAX calculations, Power Query data transformation models, and executive dashboards.",
        salaryRange: "₹6 LPA – ₹16 LPA",
        demandLevel: "High Demand",
        keySkills: ["Power BI Desktop", "DAX Measures", "Power Query M", "Data Modeling", "SQL"],
        openingsCount: "3,400+ Active Jobs",
      },
      {
        title: "Data Analytics & Insights Consultant",
        description: "Transforms unstructured raw enterprise data into actionable KPIs, revenue optimization insights, and strategic decision reports.",
        salaryRange: "₹7 LPA – ₹18 LPA",
        demandLevel: "Trending",
        keySkills: ["Advanced SQL", "Python Pandas", "Statistical Analytics", "Excel Financial Modeling"],
        openingsCount: "2,100+ Active Jobs",
      },
      {
        title: "Snowflake Cloud Data Warehouse Engineer",
        description: "Builds modern cloud data warehouses, automated ETL/ELT pipelines, data staging schemas, and multi-cluster warehouse architectures in Snowflake.",
        salaryRange: "₹9 LPA – ₹23 LPA",
        demandLevel: "High Paying",
        keySkills: ["Snowflake SQL", "Time Travel & Zero Copy", "Snowpipe", "dbt / Airflow"],
        openingsCount: "1,300+ Active Jobs",
      },
      {
        title: "SQL Database & Reporting Analyst",
        description: "Writes complex stored procedures, window functions, and views to extract high-precision reports from large relational databases.",
        salaryRange: "₹4.5 LPA – ₹11 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["PostgreSQL / SQL Server", "Data Cleansing", "Indexing & Optimization", "SSIS / SSRS"],
        openingsCount: "2,800+ Active Jobs",
      },
    ];
  }

  // 8. SAP Functional & Technical (FICO, MM, SD, ABAP, SuccessFactors, HANA)
  if (normalized.includes("sap")) {
    return [
      {
        title: "SAP Functional / Technical Consultant",
        description: `Configures, tests, and deploys SAP enterprise business processes, master data structures, and custom transaction workflows.`,
        salaryRange: "₹7.5 LPA – ₹20 LPA",
        demandLevel: "High Demand",
        keySkills: ["SAP Configuration", "Business Blueprinting", "End-to-End Implementation", "UAT & Master Data"],
        openingsCount: "2,200+ Active Jobs",
      },
      {
        title: "SAP S/4HANA Implementation Specialist",
        description: "Leads migration, system conversions, and greenfield implementations of S/4HANA enterprise cloud and on-premise suites.",
        salaryRange: "₹10 LPA – ₹25 LPA",
        demandLevel: "High Paying",
        keySkills: ["S/4HANA Architecture", "Fiori Apps", "Data Migration Cockpit", "Integration Scenarios"],
        openingsCount: "1,400+ Active Jobs",
      },
      {
        title: "SAP Support & Integration Lead",
        description: "Resolves Level 2/3 operational tickets, oversees change requests, IDoc integrations, and compliance auditing for global accounts.",
        salaryRange: "₹6 LPA – ₹15 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["Ticketing & SLA", "IDocs & BAPIs", "Root Cause Analysis", "System Maintenance"],
        openingsCount: "1,900+ Active Jobs",
      },
      {
        title: "SAP Associate Business Analyst",
        description: "Gathers business requirements, maps operational gaps, conducts end-user training, and prepares functional specifications.",
        salaryRange: "₹5 LPA – ₹12 LPA",
        demandLevel: "Trending",
        keySkills: ["Requirement Gathering", "Functional Specs", "End-User Enablement", "Process Mapping"],
        openingsCount: "1,600+ Active Jobs",
      },
    ];
  }

  // 9. Salesforce & CRM
  if (normalized.includes("salesforce") || normalized.includes("crm")) {
    return [
      {
        title: "Salesforce Administrator",
        description: "Manages users, security models, custom objects, validation rules, Flow automations, and reports across Salesforce instances.",
        salaryRange: "₹5.5 LPA – ₹14 LPA",
        demandLevel: "High Demand",
        keySkills: ["Salesforce Flows", "Security & Profiles", "Object Schema", "Reports & Dashboards"],
        openingsCount: "2,100+ Active Jobs",
      },
      {
        title: "Salesforce Developer (Apex / LWC)",
        description: "Writes custom Apex triggers, asynchronous batch jobs, Lightning Web Components (LWC), and third-party REST integrations.",
        salaryRange: "₹8 LPA – ₹22 LPA",
        demandLevel: "High Paying",
        keySkills: ["Apex", "Lightning Web Components", "SOQL / SOSL", "REST API Integrations"],
        openingsCount: "1,750+ Active Jobs",
      },
      {
        title: "Salesforce Platform Consultant",
        description: "Advises clients on Sales Cloud, Service Cloud, and Experience Cloud customizations to streamline CRM workflows.",
        salaryRange: "₹9 LPA – ₹24 LPA",
        demandLevel: "Trending",
        keySkills: ["Sales Cloud", "Service Cloud", "Solution Design", "AppExchange Solutions"],
        openingsCount: "1,100+ Active Jobs",
      },
      {
        title: "Salesforce QA & Release Specialist",
        description: "Automates CRM functional tests, validates deployment changesets, and handles sandbox refreshes with Copado or Salesforce DX.",
        salaryRange: "₹5 LPA – ₹13 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["Salesforce DX", "Provar / Selenium", "Sandbox Management", "Metadata Deployments"],
        openingsCount: "1,300+ Active Jobs",
      },
    ];
  }

  // 10. Cybersecurity & Ethical Hacking
  if (normalized.includes("cyber") || normalized.includes("security") || normalized.includes("ethical hacking") || normalized.includes("soc")) {
    return [
      {
        title: "SOC Analyst / Incident Responder (L1/L2)",
        description: "Monitors real-time security alerts in SIEM tools, investigates suspicious network anomalies, and mitigates cyber threats.",
        salaryRange: "₹5.5 LPA – ₹15 LPA",
        demandLevel: "High Demand",
        keySkills: ["SIEM (Splunk / QRadar)", "Incident Handling", "Log Analysis", "Network Security"],
        openingsCount: "2,400+ Active Jobs",
      },
      {
        title: "VAPT / Penetration Testing Specialist",
        description: "Conducts vulnerability assessments, web application penetration tests, and network vulnerability scans with remediation reports.",
        salaryRange: "₹8 LPA – ₹22 LPA",
        demandLevel: "High Paying",
        keySkills: ["Burp Suite", "Kali Linux", "OWASP Top 10", "Metasploit", "Nessus"],
        openingsCount: "1,500+ Active Jobs",
      },
      {
        title: "Cyber Threat Intelligence Analyst",
        description: "Analyzes emerging malware campaigns, threat actor tactics (TTPs), and creates proactive detection rules (YARA / Sigma).",
        salaryRange: "₹9 LPA – ₹24 LPA",
        demandLevel: "Trending",
        keySkills: ["MITRE ATT&CK", "Threat Hunting", "Malware Triage", "OSINT"],
        openingsCount: "980+ Active Jobs",
      },
      {
        title: "Information Security & Compliance Specialist",
        description: "Ensures organizational adherence to ISO 27001, SOC 2, GDPR, and NIST cybersecurity frameworks.",
        salaryRange: "₹6 LPA – ₹16 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["ISO 27001", "Risk Assessment", "Audit & Governance", "Security Policies"],
        openingsCount: "1,200+ Active Jobs",
      },
    ];
  }

  // 11. Digital Marketing & Growth SEO
  if (normalized.includes("digital marketing") || normalized.includes("seo") || normalized.includes("google ads")) {
    return [
      {
        title: "Performance Marketing & PPC Specialist",
        description: "Plans, manages, and scales high-ROI paid ad campaigns on Google Ads, Meta Ads, and LinkedIn Ads.",
        salaryRange: "₹5 LPA – ₹14 LPA",
        demandLevel: "High Demand",
        keySkills: ["Google Ads (Search/PMax)", "Meta Ads Manager", "Conversion Tracking (GTM)", "A/B Testing"],
        openingsCount: "3,100+ Active Jobs",
      },
      {
        title: "SEO Strategist & Organic Growth Lead",
        description: "Executes technical SEO audits, high-intent keyword strategies, on-page optimization, and authority link-building campaigns.",
        salaryRange: "₹4.5 LPA – ₹13 LPA",
        demandLevel: "Trending",
        keySkills: ["Technical SEO", "Ahrefs / SEMrush", "Google Search Console", "Content Optimization"],
        openingsCount: "2,700+ Active Jobs",
      },
      {
        title: "Marketing Automation & CRM Executive",
        description: "Designs automated email nurture sequences, lead scoring funnels, and retention campaigns in HubSpot or ActiveCampaign.",
        salaryRange: "₹4.5 LPA – ₹11 LPA",
        demandLevel: "Rapid Growth",
        keySkills: ["HubSpot / Mailchimp", "Funnel Automation", "Lead Nurturing", "Analytics Reporting"],
        openingsCount: "1,800+ Active Jobs",
      },
      {
        title: "Digital Strategy & Analytics Consultant",
        description: "Analyzes multi-touch attribution, GA4 tracking metrics, and conversion rate optimization (CRO) for digital brands.",
        salaryRange: "₹7 LPA – ₹18 LPA",
        demandLevel: "High Paying",
        keySkills: ["Google Analytics 4", "Looker Studio", "CRO & Heatmaps", "Attribution Modeling"],
        openingsCount: "1,250+ Active Jobs",
      },
    ];
  }

  // 8. Default Generic High-Tech Roles
  return [
    {
      title: `${courseTitle} Technical Specialist`,
      description: `Designs, implements, and maintains core production systems and enterprise solutions utilizing modern ${courseTitle} toolsets and best practices.`,
      salaryRange: "₹6 LPA – ₹16 LPA",
      demandLevel: "High Demand",
      keySkills: ["Core Fundamentals", "Industry Best Practices", "Real-World Projects", "Problem Solving"],
      openingsCount: "1,500+ Active Jobs",
    },
    {
      title: `${courseTitle} Consultant / Engineer`,
      description: "Consults on system architecture, code quality, deployment pipelines, and digital transformation initiatives for enterprise clients.",
      salaryRange: "₹8 LPA – ₹20 LPA",
      demandLevel: "High Paying",
      keySkills: ["Architecture Design", "Enterprise Integration", "Performance Tuning", "Automation"],
      openingsCount: "1,200+ Active Jobs",
    },
    {
      title: "Solutions & Implementation Engineer",
      description: "Deploys, configures, and customizes software solutions, troubleshooting production issues and working directly with enterprise stakeholders.",
      salaryRange: "₹5.5 LPA – ₹14 LPA",
      demandLevel: "Trending",
      keySkills: ["System Configuration", "API Integration", "Troubleshooting", "Agile Methodologies"],
      openingsCount: "2,000+ Active Jobs",
    },
    {
      title: "Associate Technical Analyst",
      description: "Executes day-to-day module development, testing, documentation, and maintenance tasks within cross-functional agile product teams.",
      salaryRange: "₹4 LPA – ₹9.5 LPA",
      demandLevel: "Rapid Growth",
      keySkills: ["Hands-On Lab Skills", "Git Version Control", "Collaboration", "Technical Documentation"],
      openingsCount: "2,500+ Active Jobs",
    },
  ];
}

export function JobRolesSection({
  courseTitle,
  categorySlug,
  courseSlug,
  customRoles,
}: JobRolesSectionProps) {
  const roles = customRoles && customRoles.length > 0
    ? customRoles
    : getJobRolesForCourse(courseTitle, categorySlug, courseSlug);

  return (
    <section id="career-opportunities" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career Pathways &amp; Job Profiles</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
          Target Job Roles for <span className="text-brand-600">{courseTitle}</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Upon completing this comprehensive training program and practical capstone projects, you will be qualified, certified, and fully job-ready to interview for these top industry career designations:
        </p>
      </div>

      {/* 4-Card Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-slate-200/90 hover:border-brand-300 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              {/* Top Row: Title & Demand Badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-brand-600 transition-colors">
                      {role.title}
                    </h3>
                    {role.openingsCount && (
                      <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>{role.openingsCount} in Bangalore &amp; India</span>
                      </span>
                    )}
                  </div>
                </div>

                <span
                  className={`text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full shrink-0 ${
                    role.demandLevel === "High Demand"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : role.demandLevel === "High Paying"
                      ? "bg-amber-50 text-amber-800 border border-amber-200"
                      : role.demandLevel === "Trending"
                      ? "bg-purple-50 text-purple-700 border border-purple-200"
                      : "bg-cyan-50 text-cyan-800 border border-cyan-200"
                  }`}
                >
                  {role.demandLevel}
                </span>
              </div>

              {/* Role Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {role.description}
              </p>

              {/* Required Key Skills Pills */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Core Skills Evaluated:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {role.keySkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Salary Range Box */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-700">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-500 font-medium">Expected CTC:</span>
                <span className="font-extrabold text-slate-900">{role.salaryRange}</span>
              </div>

              <span className="text-[11px] text-brand-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                <span>Job Ready</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Placement & Hiring Partners Guarantee Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">
              100% Placement Support &amp; Interview Guarantee
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-black text-white">
            Dedicated Placement Cell &amp; 500+ Verified Hiring Partners
          </h4>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            From Day 1, our placement team provides personalized resume curation, GitHub portfolio reviews, technical mock interview drills with hiring managers, and direct interview call scheduling until you secure your offer letter.
          </p>
        </div>

        <a
          href="tel:+919036524555"
          className="shrink-0 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition flex items-center gap-2 whitespace-nowrap"
        >
          <Users className="w-3.5 h-3.5" />
          <span>Talk to Placement Desk</span>
        </a>
      </div>
    </section>
  );
}
