//CLASE 3: 

//Ejercicio 01: Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

let numero1 = prompt("Ingrese un número");
let texto = prompt("Ingrese un texto");

let numeroParseado = parseInt(numero1);

for (let i = 0; i < numeroParseado; i++) {
    alert(texto);
}   

//Ejercicio 02: Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

let num2 = prompt("Ingrese un número");

for (let i = 0; i < num2; i++) {
    //aplico un break para que no se repita mas de 4 veces
    if (i > 4) {    
        break;
    }
    alert("lado");
}

//Ejercicio 03: Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva. Luego realizar un única salida por alerta, con el listado de alumnos registrados.

let alumnos = "";
for (let alumno = 0; alumno < 10; alumno++) {
    alumnos += prompt("Ingrese un alumno") + "\n";
}

alert ("Los alumnos son: \n" + alumnos);

//Ejercicio 04: Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”. Luego realizar un única salida por alerta, con todos los nombres ingresados.

let nombreIngresado = prompt("Ingrese un nombre");
let nombres = ' ';

//SOLO USAR UN = sino va a dar error 

//en el while contemplo que puede ser el nombre en mayusculas o en minusculas
while (nombreIngresado.toLowerCase() !== "voldemort"){
    nombres += nombreIngresado + "\n";
    nombreIngresado = prompt("Ingrese un nombre");
}

alert ("Los nombres son: \n" + nombres);

//Ejercicio 05: Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
//“Tomate” si es 1.
//“Papa” si es 2.
//“Carne” si es 3.
//“Pollo” si es 4.

let numEj5 = '';

//armo un bucle while para que se repita hasta que se ingrese ESC

    while (numEj5 !== "esc" ) {
        numEj5 = prompt("Seleccionar un número de 1 a 4");
        //armo un switch para que se ejecute una accion dependiendo del numero ingresado
        switch (numEj5) {
            case "1":
                alert("Tomate");
                break;
            case "2":
                alert("Papa");
                break;
            case "3":
                alert("Carne");
                break;
            case "4":
                alert("Pollo");
                break;
            default:
                alert("Ingrese un numero valido");
                break;
        }
    }
