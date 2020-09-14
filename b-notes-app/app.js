const fs = require('fs');

// Create or override content
// fs.writeFileSync('notes.txt', 'My name is Kevin Alexandre');

// Append content
fs.appendFileSync('notes.txt', '\nI am learning Node.js!')
