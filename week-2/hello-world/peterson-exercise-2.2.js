/*
============================================
; Title:  Exercise 2.2
; Author: Professor Krasso 
; Date:   February 27 2018
; Modified By: Heather Peterson
; Description: Hello World with Express
;===========================================
*/ 

var express = require('express');  //requires the Express module
var http = require('http');  //requires the HTTP library to start the server

var app = express();  //calls the express function to start a new Express application

app.use(function(req, res)  //routing function used to request and return a URL
{
    console.log('In comes a request to: %s', req.url);  //logs message to console

    res.end('Hello World\n');  //returns value of accessed URL
})

http.createServer(app).listen(8080, function()  //creates a new server that listens on port 8080
{
    console.log('Application started on port %s', 8080);  //logs output message of accessed port
});