console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./Notes');

// console.log(_.isString(true));
// console.log(_.isString('Darron'));

var filteredArray = (_.uniq(['Frank', 'Darron', 3, 1, 'Andrew', 1, 'Darron', 2, 3,4, 5]));

console.log(filteredArray.sort());

