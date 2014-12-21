var ls = require('./MakeItModular1');

// calls func with directory and file extension
var filePath = process.argv[2];
var fileExtension = "." + process.argv[3];

ls(filePath, fileExtension, function(err, files) {
	for (var i = 0; i < files.length; i++) {
		console.log(files[i]);
	}
});