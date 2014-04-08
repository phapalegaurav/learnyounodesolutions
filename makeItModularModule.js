var fs = require('fs');
var path = require('path');

    //var filteredFiles = [];
    
  module.exports = function (dir, ext, callback) {

    //console.log(dir + ext);
    var filteredFiles = [];
    ext = "." + ext;
    fs.readdir(dir, function(err, files) {

    if (err)
        return callback(err)

    for(var i = 0; i < files.length; i++) {
            if(ext == path.extname(files[i])) {
                filteredFiles.push(files[i]);
                //console.log(files[i]);
            }
    }

        callback(null, filteredFiles);
  });


    
    
    //console.log( filteredFiles );
    //return filteredFiles;
}
