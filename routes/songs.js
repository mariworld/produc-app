const express = require('express');
const router = express.Router();
const Song = require('../models/song');

router.get('/', async(req, res) => {
    try {
        const songs = await Song.find()
        res.json(songs)
    } catch (error) {
        res.send('Error ' + err);
    }

});

router.post('/', async(req, res) => {
  
    const song = new Song({
      title: req.body.title,
      artist: req.body.artist,
      isFinished: req.body.isFinished
    })

    try {
       const song1 = await song.save()
       res.json(song1)
    } catch (error) {
        res.send('error' + error);
        console.log("hit catch", song)
    }
})


module.exports = router;