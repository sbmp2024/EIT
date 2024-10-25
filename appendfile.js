const fileSystem = require('fs');  

const content = "\nThis is new content appended to the file:";

fileSystem.appendFile("example.txt", content, (err) => {
    if (err) {
        console.error("Error appending to the file:", err);
    } else {
        console.log("Content successfully appended");
    }
});

