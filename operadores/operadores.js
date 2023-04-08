// Operadores Aritmeticos  (+,-,*,/)

// Suma
const suma = 3 + 3;

//Resta
const resta = 50 - 20;

//Multiplicación
const multiplicacion = 10 * 40;

//División
const division = 30 / 4;

document.getElementById("suma").innerHTML = suma;
document.getElementById("resta").innerHTML = resta;
document.getElementById("multiplicacion").innerHTML = multiplicacion;
document.getElementById("division").innerHTML = division;

// Operadores de Concatenación (+)
"Rafael " + "Reyes Vazquez";
document.getElementById("concatenacion").innerHTML =
  "Rafael " + "Reyes Vázquez";

// Operadores de Incremento y Decremento

//Incremento

var a = 3;

function Incremento() {
  return ++a + 1;
}

document.getElementById("incremento").innerHTML = Incremento();

//Decremento

var k = 5;

function decremento() {
  return --k;
}

document.getElementById("decremento").innerHTML = decremento();

// Operadores de Asisgnación (=)
var a = "Hola " + "Rafael Reyes Vázquez " + "Eres el alumno " + 12;

document.getElementById("asignacion").innerHTML = a;

// Operadores de Asisgnación Combinada

var contador = 1;

contador = contador + 2;
contador = contador - 2;
contador = contador * 2;
contador = contador / 2;

function combinada() {
  return contador + 2;
}

document.getElementById("combinada").innerHTML = combinada();

var operaciones = 2;

var resultados = [
  (operaciones += 2),
  (operaciones -= 6),
  (operaciones *= 2),
  (operaciones /= 2),
];

document.getElementById("operaciones").innerHTML = resultados;

// Operadores de Igualdad (==)

const d = "4" == 4;
const v = 5 == 5;

// Operadores de Igualdad Estricta (===)

const b = 6 === 6; // Verdadero
const n = 6 === "6"; // Falso

// Operadores de mayor o menor (>,<,>=,<=)

// Menor que (<)

var y = 7 < 10; // Verdad 7 es menor que 10.

// Mayor que (>)

var x = 7 > 10; // Falso 7 no es mayor a 10.

// Mayor o igual a que (>=)

var j = 7 >= 17; // Falso 7 no es mayor o igual a 17.

// Menor o igual a que (<=)

7 <= 17; // Verdadero 7 es menor a 17 pero no es igual a 17.
20 <= 17; // Falso 20 no es menor ni igual a 17.
17 <= 17; // Verdadero 17 no es menor a 17 pero si es igual a 17.
5 <= 50; // Verdadero 5 si es menor a 50 pero no es igual a 50.

// Mayor o igual a que (>=)

var si = 18 >= 18; //Verdadero 18 no es menor que 18 pero si es igual a 18;
var no = 17 >= 18; //Falso 17 no es mayor o igual a 18;
var no = 40 >= 18; //Verdadero 40 es mayor que 18 pero no es igual a 18;
