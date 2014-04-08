var filePath = process.argv[2];

var fs = require('fs');
var buf = fs.readFileSync(filePath);
var str = buf.toString();

console.log(str.split('\n').length - 1);
