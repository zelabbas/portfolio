# Zakariaa Elabbassi — Portfolio (Front-end)

This repository contains the front-end for my personal portfolio website built with React and Vite. It showcases my projects, skills, education, and provides a contact form and downloadable resume.

## Quick summary

- Built with: React + Vite
- Styling: Tailwind CSS
- Animations: Framer Motion
- Purpose: Present projects, experience and a contact form that sends messages to the backend

---

## Run locally

1. Install dependencies

```bash
cd front-end
npm install
```

2. Start development server

```bash
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173).

3. Build for production

```bash
npm run build
```

Static files will be placed in `dist/`.

---

## Environment variables

Create a `.env` file in the `front-end` folder and keep it out of version control. Example variables used by this project:

```env
VITE_BACKEND_URL=https://your-backend.example.com
VITE_PORTFOLIO_KEY=your_frontend_secret_key
```

- `VITE_BACKEND_URL` — endpoint the contact form posts to (backend server).
- `VITE_PORTFOLIO_KEY` — optional header value to identify requests from your site (for simple protection).

Make sure the backend you use accepts requests from your deployed front-end domain (CORS).

---

## Deploy

Recommended hosts: Vercel, Netlify, Cloudflare Pages. They provide automatic builds and HTTPS. When deploying:

- Set environment variables in your host dashboard.
- Configure the build command (`npm run build`) and output directory (`dist`).

---

## Notes & best practices

- Keep `.env` files out of git. Add them to `.gitignore`.
- Use HTTPS in production for both front-end and backend.
- Consider storing contact messages in a database or forwarding to an email using a verified server-side mail provider.


---

_Last updated: October 2025_
