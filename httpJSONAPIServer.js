http = require('http');
url = require('url');

var port = process.argv[2];

var server = http.createServer(function(request, response) {

	var parsed_url = url.parse(request.url, true);
	var pathName = parsed_url['pathname'];

	var time = parsed_url['query']['iso'];
	var date = new Date(time);

	switch(pathName) {
		case "/api/parsetime" : ret = parseTime(date); break; 
		case "/api/unixtime" : ret = unixtime(date); break;
		default: console.log(3); break;

	}

	response.write(JSON.stringify(ret));
	response.end();

});

function parseTime(date) {
	
	var ret = {
		"hour" : date.getHours(),
		"minute" : date.getMinutes(),
		"second" : date.getSeconds()
	}

	return ret;
}

function unixtime(date) {
	var ret = {
		"unixtime": date.getTime() 
	}
	
	return ret;
}

server.listen(port);
