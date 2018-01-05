var mongoose = require("mongoose");

var committeeSchema = new mongoose.Schema({
	name: String,
	image: String
});

module.exports = mongoose.model("Committee", committeeSchema);