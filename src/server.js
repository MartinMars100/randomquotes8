'use strict';
var express = require('express');
 
var app = express();
var path = require('path');

var port = process.env.PORT;

app.use('/static', express.static(__dirname +'/public'));  //static files
app.use('/templates', express.static(__dirname +'/templates'));  //template files

app.set('view engine', 'jade');  //This is from the Jade
// part of the Treehouse Express Class.
app.set('views', __dirname + '/templates'); //Use __dirname since we
//sometimes run with a nodemon command with a path to the server.js file.

// app.set('view engine', 'ejs' ); //This is how that other guy did it
// app.set('views', path.resolve(__dirname, 'client', 'views'));
//The path resolve works identical to the __dirname + '/templates'

app.get('/', function(req, res) {
    // res.render('index.jade');   //The Jade Way--you don't have to use
                                // this jade extension
    // res.render('index.ejs');
    res.render('index.jade');
});

app.get('/therapist', function(req, res){
          res.render('therapist');
        
});

app.listen(port, function() {
    console.log("Theeee Frontend Server is Running....PORT" + port);
});

