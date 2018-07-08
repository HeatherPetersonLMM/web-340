var header = require('../header.js'); 
/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   February 25 2018
; Modified By: Heather Peterson
; Description: Assignment 1.5 - Hello World - This is really neat!
;===========================================
*/ 

var http = require("http");  //creating statement for http library

function processRequest(req, res) {  //function 'processRequest' that outputs var body text value

var body = "This is really neat!";  // variable body output displayed in localhost:8080 of web browser

    var contentLength = body.length;  // variable to display body and length properties

    res.writeHead(200, {  // writes a response to client and adds a HTTP header

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);  //end of response

}

var s = http.createServer(processRequest); // creates server port for the processRequest

s.listen(8080);  // server object listens on port 8080