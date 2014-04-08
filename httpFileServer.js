http = require('http');
fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(request, response) {

	// Create ReadStream on the file
	var readStream = fs.createReadStream(file);

	// Pipe the readstream created above to the response stream. Remember, response is a stream!
	readStream.pipe(response);

});

server.listen(port);
