const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema

const DataEntrySchema = new Schema({
    name: {
        type: String,
        required:true
    },
    score: {
        type: Number,
        required:true
    },
    quizType: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    },
    timed: {
        type: Boolean,
        required: true
    }
});


module.exports = DataEntry = mongoose.model( 'dataEntry', DataEntrySchema);