console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./Notes');

// console.log(_.isString(true));
// console.log(_.isString('Darron'));
var command = process.argv[2];
console.log('Command: ', command);

if(command === 'add'){
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');

}else if(command === 'read'){
    console.log('Reading note');
} else if(command === 'remove'){
    console.log('Removing note');
}else {
    console.log(`Command [${command}] not recognized`);
}


