document.addEventListener("DOMContentLoaded", function () {

    /*****************************************************/
    /***** NOTA: Algunas variables son reutilizadas *****/
    /***************************************************/

    // 1. Copia el siguiente código y ejecutalo
    let nombre = prompt('1. Ingrese su nombre:');
    let edad = parseInt(prompt('Ingrese su edad:'));

    document.getElementById('ej1').innerHTML = "Hola " + nombre + ", así que tienes " + edad + " años";

    // 2. Crea un programa que lea una entrada con prompt y la escriba en negrita y h1
    let entrada  = prompt('2. Ingrese un texto cualquiera:');

    document.getElementById('ej2').innerHTML = "<h1><b>" + entrada + "</b></h1>";

    // 3. Crea un programa que lea tu fecha de nacimiento y te diga si eres menor de edad (&lt;18)
    let anyo = parseInt(prompt('3. Ingrese su año de nacimiento:'));

    let esMenor = (2025 - anyo) < 18 ? "Eres menor de edad" : "No eres menor de edad";

    document.getElementById('ej3').innerHTML = esMenor;

    // 4. Crea un programa que lea tu fecha de nacimiento y te diga si eres menor de edad (&lt;18) o en edad activa (>=18)
    edad = parseInt(prompt('4. Ingrese su edad:'));

    let menorActivo = (2025 - anyo) >= 18 ? "Estás en edad activa" : "Eres menor de edad";

    document.getElementById('ej4').innerHTML = menorActivo;

    // 5. Crea un programa que lea tu fecha de nacimiento y te diga si eres menor de edad (&lt;18), en edad activa (>=18) o jubilado (>67)
    edad = parseInt(prompt('5. Ingrese su edad:'));

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
    let anyoActual = parseInt(prompt('6. Ingrese el año actual:'));
    let esBisiesto;

    if (anyoActual % 4 == 0) {
        esBisiesto = "Es un año bisiesto";
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
    let numCliente = parseInt(prompt('8. Ingrese su nº de cliente:'));

    let esGanador = numCliente === 1000 ? "Ganaste un premio" : "Cliente nº " + numCliente;

    document.getElementById('ej8').innerHTML = esGanador;

    // 9. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales
    let num1 = parseInt(prompt('9. Ingrese un primer número:'));
    let num2 = parseInt(prompt('Ingrese un segundo número:'));
    let menor;

    if (num1 < num2) {
        menor = "El número menor es " + num1
    } else {
        menor = "El número menor es " + num2
    };

    document.getElementById('ej9').innerHTML = menor;

    // 10. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. Considerar el caso en que ambos números son iguales
    num1 = parseInt(prompt('10. Ingrese un primer número:'));
    num2 = parseInt(prompt('Ingrese un segundo número:'));

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
    let dia = parseInt(prompt('11. Ingrese un día de la semana (numérico):'));
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
    let numEntero = parseInt(prompt('12. Ingrese un número entero:'));
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
    let nombre1 = prompt('13. Ingrese primer nombre:').toLowerCase();
    let nombre2 = prompt('Ingrese segundo nombre:').toLowerCase();
    let coincidencia;

    // en el método substring el parámetro representa el caracter desde donde se empieza a leer la cadena (este no se incluye en la lectura)
    // desde ANTES del inicio de la cadena (0), almacena una letra
    let primeraL1 = nombre1.substring(0,1); // primera letra nombre 1
    let primeraL2 = nombre2.substring(0,1); // primera letra nombre 2

    // desde el final de la cadena (largo de la cadena), almacena 1 letra (1er caracter desde el final)
    let ultimaL1 = nombre1.substring(nombre1.length, nombre1.length-1); // ultima letra nombre 1
    let ultimaL2 = nombre2.substring(nombre2.length, nombre2.length-1); // ultima letra nombre 2

    if ((primeraL1 == primeraL2) || (ultimaL1 == ultimaL2)) {
        coincidencia = "Coincidencia";
    } else {
        coincidencia = "No hay coincidencia"
    }

    document.getElementById('ej13').innerHTML = coincidencia;

    /*
        14. Crear un programa que permita al usuario elegir un candidato por el cual votar. Las posibilidades son: candidato A por
        el partido rojo, candidato B por el partido verde, candidato C por el partido azul. Según el candidato elegido (A, B ó C)
        se le debe imprimir el mensaje “Usted ha votado por el partido [color que corresponda al candidato elegido]”. Si el
        usuario ingresa una opción que no corresponde a ninguno de los candidatos disponibles, indicar “Opción errónea”.
    */
    let candidato = prompt('14. Ingrese al candidato que desea votar (A, B o C):').toUpperCase();
    let partido;

    if (candidato == 'A') {
        partido = "Usted ha votado al partido rojo";
    } else if (candidato == 'B') {
        partido = "Usted ha votado al partido verde";
    } else if (candidato == 'C') {
        partido == "Usted ha votado al partido azul";
    } else {
        partido = "Opción errónea"   
    };

    document.getElementById('ej14').innerHTML = partido;

    /*
        15. Escribir un programa que solicite al usuario una letra y, si es una vocal, muestre el mensaje “es vocal”. Se debe validar
        que el usuario ingrese sólo un carácter. Si ingresa un string de más de un carácter, informarle que no se puede
        procesar el dato. (si length es mayor que 1 va a 0 si no un if con 5 OR con las vocales)
    */
    let letra = prompt('15. Ingrese una letra cualquiera:').toLowerCase();
    let esCaracterUnico = (letra.length == 1) ? true : false;
    let esVocal;

    if (esCaracterUnico) {

        switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            esVocal = "Es vocal"
            break;
        default:
            esVocal = "No es vocal";
            break;
        };

    } else {
        esVocal = "No se puede procesar el dato";
    };
    
    document.getElementById('ej15').innerHTML = esVocal;

    /*
        16. Hacer un programa que permita saber si un año es bisiesto. Para que un año sea bisiesto debe ser divisible por 4 y no
        debe ser divisible por 100, excepto que también sea divisible por 400.
    */
   anyoActual = parseInt(prompt('16. Ingrese el año actual:'));

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

    document.getElementById('ej16').innerHTML = esBisiesto;

    // 17. Haz el ejercicio 14 con switch
    andidato = prompt('15. Ingrese al candidato que desea votar (A, B o C):').toUpperCase();

    switch (candidato) {
        case 'A':
            partido = "Usted ha votado por el partido rojo"
            break;
        case 'B':
            partido = "Usted ha votado por el partido verde"
            break;
        case 'C':
            partido = "Usted ha votado por el partido azul"
            break;
        default:
            partido = "Opción errónea"
    };

    document.getElementById('ej17').innerHTML = partido;

    // 18. Pide un número y muestra si es par o impar usando el operador ternario.
    let num = parseInt(prompt('18. Ingrese un número:'));
    let parImpar = (num % 2 === 0) ? "Es un número par" : "Es un número impar";

    document.getElementById('ej18').innerHTML = parImpar;

    // 19. Verifica si una persona puede votar (mayor o igual a 18 años) usando el operador ternario.
    edad = parseInt(prompt('19. Ingrese su edad:'));

    let aptoVoto = (edad >= 18) ? "Eres aptx para votar" : "No eres aptx para votar";

    document.getElementById('ej19').innerHTML = aptoVoto;

    // 20. dado dos números, muestra cuál es mayor utilizando el operador ternario
    num1 = parseInt(prompt('20. Ingrese un primer número:'));
    num2 = parseInt(prompt('Ingrese un segundo número:'));

    let mayor = (num1 > num2) ? "El número mayor es " + num1 : "El número mayor es " + num2;

    document.getElementById('ej20').innerHTML = mayor;

    // 21. clasificar una nota usando if
    let nota = parseInt(prompt('21. Ingrese una nota:'));
    let calificacion;

    if (nota >= 0 && nota <= 4) {
        calificacion = "Insuficiente";
    } else if (nota == 5) {
        calificacion = "Suficiente";
    } else if (nota == 6) {
        calificacion = "Bien";
    } else if (nota >= 7 && nota <= 8) {
        calificacion = "Notable";
    } else if (nota >= 9 && nota <= 10) {
        calificacion = "Sobresaliente";
    } else {
        calificacion = "Nota introducida inválida";
    };

    document.getElementById('ej21').innerHTML = calificacion;

    /*
        22. clasifica una nota numérica del 0 al 10 en:
        0-4 → "Insuficiente"
        5-6 → "Suficiente"
        7-8 → "Notable"
        9-10 → "Sobresaliente"
    */
   nota = parseInt(prompt('22. Ingrese una nota:'));

    switch (nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            calificacion = "Insufciente";
            break;
        case 5:
        case 6:
            calificacion = "Suficiente";
            break;
        case 7:
        case 8:
            calificacion = "Notable";
            break;
        case 9:
        case 10:
            calificaion = "Sobresaliente";
            break;
        default:
            calificacion = "Nota inválida";
            break;
    };

    document.getElementById('ej22').innerHTML = calificacion;

    // 23. Indica si un número ingresado es positivo, negativo o cero
    let numero = parseInt(prompt('23. Ingrese un número (positivo, negativo o cero):'));
    let positivoNegativoCero;

    if (numero > 0) {
        positivoNegativoCero = "Es un número positivo";
    } else if (numero < 0) {
        positivoNegativoCero = "Es un número negativo";
    } else {
        positivoNegativoCero = "El número es 0";
    }

    document.getElementById('ej23').innerHTML = positivoNegativoCero;

    // 24. Validar contraseña. Verifica si una contraseña ingresada es igual a "admin123" y muestra un mensaje de acceso concedido o denegado
    let contrasenya = prompt('24. Ingrese la contraseña:');

    let esCorrecta = (contrasenya === "admin123") ? "Acceso concedido" : "Acceso denegado";

    document.getElementById('ej24').innerHTML = esCorrecta;

    // 25. Muestra el nombre del Día de la semana correspondiente a un número del 1 al 7 usando switch
    dia = prompt('25. Ingrese un día de la semana (formato numérico):');

    switch (dia) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
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
            diaSemana = "Día de la semana inválido";
            break;
    };

    document.getElementById('ej25').innerHTML = diaSemana;

    // 26. Crea una Calculadora básica Dado dos números y una operación (+, -, *, /), muestra el resultado usando switch.
    let operando1 = parseFloat(prompt('26. Ingrese el primer operando:'));
    let operando2 = parseFloat(prompt('Ingrese el segundo operando:'));
    let operador = prompt('Ingrese la operación que desea realizar (+, -, *, /):');
    let resultado;

    switch (operador) {
        case '+':
            resultado = operando1 + operando2;
            break;
        case '-':
            resultado = operando1 - operando2;
            break;
        case '*':
            resultado = operando1 * operando2;
            break;
        case '/':
            resultado = operando1 / operando2;
            break;
        default:
            resultado = "No se puede realizar la operación"
    };

    document.getElementById('ej26').innerHTML = resultado;

    /*
        27. crea un Semáforo Dado un color (rojo, amarillo, verde), muestra la acción correspondiente: "Detente",
        "Precaución" o "Avanza"
    */
    let color = prompt('27. Ingrese un color:').toLowerCase();
    let accion;

    switch (color) {
        case 'rojo':
            accion = "Detente";
            break;
        case 'amarillo':
            accion = "Precaución";
            break;
        case 'verde':
            accion = "Avanza";
        default:
            break;
    };

    document.getElementById('ej27').innerHTML = accion;

});