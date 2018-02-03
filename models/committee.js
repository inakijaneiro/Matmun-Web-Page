var mongoose = require("mongoose");

var committeeSchema = new mongoose.Schema({
	name: String,
	image: String,
	shortcut: String,
	urlExt: String,
	quorum: [{name:String, shortcut:String}],
	description: String,
	chair: [{name:String, email:String, number: String}]
});

module.exports = mongoose.model("Committee", committeeSchema);