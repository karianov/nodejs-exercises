const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
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

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notesToKeep.length !== notes.length) {
    console.log(chalk.bgGreen.black('Note removed.'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed.black('Note does not exist.'));
  }
};

const listNotes = () => {
  console.log(chalk.bgWhite.black('Your notes:'));
  const notes = loadNotes();
  notes.forEach((note) => console.log(chalk.bgWhite.black(note.title + ': ' + note.body)));
};

const readNote = (title) => {
  const notes = loadNotes();
  const requiredNote = notes.find((note) => note.title === title);
  if (requiredNote) {
    console.log(chalk.bgBlue.white('Title: ' + requiredNote.title));
    console.log(chalk.bgBlue.white('Body: ' + requiredNote.body));
  } else {
    console.log(chalk.bgYellow.black('Note does not exist.'));
  }
};

const saveNotes = function (notes) {
  const notesData = JSON.stringify(notes);
  // Typing error that has a trace in the terminal.
  // I can debug it with console logs or debugger option.
  fs.writeFileSync('notes.json', notesDta);
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync('notes.json');
    const notesText = notesBuffer.toString();
    return JSON.parse(notesText);
  } catch (noSuchFileError) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
