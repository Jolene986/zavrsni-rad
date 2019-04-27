const express = require('express');
const router = express.Router();
//const bodyParser = require('body-parser');

// urlencodedParser = bodyParser.urlencoded({extended : false});

// DataEntry Model

const DataEntry = require('../../models/DataEntry');

// GET api/DataEntry ( gets all items)

router.get('/', (req, res)=>{
    DataEntry.find()
      .then(dataEntries => res.json(dataEntries))
});

// POST api/DataEntry ( posts one item)

router.post('/', (req, res)=>{
    const newDataEntry = new DataEntry({name: req.body.name,
                                        score: req.body.score,
                                        quizType: req.body.quizType
                                        });
    newDataEntry.save().then(dataEntry => res.json(dataEntry));
});

module.exports = router;