const mongoose = require('mongoose');
const { Schema } = mongoose;

//create schema for Produc Song
// const SongSchema = new Schema({
//     title: String,
//     artist: String,
//     isFinished: Boolean
//     // dateAdded: Date,
//     // songFile: String
// });

const UserSchema = new Schema({
    name: String,
    songs: Array,
    isArtist: Boolean
});

const StageSchema = new Schema({
    song: String,
    status: {
        dateModified: Date,
        conception: Boolean,
        songSketch: Boolean,
        demoStage: Boolean,
        mixedMastered: Boolean,
        distributed: Boolean,
        visualContent: Boolean,
        released: Boolean
    }
});

const ProjectSchema = new Schema({
    title: String,
    artist: String,
    dateAdded: Date,
    songs: Array
});

//create models for song, artist
const Song = mongoose.model('song', SongSchema);
const User = mongoose.model('User', UserSchema);
const Stage = mongoose.model('Stage', StageSchema);
const Project = mongoose.model('Project', ProjectSchema);

module.exports = User, Stage, Project;