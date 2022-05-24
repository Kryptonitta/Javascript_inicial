//CLASE 2: Control de flujos

//EJERCICIO 01: Solicitar al usuario un (1) nombre. Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. Caso contrario, la salida será “Yo no fui”.

let nombre = prompt("Ingrese su nombre");

let nombreAlmacenado = "BART";
//Convierto la variable que pedi a upperCase para que sea compatible con el método de comparación.
nombreAlmacenado = nombreAlmacenado.toUpperCase();

if (nombre == nombreAlmacenado) {
    alert("Fui yo");
} else {
    alert("Yo no fui");
}

//EJERCICIO 02: Solicitar al usuario una (1) tecla. Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

let tecla = prompt("Ingrese una tecla");

//Convierto la tecla a minúscula
let teclaMinuscula = tecla.toLowerCase();

if  (teclaMinuscula === "y") {
    alert("Correcto");
}

//otra solución
if (tecla === "y" || tecla === "Y") {
    alert("Correcto");
} else {
    alert("No apretaste Y");
}

//EJERCICIO 03: ACTIVIDAD 3 Solicitar al usuario un (1) un número.
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4.

let numero = prompt("Ingrese un número");

if (numero === "1") {
    alert("Elegiste a Homero");
} else if (numero === "2") {
    alert("Elegiste a Marge");
} else if (numero === "3") {
    alert("Elegiste a Bart");
} else if (numero === "4") {
    alert("Elegiste a Lisa");
} else {
    alert("No elegiste a ninguno");
}

//EJERCICIO 04: Solicitar al usuario un (1) número.
// Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000.

let num = prompt("Ingrese un número");
let numeroParseado = parseInt(num);

if (numeroParseado >= 0 && numeroParseado <= 1000) {
    alert("Presupuesto bajo");
} else if (numeroParseado >= 1001 && numeroParseado <= 3000) {
    alert("Presupuesto medio");
} else if (numeroParseado > 3000) {
    alert("Presupuesto alto");
} else {
    alert("No elegiste un número");
}

//EJERCICIO 05: Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

//Solución 1

let producto1 = prompt("Ingrese un producto");
let producto2 = prompt("Ingrese un producto");
let producto3 = prompt("Ingrese un producto");
let producto4 = prompt("Ingrese un producto");

//valido que todos los prompt tengan contenido. Si no lo tiene, muestro error 

if (producto1 === "" || producto2 === "" || producto3 === "" || producto4 === "") {
    alert("Error: Es necesario cargar todos los productos");
} else {
    alert("Los productos son: " + producto1 + ", " + producto2 + ", " + producto3 + ", " + producto4);
}

//Solución 2

let prod1 = prompt("Ingrese un producto");
let prod2 = prompt("Ingrese un producto");
let prod3 = prompt("Ingrese un producto");
let prod4 = prompt("Ingrese un producto");

if (prod1 !== "" && prod2 !== "" && prod3 !== "" && prod4 !== "") {
    alert("Los productos son: " + prod1 + ", " + prod2 + ", " + prod3 + ", " + prod4);
} else {
    alert("Error: Es necesario cargar todos los productos");
}




