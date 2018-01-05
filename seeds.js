var mongoose = require("mongoose");
var Committee = require("./models/committee");

var data = [
	{
		name: "Asamblea General",
		image: "http://www.un.org/waterforlifedecade/images/logos/logo_69th_session_un_general_assembly_eng.png"
	},
	{
		name: "Consejo de Seguridad",
		image: "http://www.un.org/waterforlifedecade/images/logos/logo_69th_session_un_general_assembly_eng.png"
	}
] 

//Delete Committees
function seedDb(){
	Committee.remove({}, function(err){
		if (err){
			console.log(err);
		} else{
			console.log("Removed Committees");
		}
	});
	//Add Committees
	for (var i = 0; i < data.length; i++){
		Committee.create(data[i], function(err, data){
			if (err){
				console.log(err)
			} else{
				console.log("New Data created!");
			}
		});
	}
}
module.exports = seedDb;