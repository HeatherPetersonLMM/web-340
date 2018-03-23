/*
============================================
; Title:  Exercise 5.3
; Author: Professor Krasso 
; Date:   23 March 2018
; Modified By: Heather Peterson
; Description: Pug Templates
;===========================================
*/ 

//requires
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

// app functions
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

// routes
app.get("/", function(request, response) {
    response.render("index", {
        message: "Welcome to Heather's Pug based homepage!"
    });
});

// create server
http.createServer(app).listen(6060, function() {
    console.log("Application started on port 6060!");
});

// Output result (in browser window)
//
//Welcome to Heather's Pug based homepage!