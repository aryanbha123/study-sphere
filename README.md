<p align="center">
  <img src="frontend/public/logo.png" alt="Study Sphere logo" width="110" />
</p>

# Study Sphere

A peer-learning platform for students that brings quizzes, coding practice and collaborative study into one place. This repo holds an early TypeScript monorepo version with a React frontend and an Express backend.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

## About

Study Sphere is meant to help students practice, improve and grow together through quizzes, coding challenges and shared study tools. This repository is the early foundation for that platform. It has a landing site, a camera and microphone preview for joining study meetings, and a minimal Express server.

## Features

**Frontend** (`frontend/`)
- Landing page with Hero, Services, quiz bundles (DBMS Basics, Advanced SQL, Data Structures, Operating Systems, Computer Networks, Algorithms, Computer Architecture and more), student testimonials and FAQ sections.
- Per-page `<title>` tags with `react-helmet-async`.
- **Join meeting** page (`/join`): a live camera and microphone preview using `getUserMedia`, with video and audio toggles and a meeting-code input.
- A lazily created Socket.io client singleton (`config/socket.ts`) that sends a token for auth.
- A role-based redirect guard (`auth/RolebasedRoutes.tsx`) that sends admins to `/admin` and users to `/dashboard`, driven by a Redux user slice.
- A custom MUI theme with an extra `supporting` palette color.

**Backend** (`backend/`)
- An Express 5 server in TypeScript with a health-check route. It reads `PORT` from `src/.env.local`.
- Empty `config/redis.ts` and `config/socket.ts` placeholder files for upcoming real-time features.

### Work in Progress

The Login, Signup, Quiz (`/quiz/:id`), meeting room (`/join/:id`), About and Contact pages are placeholders. The backend does not have Redis or Socket.io wired up yet.

## Tech Stack

| Part | Tools |
|------|-------|
| Frontend | React 19, TypeScript, Vite 7, React Router 7, Redux Toolkit, TanStack React Query, MUI 7, Tailwind CSS 4, Socket.io client, react-helmet-async |
| Backend | Node.js, Express 5, TypeScript, dotenv |

## Project Structure

```
study-sphere/
├── frontend/
│   └── src/
│       ├── pages/                # Home, About, Contact, VideoMeet
│       ├── components/home/      # Hero, Services, Bundel, Achievements, FAQ
│       ├── components/shared/    # Navbar, Footer, HomeLayout
│       ├── auth/                 # RolebasedRoutes
│       ├── store/                # Redux store + UserSlice
│       └── config/               # API base URL, Socket.io client, MUI theme
└── backend/
    └── src/
        ├── index.ts              # Express server
        └── config/               # redis.ts, socket.ts (placeholders)
```

## Getting Started

### Prerequisites

- Node.js 18+

### Backend

```bash
cd backend
npm install
npm run dev        # runs tsc in watch mode + nodemon on dist/index.js
```

`npm run dev` uses `nodemon`, which is not a listed dependency. Install it globally (`npm i -g nodemon`) or run it with `npx`.

The server listens on `PORT` (default `5000`).

### Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build
npm run lint
```

The frontend's API and Socket.io base URL is set in `frontend/src/config/config.ts` (`http://localhost:3001`).

### Environment Variables

| Variable | Location | Description |
|----------|----------|-------------|
| `PORT` | `backend/src/.env.local` | Port for the Express server (default `5000`) |

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check. Returns `Hello, world!` |

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
