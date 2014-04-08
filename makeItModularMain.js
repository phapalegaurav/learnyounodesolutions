filterFunction = require('./makeItModularModule.js');
var dir = process.argv[2];
var ext = process.argv[3];

filterFunction(dir, ext, function(err, list) {
    //console.log(list);
    for(var i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
});

