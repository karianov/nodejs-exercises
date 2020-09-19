const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Your notes...';
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicatedNotes = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicatedNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen.black('New note added.'));
  } else {
    console.log(chalk.bgYellow.black('Note title taken.'));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notesToKeep.length !== notes.length) {
    console.log(chalk.bgGreen.black('Note removed.'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed.black('Note does not exist.'));
  }
};

const saveNotes = function (notes) {
  const notesData = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesData);
};

const loadNotes = function () {
  try {
    const notesBuffer = fs.readFileSync('notes.json');
    const notesText = notesBuffer.toString();
    return JSON.parse(notesText);
  } catch (noSuchFileError) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
