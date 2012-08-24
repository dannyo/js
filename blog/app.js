var http = require('http');
var url = require('url');
var fs = require('fs');

var newPostFormHTML = fs.readFileSync('views/post/new.html');

function renderNewPostForm(req, res){
        res.writeHead(200, {
            'content-type': 'text/html; charset=utf-8'
        });
        res.end(newPostFormHTML);
    }

function render404(req, res){
        res.writeHead(404);
        res.end("404 File Not Found.");
    }


var server = http.createServer(function(req, res){
        var newFormPostRegex = new RegExp('^/posts/new/?$');
        var pathName = url.parse(req.url).pathname;
        if(newFormPostRegex.test(pathName)){
            renderNewPostForm(req, res); 
        } else {
            render404(req, res);
        }
    });

server.listen(8000);

console.log("Listening on http://127.0.0.1:8000"); 
