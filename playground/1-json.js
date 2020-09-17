const fs = require('fs');

// Example

// const book = {
//   title: 'Men are from mars and women are from venus',
//   author: 'John Gray',
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataText = dataBuffer.toString();
// const data = JSON.parse(dataText);
// console.log(data);

const userBuffer = fs.readFileSync('1-json.json');
const userText = userBuffer.toString();
const user = JSON.parse(userText);
user.name = 'Kevin';
user.age = 25;
const userData = JSON.stringify(user);
fs.writeFileSync('1-json.json', userData);
