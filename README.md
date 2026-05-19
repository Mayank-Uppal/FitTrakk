# FitTrakk — AI Powered Fitness Tracker

A full stack fitness tracking web application that helps users monitor their daily nutrition, steps, and workouts. Built with the MERN stack and powered by Groq AI for intelligent calorie calculation and personalized fitness goal generation.

🔗 **Live Demo:** https://fittrakk-qlq7zi6fr-kshitijjjs-projects.vercel.app/home

---

## Features

- OTP based email authentication with JWT access + refresh token flow
- AI generated personalized daily targets based on user height, weight, age and goal
- AI powered calorie, protein, carbs and fat calculation from meal name and quantity
- Daily logging — meals, steps and gym workouts
- Dashboard showing goal vs daily average progress with progress bars
- Complete log history with day wise breakdown and detailed view

---

## Tech Stack

**Frontend:**
- React + TypeScript
- Tailwind CSS + HyperUI
- TanStack Query
- React Hook Form + Zod
- React Router

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (Access + Refresh Tokens)
- Nodemailer (OTP)

**AI:**
- Groq LLM

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/login | Send OTP to email |
| POST | /auth/otp-validate | Validate OTP + get tokens |
| POST | /auth/refresh | Refresh access token |

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /auth/user | Get user data |
| POST | /objectives | Save user fitness goals |
| GET | /log/goalData | Get AI generated daily goals |
| POST | /log/data | Log user data |

### Track Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /track | Get today's log |
| GET | /track/dashboard | Get daily averages for dashboard |
| GET | /track/all-logs | Get all logs history |
| POST | /track/meal | Log meal with AI calorie calculation |
| POST | /track/steps | Log daily steps |
| POST | /track/gym | Log gym workout |
