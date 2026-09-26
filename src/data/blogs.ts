import { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    slug: "aws-interview-questions",
    title: "Top 30 AWS Interview Questions and Answers for 2026 (Freshers & Experienced)",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Suresh Kumar",
      role: "Principal Cloud Architect",
    },
    publishedDate: "2026-05-15",
    readingTimeMinutes: 12,
    summary: "Comprehensive guide to cracking AWS Cloud Architect, SysOps, and Developer interviews. Detailed answers on VPC, IAM, EC2, S3, Lambda, and CloudWatch.",
    tableOfContents: [
      { id: "q1-vpc-basics", title: "1. What is an Amazon VPC and its core components?" },
      { id: "q2-security-groups-nacl", title: "2. Difference between Security Groups and Network ACLs?" },
      { id: "q3-s3-storage-classes", title: "3. Explain Amazon S3 Storage Classes and Lifecycle Rules" },
      { id: "q4-alb-vs-nlb", title: "4. When to choose Application Load Balancer vs Network Load Balancer?" },
      { id: "q5-serverless-lambda", title: "5. How does AWS Lambda handle cold starts and concurrency?" },
    ],
    relatedCourseSlug: "aws-certified-solutions-architect",
    content: `
## 1. What is an Amazon VPC and its core components?
An **Amazon Virtual Private Cloud (VPC)** enables you to launch AWS resources into a virtual network that you've defined. This virtual network closely resembles a traditional on-premises network with the benefits of scalable AWS infrastructure.

### Key Components:
- **Subnets:** Segments of a VPC's IP address range where you place groups of isolated resources. Public subnets route traffic to the Internet via an Internet Gateway; Private subnets do not.
- **Internet Gateway (IGW):** A horizontally scaled, redundant VPC component that allows communication between instances in your VPC and the internet.
- **NAT Gateway:** Enables instances in a private subnet to connect to the internet (e.g. for OS patches) while preventing inbound internet connections.
- **Route Tables:** A set of rules (routes) that determine where network traffic is directed.

---

## 2. Difference between Security Groups and Network ACLs?

| Feature | Security Group | Network ACL (NACL) |
|---|---|---|
| **Level** | Instance level (attached to ENI/EC2) | Subnet level |
| **State** | **Stateful** (Return traffic is automatically allowed) | **Stateless** (Return traffic must be explicitly allowed) |
| **Rules** | Supports **Allow** rules only | Supports both **Allow** and **Deny** rules |
| **Evaluation**| All rules are evaluated before permitting traffic | Rules are processed in chronological numerical order |

---

## 3. Explain Amazon S3 Storage Classes and Lifecycle Rules
Amazon S3 offers high-durability (99.999999999% - 11 9's) object storage categorized into multiple tiers:
1. **S3 Standard:** For frequently accessed data with low latency.
2. **S3 Intelligent-Tiering:** Automatically moves data between tiers based on changing access patterns without operational overhead.
3. **S3 Standard-IA (Infrequent Access):** For data accessed less frequently but requiring rapid retrieval when needed.
4. **S3 One Zone-IA:** Lower cost option stored in a single Availability Zone.
5. **S3 Glacier Flexible & Glacier Deep Archive:** Extremely low-cost archival storage with retrieval times ranging from minutes to 12 hours.

---

## 4. When to choose Application Load Balancer vs Network Load Balancer?
- **Application Load Balancer (ALB):** Operates at Layer 7 (Application Layer). Best suited for HTTP/HTTPS web traffic, microservices, container routing, URL path-based routing (\`/api\` vs \`/images\`), and host-based routing.
- **Network Load Balancer (NLB):** Operates at Layer 4 (Transport Layer - TCP/UDP). Built for extreme performance handling millions of requests per second with ultra-low latencies and static/elastic IP requirements.

---

## 5. How does AWS Lambda handle cold starts and concurrency?
A **cold start** occurs when a Lambda function is invoked for the first time or after a period of inactivity, requiring AWS to provision a micro-VM runtime container and load function dependencies.
- **Mitigation:** Use **Provisioned Concurrency** to pre-initialize execution environments, optimize package bundle size, and choose compiled runtimes (like Go/Rust) or lightweight Python/Node.js configurations.
    `,
    seo: {
      metaTitle: "Top 30 AWS Interview Questions and Answers for 2026 - LearnMore",
      metaDescription: "Master AWS interview questions on VPC, IAM, EC2, S3, and Lambda. Curated by senior cloud architects with real scenario answers.",
      keywords: ["aws interview questions", "aws solutions architect interview questions", "aws cloud interview prep", "aws fresher questions"],
    },
  },
  {
    slug: "selenium-with-python-interview-questions",
    title: "Top 25 Selenium with Python Interview Questions & Answers for Automation Testers",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Pooja Sharma",
      role: "Senior QA Automation Architect",
    },
    publishedDate: "2026-06-02",
    readingTimeMinutes: 10,
    summary: "Essential Selenium WebDriver with Python interview questions covering PyTest, explicit waits, dynamic XPath strategies, and Page Object Model framework design.",
    tableOfContents: [
      { id: "q1-locators", title: "1. What are the different locator strategies in Selenium Python?" },
      { id: "q2-waits", title: "2. Difference between Implicit, Explicit, and Fluent Waits?" },
      { id: "q3-pom", title: "3. How to implement Page Object Model (POM) in Python?" },
      { id: "q4-pytest-fixtures", title: "4. How do PyTest fixtures improve test suite maintainability?" },
    ],
    relatedCourseSlug: "software-testing-course",
    content: `
## 1. What are the different locator strategies in Selenium Python?
Selenium uses the \`By\` class to locate elements on a web page:
- \`By.ID\`: Fastest and most reliable locator.
- \`By.NAME\`: Matches elements by their \`name\` attribute.
- \`By.XPATH\`: Powerful XML path query supporting relative paths and dynamic functions like \`contains()\`, \`starts-with()\`, and \`text()\`.
- \`By.CSS_SELECTOR\`: High performance, widely used in modern web automation.
- \`By.CLASS_NAME\`, \`By.TAG_NAME\`, \`By.LINK_TEXT\`, \`By.PARTIAL_LINK_TEXT\`.

---

## 2. Difference between Implicit, Explicit, and Fluent Waits?
- **Implicit Wait:** Tells WebDriver to poll the DOM for a certain amount of time when trying to find any element. Applies globally to all elements.
- **Explicit Wait:** Applied to a specific element for a specific condition (e.g. \`element_to_be_clickable\`, \`visibility_of_element_located\`) using \`WebDriverWait\` and \`expected_conditions\`.
- **Fluent Wait:** Defines the maximum wait time as well as the frequency (polling interval) with which to check the condition, while ignoring specific exceptions like \`NoSuchElementException\`.
    `,
    seo: {
      metaTitle: "Selenium with Python Interview Questions & Answers - LearnMore",
      metaDescription: "Crack your QA automation interview with top 25 Selenium with Python questions covering PyTest, Dynamic XPath, and POM framework.",
      keywords: ["selenium with python interview questions", "pytest interview questions", "automation testing interview questions"],
    },
  },
  {
    slug: "data-analyst-interview-questions-answers",
    title: "Cracking Data Analyst Interviews: Top 30 SQL, Power BI & Python Questions",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Karthik Nambiar",
      role: "Lead BI Consultant",
    },
    publishedDate: "2026-06-18",
    readingTimeMinutes: 11,
    summary: "Real interview questions asked at top MNCs for Data Analyst and Business Intelligence roles covering SQL Joins, Window Functions, DAX measures, and Pandas.",
    tableOfContents: [
      { id: "q1-sql-window", title: "1. Explain SQL Window Functions: ROW_NUMBER(), RANK(), and DENSE_RANK()" },
      { id: "q2-dax-calculate", title: "2. How does CALCULATE() work in Power BI DAX?" },
      { id: "q3-pandas-merge", title: "3. Difference between merge(), join(), and concat() in Pandas?" },
    ],
    relatedCourseSlug: "power-bi-course",
    content: `
## 1. Explain SQL Window Functions: ROW_NUMBER(), RANK(), and DENSE_RANK()
Window functions perform calculations across a set of table rows related to the current row without collapsing the rows into a single output like \`GROUP BY\`.

- **ROW_NUMBER():** Assigns a unique sequential integer to each row starting from 1 with no ties.
- **RANK():** Assigns the same rank to identical values, but skips subsequent rank numbers (e.g. 1, 2, 2, 4).
- **DENSE_RANK():** Assigns the same rank to identical values without skipping any subsequent ranks (e.g. 1, 2, 2, 3).
    `,
    seo: {
      metaTitle: "Data Analyst Interview Questions and Answers (SQL & Power BI) - LearnMore",
      metaDescription: "Master Data Analyst interviews with 30 essential questions on SQL Window Functions, Power BI DAX, and Python Pandas.",
      keywords: ["data analyst interview questions", "power bi interview questions", "sql window functions interview", "business analyst interview"],
    },
  },
  {
    slug: "accenture-salary-package-for-freshers",
    title: "Accenture Salary Package for Freshers in 2026: Roles, Band Structure & Growth",
    category: "Career Guides",
    categorySlug: "career-guides",
    author: {
      name: "Raghavendra Rao",
      role: "Placement Lead",
    },
    publishedDate: "2026-04-20",
    readingTimeMinutes: 8,
    summary: "Detailed salary breakdown for freshers at Accenture India across ASE (Associate Software Engineer), FSE (Full Stack Engineer), Cloud, and Data Analyst profiles.",
    tableOfContents: [
      { id: "salary-overview", title: "1. Freshers Salary Structure at Accenture (2026)" },
      { id: "role-breakdown", title: "2. Role-wise CTC Breakdown (ASE vs FSE vs Data)" },
      { id: "how-to-prepare", title: "3. How to Clear Accenture Technical Assessment & Interviews" },
    ],
    relatedCourseSlug: "python-full-stack-course",
    content: `
## 1. Freshers Salary Structure at Accenture (2026)
Accenture recruits thousands of engineering and degree graduates annually across India for tech roles with competitive entry-level packages and structured career fast-tracks.

### Typical Packages by Role:
- **Associate Software Engineer (ASE):** ₹4.5 LPA to ₹5.2 LPA
- **Advanced Associate Software Engineer (AASE / Full Stack):** ₹6.5 LPA to ₹8.5 LPA
- **Digital / Cloud / Data Engineering Track:** ₹7.0 LPA to ₹10.0 LPA
- **Joining Bonus & Performance Incentives:** ₹25,000 to ₹1,00,000 based on onboarding rating.
    `,
    seo: {
      metaTitle: "Accenture Salary Package for Freshers in 2026 - LearnMore",
      metaDescription: "Complete guide on Accenture fresher salary, ASE vs AASE CTC, exam syllabus, and interview preparation roadmap.",
      keywords: ["accenture salary package for freshers", "accenture ase salary 2026", "accenture placement drive", "it company salary for freshers"],
    },
  },
  {
    slug: "java-full-stack-developer-interview-questions",
    title: "Top 35 Java Full Stack Developer Interview Questions & Answers for 2026",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Anil Deshmukh",
      role: "Principal Java Architect & Tech Lead",
    },
    publishedDate: "2026-07-05",
    readingTimeMinutes: 14,
    summary: "Master Java Full Stack interviews with in-depth answers on Core Java (JVM, Multithreading, CompletableFuture), Spring Boot microservices, Hibernate JPA caching, React integration, and Docker deployment.",
    tableOfContents: [
      { id: "q1-jvm-memory", title: "1. Explain JVM Memory Model (Heap, Stack, Metaspace) and Garbage Collection" },
      { id: "q2-completable-future", title: "2. How does CompletableFuture work for Asynchronous Programming?" },
      { id: "q3-spring-boot-auto-config", title: "3. How does Spring Boot Auto-Configuration work?" },
      { id: "q4-hibernate-n-plus-one", title: "4. How to detect and resolve the Hibernate N+1 Select Problem?" },
      { id: "q5-microservices-resilience", title: "5. How do you implement Circuit Breakers using Resilience4j?" },
      { id: "q6-fullstack-auth", title: "6. How is JWT stateless authentication structured between React and Spring Security?" },
    ],
    relatedCourseSlug: "java-full-stack-course",
    content: `
## 1. Explain JVM Memory Model (Heap, Stack, Metaspace) and Garbage Collection
The **Java Virtual Machine (JVM)** memory is partitioned into dedicated runtime data areas:
- **Heap Memory:** Shared across all application threads. It stores all object instances and arrays. Divided into Young Generation (Eden, S0, S1) and Old (Tenured) Generation.
- **Stack Memory:** Thread-private. Stores method call stack frames, local primitive variables, and references to heap objects.
- **Metaspace (Java 8+):** Replaced PermGen. Stored in native OS memory and holds class metadata, method bytecode, and runtime constant pools.
- **Garbage Collection (GC):** Modern JVMs (G1 GC, ZGC) perform generational mark-and-sweep, reclaiming unreferenced heap objects with sub-millisecond pause times.

---

## 2. How does CompletableFuture work for Asynchronous Programming?
\`CompletableFuture\` introduced in Java 8 enables non-blocking, asynchronous programming by allowing developers to compose, combine, and execute stages of computation across thread pools (ForkJoinPool):
- \`supplyAsync()\`: Executes a supplier task asynchronously and returns a CompletableFuture holding the result.
- \`thenApply()\`: Transforms the result synchronously once completed.
- \`thenCompose()\`: Flattens and chains dependent asynchronous operations.
- \`allOf()\`: Waits for an array of parallel futures to complete before proceeding.

---

## 3. How does Spring Boot Auto-Configuration work?
Spring Boot automatically configures beans based on dependencies found on the classpath:
- \`@EnableAutoConfiguration\` / \`@SpringBootApplication\` triggers \`AutoConfigurationImportSelector\`.
- It scans \`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports\` to find candidate configuration classes.
- Evaluates conditional annotations like \`@ConditionalOnClass\`, \`@ConditionalOnMissingBean\`, and \`@ConditionalOnProperty\` before registering default beans.

---

## 4. How to detect and resolve the Hibernate N+1 Select Problem?
The **N+1 Problem** occurs when loading an entity with child relationships (e.g. Orders for a Customer), resulting in 1 query for the parent and N individual queries for each child collection.
### Solutions:
1. **JOIN FETCH:** Use JPQL \`SELECT c FROM Customer c JOIN FETCH c.orders\`.
2. **Entity Graph:** Annotate repository methods with \`@EntityGraph(attributePaths = {"orders"})\`.
3. **Batch Fetching:** Configure \`@BatchSize(size = 25)\` on the entity collection.

---

## 5. How do you implement Circuit Breakers using Resilience4j?
When a downstream microservice experiences high latency or downtime, a Circuit Breaker prevents cascading failures across the distributed architecture:
- **CLOSED:** Normal state. Calls flow directly to downstream service.
- **OPEN:** Failure rate threshold exceeded (e.g. >50% errors). Calls immediately fail-fast or invoke a fallback method.
- **HALF-OPEN:** Periodic trial requests permitted to test if the downstream service has recovered.

---

## 6. How is JWT stateless authentication structured between React and Spring Security?
1. The React frontend sends user credentials to Spring Boot \`/api/auth/login\`.
2. Spring Security validates credentials via \`AuthenticationManager\` and issues a signed JSON Web Token (JWT).
3. The React app stores the access token (in memory/secure cookie) and attaches \`Authorization: Bearer <token>\` header to all Axios requests.
4. A Spring Security \`JwtAuthenticationFilter\` intercepts requests, validates the signature, extracts claims/roles, and sets the \`SecurityContextHolder\`.
    `,
    seo: {
      metaTitle: "Java Full Stack Developer Interview Questions & Answers 2026 - LearnMore",
      metaDescription: "Crack Java Full Stack interviews. Top 35 questions on Core Java, Spring Boot microservices, Hibernate JPA, React integration, and Docker with code examples.",
      keywords: ["java full stack interview questions", "spring boot interview questions", "java developer interview questions 2026", "core java interview questions"],
    },
  },
  {
    slug: "react-js-interview-questions-and-answers",
    title: "Top 30 React.js Interview Questions and Answers (Hooks, SSR & State Management)",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Pooja Sharma",
      role: "Senior UI/UX & Frontend Architect",
    },
    publishedDate: "2026-07-12",
    readingTimeMinutes: 12,
    summary: "Comprehensive React.js interview guide covering React 18/19 features, Virtual DOM reconciliation, useMemo vs useCallback, Redux Toolkit vs Zustand, Next.js Server Components, and performance optimization.",
    tableOfContents: [
      { id: "q1-react-fiber", title: "1. How does React Fiber and Virtual DOM Reconciliation work?" },
      { id: "q2-memo-callback", title: "2. When to use useMemo vs useCallback with practical examples?" },
      { id: "q3-state-management", title: "3. Comparing Redux Toolkit, Zustand, and React Context API" },
      { id: "q4-server-components", title: "4. Difference between React Server Components (RSC) and Client Components?" },
      { id: "q5-custom-hooks", title: "5. How to design reusable Custom Hooks for data fetching and debouncing?" },
    ],
    relatedCourseSlug: "java-full-stack-course",
    content: `
## 1. How does React Fiber and Virtual DOM Reconciliation work?
**React Fiber** is the complete rewrite of React's core reconciliation algorithm introduced to enable incremental rendering:
- **Diffing Algorithm:** React compares previous and next Virtual DOM trees using a heuristic O(n) algorithm.
- **Fiber Nodes:** Each UI element is represented as a unit of work that can be paused, prioritized, aborted, or reused.
- **Concurrent Mode (React 18):** Enables interruptible rendering with \`useTransition\` and \`useDeferredValue\`, keeping user input responsive during heavy re-renders.

---

## 2. When to use useMemo vs useCallback with practical examples?
- \`useMemo\`: Memoizes the **result of a calculation** between renders. Use when computing expensive values (e.g. sorting large data sets).
- \`useCallback\`: Memoizes a **function definition** between renders. Use when passing callback props to optimized child components wrapped in \`React.memo\`.

---

## 3. Comparing Redux Toolkit, Zustand, and React Context API
- **React Context API:** Built-in. Ideal for low-frequency global state (themes, authenticated user info). Causes re-render of all consumers on value change.
- **Redux Toolkit (RTK):** Opinionated standard for enterprise applications requiring predictable state, time-travel debugging, and standardized slice patterns with RTK Query.
- **Zustand:** Minimalist, hook-based state management with zero boilerplate, selector-based subscriptions, and no Context provider wrapper needed.

---

## 4. Difference between React Server Components (RSC) and Client Components?
- **Server Components (Default in Next.js App Router):** Render exclusively on the server. They have zero impact on client JavaScript bundle size and can directly access databases and secrets.
- **Client Components (\`"use client"\`):** Pre-rendered on server and hydrated on the browser. Required for interactive state (\`useState\`), side effects (\`useEffect\`), and browser event listeners.

---

## 5. How to design reusable Custom Hooks for data fetching and debouncing?
Custom hooks encapsulate stateful logic into reusable functions prefixed with \`use\`:
- \`useDebounce(value, delay)\`: Delays state updates until a user stops typing, minimizing unnecessary API requests during real-time search queries.
- \`useFetch(url)\`: Handles loading, error, and data states with automatic abort controller cleanup on component unmount.
    `,
    seo: {
      metaTitle: "React.js Interview Questions and Answers for 2026 - LearnMore",
      metaDescription: "Prepare for React.js developer interviews with 30 essential questions on React Fiber, Hooks, SSR, Next.js Server Components, and Redux Toolkit.",
      keywords: ["react js interview questions", "react hooks interview questions", "react developer interview questions", "frontend developer interview"],
    },
  },
  {
    slug: "sql-database-queries-interview-questions",
    title: "Top 30 SQL Query Interview Questions and Answers (Complex Joins & Subqueries)",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Karthik Nambiar",
      role: "Lead BI & Database Consultant",
    },
    publishedDate: "2026-07-19",
    readingTimeMinutes: 11,
    summary: "Master SQL technical rounds with real-world query interview questions covering complex multi-table Joins, Window Functions, CTEs, Deduplication, Indexing, and Performance Tuning.",
    tableOfContents: [
      { id: "q1-joins-comparison", title: "1. What are the differences between INNER, LEFT, RIGHT, and FULL OUTER Joins?" },
      { id: "q2-nth-highest-salary", title: "2. How to write a query to find the Nth highest salary in SQL?" },
      { id: "q3-cte-recursion", title: "3. How do Common Table Expressions (CTEs) and Recursive CTEs work?" },
      { id: "q4-delete-duplicates", title: "4. How to find and delete duplicate rows in a table without unique keys?" },
      { id: "q5-query-optimization", title: "5. How do Clustered vs Non-Clustered Indexes work and how do you optimize slow queries?" },
    ],
    relatedCourseSlug: "data-analytics-course",
    content: `
## 1. What are the differences between INNER, LEFT, RIGHT, and FULL OUTER Joins?
- **INNER JOIN:** Returns only records that have matching values in both tables.
- **LEFT (OUTER) JOIN:** Returns all records from the left table, and matched records from the right table (NULL if no match).
- **RIGHT (OUTER) JOIN:** Returns all records from the right table, and matched records from the left table.
- **FULL OUTER JOIN:** Returns all records when there is a match in either left or right table.
- **CROSS JOIN:** Produces the Cartesian product of rows from both tables.

---

## 2. How to write a query to find the Nth highest salary in SQL?
Using the standard ANSI SQL \`DENSE_RANK()\` window function:
\`\`\`sql
WITH RankedSalaries AS (
  SELECT employee_id, emp_name, salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) as rank_num
  FROM Employees
)
SELECT emp_name, salary
FROM RankedSalaries
WHERE rank_num = 2; -- Change 2 to N
\`\`\`

---

## 3. How do Common Table Expressions (CTEs) and Recursive CTEs work?
A **CTE** is a temporary named result set defined within the execution scope of a single \`SELECT\`, \`INSERT\`, \`UPDATE\`, or \`DELETE\` statement using the \`WITH\` clause.
- **Recursive CTE:** References itself to traverse hierarchical structures like organizational reporting lines or category trees.

---

## 4. How to find and delete duplicate rows in a table without unique keys?
\`\`\`sql
WITH CTE_Duplicates AS (
  SELECT *,
         ROW_NUMBER() OVER (
           PARTITION BY email, first_name, last_name 
           ORDER BY created_at
         ) as row_num
  FROM Customers
)
DELETE FROM CTE_Duplicates
WHERE row_num > 1;
\`\`\`

---

## 5. How do Clustered vs Non-Clustered Indexes work and how do you optimize slow queries?
- **Clustered Index:** Determines the physical storage order of data rows in a table (only 1 per table, typically Primary Key).
- **Non-Clustered Index:** Creates a separate B-Tree structure containing index keys and pointers (RowIDs) back to data pages.
- **Query Optimization Checklist:** Analyze \`EXPLAIN ANALYZE\` execution plans, avoid \`SELECT *\`, ensure foreign keys are indexed, and replace correlated subqueries with JOINs or window functions.
    `,
    seo: {
      metaTitle: "Top 30 SQL Query Interview Questions & Answers 2026 - LearnMore",
      metaDescription: "Master SQL interview rounds with 30 real-world queries on complex joins, window functions, finding Nth salary, CTEs, and indexing optimization.",
      keywords: ["sql interview questions", "sql query interview questions", "sql joins interview questions", "nth highest salary in sql"],
    },
  },
  {
    slug: "devops-docker-kubernetes-interview-questions",
    title: "Top 30 DevOps, Docker & Kubernetes Interview Questions (CI/CD, Helm, Pods)",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Vikram Malhotra",
      role: "DevOps & SRE Practice Lead",
    },
    publishedDate: "2026-07-26",
    readingTimeMinutes: 13,
    summary: "In-depth DevOps interview questions covering Docker containerization, multi-stage builds, Kubernetes architecture (Pods, Services, Ingress, HPA), Helm charts, and CI/CD automation.",
    tableOfContents: [
      { id: "q1-k8s-architecture", title: "1. Explain Kubernetes Architecture: Control Plane vs Worker Node components" },
      { id: "q2-docker-multistage", title: "2. How do Docker Multi-Stage builds reduce container image footprint?" },
      { id: "q3-k8s-services", title: "3. Difference between ClusterIP, NodePort, LoadBalancer, and Ingress in K8s?" },
      { id: "q4-crashloop-backoff", title: "4. How do you troubleshoot and debug a CrashLoopBackOff error in Kubernetes?" },
      { id: "q5-gitops-helm", title: "5. How do Helm package managers and GitOps (ArgoCD) work in production?" },
    ],
    relatedCourseSlug: "devops-training",
    content: `
## 1. Explain Kubernetes Architecture: Control Plane vs Worker Node components
Kubernetes coordinates container workloads across a clustered fleet of compute instances:
### Control Plane:
- **kube-apiserver:** Front-end REST API gateway handling all internal and external communication.
- **etcd:** Distributed, consistent key-value store containing the cluster state and configuration.
- **kube-scheduler:** Assigns newly created Pods to optimal worker nodes based on resource constraints.
- **kube-controller-manager:** Runs core controllers (Node Controller, Deployment Controller, Endpoint Controller).

### Worker Nodes:
- **kubelet:** Agent running on each node ensuring containers described in PodSpecs are running and healthy.
- **kube-proxy:** Network proxy managing packet forwarding and IP table rules for Services.
- **Container Runtime:** (containerd/CRI-O) pulls images and executes containers.

---

## 2. How do Docker Multi-Stage builds reduce container image footprint?
Multi-stage builds allow developers to use multiple \`FROM\` statements in a single Dockerfile:
- The build stage compiles source code using heavy toolchains (e.g. Maven, Node.js, Go compiler).
- The final production stage copies only the compiled binary or dist bundle into a minimal scratch or alpine runtime image, reducing image sizes from 1GB+ down to under 50MB and eliminating build vulnerabilities.

---

## 3. Difference between ClusterIP, NodePort, LoadBalancer, and Ingress in K8s?
- **ClusterIP:** Default internal virtual IP accessible only from within the Kubernetes cluster.
- **NodePort:** Exposes the Service on a static high-range port (30000-32767) on every node's IP.
- **LoadBalancer:** Provisions an external cloud load balancer (e.g. AWS Network Load Balancer) pointing to the Service.
- **Ingress:** Layer 7 HTTP/HTTPS reverse proxy controller providing host and path-based routing, SSL termination, and rate limiting across multiple backend Services.

---

## 4. How do you troubleshoot and debug a CrashLoopBackOff error in Kubernetes?
1. Inspect pod events and lifecycle: \`kubectl describe pod <pod-name>\`.
2. Check standard container logs: \`kubectl logs <pod-name> --previous\`.
3. Verify liveness/readiness probe failure configurations.
4. Check memory/CPU limits causing OOMKilled (Out of Memory) termination.
5. Verify ConfigMaps, Secrets, and environmental variables required by the entrypoint.

---

## 5. How do Helm package managers and GitOps (ArgoCD) work in production?
- **Helm:** Package manager for Kubernetes that bundles YAML manifests into versioned charts with parameterized \`values.yaml\`.
- **GitOps (ArgoCD):** Continuous delivery framework where Git repositories serve as the single source of truth for declared infrastructure. ArgoCD continuously reconciles live cluster state against Git manifests.
    `,
    seo: {
      metaTitle: "DevOps, Docker & Kubernetes Interview Questions 2026 - LearnMore",
      metaDescription: "Master DevOps & SRE interviews with 30 comprehensive questions on Docker, Kubernetes pods/services, Helm, CI/CD pipelines, and troubleshooting.",
      keywords: ["devops interview questions", "kubernetes interview questions", "docker interview questions", "k8s crashloopbackoff debug"],
    },
  },
  {
    slug: "aws-vs-azure-cloud-solutions-architect-guide",
    title: "AWS vs Azure: Complete Cloud Architect Comparison & Career Guide 2026",
    category: "Career Guides",
    categorySlug: "career-guides",
    author: {
      name: "Suresh Kumar",
      role: "Principal Cloud Architect",
    },
    publishedDate: "2026-08-02",
    readingTimeMinutes: 10,
    summary: "Detailed comparison between Amazon Web Services (AWS) and Microsoft Azure across compute, storage, networking, security, pricing, enterprise adoption, and certification career roadmaps.",
    tableOfContents: [
      { id: "cloud-market-share", title: "1. Global Cloud Market Share and Enterprise Landscape" },
      { id: "service-mapping", title: "2. Core Service Mapping: Compute, Storage, Database & Networking" },
      { id: "iam-security", title: "3. Security & Identity: AWS IAM vs Azure Active Directory (Entra ID)" },
      { id: "certification-matrix", title: "4. Certification Pathways: AWS SAA-C03 vs Azure AZ-104 & AZ-305" },
      { id: "bangalore-job-market", title: "5. Salary Trends and Cloud Architect Hiring in Bangalore & India" },
    ],
    relatedCourseSlug: "microsoft-azure-training",
    content: `
## 1. Global Cloud Market Share and Enterprise Landscape
AWS and Microsoft Azure dominate over 55% of the worldwide cloud infrastructure services market:
- **AWS:** Pioneer cloud platform known for extensive feature breadth, developer autonomy, and dominant adoption across startups, digital natives, and global enterprises.
- **Microsoft Azure:** Rapidly growing cloud leader heavily favored by Fortune 500 enterprises with existing Microsoft 365, Windows Server, and Active Directory licensing agreements.

---

## 2. Core Service Mapping: Compute, Storage, Database & Networking

| Cloud Category | AWS Equivalent | Microsoft Azure Equivalent |
|---|---|---|
| **Virtual Compute** | Amazon EC2 | Azure Virtual Machines (VM) |
| **Object Storage** | Amazon S3 | Azure Blob Storage |
| **Virtual Networking** | Amazon VPC | Azure Virtual Network (VNet) |
| **Serverless Functions**| AWS Lambda | Azure Functions |
| **Managed Relational DB**| Amazon RDS / Aurora | Azure SQL Database / Flexible Server |
| **Kubernetes Engine** | Amazon EKS | Azure Kubernetes Service (AKS) |

---

## 3. Security & Identity: AWS IAM vs Azure Active Directory (Entra ID)
- **AWS IAM:** Centered around JSON policy documents attached to Users, Groups, and Roles with granular Action/Resource conditions.
- **Azure Entra ID (Active Directory):** Enterprise identity-as-a-service supporting seamless Single Sign-On (SSO), Role-Based Access Control (RBAC), and Conditional Access policies across on-premises and multi-cloud environments.

---

## 4. Certification Pathways: AWS SAA-C03 vs Azure AZ-104 & AZ-305
- **AWS Path:** AWS Certified Cloud Practitioner (CLF-C02) → Solutions Architect Associate (SAA-C03) → Solutions Architect Professional (SAP-C02).
- **Azure Path:** Microsoft Azure Fundamentals (AZ-900) → Azure Administrator Associate (AZ-104) → Azure Solutions Architect Expert (AZ-305).

---

## 5. Salary Trends and Cloud Architect Hiring in Bangalore & India
- **Cloud Solutions Architect (4-8 years experience):** ₹16 LPA to ₹28 LPA
- **Senior Cloud Architect / Practice Lead (8+ years):** ₹30 LPA to ₹55 LPA
- Bangalore tech hubs (Whitefield, Electronic City, Outer Ring Road) host over 600+ MNCs actively hiring certified AWS and Azure architects.
    `,
    seo: {
      metaTitle: "AWS vs Azure: Cloud Architect Comparison & Career Guide 2026 - LearnMore",
      metaDescription: "Comprehensive AWS vs Azure comparison for Cloud Architects. Detailed mapping of EC2 vs VM, S3 vs Blob, certifications, and Bangalore salary trends.",
      keywords: ["aws vs azure", "aws vs azure cloud architect", "azure vs aws career", "cloud architect salary bangalore"],
    },
  },
  {
    slug: "power-bi-data-visualization-interview-questions",
    title: "Top 25 Power BI & DAX Interview Questions & Answers for BI Developers",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Karthik Nambiar",
      role: "Lead BI Consultant",
    },
    publishedDate: "2026-08-09",
    readingTimeMinutes: 11,
    summary: "Cracking Power BI interviews: In-depth questions covering Power Query transformations, Star vs Snowflake data models, DAX measures (CALCULATE, ALL, FILTER), Row-Level Security (RLS), and report optimization.",
    tableOfContents: [
      { id: "q1-star-vs-snowflake", title: "1. Why is Star Schema preferred over Snowflake Schema in Power BI?" },
      { id: "q2-calculated-vs-measure", title: "2. Difference between Calculated Columns and Measures in DAX?" },
      { id: "q3-dax-calculate-filter", title: "3. How does CALCULATE() alter filter context in DAX?" },
      { id: "q4-row-level-security", title: "4. How to implement Dynamic Row-Level Security (RLS) using USERNAME()?" },
      { id: "q5-performance-analyzer", title: "5. How do you identify and resolve slow dashboard performance in Power BI?" },
    ],
    relatedCourseSlug: "power-bi-course",
    content: `
## 1. Why is Star Schema preferred over Snowflake Schema in Power BI?
The **Star Schema** features central Fact tables connected directly to single-layer Dimension tables:
- **VertiPaq Engine Optimization:** Power BI's in-memory columnar database compresses data best with denormalized Star Schemas, minimizing relationship joins during interactive visual slicing.
- **Simpler DAX Expressions:** Filters propagate cleanly from 1-side (Dimension) to Many-side (Fact) without complex bidirectional filter paths.

---

## 2. Difference between Calculated Columns and Measures in DAX?
- **Calculated Column:** Evaluated at row-by-row data load time and stored physically in memory (RAM). Consumes model memory and does not react to visual slicers.
- **Measure:** Evaluated dynamically at query/visual render time based on the active Filter Context. Consumes zero storage space and recalculates automatically as users filter dashboards.

---

## 3. How does CALCULATE() alter filter context in DAX?
\`CALCULATE()\` is the single most important function in DAX. It evaluates an expression under a modified filter context:
\`\`\`dax
Total Sales South Region = 
CALCULATE(
    SUM(Sales[Revenue]),
    Geography[Region] = "South",
    ALL(Geography[State])
)
\`\`\`
It transforms row context into filter context (Context Transition) and overrides or merges existing report filters.

---

## 4. How to implement Dynamic Row-Level Security (RLS) using USERNAME()?
1. Create a security table mapping logged-in user email addresses to their authorized business units or territories.
2. In Power BI Desktop, navigate to **Modeling → Manage Roles**.
3. Define a DAX filter expression on the Dimension table: \`[UserEmail] = USERPRINCIPALNAME()\`.
4. Publish the report to Power BI Service and assign users/security groups to the created role.

---

## 5. How do you identify and resolve slow dashboard performance in Power BI?
1. Use **Performance Analyzer** in Power BI Desktop to measure DAX query duration, Visual display time, and DirectQuery wait times.
2. Reduce visual count per page (limit to under 10-12 visuals).
3. Remove unused columns and high-cardinality timestamp fields from Fact tables to improve VertiPaq compression.
4. Replace complex iterator DAX functions (\`SUMX\`, \`FILTER\`) with optimized boolean filter arguments inside \`CALCULATE\`.
    `,
    seo: {
      metaTitle: "Power BI & DAX Interview Questions and Answers 2026 - LearnMore",
      metaDescription: "Master Power BI job interviews with top 25 questions on DAX formulas, Power Query, Star Schema data modeling, Dynamic RLS, and performance tuning.",
      keywords: ["power bi interview questions", "dax interview questions", "power bi developer interview", "power bi row level security"],
    },
  },
  {
    slug: "python-for-data-science-interview-questions",
    title: "Top 30 Python for Data Science & Machine Learning Interview Questions",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Dr. Arvind Swaminathan",
      role: "Chief AI Scientist & ML Trainer",
    },
    publishedDate: "2026-08-16",
    readingTimeMinutes: 13,
    summary: "Ace Data Science and Machine Learning interviews with questions covering Python data structures, NumPy vectorization, Pandas DataFrame manipulation, Scikit-Learn pipelines, and model evaluation metrics.",
    tableOfContents: [
      { id: "q1-python-generators", title: "1. How do Python Generators and the yield keyword optimize memory in Data Science?" },
      { id: "q2-numpy-broadcasting", title: "2. What is NumPy Array Broadcasting and how does it prevent explicit loops?" },
      { id: "q3-pandas-groupby-apply", title: "3. Difference between apply(), map(), and applymap() in Pandas?" },
      { id: "q4-bias-variance", title: "4. Explain the Bias-Variance Tradeoff and strategies to prevent Overfitting" },
      { id: "q5-evaluation-metrics", title: "5. When should you choose Precision, Recall, F1-Score, or ROC-AUC?" },
    ],
    relatedCourseSlug: "data-science-course",
    content: `
## 1. How do Python Generators and the yield keyword optimize memory in Data Science?
Generators produce values on-the-fly using \`yield\` rather than storing entire datasets in memory:
- When processing gigabyte-scale CSVs or image directories, standard lists cause Out-Of-Memory (OOM) crashes.
- Generators maintain execution state and return an iterator, yielding one data record at a time on demand (\`next()\`).

---

## 2. What is NumPy Array Broadcasting and how does it prevent explicit loops?
**Broadcasting** describes how NumPy treats arrays with different shapes during arithmetic operations without making unnecessary copies of data in memory:
- Arrays are broadcastable if trailing dimensions match or one dimension equals 1.
- Operations execute at compiled C-speed, avoiding slow Python \`for\` loops.

---

## 3. Difference between apply(), map(), and applymap() in Pandas?
- \`map()\`: Operates element-wise on a **Pandas Series** using a dictionary mapping or lambda function.
- \`apply()\`: Operates along an axis (rows or columns) on a **DataFrame** or element-wise on a **Series**.
- \`map()\` / \`applymap()\` (or \`DataFrame.map\` in modern Pandas): Applies a function to every individual element across the entire DataFrame.

---

## 4. Explain the Bias-Variance Tradeoff and strategies to prevent Overfitting
- **High Bias (Underfitting):** The model is too simple (e.g. Linear Regression on non-linear data) and fails to capture underlying patterns in training and test data.
- **High Variance (Overfitting):** The model memorizes training noise and fails to generalize to unseen test data.
- **Mitigation Techniques:** Cross-Validation (K-Fold), L1 (Lasso) / L2 (Ridge) Regularization, Dropout layers in Deep Learning, Pruning Decision Trees, and assembling ensemble models (Random Forest, XGBoost).

---

## 5. When should you choose Precision, Recall, F1-Score, or ROC-AUC?
- **Precision:** Choose when False Positives are costly (e.g. Email Spam Detection where a real email cannot go to junk).
- **Recall (Sensitivity):** Choose when False Negatives are critical (e.g. Medical Cancer Diagnosis or Fraud Detection where missing a positive case is dangerous).
- **F1-Score:** Harmonic mean of Precision and Recall; ideal for imbalanced class distributions.
- **ROC-AUC:** Measures model discriminative ability across all classification probability thresholds.
    `,
    seo: {
      metaTitle: "Python for Data Science & ML Interview Questions 2026 - LearnMore",
      metaDescription: "Master Data Science interviews with 30 essential questions on Python generators, NumPy broadcasting, Pandas, Scikit-Learn, and evaluation metrics.",
      keywords: ["python for data science interview questions", "machine learning interview questions", "pandas interview questions", "bias variance tradeoff"],
    },
  },
  {
    slug: "software-testing-automation-qa-interview-questions",
    title: "Top 35 Manual & Automation QA Software Testing Interview Questions",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Pooja Sharma",
      role: "Senior QA Automation Architect",
    },
    publishedDate: "2026-08-23",
    readingTimeMinutes: 12,
    summary: "Comprehensive QA testing interview guide covering STLC phases, Agile test pyramids, Defect lifecycle, Boundary Value Analysis, Selenium WebDriver synchronization, and RestAssured API testing.",
    tableOfContents: [
      { id: "q1-stlc-phases", title: "1. Explain the Software Testing Life Cycle (STLC) and its key deliverables" },
      { id: "q2-bva-ecp", title: "2. How do Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP) work?" },
      { id: "q3-severity-vs-priority", title: "3. Difference between Defect Severity and Defect Priority with real examples" },
      { id: "q4-selenium-framework", title: "4. How to architect a scalable Page Object Model (POM) Hybrid Test Framework?" },
      { id: "q5-api-status-codes", title: "5. Key HTTP status codes and how to validate REST APIs with RestAssured" },
    ],
    relatedCourseSlug: "software-testing-course",
    content: `
## 1. Explain the Software Testing Life Cycle (STLC) and its key deliverables
The **STLC** comprises structured phases executed systematically during software verification:
1. **Requirement Analysis:** Identify testable requirements and formulate RTM (Requirements Traceability Matrix).
2. **Test Planning:** Define scope, testing strategy, resource allocation, and test schedule.
3. **Test Case Design:** Author detailed test cases, test data, and test automation scripts.
4. **Test Environment Setup:** Configure hardware, software, test databases, and CI runners.
5. **Test Execution:** Execute test suites, report defects in Jira, and track bug lifecycles.
6. **Test Closure:** Deliver test metrics report and sign-off on release readiness.

---

## 2. How do Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP) work?
- **Equivalence Class Partitioning (ECP):** Divides input domain into valid and invalid partitions. Testing one representative value from each partition tests the whole partition.
- **Boundary Value Analysis (BVA):** Tests values at the extreme boundary edges (Min, Min+1, Max-1, Max, and Out-of-bounds values). Most software bugs occur at boundary conditions.

---

## 3. Difference between Defect Severity and Defect Priority with real examples
- **Severity:** Technical impact of the defect on system operation (Critical, High, Medium, Low).
- **Priority:** Business urgency indicating how quickly the bug must be resolved (P1, P2, P3).
- **High Severity, Low Priority Example:** An obscure calculation crash in an admin report accessed once a year.
- **Low Severity, High Priority Example:** Company logo misspelled on the public homepage.

---

## 4. How to architect a scalable Page Object Model (POM) Hybrid Test Framework?
A production-ready test automation framework separates test logic from page layout:
- **Pages Layer:** Encapsulates web elements and action methods for each web page.
- **Base Layer:** Initializes WebDriver, manages browser capabilities, and configures global timeouts.
- **Utilities Layer:** Handles Excel/JSON test data readers, screenshot captures, and ExtentReports logging.
- **Tests Layer:** Contains PyTest/TestNG test methods asserting business outcomes.

---

## 5. Key HTTP status codes and how to validate REST APIs with RestAssured
- **200 OK / 201 Created:** Successful execution and resource creation.
- **400 Bad Request / 401 Unauthorized / 403 Forbidden / 404 Not Found:** Client-side errors.
- **500 Internal Server Error / 502 Bad Gateway / 503 Service Unavailable:** Server-side failures.
- **RestAssured Validation:**
\`\`\`java
given()
  .header("Content-Type", "application/json")
  .body(payload)
.when()
  .post("/api/leads")
.then()
  .statusCode(200)
  .body("success", equalTo(true));
\`\`\`
    `,
    seo: {
      metaTitle: "Manual & Automation QA Software Testing Interview Questions 2026 - LearnMore",
      metaDescription: "Prepare for QA software testing interviews. Top 35 questions on STLC, Boundary Value Analysis, Selenium POM framework, and RestAssured API testing.",
      keywords: ["software testing interview questions", "manual testing interview questions", "qa automation interview questions", "defect severity vs priority"],
    },
  },
  {
    slug: "data-engineering-spark-pyspark-interview-questions",
    title: "Top 30 Data Engineering & PySpark Interview Questions for Cloud Engineers",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Karthik Nambiar",
      role: "Lead BI & Data Architect",
    },
    publishedDate: "2026-08-30",
    readingTimeMinutes: 14,
    summary: "Master Data Engineering technical rounds with in-depth questions on Apache Spark architecture, PySpark DataFrames, DAG execution, Narrow vs Wide transformations, Shuffling, Broadcast joins, and Delta Lake.",
    tableOfContents: [
      { id: "q1-spark-architecture", title: "1. Explain Apache Spark Architecture: Driver, Cluster Manager, and Executors" },
      { id: "q2-rdd-vs-dataframe", title: "2. Difference between RDD, DataFrame, and Dataset in Apache Spark?" },
      { id: "q3-narrow-vs-wide", title: "3. Explain Narrow vs Wide Transformations and the impact of Data Shuffling" },
      { id: "q4-broadcast-join", title: "4. How does Broadcast Hash Join optimize big data queries in PySpark?" },
      { id: "q5-delta-lake-acid", title: "5. How does Delta Lake provide ACID transactions and Time Travel on Object Storage?" },
    ],
    relatedCourseSlug: "snowflake-training",
    content: `
## 1. Explain Apache Spark Architecture: Driver, Cluster Manager, and Executors
Apache Spark uses a master-worker distributed architecture:
- **Driver Program:** Contains the \`SparkSession\`, constructs the Directed Acyclic Graph (DAG) of transformations, schedules tasks, and coordinates worker nodes.
- **Cluster Manager:** (YARN, Kubernetes, or Standalone) allocates compute resources across the cluster.
- **Executors:** Worker processes running on cluster nodes responsible for executing assigned tasks, performing computations in memory, and persisting cached datasets.

---

## 2. Difference between RDD, DataFrame, and Dataset in Apache Spark?
- **Resilient Distributed Dataset (RDD):** Low-level immutable distributed collection of objects. Lacks schema and Catalyst query optimization.
- **DataFrame:** Distributed collection of data organized into named columns. Optimized by Catalyst Optimizer and Tungsten execution engine.
- **Dataset (Java/Scala):** Strongly typed object-oriented interface combining compile-time type safety with DataFrame speed.

---

## 3. Explain Narrow vs Wide Transformations and the impact of Data Shuffling
- **Narrow Transformation:** Each partition of the parent RDD is used by at most one partition of the child RDD (e.g. \`map()\`, \`filter()\`). Executed in parallel with zero network transfer.
- **Wide Transformation:** Multiple child partitions depend on data across multiple parent partitions (e.g. \`groupByKey()\`, \`join()\`, \`distinct()\`). Triggers **Data Shuffling** across the network, which is the primary performance bottleneck in big data jobs.

---

## 4. How does Broadcast Hash Join optimize big data queries in PySpark?
When joining a massive Fact table (e.g. 100 million rows) with a small Dimension table (e.g. 5,000 rows):
- Standard shuffle join hashes and moves both tables across the network cluster.
- **Broadcast Join:** Copies the small table to every worker executor node, converting the join into a fast local memory lookup and eliminating 100% of network shuffling:
\`\`\`python
from pyspark.sql.functions import broadcast
joined_df = big_fact_df.join(broadcast(small_dim_df), "category_id")
\`\`\`

---

## 5. How does Delta Lake provide ACID transactions and Time Travel on Object Storage?
**Delta Lake** is an open-source storage layer that brings reliability to data lakes on Amazon S3 or ADLS:
- **ACID Transactions:** Maintained via a JSON-based commit log (\`_delta_log/\`) tracking all atomic write operations.
- **Time Travel:** Allows querying historical snapshots of data for audit reproducibility and rollback:
\`\`\`sql
SELECT * FROM sales_delta VERSION AS OF 12;
\`\`\`
    `,
    seo: {
      metaTitle: "Data Engineering & PySpark Interview Questions 2026 - LearnMore",
      metaDescription: "Ace Data Engineering interviews with 30 top questions on Apache Spark architecture, PySpark DataFrames, DAG scheduling, Broadcast joins, and Delta Lake.",
      keywords: ["data engineering interview questions", "pyspark interview questions", "apache spark interview questions", "spark broadcast join"],
    },
  },
  {
    slug: "cyber-security-soc-analyst-interview-questions",
    title: "Top 25 Cyber Security & SOC Analyst Interview Questions and Answers",
    category: "Interview Questions",
    categorySlug: "interview-questions",
    author: {
      name: "Vikram Malhotra",
      role: "Cyber Security & Cloud Infrastructure Specialist",
    },
    publishedDate: "2026-09-06",
    readingTimeMinutes: 12,
    summary: "Complete SOC Analyst and Cyber Security interview preparation guide covering the CIA Triad, OSI layer security, SIEM log analysis, Incident Response lifecycle (NIST), MITRE ATT&CK framework, and Phishing triage.",
    tableOfContents: [
      { id: "q1-cia-triad", title: "1. Explain the CIA Triad (Confidentiality, Integrity, Availability) with enterprise examples" },
      { id: "q2-soc-siem-workflow", title: "2. How does a Security Operations Center (SOC) use SIEM tools like Splunk/ELK?" },
      { id: "q3-incident-response", title: "3. What are the 6 stages of the NIST Incident Response Framework?" },
      { id: "q4-mitre-attack", title: "4. How do SOC Analysts use the MITRE ATT&CK framework for threat hunting?" },
      { id: "q5-phishing-investigation", title: "5. Step-by-step methodology to investigate a suspicious email and malicious payload" },
    ],
    relatedCourseSlug: "devops-training",
    content: `
## 1. Explain the CIA Triad (Confidentiality, Integrity, Availability) with enterprise examples
The **CIA Triad** is the foundational model guiding information security policies:
- **Confidentiality:** Restricts data access to authorized personnel (implemented via AES-256 encryption, MFA, Least Privilege IAM).
- **Integrity:** Guarantees data is accurate and untampered (implemented via SHA-256 cryptographic hashing, digital signatures, and database audit logs).
- **Availability:** Ensures systems remain operational and accessible (implemented via DDoS mitigation, redundant Multi-AZ failover, and automated backups).

---

## 2. How does a Security Operations Center (SOC) use SIEM tools like Splunk/ELK?
A **Security Information and Event Management (SIEM)** platform aggregates, normalizes, and analyzes log telemetry across firewalls, endpoints, servers, and cloud providers:
- **Correlation Rules:** Triggers high-fidelity alerts when suspicious patterns occur (e.g. 5 consecutive failed SSH logins followed by root command execution).
- **Log Triage:** SOC Level 1 analysts inspect event timestamps, source/destination IPs, hashes, and user agents to distinguish between false alarms and true security incidents.

---

## 3. What are the 6 stages of the NIST Incident Response Framework?
1. **Preparation:** Establish incident handling procedures, communication plans, and detection tooling.
2. **Detection & Analysis:** Identify security anomalies and validate severity.
3. **Containment:** Quarantine compromised endpoints or disable breached user credentials to halt lateral movement.
4. **Eradication:** Remove malware artifacts, patch vulnerabilities, and close backdoors.
5. **Recovery:** Restore clean system backups and resume production operations with enhanced monitoring.
6. **Lessons Learned:** Post-incident review to improve security posture and update defense runbooks.

---

## 4. How do SOC Analysts use the MITRE ATT&CK framework for threat hunting?
The **MITRE ATT&CK** matrix categorizes adversary behavior into Tactics (objectives like Initial Access, Privilege Escalation, Exfiltration) and Techniques (specific methods like PowerShell execution or Kerberoasting). Analysts map observed SIEM telemetry to ATT&CK tactics to identify attack vectors and deploy targeted defensive detections.

---

## 5. Step-by-step methodology to investigate a suspicious email and malicious payload
1. **Header Analysis:** Extract sender domain, Return-Path, originating IP, and verify SPF, DKIM, and DMARC alignment.
2. **URL / Attachment Extraction:** Safely extract links and attachments without clicking or executing in the host OS.
3. **Sandbox Analysis:** Detonate suspicious URLs or files inside an isolated sandbox (e.g. Any.Run, VirusTotal, Hybrid-Analysis) to monitor process spawning and C2 (Command & Control) callbacks.
4. **Remediation:** Purge malicious emails from all company inboxes, block malicious IPs/domains at the perimeter firewall, and reset compromised user credentials.
    `,
    seo: {
      metaTitle: "Cyber Security & SOC Analyst Interview Questions & Answers 2026 - LearnMore",
      metaDescription: "Crack SOC Analyst & Cyber Security interviews with 25 essential questions on CIA Triad, SIEM log triage, NIST Incident Response, and MITRE ATT&CK.",
      keywords: ["cyber security interview questions", "soc analyst interview questions", "siem interview questions", "nist incident response"],
    },
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getBlogsByCategory(categorySlug: string): BlogPost[] {
  return blogs.filter((b) => b.categorySlug === categorySlug);
}

