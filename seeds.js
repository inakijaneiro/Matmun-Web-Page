var mongoose = require("mongoose");
var Committee = require("./models/committee");

var data = [
	{
		name: "Asamblea General",
		image: "http://www.un.org/waterforlifedecade/images/logos/logo_69th_session_un_general_assembly_eng.png"
	},
	{
		name: "Consejo de Seguridad",
		image: "http://3.bp.blogspot.com/-QXPwEPSoW2Y/VrAZFng81BI/AAAAAAAAHdE/LJnpjdDKzes/s400/United-Nations-Security-Council.png"
	},
	{
		name: "ECOSOC",
		image: "http://www.un.org/waterforlifedecade/images/events/logo_ecosoc_eng.png"
	},
	{
		name: "UNWOMEN",
		image: "https://www.newvision.co.ug/w-images/0c797dc9-9f7f-4e25-9dc6-0b08b6b5c423/1/unwomen-703x422.jpg"
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