// Including npm packages
var express = require("express"),
 	app = express(),
 	bodyParser = require("body-parser"),
 	mongoose = require("mongoose"),
 	Committee = require("./models/committee");
 	seedDB = require("./seeds");


seedDB();
// Basic express perimissions
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/matmun");

// Routing
app.get("/", function(req, res){
	res.render("main");
});

app.get("/comites", function(req, res){
	//Get all Committee Data
	Committee.find({}, function(err, committee){
		if(err){
			console.log(err);
 		} else{
 			res.render("comites", {committee:committee});
 		}
	});
});

app.get("*", function(req, res){
	res.send("Page not found. ERROR 404");
});


// Port opening
app.listen(3000, function(){
	console.log("SERVER RUNNING ON PORT 3000");
});