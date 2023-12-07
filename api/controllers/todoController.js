// controllers/todoController.js
const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

exports.createTodo = async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        complete: false,
        description: req.body.description
    });
    await todo.save();
    res.json(todo);
};


exports.deleteTodo = async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
};

exports.completeTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { complete: !req.body.complete }, // Toggle the 'complete' property
            { new: true }
        );
        res.json(todo);
    } catch (error) {
        console.error('Error completing todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.updateTodo = async (req, res) => {
    const { text, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { text, description }, { new: true });
    res.json(updatedTodo);
  };
  