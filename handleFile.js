const fs = require("fs");
//create a text file
const contentToAppend = 'Hello Node';
fs.appendFile('welcome.txt', contentToAppend, (err) => {
  if (err) {
    console.error(err);
  } else {
    // done! Content appended successfully.
    console.log('Data appended to welcome.txt');
  }
});

//reading from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File content:", data);
});