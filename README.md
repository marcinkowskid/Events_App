# Events App

## Description

MERN Fullstack App build for adding simple user events - v8.

### Used Technologies

#### Frontend

- React with Typescript
- State management: Redux Toolkit
- Forms and validation: Formik & Yup
- Webpack, Babel
- Testing: React Testing Library, Jest

#### Backend

- Node.js with Express
- Typescript
- Database: MongoDB, mongoose
- Webpack, Babel
- Testing: Jest with Supertest

## How to use this app

- Clone the repository
- In the server directory - create `.env` file, you can copy it from the file `.env.example` in the repository, or create your own if you wish to connect to your own database etc.
- Open a new terminal, type `cd server`, install the dependencies with `npm i`, build with `npm run build`, connect to your local database with the value from the `.env`, and then `npm run dev` - the API should be running now, what is confirmed by a message in the terminal
- Open another terminal - type `cd client`, install the dependencies with `npm i`, build with `npm run build` and then `npm run dev` - the client app should be running on port 3000
- Open http://localhost:3000 to see the app in the browser

### Running the tests

Make sure the app is running before you start running the tests.

#### Frontend

- To run frontend tests, in the terminal go to client directory with `cd client` and hit `npm run test` to run tests

#### Backend

- To run backend tests, make sure to connect to your local test database with the value from `.env` file, in the terminal go to server directory with `cd server` and hit `npm run test` to run tests
