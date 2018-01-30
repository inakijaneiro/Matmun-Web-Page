var mongoose = require("mongoose");

var committeeSchema = new mongoose.Schema({
	name: String,
	image: String,
	shortcut: String,
	urlExt: String
});

module.exports = mongoose.model("Committee", committeeSchema);