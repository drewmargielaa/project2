//  dependecies
const express = require("express");
const handlebars = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8000;

// data parsing thru express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//  setting up handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// routes
app.get("/", function(req, res) {
    // console.log(req)
    res.render("index");
  });

app.get("/job", function(req, res) {
    // console.log(req)
    res.render("jobs");
  });

  app.get("/learning", function(req, res) {
    // console.log(req)
    res.render("learning");
  });

  app.get("/portfolio", function(req, res) {
    // console.log(req)
    res.render("portfolio");
  });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });


