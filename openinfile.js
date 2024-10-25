const fs = require('fs');

fs.open('example.txt', 'r', (err, fd) => {  // 'r' for reading
    if (err) {
        console.error('Error opening the file:', err);
    } else {
        console.log('File opened successfully, File Descriptor:', fd);
        fs.close(fd, () => console.log('File closed.'));
    }
});
