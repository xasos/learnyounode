var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(err, list) {
	var fileExtension = "." + process.argv[3];

	list.forEach(function(entry) {
		if(path.extname(entry) == fileExtension) {
			console.log(entry);
		}
	});	
});