var fs = require('fs');

fs.readFile(process.argv[2], function callback (err, data) {
	var newLines = data.toString().split("\n");
	console.log(newLines.length-1);
});
