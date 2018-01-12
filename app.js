// Including npm packages
var express 		= require("express"),
 	app 			= express(),
 	bodyParser 		= require("body-parser"),
 	mongoose 		= require("mongoose"),
 	passport 		= require("passport"),
 	localStrategy 	= require("passport-local"),
 	Committee 		= require("./models/committee"),
 	User 			= require("./models/user"),
 	seedDB 			= require("./seeds");


seedDB();
// Basic express perimissions
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/matmun");

//PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "MATMUN 2018: TOMANDO ACCION DEVELOPED BY VOID",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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