# 🏨 e-Hôtels — Database Management System Project

## 🧾 Overview
**e-Hôtels** is a relational database application developed as part of the **CSI2532 – Database I** course at the **University of Ottawa** (Winter 2023).  
The goal was to design and implement a complete **hotel management system** that allows clients to search, book, and rent rooms in real time, while maintaining integrity, normalization, and usability through SQL and database design principles.

This project covered the full database development cycle — from conceptual modeling to implementation and front-end interaction.

---

## 🎯 Objectives
- Model the data structure for hotel chains, hotels, employees, clients, and room reservations.  
- Design a complete **E-R diagram** and corresponding **relational schema**.  
- Define and enforce **integrity constraints** (primary keys, foreign keys, domain constraints, and user-defined rules).  
- Implement the database in **PostgreSQL/MySQL**.  
- Develop an **interactive interface** for users (clients and employees).  
- Use **SQL queries, triggers, and views** to ensure data consistency and usability.  

---

## 🧩 Key Features

### 🔹 Database Design
- **E-R Diagram:** Represents hotel chains, hotels, rooms, employees, and clients with correct relationships and constraints.  
- **Relational Schema:** Includes all entity and relationship mappings with normalization to avoid redundancy.  
- **Integrity Constraints:**  
  - Referential integrity between hotels, rooms, and chains.  
  - Domain and user-defined constraints to maintain accurate data.

### 🔹 Implementation
- Inserted data for **5 major hotel chains**, each with:
  - At least 8 hotels.  
  - 3+ categories (1–5 stars).  
  - 5+ rooms of varying capacity per hotel.  
- Included **indexes** on key relations to optimize frequent queries and joins.  

### 🔹 SQL Logic and Automation
- Implemented **4 SQL queries** for room availability, customer history, and employee actions.  
- Developed **2 triggers** to automatically:
  - Convert reservations into rentals during check-in.  
  - Maintain an updated archive of reservations and rentals.  

### 🔹 Views
1. **View 1:** Number of available rooms per zone.  
2. **View 2:** Room capacities for a specific hotel.  

---

## 🖥️ User Interface
An **interactive application** was built to allow:
- Clients to search and reserve rooms based on various filters (date, price, hotel chain, rating, capacity, etc.).  
- Employees to:
  - Convert reservations into rentals upon client check-in.  
  - Manage room details, availability, and client data.  
  - Insert, update, or delete hotel and room information.  
  - Process payments for active rentals.  

The UI was designed to be intuitive and **SQL-free** for end users, using web forms and interactive controls (dropdowns, buttons, etc.).

---

## ⚙️ Technologies Used
- **Database:** PostgreSQL  
- **Server:** Apache Tomcat  
- **Languages:** SQL / Java, react
- **Tools:** pgAdmin  
- **Version Control:** Git  

---

## 📊 Deliverables
### 1️⃣ First Deliverable
- E-R Diagram  
- Relational Schema  
- Justification for design decisions and constraints  

### 2️⃣ Second Deliverable
- Full SQL implementation (DML, triggers, and views)  
- Source code for the user interface  
- Setup instructions and demonstration guide  

---

## 🧠 Learning Outcomes
Through this project, I developed key skills in:
- Database modeling and normalization  
- SQL query optimization and index design  
- Data integrity and constraint enforcement  
- Trigger and view creation for automation  
- Web-database integration using PHP/Java and SQL  

---


