# Todo Application Full Stack

This repository holds the full stack implementation of the Todo Application, including both the backend API and the frontend interface. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React.

## Backend: Todo Application API

### Getting Started
- **Prerequisites**: Node.js, MongoDB
- **Installation**:
  1. Clone the repository.
  2. Navigate to the `api` directory.
  3. Install dependencies with `npm install`.
  4. Start the server with `npm start`.

### API Endpoints
- **Todo's**: 
  - GET `/todos` - Fetch all todos
  - POST `/todo/new` - Create a new todo
  - DELETE `/todo/delete/:id` - Delete a todo by ID
  - PUT `/todo/complete/:id` - Mark a todo as complete
  - PUT `/todo/update/:id` - Update a todo
- **Journals**:
  - GET `/journals` - Fetch all journals
  - POST `/journal/new` - Create a new journal
  - DELETE `/journal/delete/:id` - Delete a journal by ID
  - PUT `/journal/update/:id` - Update a journal
- **Users**:
  - GET `/users` - Fetch all users
  - POST `/user/new` - Create a new user
  - POST `/user/login` - Login a user
  - DELETE `/user/delete/:id` - Delete a user by ID
  - PUT `/user/update/:id` - Update a user
  - GET `/user/profile` - Get a user's profile

### Testing & Development
- Run `npm test` to execute unit tests via Jest.
- Developed with Node.js, Express, and MongoDB.
- Author: Bedrot
- License: ISC License

## Frontend: React Application Interface

### Getting Started
- **Installation**:
  1. Navigate to the project directory.
  2. Install dependencies with `npm install`.
  3. Start the app with `npm start`.
  4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts
- `npm start` - Runs the app in development mode.
- `npm test` - Launches the test runner in interactive watch mode.
- `npm run build` - Builds the app for production to the `build` folder.
- `npm run eject` - Removes the single build dependency, exposing the full configuration for modification.

### Development & Deployment
- Built with React, this app supports hot reloading, linting, and testing.
- For detailed information on development and deployment, refer to [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Learn More
- To learn React, check out the [React documentation](https://reactjs.org/).
- For advanced configurations, deployment tips, and troubleshooting, explore the sections on Code Splitting, Analyzing Bundle Size, Making a Progressive Web App, and more in the Create React App documentation.

## Note
This project is a full stack application, therefore, both backend and frontend parts should be set up and running for the complete functionality of the Todo Application. Follow the respective getting started guides for each part to set up your development environment.
