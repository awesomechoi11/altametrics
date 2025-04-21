## Description

Used [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
npm install
```

Make sure the postgres database is running. In the root directory, run

```bash
docker compose up -d db
```

Then generate the schema

```bash
npx prisma generate
```

## Run the project

```bash
# development
npm run start

# watch mode
npm run start:dev
```

## Run tests

```bash
# unit tests
npm run test
```

## Build

```bash
npm run build
```

## Backend

- [x] Create a basic backend API using Node.js with Nestjs in Typescript.
- [x] Node with Nest, Prisma
- [x] Use JWT with passport
- [x] Use Zod or Class validators for DTO’s
- [x] Create an invoice route:
  - [x] /invoices
  - [x] /invoices/:id
  - [x] /auth: login
- [x] Use PostgreSQL
  - [x] Use docker to set it up.
- [x] Use Prisma ORM to access your data.
- [x] Use Prisma to seed data all demo data. Provide a username and password for login in documentation.
- [x] Bonus/Optional: Implement pagination middleware.
- [x] Bonus/Optional: Proper middleware for logging.
- [x] Bonus/Optional: Good use of exceptions.
- [ ] Bonus/Optional: Use vitest (or jest) to write unit tests.
- [x] Create a proper Readme.
