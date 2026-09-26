---
slug: "sql-database-queries-interview-questions"
title: "Top 30 SQL Query Interview Questions and Answers (Complex Joins & Subqueries)"
category: "Interview Questions"
categorySlug: "interview-questions"
author: "Karthik Nambiar"
authorRole: "Lead BI & Database Consultant"
date: "2026-07-19"
readTime: 11
summary: "Master SQL technical rounds with real-world query interview questions covering complex multi-table Joins, Window Functions, CTEs, Deduplication, Indexing, and Performance Tuning."
relatedCourseSlug: "data-analytics-course"
metaTitle: "Top 30 SQL Query Interview Questions & Answers 2026 - LearnMore"
metaDescription: "Master SQL interview rounds with 30 real-world queries on complex joins, window functions, finding Nth salary, CTEs, and indexing optimization."
---

## 1. What are the differences between INNER, LEFT, RIGHT, and FULL OUTER Joins?
- **INNER JOIN:** Returns only records that have matching values in both tables.
- **LEFT (OUTER) JOIN:** Returns all records from the left table, and matched records from the right table (NULL if no match).
- **RIGHT (OUTER) JOIN:** Returns all records from the right table, and matched records from the left table.
- **FULL OUTER JOIN:** Returns all records when there is a match in either left or right table.
- **CROSS JOIN:** Produces the Cartesian product of rows from both tables.

---

## 2. How to write a query to find the Nth highest salary in SQL?
Using the standard ANSI SQL `DENSE_RANK()` window function:
```sql
WITH RankedSalaries AS (
  SELECT employee_id, emp_name, salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) as rank_num
  FROM Employees
)
SELECT emp_name, salary
FROM RankedSalaries
WHERE rank_num = 2; -- Change 2 to N
```

---

## 3. How do Common Table Expressions (CTEs) and Recursive CTEs work?
A **CTE** is a temporary named result set defined within the execution scope of a single `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement using the `WITH` clause.
- **Recursive CTE:** References itself to traverse hierarchical structures like organizational reporting lines or category trees.

---

## 4. How to find and delete duplicate rows in a table without unique keys?
```sql
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
```

---

## 5. How do Clustered vs Non-Clustered Indexes work and how do you optimize slow queries?
- **Clustered Index:** Determines the physical storage order of data rows in a table (only 1 per table, typically Primary Key).
- **Non-Clustered Index:** Creates a separate B-Tree structure containing index keys and pointers (RowIDs) back to data pages.
- **Query Optimization Checklist:** Analyze `EXPLAIN ANALYZE` execution plans, avoid `SELECT *`, ensure foreign keys are indexed, and replace correlated subqueries with JOINs or window functions.
