const fs = require('fs');


var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var nObj = JSON.parse(noteString);

console.log(nObj);

// var noteObject = JSON.parse(noteString);
// console.log(noteObject.title);