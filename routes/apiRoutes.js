const path = require ('path');
const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//read the db.json file and return saved notes as JSON
router.get('/notes',(req,res)=>{
    readFromFile('./db/db.json','utf8').then((data) =>
    res.json(JSON.parse(data))
    );
})

//recieve new note to save on the request body, add to db.json, then return new note to the client
router.post('/notes',(req,res)=>{

})

router.delete('/notes/:id',(req,res)=>{

})
module.exports = router;