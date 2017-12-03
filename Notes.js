console.log('Starting notes.js');
const os = require('os');
module.exports.add = (a, b) => {

    return `${a} + ${b} = ${a + b}${os.EOL}`;

};