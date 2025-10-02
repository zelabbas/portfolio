# Zakariaa Elabbassi — Portfolio

This repository contains my personal portfolio website. It includes:

- Front-end: React + Vite (located in `front-end`)
- Backend: Node/Express server for handling contact form submissions (located in `server`)

## Quick start

1. Front-end

```bash
cd front-end
npm install
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173).

2. Backend (email server)

```bash
cd server
npm install
# create a .env with EMAIL and EMAIL_PASSWORD and PORT
npm run start
```

By default the backend will use HTTP. To enable HTTPS locally, add SSL certificate files at `server/cert/key.pem` and `server/cert/cert.pem` (see server README for details).

## Environment variables

Create `.env` files in the appropriate folders and never commit them. Examples:

front-end/.env
```
VITE_BACKEND_URL=https://your-backend.example.com
VITE_PORTFOLIO_KEY=your_frontend_secret_key
```

server/.env
```
PORT=5000
EMAIL=youremail@example.com
EMAIL_PASSWORD=your-email-password-or-app-password
PORTFOLIO_SECRET_KEY=your_backend_secret_key
```

## Deployment notes

- Deploy the front-end to Vercel/Netlify/Cloudflare Pages and the backend to a secure host (Heroku, Render, DigitalOcean, or a VPS behind Nginx).
- Configure environment variables in the deployment dashboard and use HTTPS in production.

---
Last updated: October 2025
