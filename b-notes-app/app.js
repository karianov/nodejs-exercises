import { appendFileSync } from 'fs';

// Create or override content
// fs.writeFileSync('notes.txt', 'My name is Kevin Alexandre');

// Append content
appendFileSync('notes.txt', '\nI am learning Node.js!')
