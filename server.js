var express = require("express");
// var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var request = require("request");
// var cheerio = require("cheerio");

// mongoose.Promise = Promise;

var PORT = process.env.PORT || 8080;
// Initialize Express
var app = express();

// // Set Handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Use morgan and body parser with our app
// app.use(logger("dev"));
// app.use(bodyParser.urlencoded({ extended: false }));

// Make public a static dir
app.use(express.static(process.cwd() + "/public"));


app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
  });

// Database configuration with mongoose
// mongoose.connect("mongodb://heroku_64064gld:sgl8sf84m9onaf0nbdaojgp0lf@ds131782.mlab.com:31782/heroku_64064gld");
// Local DB
// mongoose.connect("mongodb://localhost/scrapethis");

// var db = mongoose.connection;

// // Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// // Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });



//Routes 
//TODO:  put routes in seperate folder once working
// require("./routes/note-routes.js")(app);
// require("./routes/article-routes.js")(app);





//TODO:  Add route to delete notes


// Listen on port
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});