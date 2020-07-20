const { request } = require("express");

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const item = require('./routes/api/item');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json())

//DB CONFIG
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose.connect(db, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log("MongoDB Connected..");
    })
    .catch( err => console.log(err));
    
// USE routes
app.use('/api/item', item);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));

