// Hoisting

document.getElementById("demo1").innerHTML = miNombre;
var miNombre = "Rafael";

var apellidos = "Reyes Vázquez Rafael Iván";

function mifuncion(apellido) {
  return "hola" + " " + apellidos;
}

document.getElementById("demo2").innerHTML = mifuncion();
