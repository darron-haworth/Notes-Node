console.log('Starting notes.js');
const os = require('os');

var addNote = (title, body) => {
    console.log('Adding note', `Title: ${title}, Body: ${body}`);
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
