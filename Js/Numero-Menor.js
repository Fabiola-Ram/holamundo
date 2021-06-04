function Menor(numero1, numero2, numero3){
	let num1, num2, num3;
	num1 = parseInt(numero1);
	num2 = parseInt(numero2);
	num3 = parseInt(numero3);
	if (num1 < num2 && num1 < num3) {
		document.getElementById("resultadoMenor").innerHTML="<h3> El número menor es: " + num1 + " </h3>";
	}else if(num2 < num1 && num2 < num3){
		document.getElementById("resultadoMenor").innerHTML="<h3> El número menor es: " + num2 + " </h3>";
	}else{
		document.getElementById("resultadoMenor").innerHTML="<h3> El número menor es: " + num3 + " </h3>";
	}
	
}