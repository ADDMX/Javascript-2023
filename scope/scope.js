// Funciones

var AutoModelo = "Astra 2007";

function mifuncion() {
  var precioAuto = 1200;
  return AutoModelo + " " + "precio del auto" + "$" + precioAuto;
}

document.getElementById("demo1").innerHTML =
  typeof AutoModelo + " " + AutoModelo;
document.getElementById("demo2").innerHTML = typeof precioAuto;
document.getElementById("demo3").innerHTML = mifuncion();
