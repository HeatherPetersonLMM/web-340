/*
============================================
; Title:  HTTP Status Codes
; Author: Professor Krasso 
; Date:   17 March 2018
; Modified By: Heather Peterson
; Description: Exercise 4.3
;===========================================
*/ 


var express = require("express");  // assigning express require statement to express variable
var http = require("http");  // assigning http require statement to http variable
var logger = require("morgan");  //uses morgan to log output in console window


var app = express(); // registers the application

app.use(logger("dev"));  // specifies the logger using dev

// requests using status codes
app.get("/not-found", function(req, res) { // creates GET request for 404 response error
    res.status(404);
    res.json({  // response output of the json object
        error: "Page Not Found."  // output response
    })
});

app.get("/ok", function(req, res) {  // creates GET request for 200 response error
    res.status(200);
    res.json({  // response output of the json object
        error: "Page OK."  // output response
    })
});

app.get("/not-implemented", function(req, res) {  // creates GET request for 501 response error
    res.status(501);
    res.json({  ////response output of the json object
        error: "Page Not Executed."  // output response
    })
});

http.createServer(app).listen(7070, function() {  // creates the server to listen on port 7070
   console.log("Application started on port 7070.");  // logs output message on port 7070
});