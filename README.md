# FitTrack – Smart Gym Management System  
**Tagline:** *Train Smart. Manage Better.*

---

## What is FitTrack?

**FitTrack** is a smart Gym Management System designed to help gym owners, trainers, and members manage fitness activities efficiently.

It replaces manual registers and spreadsheets with a **digital, organized, and automated system** that handles memberships, payments, attendance, workout plans, and progress tracking.

---

## System Users

### 1. Admin (Gym Owner / Manager)

Admin has full control over the system and can:

- Add or remove members  
- Manage trainers  
- View payments and financial reports  
- Track member attendance  
- Manage membership plans and special offers  

---

### 2. Trainer

Trainers can:

- View assigned members  
- Create and assign workout plans  
- Track member fitness progress  
- Schedule training sessions  

---

### 3. Member

Members get access to:

- Membership details  
- Assigned workout and diet plans  
- Attendance records  
- Personal progress data (Weight, BMI, etc.)

---

## Core Features

### Member Management

Admin can:

- Add new members  
- Store personal details (name, age, contact, health notes)  
- Upload member photos  
- Assign membership plans  

System displays:

- Active members  
- Expired members  
- Membership end-date alerts  

---

### Membership and Payment Tracking

Supports:

- Monthly, Quarterly, and Yearly plans  
- Payment recording  
- Pending dues tracking  
- Automatic membership expiry calculation  

Admin dashboard shows:

- Total revenue  
- Pending payments  
- Plan-wise member count  

---

### Attendance System

Members check in daily using:

- Manual entry by admin  
- QR code scan (advanced feature)

System tracks:

- Total visits per month  
- Last visit date  

This helps identify inactive members.

---

### Workout Plan Management

Trainers can assign:

- Daily workout schedules (e.g., Chest Day, Leg Day)  
- Exercises with sets and reps  
- Weekly training plans  

Members can log in to see **Today’s Workout**.

---

### Diet Plan Section

Trainers can assign:

- Weight loss diets  
- Muscle gain diets  
- Maintenance diets  

Members can view:

- Meal plans  
- Calorie information (optional advanced feature)

---

### Progress Tracking

Tracks body statistics such as:

- Weight  
- BMI  
- Body fat percentage (optional)  
- Body measurements (chest, waist, arms)

Displays progress through:

- Graphs  
- Before-and-after comparisons  

---

### Trainer Management

Admin can:

- Add trainers  
- Assign members to trainers  
- Track trainer schedules  

---

## Advanced Features

### Renewal Reminders

System sends alerts like:  
**"Your membership expires in 5 days."**  
(Email or dashboard notification)

---

### Admin Dashboard Analytics

Visual charts for:

- Monthly revenue  
- New member registrations  
- Most popular membership plan  
- Attendance trends  

---

### Invoice Generation

When a member makes a payment, the system generates:

- Payment receipt  
- Membership details  

---

### Member Portal

Each member gets login access to:

- View workout and diet plans  
- Check attendance  
- Track fitness progress  
- View trainer messages  

---

## Suggested Tech Stack

### Frontend
- React.js  
- Tailwind CSS or Bootstrap  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Authentication
- JWT (JSON Web Tokens)

---

## Main Database Collections

### Users
- Name  
- Email  
- Role (Admin / Trainer / Member)  
- Contact  

### Members
- UserID  
- Age  
- Height  
- Weight  
- Membership Plan  
- Start Date  
- End Date  

### Plans
- Plan Name  
- Duration  
- Price  

### Payments
- MemberID  
- Amount  
- Date  
- Status  

### Attendance
- MemberID  
- Date  
- Check-in Time  

### WorkoutPlans
- MemberID  
- TrainerID  
- Exercises  

---

## Development Phases

### Phase 1 – Basics
- Login system  
- Member management  
- Membership plans  
- Payment tracking  

### Phase 2 – Fitness Features
- Workout plans  
- Diet plans  
- Progress tracking  

### Phase 3 – Smart Features
- Attendance system  
- Admin dashboard with charts  
- Renewal alerts  

---

## Project Goal

FitTrack demonstrates full-stack development skills by combining real-world business logic, user role management, fitness tracking features, and data visualization into one complete system.
