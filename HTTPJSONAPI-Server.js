var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	console.log(parsedUrl);
	console.log(parsedUrl.pathName);
	if (parsedUrl.pathName == '/api/parsetime') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		parsedUrl.search.slice(5, 8); //year
		parsedUrl.search.slice(10, 11); //month
		parsedUrl.search.slice(13, 14);
	}
	else if (parsedUrl.pathName == '/api/unixtime') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.send({ "unixtime": Date.now() });
	}
	else {
		console.log("error");
		res.writeHead(404);
		res.end();
	}
});
server.listen(process.argv[2]);