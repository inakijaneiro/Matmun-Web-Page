var date = new Date().getTime();
var date2 = new Date("Sat Mar 8 2018 23:59:59 GMT-0600 (CST)").getTime();
function creaHora(){
	date = new Date().getTime();
	//console.log(date);
	//console.log(date2);
	if (date2 < date){
		clearInterval(intervalo);
		document.querySelectorAll('.Horario')[0].classList.toggle("Hoy");
		document.querySelectorAll('.Horario')[1].classList.toggle("Hoy");
	}
}



var intervalo = setInterval(creaHora,1000);
