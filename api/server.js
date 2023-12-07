/**
 * @file This file contains the server configuration and setup for the TodoApp API.
 * @module server
 */
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully! Good job, Carl!'))
  .catch(err => console.error('MongoDB connection error:', err));

const journalRoutes = require('./routes/journalRoutes');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/', todoRoutes, journalRoutes, userRoutes); // Use a specific path for todo routes

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
