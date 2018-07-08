/*
============================================
; Title:  cURL
; Author: Professor Krasso 
; Date:   17 March 2018
; Modified By: Heather Peterson
; Description: Assignment 4.4
;===========================================
*/ 
var express = require("express");  // assigning express require statement to express variable
var http = require("http");  // assigning http require statement to http variable
var logger = require("morgan");  // assigning logger require statement to morgan variable

var app = express();  // registers the application

app.get("/", function(req, res) {  // HTTP GET request with / route function that accepts a request object and has a response object
    res.send("API invoked as an HTTP GET request.");  // response sends output message of GET function request
});

app.put("/", function(req, res) {  // HTTP PUT request with / route function that accepts a request object and has a response object
    res.send("API invoked as an HTTP PUT request.");  // response sends output message of PUT function request
});

app.post("/", function(req, res) {  // HTTP POST request with / route function that accepts a request object and has a response object
    res.send("API invoked as an HTTP POST request");  // response sends output message of POST function request
});

app.delete("/", function(req, res) {  // HTTP DELETE request with / route function that accepts a request object and has a response object
    res.send("API invoked as an HTTP DELETE request");  // response sends output message of DELETE function request
});

http.createServer(app).listen(5050, function() {  // creates the server to listen on port 5050
    console.log("Application started on port 5050.");  // logs output message on port 5050
});

// Output result
//
// Application started on port 5050.