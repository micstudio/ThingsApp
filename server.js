const { request } = require("express");
const path = require('path')

const config = require('config');
const express = require('express');
const mongoose = require('mongoose');


const app = express();

//Bodyparser Middleware
app.use(express.json())

//DB CONFIG
const db = config.get('mongoURI')

//connect to Mongo
mongoose.connect(db, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("MongoDB Connected..");
    })
    .catch( err => console.log(err));
    
// USE routes
const item = require('./routes/api/item');
app.use('/api/item', item);

const user = require('./routes/api/User');
app.use('/api/user', user);

const auth = require('./routes/api/Auth');
app.use('/api/auth', auth);

// server static assets if in prodaction

if(process.env.NODE_ENV === 'production') 
{
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    } )
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));

