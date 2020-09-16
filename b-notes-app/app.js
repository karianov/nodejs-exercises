const getNotes = require('./notes.js');
const validator = require('validator')
const chalk = require('chalk');

const notes = getNotes();

console.log(notes);

// Validator examples
console.log(validator.isEmail('kevin@example'));
console.log(validator.isURL('https:/github.com'));

// Chalk examples
console.log(chalk.green('Success!'));
console.log(chalk.bold('Bold!'));
console.log(chalk.inverse.green('Inversed!'));
