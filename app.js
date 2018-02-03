var express = require('express');
var path = require('path');

var app = express();
app.set('port', 3013);
// set up handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.resolve(__dirname,"public")));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/languages', function (req, res) {
    res.render('languages');
});

// 404 catch-all handler (middleware)
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(3013, function () {
    console.log("The server started running on 3013; press Ctrl + c to terminate!");
});