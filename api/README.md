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

- GET `/todos`: Fetch all todos
- POST `/todo/new`: Create a new todo
- DELETE `/todo/delete/:id`: Delete a todo by ID
- PUT `/todo/complete/:id`: Mark a todo as complete
- PUT `/todo/update/:id`: Update a todo

## Running Tests

Run `npm test` to execute the unit tests via Jest.

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Author

- Your Name

## License

This project is licensed under the ISC License.