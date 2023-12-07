# Todo Application API

This is the backend API for the Todo Application. It's built with Node.js, Express, and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB

### Installing

1. Clone the repository
2. Navigate to the `api` directory
3. Install dependencies with `npm install`
4. Start the server with `npm start`

## API Endpoints

### Todo's

- GET `/todos`: Fetch all todos
- POST `/todo/new`: Create a new todo
- DELETE `/todo/delete/:id`: Delete a todo by ID
- PUT `/todo/complete/:id`: Mark a todo as complete
- PUT `/todo/update/:id`: Update a todo

### Journals

GET /journals: Fetch all journals

POST /journal/new: Create a new journal

DELETE /journal/delete/:id: Delete a journal by ID

PUT /journal/update/:id: Update a journal

### Users

GET /users: Fetch all users

POST /user/new: Create a new user

POST /user/login: Login a user

DELETE /user/delete/:id: Delete a user by ID

PUT /user/update/:id: Update a user

GET /user/profile: Get a user's profile

## Running Tests

Run `npm test` to execute the unit tests via Jest.

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Author

- Bedrot

## License

This project is licensed under the ISC License.

blablabla
