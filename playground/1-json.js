const fs = require('fs');

// const book = {
//   title: 'Men are from mars and women are from venus',
//   author: 'John Gray',
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json')
const dataText = dataBuffer.toString();
const data = JSON.parse(dataText);
console.log(data);