var http = require('http');
var bl = require('bl')

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
       
first(url1, function(err, data) {
    console.log(data);
    first(url2, function(err, data) {
        console.log(data);
        first(url3, function(err, data) {
            console.log(data);
         });
    });
});


function first(url, callback) {
    http.get(url, function(res) {
    res.setEncoding('utf8');

    res.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
                    
        var str = data.toString();

        //console.log(str);
        callback(null, str);
    }));

}).on('error', function(error) {
    console.log(error);
});
}

