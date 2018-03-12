/*
============================================
; Title:  Assignment 3.4
; Author: Professor Krasso 
; Date:   11 March 2018
; Modified By: Heather Peterson
; Description: Logging, Advanced Routing - Putting it all together
;===========================================
*/ 

var express = require("express");  // assigning express require statement to express variable
var http = require("http");  // assigning http require statement to http variable
var path = require("path");  // assigning path require statement to path variable
var logger = require("morgan");  // assigning morgan require statement to logger variable

var app = express();  // assigning express statement to app variable

app.set("views", path.resolve(__dirname, "views"));  // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs");  // Tell Express to use the EJS view engine

app.use(logger("short"));  // Tell Express to add the logger

app.get("/", function(request, response) {  // HTTP with get request with '/' route function that accepts a request and has a response
    response.render("index", {  //output to the indexed ejs page
        message: "home page"  // output message
    });
});

app.get("/about", function(request, response) {  // HTTP with get request with '/about' route function that accepts a request and has a response
    response.render("about", {  //output to the indexed ejs page
        message: "about page"  // output message
    });
});

app.get("/contact", function(request, response) {  // HTTP with get request with '/contact' route function that accepts a request and has a response
    response.render("contact", {  //output to the indexed ejs page
        message: "contact page"  // output message
    })
});

app.get("/products", function(request, response) {  // HTTP with get request with '/products' route function that accepts a request and has a response
   response.render("products", {  //output to the indexed ejs page
       message: "products page"  // output message
   });
});


http.createServer(app).listen(8080, function() {  // creates the server to listen on port 8080
   console.log("Application started on port 8080.");  // logs output message on port 8080
});