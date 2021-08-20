const path = require ('path');
const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
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

//delete a note
router.delete('/notes/:id',(req,res)=>{
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {

      const result = json.filter((note) => note.note_id !== noteId);

      writeToFile('./db/db.json', result);

      res.json(`Note has been deleted`);
    });
})
module.exports = router;