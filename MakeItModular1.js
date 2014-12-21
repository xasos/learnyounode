var fs = require('fs');
var path = require('path');

module.exports = function(pathName, extension, callback) {
	fs.readdir(pathName, function(err, list) {
		if (err) {
			callback(err, null);
		}
		else {
			var results = [];
			// for (var i = 0; i < list.length; i++) {				
			// 	console.log(path.extname(list[i]));
			// 	console.log(extension)
			// 	if(path.extname(list[i]) == extension) {
			// 		results.push(entry);
			// 		console.log(results);
			// 	}
			// }

			list.forEach(function(entry) {
				if(path.extname(entry) == extension) {
					results.push(entry);
				}
			});
			callback(null, results);
		}
	});
};