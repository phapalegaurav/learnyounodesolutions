var filePath = process.argv[2];

var fs = require('fs');
fs.readFile(filePath, function(err, data) {
    var str = data.toString();
    console.log(str.split('\n').length - 1);
});


