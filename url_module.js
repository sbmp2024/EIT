const url = require('url');

// Parse a URL string
const myUrl = new URL('https://rishabh09/path?name=John&age=30');

// Access different parts of the URL
console.log('Protocol:', myUrl.protocol);  // 'https:'
console.log('Host:', myUrl.host);          // 'example.com:8080'
console.log('Pathname:', myUrl.pathname);  // '/path'
console.log('Query Params:', myUrl.search); // '?name=John&age=30'
