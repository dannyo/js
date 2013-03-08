//var fs = require('fs'),
    //data = "Some data I want to write to a file";
//fs.writeFile('file.txt', data, function (err) {
    //if(!err) {
        //console.log('Wrote data to file.txt');
    //} else {
        //throw err;
    //}
//});

//var fs = require('fs');
//fs.readFile('file.txt', 'utf8', function (err,data) {
    //if (!err){
        //console.log(data);
    //} else {
        //throw err;
    //}
//});
var fs = require('fs');
        fs.readFile('file.txt', 'utf8', function (err, data) {
          if (!err) {
            console.log(data);
          } else {
            throw err;
} });


