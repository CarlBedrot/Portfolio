const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todos', todoController.getTodos);
router.post('/todo/new', todoController.createTodo);
router.delete('/todo/delete/:id', todoController.deleteTodo);

// Use PUT for marking a task as complete
router.put('/todo/complete/:id', todoController.completeTodo);

router.put('/todo/update/:id', todoController.updateTodo);

module.exports = router;
