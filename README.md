# Altametrics Full Stack Code Assessment

This is my completed submission for the Altametrics Full Stack Node + React + TypeScript coding assessment.

The project is structured as a **monorepo** with both the backend (NestJS) and frontend (Vite + React) apps, using **Docker** for local PostgreSQL development and **Prisma** for database access and seeding.

---

## Seed the database

`docker exec -i server node dist/prisma/seed
`
