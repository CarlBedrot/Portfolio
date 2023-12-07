const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
// shoudl have text, complete and timestamp and it should be  required
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        default: "No description"
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;