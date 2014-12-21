var fs = require('fs');
var path = require('path');

module.exports = function(pathName, extension, callback) {
	fs.readdir(pathName, function(err, list) {
		if (err) {
			callback(err, null);
		}
		else {
			var results = [];
			list.forEach(function(entry) {
				if(path.extname(entry) == extension) {
					results.push(entry);
				}
			});
			
			callback(null, results);
		}
	});
};