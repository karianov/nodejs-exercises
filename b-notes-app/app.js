const getNotes = require('./notes.js');
const validator = require('validator')

const notes = getNotes();

console.log(notes);

console.log(validator.isEmail('kevin@example'));
console.log(validator.isURL('https:/github.com'));