var fs = require('fs');

// Read file synchronously and process into string array
var file = fs.readFileSync(process.argv[2], 'utf8').split("\n");
console.log(file.length-1);