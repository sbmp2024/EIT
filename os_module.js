const os = require('os');

// Get system information
console.log('OS Platform:', os.platform());  // 'win32', 'linux', etc.
console.log('CPU Architecture:', os.arch()); // 'x64', 'arm', etc.
console.log('Total Memory (in bytes):', os.totalmem()); 
console.log('Free Memory (in bytes):', os.freemem());
console.log('Home Directory:', os.homedir());
