/*
============================================
; Title:  Exercise 6.3
; Author: Professor Krasso 
; Date:   30 March 2018
; Modified By: Heather Peterson
; Description: Mongoose
;===========================================
*/ 

// require
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

// specifies mongoDB connection string
var mongoDB = 'mongodb://hpeterson.lmm:Rum1chata@ds229549.mlab.com:29549/ems';
mongoose.connect(mongoDB, { // create connection
    useMongoClient: true
});
mongoose.Promise = global.Promise;  // add Promise
var db = mongoose.connection;  // create database variable

//error handling
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
    console.log('Application connected to mLab.');
});

// app function and route
var app = express();
app.use(logger('dev'));


// create server
http.createServer(app).listen(5000, function (){
    console.log('Application started and listening on port 5000.');
});

// Output result (in terminal window)
//
//Application started and listening on port 5000.
//Application connected to mLab.