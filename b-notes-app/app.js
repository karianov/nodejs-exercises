const getNotes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

// Set yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      description: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  handler: () => {
    console.log('Removing the note');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all existing notes',
  handler: () => {
    console.log('Listing out the notes');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Reading the note');
  },
});

// YARGS parse of argv
yargs.parse();
