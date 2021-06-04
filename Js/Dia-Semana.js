function Semana(dia){
	let opcion;
	opcion = parseInt(dia);
	switch(opcion){
		case 1: document.getElementById("diaSemana").innerHTML="<h3> Lunes " + " </h3>";
		break;
		case 2: document.getElementById("diaSemana").innerHTML="<h3> Martes " + " </h3>";
		break;
		case 3: document.getElementById("diaSemana").innerHTML="<h3> Miércoles " + " </h3>";
		break;
		case 4: document.getElementById("diaSemana").innerHTML="<h3> Jueves " + " </h3>";
		break;
		case 5: document.getElementById("diaSemana").innerHTML="<h3> Viernes " + " </h3>";
		break;
		case 6: document.getElementById("diaSemana").innerHTML="<h3> Sabado " + " </h3>";
		break;
		case 7: document.getElementById("diaSemana").innerHTML="<h3> Domingo " + " </h3>";
		break;
		default: document.getElementById("diaSemana").innerHTML="<h3> La opción no se encontro en el rango de valores " + " </h3>";
	}
}