/*
============================================
; Title:  Exercise 2.3
; Author: Professor Krasso 
; Date:   2 March 2018
; Modified By: Heather Peterson
; Description: Routes
;===========================================
*/ 


var express = require('express');  // require statement for express
var http = require('http');  // require statement for HTTP

var app = express();  // local variable for express app

//routes

app.get('/', function(req, res){  // HTTP get request with route function that accepts a request and has a response
    res.end('Welcome to the homepage!\n');  // response request output for homepage
});

app.get('/about', function(req, res){  // HTTP get request with route function that accepts a request and has a response
    res.end('Welcome to the about page!\n');  //response request output for about page
});

app.get('/contact', function(req, res){  // HTTP get request with route function that accepts a request and has a response
    res.end('Welcome to the contact page!\n');  //response request output for contact page
});

app.use(function(req, res) {  // HTTP use request with function that accepts a request and has a response
    res.statusCode = 404;  // response that creates a 404 error code when directed to non-listed URL
    res.end('404!\n');  //returns a 404 message to the end user
});

http.createServer(app).listen(8080, function() {  // Creates server that listens on port 8080
    console.log('Application started on port %s', 8080);  // logs message on port 8080
});