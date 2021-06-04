function Persona(edad){
	let per;
	per = parseInt(edad);
	if(per <= 3){
		document.getElementById("resultadoEdad").innerHTML="<h3> Eres un Bebé" + " </h3>";
	}else if(per > 3 && per < 13){
		document.getElementById("resultadoEdad").innerHTML="<h3> Eres un Niño" + " </h3>";
	}else if(per > 13 && per < 18){
		document.getElementById("resultadoEdad").innerHTML="<h3> Eres un Adolescente" + " </h3>";
	}else if(per >= 18){
		document.getElementById("resultadoEdad").innerHTML="<h3> Eres un Adulto" + " </h3>";
	}
}