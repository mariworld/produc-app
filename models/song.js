const mongoose = require('mongoose');
const { Schema } = mongoose;

//create schema for Produc Song
const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    isFinished: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Song', songSchema);
