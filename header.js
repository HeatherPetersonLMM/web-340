var myFirstName = "Heather";
var myLastName = "Peterson";
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd<10) {
    dd = '0' + dd
  }
  
  if (mm<10) {
    mm = '0' + mm
  }
  
  today = mm + '-' + dd + '-' + yyyy
  var assignmentNum = "Assignment 1.5";
  
  var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
      + assignmentNum + "\nDate: " + today;
  
  console.log(programHeader);
  console.log("\n");