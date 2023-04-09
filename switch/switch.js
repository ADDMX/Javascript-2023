// Switch

var numero = 100;

function numeros(numero) {
  switch (true) {
    case numero == 1:
      return "Soy un uno";
      break;
    case numero == 10:
      return "Soy un 10";
      break;
    case numero == 100:
      return "Soy un 100";
    default:
      return "no soy ningun numero";
  }
}

document.getElementById("numeros").innerHTML = numeros(numero);

// Ejercicio 02

var planDePaga = "premier";

function planEligido(planDePaga) {
  switch (true) {
    case planDePaga == "basico":
      return "Estas en el plan básico de Cablevision";
      break;
    case planDePaga == "premier":
      return "Estas en el plan premier de Cablevision";
      break;
    case planDePaga == "platinum":
      return "Estas en el plan platinum de Cablevision";
      break;
    case planDePaga == "gold":
      return "Estas en el plan gold de Cablevision";
      break;
    default:
      return "No estas suscrito a ningún plan de Cablevisión";
      break;
  }
}

document.getElementById("planesCablevision").innerHTML =
  planEligido(planDePaga);

// Ejercicio 03

var articulos = "ninguno";

function articulostienda(articulos) {
  switch (true) {
    case articulos == "computadora":
      return "Elegiste la computadora con un valor de $25,000 pesos pago a creditos";
      break;
    case articulos == "estufa":
      return "Elegiste la estufa con un valor de $56,000 pesos pago a creditos";
      break;
    case articulos == "computadora":
      return "Elegiste la computadora con un valor de $25,000 pesos pago a creditos";
      break;
    default:
      return "No elegiste ningun articulo de la tienda te invitamos a seleccionar uno del carrito de compra";
      break;
  }
}

document.getElementById("articulostienda").innerHTML =
  articulostienda(articulos);
