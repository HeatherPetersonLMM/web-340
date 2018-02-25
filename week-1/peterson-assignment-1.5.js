var header = require('../header.js'); 
/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   February 25 2018
; Modified By: Heather Peterson
; Description: Assignment 1.5 - Hello World
;===========================================
*/ 


function processRequest(req, res) {
    var body = "Hello World";

    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);