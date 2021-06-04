//Mi primer archivo de javascript con funciones
//esta línea nos escribe Hola mundo! en el navegador
document.write("<h1>Hola mundo!</h1>");

//Para crear una variable es con la palabra var o let
let nombre = "Fabiola";
var edad = 19;

document.write("<p>ProTip! Updating your profile with your name, location, and a profile picture helps other GitHub users get to know you.</p>");
document.write("<br>");

document.write(nombre + " Tu edad es: " + edad);
document.write("<br>");
let num1 = 9;
var num2 = 8;
document.write(num1 + num2); //17
document.write("<br>");
document.write(9 + 8); //17
document.write("<br>");
document.write("9" + "8"); //98
document.write("<br>");

//Tipos de datos en JS
//Númerico
let numero = 20;

//Decimal
let numero2 = 0.0;

//Cadena String
let cadena = "Los mejores programadores son del 3ro A";

document.write(numero);
document.write("<br>");
document.write(numero2);
document.write("<br>");
document.write(cadena);
document.write("<br>");

//Tipos de datos arreglos
var amigos = ["Juan", "Pedro", "Pablo"];
//document.write(amigos);

document.write("<br>");

//Objetos
let Objetos = (color: "azul", altura: 150, ancho: 50);
document.write(Objetos);
document.write("<br>");

//No definir variables
let nombre2;
document.write(nombre2);

//Valores invalidas
var x = 10;
var y = "Hola mundo";
document.write(x + y);