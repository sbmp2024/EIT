const getCurrentdate = require('./userModule');  // Ensure this matches the exported name

const currentdate = getCurrentdate();  // Call the function
console.log("Current date:", currentdate);
