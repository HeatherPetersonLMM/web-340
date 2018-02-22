var header = require('../header.js'); 
/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   22 January 2018
; Modified By: Heather Peterson
; Description: Exercise 1.3 - Modules
;===========================================
*/ 

var url = require('url');  //require statement for URL library
var parsedURL = url.parse('https://github.com/HeatherPetersonLMM?name=Heather'); //variable to hold string URL value

console.log(parsedURL.protocol); //parsed function used to output parts of string URL
console.log(parsedURL.host);
console.log(parsedURL.query);


// Output results

//Heather Peterson
//Exercise 1.3
//Date: 02-22-2018

//https:
//github.com
//name=Heather