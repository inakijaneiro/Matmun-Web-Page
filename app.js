// Including npm packages
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Basic express perimissions
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Routing
app.get("/", function(req, res){
	res.render("main");
});


// Port opening
app.listen(3000, function(){
	console.log("SERVER RUNNING ON PORT 3000");
});