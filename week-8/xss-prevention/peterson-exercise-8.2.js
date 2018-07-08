/*
============================================
; Title:  Exercise 8.2
; Author: Professor Krasso 
; Date:   12 April 2018
; Modified By: Heather Peterson
; Description: Cross-Site Scripting
;===========================================
*/ 

// require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var helmet = require("helmet")
var path = require("path");

// initialize express
var app = express();

// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// http calls
app.get("/", function(request, response) {
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

// create/start Node server
http.createServer(app).listen(5060, function() {
    console.log("Application started on port 5060!");
});