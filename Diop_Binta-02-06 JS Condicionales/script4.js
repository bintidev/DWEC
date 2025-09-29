document.addEventListener("DOMContentLoaded", function () {

    // 1. Copia el siguiente código y ejecutalo
    let nombre;
    let edad;

    nombre = prompt('Ingrese su nombre:');
    edad = parseInt(prompt('Ingrese su edad:'));

    document.getElementById('ej1').innerHTML = "Hola " + nombre + ", así que tienes " + edad + " años";

    // 2. Crea un programa que lea una entrada con prompt y la escriba en negrita y h1
    let entrada;

    entrada = prompt('Ingrese un texto cualquiera:');

    document.getElementById('ej2').innerHTML = "<h1><b>" + entrada + "</b></h1>";

    // 3. Crea un programa que lea tu fecha de nacimiento y te diga si eres menor de edad (&lt;18)
    let anyo;

    anyo = parseInt(prompt('Ingrese su año de nacimiento:'));

    let esMenor = (2025 - anyo) < 18 ? "Eres menor de edad" : "No eres menor de edad";

    document.getElementById('ej3').innerHTML = esMenor;

    // 4. Crea un programa que lea tu fecha de nacimiento y te diga si eres menor de edad (&lt;18) o en edad activa (>=18)
    let menorActivo = (2025 - anyo) >= 18 ? "Estás en edad activa" : "Eres menor de edad";

    document.getElementById('ej4').innerHTML = menorActivo;

    // 5. Crea un programa que lea tu fecha de nacimiento y te diga si eres menor de edad (&lt;18), en edad activa (>=18) o jubilado (>67)
    let menorActivoJubilado;

    if (2025 - anyo < 18) {
        menorActivoJubilado = "Eres menor de edad";
    } else if ((2025 - anyo >= 18) && (2025 - anyo <= 67)) {
        menorActivoJubilado = "Estás en edad activa";
    } else if (2025 - anyo > 67) {
        menorActivoJubilado = "Estás jubilado";
    } else {
        menorActivoJubilado = "Año de nacimiento introducido inválido";
    };

    document.getElementById('ej5').innerHTML = menorActivoJubilado;

    // 6. Crea un programa que lea el año que es y te diga si es bisiesto o no ( ayuda: modulo 4 de el numero es 0)
    let anyoActual = parseInt(prompt('Ingrese el año actual:'));
    let esBisiesto;

    if (anyoActual % 4 == 0) {
        esBisiesto = "Es un año bisiesto";

        if (anyoActual % 100 == 0) {

            if (anyoActual % 400 == 0) {
                esBisiesto = "Es un año bisiesto";
            } else {
                esBisiesto = "No es un año bisiesto";
            }
        }
    } else {
        esBisiesto = "No es un año bisiesto";
    };

    document.getElementById('ej6').innerHTML = esBisiesto;

    /*7. Crea un programa que leyendo la variable window.location.href y sacando sus primeros 4 valores substring(inicio,fin)
    decida si es una pagina local o remota*/
    let url = window.location.href;
    let buscar = (window.location.href).search("//"); // busca la primera coincidencia con el caracter "//"
    let val = url.substring(buscar+2, 4); // almacena los 4 primeros valores después del caracter "//"

    let localRemota = val.includes("www") ? "Es una página remota" : "Es una página local";

    document.getElementById('ej7').innerHTML = localRemota;

    // 8. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio".
    let numCliente = parseInt(prompt('Ingrese su nº de cliente:'));

    let esGanador = numCliente === 1000 ? "Ganaste un premio" : "Cliente nº " + numCliente;

    document.getElementById('ej8').innerHTML = esGanador;

    // 9. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales
    let num1 = parseInt(prompt('Ingrese un primer número:'));
    let num2 = parseInt(prompt('Ingrese un segundo número:'));
    let menor;

    if (num1 < num2) {
        menor = "El número menor es " + num1
    } else {
        menor = "El número menor es " + num2
    };

    document.getElementById('ej9').innerHTML = menor;

    // 10. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. Considerar el caso en que ambos números son iguales
    if (num1 < num2) {
        menor = "El número menor es " + num1
    } else if (num2 < num1) {
        menor = "El número menor es " + num2
    } else if (num1 == num2) {
        menor = "Los números son iguales"
    };

    document.getElementById('ej10').innerHTML = menor;

    /*11. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es
    viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro
    mensaje*/
    let dia = parseInt(prompt('Ingrese un día de la semana (numérico):'));
    let diaSemana;

    switch (dia) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            diaSemana = "Día introducido inválido"
            break;
    };

    document.getElementById('ej11').innerHTML = diaSemana;

    /*12. Escribir un programa que, dado un número entero, muestre su valor absoluto. Nota: para los números positivos su
    valor absoluto es igual al número (el valor absoluto de 52 es 52), mientras que, para los negativos, su valor absoluto
    es el número multiplicado por -1 (el valor absoluto de -52 es 52)*/
    let numEntero = parseInt(prompt('Ingrese un número entero:'));
    let absoluto;
    
    if (numEntero > 0) {
        absoluto = numEntero;
    } else {
        absoluto = (numEntero) * (-1);
    }

    document.getElementById('ej12').innerHTML = absoluto;

    /*13. Solicitar al usuario que ingrese los nombres de dos personas, los cuales se almacenarán en dos letiables. A
    continuación, imprimir “coincidencia” si los nombres de ambas personas comienzan con la misma letra ó si terminan
    con la misma letra. Si no es así, imprimir “no hay coincidencia”*/
    let nombre1 = prompt('Ingrese primer nombre:').toLowerCase();
    let nombre2 = prompt('Ingrese segundo nombre:').toLowerCase();
    let coincidencia;

    // en el método substring el primer caracter determinado no se incluye en la selección
    // desde ANTES del inicio de la cadena (0), almacena una letra
    let primeraL1 = nombre1.substring(0,1); // primera letra nombre 1
    let primeraL2 = nombre2.substring(0,1); // primera letra nombre 2

    // desde el final de la cadena (usando método length), almacena 1 letra
    let ultimaL1 = nombre1.substring(nombre1.length, nombre1.length-1); // ultima letra nombre 1
    let ultimaL2 = nombre2.substring(nombre2.length, nombre2.length-1); // ultima letra nombre 2

    if ((primeraL1 == primeraL2) || (ultimaL1 == ultimaL2)) {
        coincidencia = "Coincidencia";
    } else {
        coincidencia = "No hay coincidencia"
    }

    document.getElementById('ej13').innerHTML = coincidencia;

});