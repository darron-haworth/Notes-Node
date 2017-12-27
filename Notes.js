console.log('Starting notes.js');
const os = require('os');
const fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding note', `Title: ${title}, Body: ${body}`);
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }
    catch (err){

    }

    var duplicateNotes =notes.filter((note) => note.title === title);
   
    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
   
};

var getAll = () => {
    console.log('Listing all notes:');
};

var getNote = (title) => {
    console.log('Reading note', `Title: ${title}`);
};

var removeNote = (title) => {
    console.log('Removing note', `Title: ${title}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
