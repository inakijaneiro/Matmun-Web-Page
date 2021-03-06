// Including npm packages
var express 		= require("express"),
 	app 			= express(),
 	bodyParser 		= require("body-parser"),
 	mongoose 		= require("mongoose"),
 	passport 		= require("passport"),
 	localStrategy 	= require("passport-local"),
 	Committee 		= require("./models/committee"),
 	User 			= require("./models/user"),
 	seedDB 			= require("./seeds"),
 	nodemailer		= require("nodemailer"),
 	fs 				= require("fs");
seedDB();
// Basic express perimissions
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

mongoose.connect(process.env.DATABASEURL);

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

// NODEMAILER SETUP
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'no.reply.voidmx@gmail.com',
        pass: 'voidmx2018'
    }
});



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

app.get("/comites/:name", function(req, res){
	var name = req.params.name;
	Committee.findOne({urlExt: name}, function(err, com){
		if (err){
			console.log(err);
		}
		else{
			res.render("comite", {committee: com});
		}
	})
});

app.get("/comites/documento/:name", function(req, res){
	var documento = "/public/documents/" + req.params.name;

	fs.readFile(__dirname + documento, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get("/Manual.pdf", function(req, res){
	var manual = "/public/documents/Manual.pdf";
	//console.log(__dirname + manual);
	fs.readFile(__dirname + manual, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get("/delegados", function(req, res){
	res.render("delegados");
});

app.get("/contacto", function(req, res){
	res.render("contacto");
});

app.post("/contacto", function(req, res){
	var data = req.body;
    let mailOptions = {
        from: '"VOID MX" <no.reply.voidmx@gmail.com>', // sender address
        to: "arriaga.angel@live.com", // list of receivers
        subject: data.subject, // Subject line
        html: '<p><strong>name: </strong>' + data.name + '</p>' +
        	  '<p><strong>email: </strong>' + data.email + '</p>'+
        	  '<p><strong>Telefono: </strong>' + data.phone + '</p>'+
        	  '<p><strong>Mensaje: </strong>' + data.msg + '</p>'// html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
		res.redirect("/");        
    });
});

app.get("*", function(req, res){
	res.send("Page not found. ERROR 404");
});

// Port opening
app.listen(process.env.PORT || 3000, function(){
	if (process.env.PORT){
		console.log("SERVER RUNNING ON PORT " + process.env.PORT);
	}
	else{
		console.log("SERVER RUNNING ON PORT 3000");
	}
});