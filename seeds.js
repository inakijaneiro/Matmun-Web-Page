var mongoose = require("mongoose");
var Committee = require("./models/committee");
var User = require("./models/user");

var dataCommittee = [
	{
		name: "Asamblea General",
		image: "http://www.un.org/waterforlifedecade/images/logos/logo_69th_session_un_general_assembly_eng.png",
		shortcut: "AG",
		urlExt: "AsambleaGeneral",
		quorum: [
					{
						name:"Rusia", 
						shortcut: "ru"
					},
					{
						name:"Argentina",
						shortcut:"ar"
					},
					{
						name:"Mexico",
						shortcut: "mx"
					},
					{
						name:"Canada",
						shortcut: "ca"
					},
					{
						name:"Francia",
						shortcut: "fr"
					},
					{
						name:"Alemania",
						shortcut:"de"
					},
					{
						name:"Arabia Saudita",
						shortcut: "sa"
					},
					{
						name:"Emiratos Árabes Unidos",
						shortcut:"ae"
					},
					{
						name:"Colombia",
						shortcut: "co"
					},
					{
						name:"Afganistán",
						shortcut: "af"
					},
					{
						name:"Somalia",
						shortcut:"so"
					},
					{
						name:"Estados Unidos de América",
						shortcut: "us"
					},
					{
						name:"Suecia",
						shortcut:"se"
					},
					{
						name:"Reino Unido",
						shortcut:"gb"
					},
					{
						name:"Turquía",
						shortcut:"tr"
					},
					{
						name:"España",
						shortcut:"es"
					},
					{
						name:"China",
						shortcut:"cn"
					},
					{
						name: "Japón",
						shortcut:"jp"
					},
					{
						name:"Cuba",
						shortcut: "cu"
					},
					{
						name:"Pakistán",
						shortcut:"pk"
					}
	],
	description: "La Asamblea General, creada en 1945, es el principal organismo deliberativo, directivo y representativo de las Naciones Unidas. Integrado por los 193 miembros de la ONU, constituye un foro singular para las deliberaciones multilaterales sobre toda la gama de cuestiones internacionales que abarca la Carta de las Naciones Unidas. La Asamblea se reúne ordinariamente de septiembre a diciembre y se divide en seis comisiones: Desarme y seguridad internacional; asuntos económicos y financieros; asuntos sociales, humanitarios y culturales; política especial y de descolonización; asuntos administrativos y de presupuesto; comisión jurídica.",
	chair: [
				{
					name: "Osmara Arbizu Valdez",
					email: "osmaraarvizu@hotmail.com",
					number: "+52 1 (868) 125 62 80"
				},
				{
					name: "Ana Osti",
					email: "A00517163@itesm.mx",
					number: "+52 1 (868) 838 25 91"
				},
				{
					name: "Abril Chavez",
					email: "abrilelizabeth20@gmail.com",
					number: "+52 1 (868) 297 74 11"
				}
	]

},
	// ================================================================
	//							EMPIEZA UNWOMEN
	// ================================================================ 
	{
		name: "UNWOMEN",
		image: "https://www.newvision.co.ug/w-images/0c797dc9-9f7f-4e25-9dc6-0b08b6b5c423/1/unwomen-703x422.jpg",
		shortcut: "UNW",
		urlExt: "UNWomen",
		quorum: [
					{
						name:"Cameroon",
						shortcut: "cm"
					},
					{
						name:"Liberia",
						shortcut: "lr"
					},
					{
						name:"Nigeria",
						shortcut: "ng"
					},
					{
						name:"China",
						shortcut: "cn"
					},
					{
						name:"Japan",
						shortcut: "jp"
					},
					{
						name:"Pakistan",
						shortcut: "pk"
					},
					{
						name:"Republic of Korea",
						shortcut: "kr"
					},
					{
						name:"United Arab Emirates",
						shortcut: "ae"
					},
					{
						name:"Yemen",
						shortcut: "ye"
					},
					{
						name:"Croatia",
						shortcut: "hr"
					},
					{
						name:"Russia",
						shortcut: "ru"
					},
					{
						name:"Brazil",
						shortcut: "br"
					},
					{
						name:"El Salvador",
						shortcut: "sv"
					},
					{
						name:"Panama",
						shortcut: "pa"
					},
					{
						name:"Canada",
						shortcut: "ca"
					},
					{
						name:"Finland",
						shortcut: "fi"
					},
					{
						name:"Netherlands",
						shortcut: "nl"
					},
					{
						name:"France",
						shortcut: "fr"
					},
					{
						name:"United Kingdom",
						shortcut: "gb"
					},
					{
						name:"United States",
						shortcut: "us"
					}
		],
		description: "Working for the empowerment of women and girls globally, Unwomen fights for gender equality in daily life situations where women’s human rights are not considered, or don’t exist at all. The primordial interests of this committee  include fighting to end violence against women, the economic empowerment of  women, and the promotion of women’s leadership acceptance and political participation, as well as the inclusion of women in certain industries, organizations and groups of their interest.",
		chair: [
					{
						name: "Ana Paula Lozano Alfaro",
						email: "anapaulozanoa@gmail.com",
						number: "+52 1 (868) 199 08 52"
					},
					{
						name: "Cynthia Vazquez",
						email: "A00517148@itesm.mx",
						number: "+52 1 (868) 241 89 72"
					},
					{
						name: "Alondra Palacios",
						email: "A00517207@itesm.mx",
						number: "+52 1 (868) 312 14 61"
					}					
		]
	},


	// ================================================================
	//					EMPIEZA CONSEJO DE SEGURIDAD
	// ================================================================ 


	{
		name: "Consejo de Seguridad",
		image: "http://3.bp.blogspot.com/-QXPwEPSoW2Y/VrAZFng81BI/AAAAAAAAHdE/LJnpjdDKzes/s400/United-Nations-Security-Council.png",
		shortcut: "Crisis",
		urlExt: "ConsejoDeSeguridad",
		quorum: [
					{
						name: "Bolivia",
						shortcut:"bo"
					},
					{
						name: "China",
						shortcut:"cn"
					},
					{
						name: "Costa de Marfil",
						shortcut:"ci"
					},
					{
						name: "Etiopía",
						shortcut: "et"
					},
					{
						name: "Francia",
						shortcut:"fr"
					},
					{
						name: "Guinea Ecuatorial",
						shortcut:"gq"
					},
					{
						name: "Kazakhstan",
						shortcut:"kz"
					},
					{
						name: "Kuwait",
						shortcut:"kw"
					},
					{
						name: "Países Bajos",
						shortcut:"nl"
					},
					{
						name: "Perú",
						shortcut:"pe"
					},
					{
						name: "Polonia",
						shortcut:"pl"
					},
					{
						name: "Rusia",
						shortcut:"ru"
					},
					{
						name: "Suecia",
						shortcut:"se"
					},
					{
						name: "Reino Unido",
						shortcut: "gb"
					},
					{
						name: "Estados Unidos de América",
						shortcut:"us"
					},
					{
						name: "Chile",
						shortcut:"cl"
					},
					{
						name: "Corea del Sur",
						shortcut:"kr"
					},
					{
						name: "Japón",
						shortcut:"jp"
					},
					{
						name: "Mexico",
						shortcut:"mx"
					},
					{
						name: "Venezuela",
						shortcut:"ve"
					}	

		],
		description: "El Consejo de Seguridad tiene la responsabilidad primordial de mantener la paz y la seguridad internacional. Éste es el único órgano de la ONU cuyas decisiones, los Estados Miembros, están obligados a cumplir. Cuando se le presenta una controversia, la primera medida del Consejo es generalmente recomendar a las partes que lleguen a un acuerdo por medios pacíficos. Puede imponer embargos o sanciones económicas, o autorizar el uso de la fuerza para hacer cumplir los mandatos.",
		chair:[
					{
						name: "Ariadna Ortega Garcia",
						email: "ari_og@hotmail.com",
						number: "+52 1 (868) 298 16 96"
					},
					{
						name: "José Antonio Ayala Quezada",
						email: "pepe_tono98@hotmail.com",
						number: "+52 1 (868) 170 64 21"
					},
					{
						name: "Gudelio Chapa Razo",
						email: "gudelio_chapa_razo@hotmail.com",
						number: "+52 1 (894) 105 45 82"
					}
		]
	},	


	// ================================================================
	//							EMPIEZA ECOSOC 
	// ================================================================ 
	
	
	{
		name: "ECOSOC",
		image: "http://www.un.org/waterforlifedecade/images/events/logo_ecosoc_eng.png",
		shortcut: "ECOSOC",
		urlExt: "ECOSOC",
		quorum: [
					{
						name:"Afganistán",
						shortcut:"af"
					},
					{
						name:"Argentina",
						shortcut:"ar"
					},
					{
						name:"Australia",
						shortcut:"au"
					},
					{
						name:"Brazil",
						shortcut:"br"
					},
					{
						name:"China",
						shortcut:"cn"
					},
					{
						name:"Colombia",
						shortcut:"co"
					},
					{
						name:"Emiratos Arabes Unidos",
						shortcut:"ae"
					},
					{
						name:"Estados Unidos de América",
						shortcut:"us"
					},
					{
						name:"India",
						shortcut:"in"
					},
					{
						name:"Iran",
						shortcut:"ir"
					},
					{
						name:"Noruega",
						shortcut:"no"
					},
					{
						name:"Reino Unido",
						shortcut:"gb"
					},
					{
						name:"Suecia",
						shortcut:"se"
					},
					{
						name:"Venezuela",
						shortcut:"ve"
					},
					{
						name:"Mexico",
						shortcut:"mx"
					},
					{
						name:"Russia",
						shortcut:"ru"
					},
					{
						name:"España",
						shortcut:"es"
					},
					{
						name:"Alemania",
						shortcut:"de"
					},
					{
						name:"Francia",
						shortcut:"fr"
					},
					{
						name:"Canadá",
						shortcut:"ca"
					}
		],
		description: "El Consejo Económico y Social de las Naciones Unidas (ECOSOC) fue creado cuando surgió la ONU, y es uno de los principales órganos de la ya mencionada ONU, ya que el objetivo de esta es lograr una cooperación internacional para solucionar problemas de índole social y económica, es controlada por la Asamblea, también considerado por muchos delegados la más importante en las Naciones Unidas. El Consejo Económico y Social está en el  Capítulo X,  es considerado un órgano de participación restringida e intergubernamental.",
		chair:[
					{
						name: "Israel Castro Ortiz ",
						email: "castroortizisrael@gmail.com",
						number: "+52 1 (894) 850 55 45"
					},
					{
						name: "Fabian Flores",
						email: "fabianfloresrojo@gmail.com",
						number: "+52 1 (894) 846 62 53"
					},
					{
						name: "Jose Diego Gonzalez",
						email: "A00517261@itesm.mx",
						number: "+52 1 (868) 250 02 16"
					}					
		]
	},


	// ================================================================
	//		EMPIEZA CORTE INTERAMERICANA DE DERECHOS HUMANOS 
	// ================================================================ 
	
	
	{
		name: "Corte Interamericana de Derechos Humanos",
		image: "https://pbs.twimg.com/profile_images/1123759088/corte_col.jpg",
		shortcut: "CIDH",
		urlExt: "CorteInteramericanaDerechosHumanos",
		quorum: [
					{
						name:"Jueces",
						shortcut:"gavel"
					},
					{
						name:"Demandados",
						shortcut:"balance"
					},					
					{
						name:"Peticionarios",
						shortcut:"files"
					},
		],
		description: "En 1979 la Asamblea General de la OEA, reconociendo la necesidad de crear un foro en el cual se atendieran formalmente las quejas oficiales contra los países miembros, aprobó la resolución 448 estableciendo la Corte Interamericana de Derechos Humanos como el órgano judicial oficial encargado de mantener y defender las provisiones de la Convención.  La tarea principal de la Corte es la interpretación de la Convención Americana sobre Derechos Humanos y sirve como cuerpo judicial una vez todos los otros recursos internos se hayan agotado.  La Corte está compuesta de siete jueces elegidos, un secretario y un secretario adjunto.",
			chair:[
					{
						name: "Michelle Rodriguez",
						email: "amichelle2000@live.com",
						number: "+52 1 (868) 244 09 25"
					},
					{
						name: "Jessica Araiza",
						email: "A00517075@itesm.mx",
						number: "+52 1 (894) 125 86 15"
					},
					{
						name: "Aylen Maldonado",
						email: "A00517227@itesm.mx",
						number: "+52 1 (868) 241 55 35"
					}					
		]
	}
] 

function create(i){
	Committee.create(dataCommittee[i], function(err, data){
		if (err){
			console.log(err)
		} 
		else{
			console.log("New Data created!");
		}
	});
}
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
			create(i);
				// Committee.create(dataCommittee[i], function(err, data){
				// 	if (err){
				// 		console.log(err)
				// 	} 
				// 	else{
				// 		console.log("New Data created!");
				 	}
				// });
			//}
		}
	});
}
module.exports = seedDb;