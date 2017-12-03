console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./Notes');
const _ = require('lodash');

var user = os.userInfo();

// console.log(_.isString(true));
// console.log(_.isString('Darron'));

var filteredArray = (_.uniq(['Frank', 'Darron', 3, 1, 'Andrew', 1, 'Darron', 2, 3,4, 5]));

console.log(filteredArray.sort());

// var res = notes.add(.3, -.5);
// console.log(res);

// res = notes.add(3265623.9090, -45654.5545415455);
// console.log(res);

//console.log(user);

// fs.appendFile('greetings.txt',  `Hello ${user.username}! You are ${notes.age}${os.EOL}`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
//     else {
//         console.log('wrote to greetings.txt');
//     }
// });