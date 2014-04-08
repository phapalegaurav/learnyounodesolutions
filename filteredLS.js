var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

ext = "." + ext;

fs.readdir(dir, function(err, files) {
  // console.log(files);

   for(var i = 0; i < files.length; i++) {
       if(ext == path.extname(files[i])) {
           console.log(files[i]);
           //console.log(path.extname(files[i]));
       }
   }
});
