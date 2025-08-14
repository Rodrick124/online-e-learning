# Online E‑Learning Backend

This directory will contain the backend (API) for the Online E‑Learning project. It currently provides documentation and a proposed structure to bootstrap an API server quickly. No runtime code has been added yet.

## Overview
- Purpose: Authenticate users, manage courses, lessons, enrollments, quizzes, payments, and serve API endpoints to the frontend.
- Status: Scaffold only.
- Suggested stack:
  - Runtime: Node.js (LTS 18+)
  - Framework: Express.js
  - DB: PostgreSQL (via Prisma) or MongoDB (via Mongoose) — pick based on team preference
  - Auth: JWT (access + refresh tokens)
  - Validation: Zod or Joi
  - Docs: OpenAPI/Swagger

## Proposed structure
```
backend/
  src/
    app.js            # Express app configuration (middlewares, routes)
    server.js         # HTTP server bootstrap and startup logic
    routes/           # Route modules (e.g., auth, users, courses)
    controllers/      # Request handlers
    services/         # Business logic
    models/           # DB models (Prisma schemas or Mongoose models)
    middleware/       # Auth, error handling, validation, etc.
    utils/            # Helpers
  prisma/             # Prisma schema & migrations (if using PostgreSQL)
  tests/              # Unit/integration tests
  .env                # Environment variables (not committed)
  package.json
```

## Quick start (suggested)
1) Initialize the project
```
npm init -y
```

2) Install dependencies
```
# Required
npm i express cors dotenv

# Optional now / common choices
# PostgreSQL + Prisma
# npm i @prisma/client
# npm i -D prisma

# OR MongoDB + Mongoose
# npm i mongoose

# Dev utilities
npm i -D nodemon
```

3) Add scripts to package.json
```
{
  "type": "module",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js",
    "test": "echo \"No tests yet\" && exit 0"
  }
}
```

4) Create a minimal server
Create src/app.js
```js
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000', // CRA dev
    'http://localhost:5173', // Vite dev
  ],
  credentials: true,
}));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

export default app;
```

Create src/server.js
```js
import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
```

5) Environment variables
Create a `.env` file at backend/.env
```
PORT=5000
NODE_ENV=development
# Choose one of the following depending on your DB strategy
DATABASE_URL=postgresql://user:pass@localhost:5432/elearning
# MONGODB_URI=mongodb://localhost:27017/elearning
JWT_SECRET=change-me
```

6) Run the server
```
npm run dev
```
Visit:
- Health check: GET http://localhost:5000/api/health -> { "status": "ok" }

## Next steps
- Pick a database and set up models/migrations.
- Implement authentication (register/login, password hashing, JWT issuance, refresh flow).
- Add course, lesson, and enrollment endpoints.
- Add request validation + error handling middleware.
- Add logging (e.g., pino) and request tracing if required.
- Add OpenAPI/Swagger docs.
- Set up testing: `npm i -D vitest supertest` and write integration tests for routes.

## Conventions
- Use environment variables for secrets and external service URLs.
- Keep controllers thin; push core logic to services.
- Validate all inputs; never trust client data.
- Centralize error handling with an error middleware.

## License
Internal project materials. Adjust licensing as needed.