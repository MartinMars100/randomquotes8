'use strict';
var express = require('express');
 
var app = express();

var port = process.env.PORT;

app.use('/static', express.static(__dirname +'/public')); 
app.use('/templates', express.static(__dirname +'/templates'));  

app.set('view engine', 'jade');  
app.set('views', __dirname + '/public/templates');

app.get('/', function(req, res) {
    res.render('index.jade');
});

app.listen(port, function() {
    console.log("Theeee Frontend Server is Running....PORT" + port);
});

