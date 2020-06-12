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

// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

//test