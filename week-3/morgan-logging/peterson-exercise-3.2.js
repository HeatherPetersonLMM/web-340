
/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso 
; Date:   10 March 2018
; Modified By: Heather Peterson
; Description: Morgan Logging
;===========================================
*/ 

var express = require("express");  // assigning express require statement to express variable
var http = require("http");  // assigning http require statement to http variable
var path = require("path");  // assigning path require statement to path variable
var logger = require("morgan");  // assigning morgan require statement to logger variable

var app = express();  // assigning express statement to app variable

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));  // Tell Express to add the logger

app.get("/", function (request, response) {  // HTTP get request with route function that accepts a request and has a response
    response.render("index", {  // In the response, render the index.ejs page 
        message: "This is an example of the Morgan Logger!"  // Output message in the ejs page (browser window)
    });

});

http.createServer(app).listen(3000, function() {  // Creates server that listens on port 3000
    console.log("Application started on port 3000");  // Logs output on port 3000
});

//Output results
//Application started on port 3000