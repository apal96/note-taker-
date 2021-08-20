const path = require ('path');
const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

//read the db.json file and return saved notes as JSON
router.get('/notes',(req,res)=>{
    readFromFile('./db/db.json','utf8').then((data) =>
    res.json(JSON.parse(data))
    );
})

//recieve new note to save on the request body, add to db.json, then return new note to the client
router.post('/notes',(req,res)=>{
    const {title, text} = req.body;

    if(title &&text){
        const newNote = {
            title,
            text,
            note_id:uuidv4(),
        };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting Note');
  }

})

router.delete('/notes/:id',(req,res)=>{

})
module.exports = router;