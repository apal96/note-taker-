const path = require ('path');
const html = require('express').Router();
//return the notes.html file
html.get('/notes',(req,res)=>{
res.sendFile(path.join(__dirname,'../public/notes.html'))
})
//return the index.html file
html.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html')));

module.exports = html;