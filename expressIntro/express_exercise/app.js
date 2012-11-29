
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users/:id', function(req,res){
    var users = { 1: {
            first_name: 'Keyser',
            surname: 'Soze',
            address: 'Next door',
            facebook_friends: '4'
        }, 2: {
            first_name: 'Roger',
            surname: 'Kint',
            address: 'London, England',
            facebook_friends: '10000000000000'
        }
    };

    res.render('users.jade', { title: 'User', user: users[req.params.id]});
});
//app.get('/products', routes.products);
app.get('/about', function(req,res){
    res.send('This is the about page');
});
app.get('/contact', function(req,res){
    res.send('This is the contact page');
});
app.get('/products', function(req,res){
    res.send('This is the products page');
});
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
