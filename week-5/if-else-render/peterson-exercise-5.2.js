
// requires
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// app functions
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// local composer array
var composers = [
  "Bach",
  "Mozart",
  "Beethoven",
  "Verdi"
];

// routes
app.get("/", function(req, res) {
    res.render("index", {
        names: composers
    })
});


// create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});