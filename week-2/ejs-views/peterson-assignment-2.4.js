/*
============================================
; Title:  EJS Views
; Author: Professor Krasso 
; Date:   3 March 2018
; Modified By: Heather Peterson
; Description: Assignment 2.4
;===========================================
*/ 


var http = require("http");  //creating require statement for http library 

var express = require("express");  //creating require statement for express function
var path = require("path");  //creating require statement for path

var app = express();  //calls the express function


//routes
app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function (req, res) {  // Tell Express to get response code
    res.render("index", {  //  "/" to index values
        firstName: "Jimmy",
        lastName: "Fallon",
        address: "123 New York City, NY  55543",})
});

http.createServer(app).listen(8080, function () {  // creates new server that listens on port 8080
    console.log("EJS-Views app started on port 8080.");  // logs message
});