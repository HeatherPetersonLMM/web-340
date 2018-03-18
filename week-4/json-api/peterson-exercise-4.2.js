/*
============================================
; Title:  JSON APIs
; Author: Professor Krasso 
; Date:   16 March 2018
; Modified By: Heather Peterson
; Description: Exercise 4.2
;===========================================
*/ 

var express = require("express");   // assigning express require statement to express variable
var http = require("http");  // assigning http require statement to http variable

var app = express();  // assigning express statement to app variable

app.get("/customer/:id", function (req, res) {  // HTTP get request with /customer/:id route function that accepts a request object and has a response object
    var id = parseInt(req.params.id, 10);  // assigns id variable to the parameter value using the ParseInt function

    res.json({  //response output of the json object
        firstName: "Heather",  // key/value with first name
        lastName: "Peterson", // key/value with last name
        employeeId: id  // key/value with employee Id
    });
});

http.createServer(app).listen(2000, function() {  // creates the server to listen on port 2000
    console.log("Application started on port 2000"); // logs output message on port 2000
});

// Output result
//
//Application started on port 2000