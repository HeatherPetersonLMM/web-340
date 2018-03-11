/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso 
; Date:   10 March 2018
; Modified By: Heather Peterson
; Description: Advanced Routing
;===========================================
*/ 

var express = require("express");  // assigning express require statement to express variable
var http = require("http");  // assigning http require statement to http variable
var path =require("path");  // assigning path require statement to path variable
var logger = require("morgan");  // assigning morgan require statement to logger variable

var app = express();  // assigning express statement to app variable

app.set("views", path.resolve(__dirname, "views"));  // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs");  // Tell Express to use the EJS view engine

app.use(logger("short"));  // Tell Express to add the logger

app.get("/:employeeId", function(request, response){  // HTTP with get request with /:employeeID route function that accepts a request and has a response
    var employeeId = parseInt(request.params.employeeId, 10); // assigns employeeID variable to the parameter value using the ParseInt function
    
    response.render("index", {  //output to the indexed ejs page
        employeeId: employeeId
    })

});

http.createServer(app).listen(4000, function(){  // creates the server to listen on port 8080
    console.log('Application started on port ', 4000)  // logs output message on port 8080
});

//Output results
//
//Application started on port 4000