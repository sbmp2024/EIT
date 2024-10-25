const fs = require('fs');

const content = "This is the content being written.";

fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
    } else {
        console.log('File written successfully.');
    }
});
