var http = require('http');
var bl = require('bl');

var results = [], count = 0;

function printResults () {
  for (var i = 0; i < 3; i++) console.log(results[i])
}

function getData(index) {
  	http.get(process.argv[2 + index], function (request) {
    	request.pipe(bl(function (err, data) {
    		if (err) return console.error(data)
      		results[index] = data.toString()
      		count++
      		if (count == 3) printResults()
		}))
	})
}

for (var i = 0; i < 3; i++) getData(i);