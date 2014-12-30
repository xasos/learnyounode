var http = require('http');
var url = require('url');

var routes = {
	"/api/parsetime": function(parsedUrl) {
		var date = new Date(parsedUrl.query.iso);
		return {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};
	},
	"/api/unixtime": function(parsedUrl) {
		var date = new Date(parsedUrl.query.iso);
		return {unixtime: date.getTime()};
	}
}

var server = http.createServer(function (req, res) {
	parsedUrl = url.parse(req.url, true);
	resource = routes[parsedUrl.pathname];

	if (resource) {
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify(resource(parsedUrl)));
	}
	else {
		res.writeHead(404);
		res.end();
	}
});
server.listen(process.argv[2]);