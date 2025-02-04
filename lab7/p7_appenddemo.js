/*Question 7: Create a script that appends some text to a file using
fs.appendFile().c*/

const fs = require('fs');
const filePath = 'example.txt';  

const textToAppend = 'This is the text being appended to the file.\n';

fs.appendFile(filePath, textToAppend, (err) => {
  if (err) {
    console.error('Error appending to the file:', err);
    return;
  }

  else{
    console.log('Text appended successfully!');
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    console.log('File content:\n', data);
  });
});

