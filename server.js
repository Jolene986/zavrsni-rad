const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

urlencodedParser = bodyParser.urlencoded({ extended: false });

const dataEntries = require('./routes/api/dataEntries');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// connection to mongo db
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongo db connected...'))
  .catch(err => console.log(err));

// use routes
app.use('/api/dataEntries', dataEntries);

// serve static assets if in production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('Client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
  });
}

// define PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on ${port}`));
