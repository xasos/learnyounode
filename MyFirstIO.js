var fs = require('fs');

// Read file synchronously
var file = fs.readFileSync(process.argv[2]).toString();
var fileString = file.split("\n");
console.log(fileString.length);

// Find number of new lines in string
// var delimiter = "\n";
// var newLines = 0;
// var num = fileString.charAt(0)
// console.log(num);
// for (var i = 0; i < 50; i++) {
// 	if (fileString.charAt(i) === delimiter) {
// 		newLines++;
// 	}
// }

// // console.log(newLines);