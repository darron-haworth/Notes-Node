console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./Notes');

var user = os.userInfo();

//console.log(user);

fs.appendFile('greetings.txt',  `Hello ${user.username}!${os.EOL}`, function (err) {
    if (err) {
        console.log('Unable to write to file');
    }
    else {
        console.log('wrote to greetings.txt');
    }
});