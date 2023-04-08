// Funciones

var valor01 = 30;
var valor02 = 20;

function mifuncion(valor1, valor2) {
  return valor01 + valor02;
}

document.getElementById("suma-de-numeros").innerHTML = mifuncion(
  valor01 + valor02
);

// Funcion Declarativa

function mifuncionDeclarativa() {
  return "el numero" + " " + 120;
}

document.getElementById("funcion-declarativa").innerHTML =
  mifuncionDeclarativa();

// Funcion De Expresion

var funcionDeExpresion = function (a, b) {
  var a = 100;
  var b = 200;
  var nombre = "Rafael Reyes";
  return nombre + " " + "tiene la cantidad de" + " " + (a + b);
};

document.getElementById("funcion-expresion").innerHTML = funcionDeExpresion();

// Ejemplos de funciones

var saludarSocios = "Amanda";

function saludarSociosGYM(saludarSocio) {
  return saludarSocios;
}

document.getElementById("saludar-deportistas").innerHTML = saludarSociosGYM();

// Ejemplo 02

var a = 150;
var b = 400;

function sumaDeNumeros(valorA, valorB) {
  var suma = a + b;
  return suma;
}

document.getElementById("resultado-suma").innerHTML = sumaDeNumeros();

// Ejemplo 03

function mifuncion3(x, y) {
  return x * y;
}

var x = mifuncion3(6, 8);

document.getElementById("resultado-multiplicacion").innerHTML = x;

// Ejemplo 04

function SaludarNavegdor(saludonavegador) {
  return "Hola" + " " + saludonavegador;
}

document.getElementById("saludo-navegador").innerHTML =
  SaludarNavegdor("Rafael");

// Ejemplo 05

var numero = 1;
var texto = "rafael";
var booleano = true;

function solution(numero, texto, booleano) {
  return typeof numero;
  return typeof texto;
  return typeof booleano;
}

document.getElementById("tipo-numero").innerHTML = solution(numero);
document.getElementById("tipo-texto").innerHTML = solution(texto);
document.getElementById("tipo-booleano").innerHTML = solution(booleano);

// Ejemplo 06

var nombreAlumno = "Rafael Reyes Vazquez";

function alertaweb(alerta) {
  alert("Holal" + " " + nombreAlumno);
}

document.getElementById("alert").innerHTML = alertaweb();
