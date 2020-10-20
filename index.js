const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
require('dotenv').config();
const db = process.env.DB;
const port = process.env.PORT || 5000;
mongoose.Promise = global.Promise;

//connect to the database
mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log("database connected"))
.catch(err => console.log(err))

const songRouter = require('./routes/songs');
app.use(express.json());
app.use(express.urlencoded({
    extended:true
    }));
app.use('/songs', songRouter);

//since mongoose promise is depreciated, we overide it with node's promise
//mongoose.Promise = global.Promise;

// app.use((req, res, next) => {
//     try {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
        
//     } catch (error) {
//         res.send('error' + error)
//     }
// });



app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});