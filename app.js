var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
	res.send("<h1>Hello Mother fuckers</h1>");
});


app.listen(3000, function(){
	console.log("SERVER RUNNING ON PORT 3000");
});