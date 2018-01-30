var mongoose = require("mongoose");
var Committee = require("./models/committee");
var User = require("./models/user");

var dataCommittee = [
	{
		name: "Asamblea General",
		image: "http://www.un.org/waterforlifedecade/images/logos/logo_69th_session_un_general_assembly_eng.png",
		shortcut: "AG",
		urlExt: "AsambleaGeneral"

	},
	{
		name: "UNWOMEN",
		image: "https://www.newvision.co.ug/w-images/0c797dc9-9f7f-4e25-9dc6-0b08b6b5c423/1/unwomen-703x422.jpg",
		shortcut: "UNW",
		urlExt: "UNWomen"
	},
	{
		name: "Consejo de Seguridad",
		image: "http://3.bp.blogspot.com/-QXPwEPSoW2Y/VrAZFng81BI/AAAAAAAAHdE/LJnpjdDKzes/s400/United-Nations-Security-Council.png",
		shortcut: "Crisis",
		urlExt: "ConsejoDeSeguridad"

	},
	{
		name: "ECOSOC",
		image: "http://www.un.org/waterforlifedecade/images/events/logo_ecosoc_eng.png",
		shortcut: "ECOSOC",
		urlExt: "ECOSOC"
	},
	{
		name: "Corte Interamericana de Derechos Humanos",
		image: "https://pbs.twimg.com/profile_images/1123759088/corte_col.jpg",
		shortcut: "CIDH",
		urlExt: "CorteInteramericanaDerechosHumanos"
	}
] 



//Delete Committees
function seedDb(){
	Committee.remove({}, function(err){
		if (err){
			console.log(err);
		}
		else{
			console.log("Removed Committees");
			//Add Committees
			for (var i = 0; i < dataCommittee.length; i++){
				Committee.create(dataCommittee[i], function(err, data){
					if (err){
						console.log(err)
					} 
					else{
						console.log("New Data created!");
					}
				});
			}
		}
	});
}
module.exports = seedDb;