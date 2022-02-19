This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

A simple movie list app where you can add, edit and delete a table full of movies.

## How to use

This project uses Cypress to run it's test and zustand as a state-management system.

Cypress depends on http://localhost:3000. You can run the command below to start both the server and cypress:

```bash
npm run cypressDev
# or
yarn cypressDev
```

If you want to run the server and cypress separately you have to use two terminals and run on each:

```bash
npm run dev
npm run cypress
# or
yarn dev
yarn cypress
```
