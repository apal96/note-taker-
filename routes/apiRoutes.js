const path = require ('path');
const router = require('express').Router();

//read the db.json file and return saved notes as JSON
router.get('/api/notes',(req,res)=>{

})

//recieve new note to save on the request body, add to db.json, then return new note to the client
router.post('/api/notes',(req,res)=>{

})