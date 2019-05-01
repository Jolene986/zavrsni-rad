const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

urlencodedParser = bodyParser.urlencoded({extended : false});

const dataEntries = require('./routes/api/dataEntries')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// connection to mongo db
const db = require('./config/keys').mongoURI;

mongoose
        .connect(db, { useNewUrlParser: true })
        .then(()=>console.log('mongo db connected...'))
        .catch(err=>console.log(err));

// use routes
app.use('/api/dataEntries', dataEntries);
        
// define PORT
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`server started on ${port}`));        