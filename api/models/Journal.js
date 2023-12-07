const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JournalSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        default: "No body"
    },
    timestamp: {
        type: Date,
        default: Date.now
    }    
});

const Journal = mongoose.model('Journal', JournalSchema);

module.exports = Journal;
