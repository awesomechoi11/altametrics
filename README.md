# Altametrics

This is my completed submission for the Altametrics Full Stack Node + React + TypeScript coding assessment.

---

## Clone the repository

```bash
git clone https://github.com/awesomechoi11/altametrics.git
cd altametrics
```

## Build containers

```bash
docker compose build
```

## Start the services

```bash
docker compose up -d
```

## Seed the database

```bash
docker exec -i <server_container_name> node dist/prisma/seed
```

## Live Demo

**Visit this url to see it in action**

```
localhost:5173
```

### Some sample accounts

**Alice**

```
alice@altametrics.com
```

```
securepassword123
```

**Bob**

```
bob@altametrics.com
```

```
anotherSecureP@ss
```

---

## Completed Features

### Backend

-   [x] Create a basic backend API using Node.js with Nestjs in Typescript.
-   [x] Node with Nest, Prisma
-   [x] Use JWT with passport
-   [x] Use Zod or Class validators for DTO’s
-   [x] Create an invoice route:
    -   [x] /invoices
    -   [x] /invoices/:id
    -   [x] /auth: login
-   [x] Use PostgreSQL
    -   [x] Use docker to set it up.
-   [x] Use Prisma ORM to access your data.
-   [x] Use Prisma to seed data all demo data. Provide a username and password for login in documentation.
-   [x] Bonus/Optional: Implement pagination middleware.
-   [x] Bonus/Optional: Proper middleware for logging.
-   [x] Bonus/Optional: Good use of exceptions.
-   [ ] Bonus/Optional: Use vitest (or jest) to write unit tests.
-   [x] Create a proper Readme.

### Frontend

-   [x] Set up a React application using @vite. https://vite.dev/guide/
-   [x] Use TypeScript + React when creating a project using Vite.
-   [x] Use Redux Tool Kit for state management. Keep it simple and show that you know how to implement it.
-   [x] Use React Query. Keep it simple and show that you know how to implement it.
-   [x] Use Zod for frontend Validation and Tailwind for styling.  
         https://tailwindcss.com/docs/guides/vite  
         https://zod.dev/?id=installation
-   [x] Simple Login. Registration is not needed.
-   [x] Create two main routes/pages.
-   [x] Login Page.
-   [x] /invoices: Displays a list of invoices fetched from the backend API.
-   [x] You can use MUI or Shadcn or tanstack table. Whatever makes it easy for you.
-   [x] Clicking on a row of an invoice should open a popup/modal to show its details.
-   [x] Implement a popup/modal to display individual invoice info.
-   [ ] Bonus/Optional: Implement error handling for potential failed API requests.
-   [x] Bonus/Optional: Implement pagination.
-   [x] Bonus/Optional: Playwright test to test auto logging in and checking if the invoice page has invoices.
        Keep it simple.
-   [x] Create a proper Readme.
