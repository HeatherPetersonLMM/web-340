/*
============================================
; Title:  Exercise 7.2
; Author: Professor Krasso 
; Date:   7 April 2018
; Modified By: Heather Peterson
; Description: TDD in Action
;===========================================
*/

//requires
var mocha = require("mocha");
var chai = require("chai");
var assert = require("assert");

//testing
describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple, Orange, Mango' .split(',')));
    });
});

// Output results
//
// String#split
// (checkmark) should return an array of fruits
//
// 1 passing 