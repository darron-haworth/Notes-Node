console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./Notes');

const argsv = yargs.argv;
var command = argsv._[0];

console.log('Yargs: ', argsv);

if(command === 'add'){
    var note = notes.addNote(argsv.title, argsv.body);
    if(note === undefined){
        console.log(`Note '${argsv.title}' was not added`)
    }else{
        console.log(`Note '${note.title}' was added`);
        console.log(note);
    }
} else if (command === 'list') {
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(argsv.title);
} else if(command === 'remove'){
    notes.removeNote(argsv.title);
}else {
    console.log(`Command [${command}] not recognized`);
}
