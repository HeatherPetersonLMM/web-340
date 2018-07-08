/*
============================================
; Title:  Exercise 7.3
; Author: Professor Krasso 
; Date:   7 April 2018
; Modified By: Heather Peterson
; Description: Mocha and Chai - test
;===========================================
*/

// requires
var fruits = require("../fruits");
var chai = require("chai");
var assert = chai.assert;

//testing
describe("fruits", function() {

    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });

});


//Output Result
//
//0 passing
