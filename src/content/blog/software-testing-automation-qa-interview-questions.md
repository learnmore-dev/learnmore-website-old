---
slug: "software-testing-automation-qa-interview-questions"
title: "Top 35 Manual & Automation QA Software Testing Interview Questions"
category: "Interview Questions"
categorySlug: "interview-questions"
author: "Pooja Sharma"
authorRole: "Senior QA Automation Architect"
date: "2026-08-23"
readTime: 12
summary: "Comprehensive QA testing interview guide covering STLC phases, Agile test pyramids, Defect lifecycle, Boundary Value Analysis, Selenium WebDriver synchronization, and RestAssured API testing."
relatedCourseSlug: "software-testing-course"
metaTitle: "Manual & Automation QA Software Testing Interview Questions 2026 - LearnMore"
metaDescription: "Prepare for QA software testing interviews. Top 35 questions on STLC, Boundary Value Analysis, Selenium POM framework, and RestAssured API testing."
---

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
```java
given()
  .header("Content-Type", "application/json")
  .body(payload)
.when()
  .post("/api/leads")
.then()
  .statusCode(200)
  .body("success", equalTo(true));
```
