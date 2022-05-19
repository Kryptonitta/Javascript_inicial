//CLASE 1: Conceptos generales, sintaxis y variables

//EJERCICIO 1: Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración.

let nombre = "Homero";
let apellido = "Simpson";
let edad = 36;

console.log(nombre, apellido, edad); //Esto es para ver que se imprimen en la consola

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
