net = require('net');

var port = process.argv[2];
var server = net.createServer(function(socket) {
	console.log("Server Connected");

	var date = new Date();

	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();

	var hour = date.getHours();
	var min = date.getMinutes();
	

	socket.write(lpad(year, 4) + "-" + lpad(month, 2) + "-" + lpad(day, 2) + " " + lpad(hour, 2) + ":" + lpad(min, 2));
	socket.end();


});

function lpad(value, padding) {
    var zeroes = new Array(padding+1).join("0");
    return (zeroes + value).slice(-padding);
}

server.listen(port);