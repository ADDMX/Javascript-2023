// Condicionales  if, else

if (false) {
  console.log("Hola");
} else {
  console.log("soy falso");
}

// Ejemplo de mayor de edad

var edad = 18;

var resultados = function () {
  if (edad === 18) {
    return "Eres mayor a 18 años por lo cual puedes votar";
  } else if (edad > 18) {
    return "Eres mayor a la edad de 18 años por lo cual puedes seguir votando";
  } else {
    return "Lamentamos decirte que eres menor de edad";
  }
};

document.getElementById("demo1").innerHTML = resultados(edad);

// Ejemplo numero dos

var numero = 1;

var resultado = numero === 1 ? "Si soy el numero 1" : "No soy el numero 1";
document.getElementById("demo2").innerHTML = resultado;

var placas = true;

var placasDelEstado =
  placas === true
    ? "Si el usuario cuenta con placas del estado de mexico"
    : "El usuario no cuenta con placas actualizadas del Estado de México";
document.getElementById("demo3").innerHTML = placasDelEstado;

// Ejercicio Numero Tres - Acceso a Bar Zona Rosa.

var usuario = 18;

var accesoBar = function () {
  if (usuario === 18) {
    return "El Usuario tiene 18 años ACCESO VÁLIDO 1ERA VES";
  } else if (usuario >= 18) {
    return "El Usuario mayor a 18 años RENOVACIÓN DE ACCESO";
  } else if (usuario >= 17) {
    return "El Usuario de 17 años con ACCESO LIMITADO";
  } else {
    return "El Usuario con ACCESO DENEGADO";
  }
};

document.getElementById("demo4").innerHTML = accesoBar();

// Juego de Piedra, papel o tijera

// > menor que
// < mayor que
// >= mayor o igual
// <= menor o igual
// == igual que
// != distinto de

var nombre = "Julio";
var apellidoPaterno = "Ramirez";
var apellidoMaterno = "Gevara";
var edad = 20;

if (edad == 20) {
  document.write("Bienvenido, tienes mas de 18 años cumplidos");
} else if (
  (nombre == "Rafael", apellidoPaterno == "Reyes", apellidoMaterno == "Vázquez")
) {
  document.write("Bienvenido " + nombre + apellidoMaterno + apellidoPaterno);
} else {
  document.write(
    "Lo sentimos ninguno de tus datos estan registrados en nuestra base de datos te invitamos a que te registres de nuevo en nuestro portal privado GRACIAS"
  );
}

var registro = function () {
  if (
    edad >= 18 ||
    nombre == "Rafael" ||
    apellidoMaterno == "Vazquez" ||
    apellidoPaterno == "Reyes"
  ) {
    return "Bienvenido, estas registrado en nuestro sistema";
  } else {
    return "No estas registrado en nuestro sistema";
  }
};

document.getElementById("demo5").innerHTML = registro();

var a = 10;
var b = 10;
var c = 10;
var d = 10;

var operaciones = function () {
  if (a == b && c == d) {
    return "Verdadero! " + a + " es igual a " + b;
  } else {
    return "Falso! " + a + " no es igual a " + b;
  }
};

document.getElementById("demo6").innerHTML = operaciones();
