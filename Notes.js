console.log('Starting notes.js');
const os = require('os');
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (err){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    console.log('Adding note', `Title: ${title}, Body: ${body}`);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    
    var duplicateNotes =notes.filter((note) => note.title === title);
   
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
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
