//CLASE 1: Conceptos generales, sintaxis y variables

//EJERCICIO 1: Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración.

let nombre = "Homero";
let apellido = "Simpson";
let edad = 36;

console.log(nombre, apellido, edad); //Esto es para ver que se imprimen en la consola

//EXTRA: con document.write() puedo ver lo mismo de la consola pero en "el documento". Esto NO ES BUENA PRÁCTICA pero para fines educativos es más sencillo que la consola

document.write(nombre + " " + apellido + " " + edad);

//EJERCICIO 2: Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

const ciudad1 = "Springfield";
const ciudad2 = "Quahog";
const ciudad3 = "Shelbyville";
const ciudad4 = "Albany";
const ciudad5 = "Pawnee";

console.log(ciudad1, ciudad2, ciudad3, ciudad4, ciudad5); //Esto es para ver que se imprimen en la consola

//EJERCICIO 3: Declarar variables para representar la información de un carnet de conducir. Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

/* Voy a usar const para la información del carnet ya considero que esa data no se va a modificar. Y Voy a usar let para el carnet porque siento que esa info si puede modificarse en el futuro */

const nombreConductor = "Homero";
const apellidoConductor = "Simpson";
const edadConductor = 36;
const ciudadConductor = "Springfield";
const numeroLicencia = "123456789";

let carnet = nombreConductor + " " + apellidoConductor + " " + edadConductor + " " + ciudadConductor + " " + numeroLicencia;

console.log(carnet); //Imprime en consola el carnet de conducir

//EJERCICIO 4: Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.

let integrante1 = prompt("Ingrese el nombre del primer integrante de la familia");
let integrante2 = prompt("Ingrese el nombre del segundo integrante de la familia");
let integrante3 = prompt("Ingrese el nombre del tercer integrante de la familia");
let integrante4 = prompt("Ingrese el nombre del cuarto integrante de la familia");
let integrante5 = prompt("Ingrese el nombre del quinto integrante de la familia");

alert("Los integrantes de la familia son: " + integrante1 + ", " + integrante2 + ", " + integrante3 + ", " + integrante4 + ", " + integrante5); //El alert me muestra el mensaje 

//EJERCICIO 5: Solicitar al usuario uno o más precios. Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

//parseInt sirve para convertir un string a un número entero. Si escriben texto, va a salir un error al final ya que no se pueden hacer operaciones matemáticas sobre texto. Para esto habría que hacer validaciones pero es algo que aun no vimos. 

let precio1 = parseInt (prompt("Ingrese el precio del primer producto"));
let precio2 = parseInt (prompt("Ingrese el precio del segundo producto"));
let precio3 = parseInt (prompt("Ingrese el precio del tercer producto"));

let descuento1 = precio1 * 0.20;
let descuento2 = precio2 * 0.30;
let descuento3 = precio3 * 0.50;

let precioFinal1 = precio1 - descuento1;
let precioFinal2 = precio2 - descuento2;
let precioFinal3 = precio3 - descuento3;

alert("El precio final del primer producto es: $" + precioFinal1 + " y el precio final del segundo producto es: $" + precioFinal2 + " y el precio final del tercer producto es: $" + precioFinal3);

//DATA EXTRA:
//hay dos maneras de concatenar variables en javascript, la primera es con + y la segunda es con las comillas invertidas. El resultado es lo mismo, por lo que es a elección.

let nombreA = "Homero";
let apellidoA = "Simpson";

//concatenación con +
let nombreCompletoA = "Nombre y apellido: "+ nombreA + " " + apellidoA;
console.log(nombreCompletoA);

//concatenación con comillas invertidas + ${}   --> LAS COMILLAS INVERTIDAS NO SON LAS COMILLAS COMUNES
let nombreCompletoB =  `Nombre y apellido: ${nombreA} ${apellidoA}`;
console.log(nombreCompletoB);