//Función para sumar dos números
function Suma(numero1, numero2){
	let n1, n2, sum;
	n1 = parseFloat(numero1);
	n2 = parseFloat(numero2);
	sum = n1 + n2;
	//alert("La suma es: " + sum);
	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +" </h1>";
}
function Resta(num1, num2){
	let n1, n2, sum;
	n1 = parseFloat(num1);
	n2 = parseFloat(num2);
	sum = n1 - n2;
	//alert("La resta es: " + sum)
	document.getElementById("resultadoResta").innerHTML="<h1>La resta es: " + sum +" </h1>";
}
function Multiplicacion(nm1, nm2){
	let n1, n2, sum;
	n1 = parseFloat(nm1);
	n2 = parseFloat(nm2);
	sum = n1 * n2;
	//alert("La multiplicación es: " + sum)
	document.getElementById("resultadoMultiplicacion").innerHTML="<h1>La multiplicación es: " + sum +" </h1>";
}
function Division(nmr1, nmr2){
	let n1, n2, sum;
	n1 = parseFloat(nmr1);
	n2 = parseFloat(nmr2);
	sum = n1 / n2;
	//alert("La división es: " + sum)
	document.getElementById("resultadoDivision").innerHTML="<h1>La división es: " + sum +" </h1>";
}

/*Crear funciones en .js

function calcularSuma(){
	alert("Hola bienvenido!");
}

let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");
document.write("Hola " + nombre);
document.write("<br> Tu edad es: " + edad);	

let num1 = parseInt (prompt ("Ingresa el primer número: "));
let num2 = parseInt (prompt ("Ingresa el segundo número: "));
let suma = num1 + num2;
document.write("<br> La suma es: " + suma);
*/