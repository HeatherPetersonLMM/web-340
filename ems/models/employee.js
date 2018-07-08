/*
============================================
; Title:  Assignment 7.4
; Author: Professor Krasso 
; Date:   8 April 2018
; Modified By: Heather Peterson
; Description: EMS Mongoose Schema and Model Development
;===========================================
*/

// required
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


// define the employeeSchema
var employeeSchema = new Schema({
    name: String,
    firstName: "Heather",
    lastName: "Peterson",
});


// define the employee model
var Employee = mongoose.model("Employee", employeeSchema);


// expose the employee to calling files
module.exports = Employee;