
document.addEventListener("DOMContentLoaded", function () {

    // Ejercicio 1 Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces con for
    let palabra = prompt('Ingrese una palabra a continuación:');

    for (let i = 1; i <= 10; i++) {

        // ALTERNATIVA A AÑADIR UN NUEVO ELEMENTO
        // para evitar la sobreescritura de contenido se escribe en adición a los que
        // está ya escrito dentro del propio elemento, el nuevo valor/texto
        document.getElementById("ej1").innerHTML += palabra + " ";

    }

    /*
        Ejercicio 2 Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años
        que ha cumplido (desde 1 hasta su edad). (while)
    */
   let edad = parseInt(prompt('Ingrese su edad:'));

   cumplidos = 1; // empezando desde 1

   while (cumplidos <= edad) {

        if (cumplidos == edad) {

            // no poner la coma tras la última edad cumplida mostrada
            document.getElementById("ej2").innerHTML += cumplidos;

        } else {

            document.getElementById("ej2").innerHTML += cumplidos + " - ";

        }

        cumplidos++;

   }

   /*
    Ejercicio 3 Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
    todos los números impares desde 1 hasta ese número separados por comas.
   */
    let numEntero = parseInt(prompt('Ingrese un número entero positivo:'));

    for (let i = 1; i <= numEntero; i++) {
        
        if (i % 2 != 0) { // solo entra por esta rama si i es un numero impar

            if (i == numEntero) {

            document.getElementById("ej3").innerHTML += i;

            } else {

                document.getElementById("ej3").innerHTML += i + ", ";

            }
            

        }
        
    }

    /*
        Ejercicio 4 Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla la
        cuenta atrás desde ese número hasta cero separados por comas.
    */
    numEntero = parseInt(prompt('Ingrese otro número entero positivo:'));

    for (let i = numEntero; i >= 0; i--) { // decremento porque se empieza desde numero mayor

        if (i == 0) {

            document.getElementById("ej4").innerHTML += i;

            } else {

                document.getElementById("ej4").innerHTML += i + ", ";

            }
        
    }

    /*
        Ejercicio 5. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
        número de años, y muestre por pantalla el capital obtenido en la inversión cada año que dura la inversión.
    */
    let inversion = parseInt(prompt('Ingrese la cantidad que desea invertir:'));
    let interesAnual = parseInt(prompt('Ingrese el interés anual:')) / 100;
    let anyos = parseInt(prompt('Ingrese el periodo de tiempo (en años):'))
    let capitalFinal;

    for (let i = 1; i <= anyos; i++) {
        
        capitalFinal = parseFloat(inversion * (1 + interesAnual) ** i).toFixed(2); // metodo .toFixed(2) para mostrar solo 2 decimales
        document.getElementById("ej5").innerHTML += "Año " + i + ": " + capitalFinal + "€ <br>";
        
    }

    /*
        Ejercicio 6 Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo
        rectángulo como el de más abajo, de altura el número introducido.
    */
    let numAsteriscos = parseInt(prompt('Ingrese el número de asteriscos para el triángulo:'))

    for (let i = 1; i <= numAsteriscos; i++) {
             
        document.getElementById("ej6").innerHTML += "*".repeat(i) + "<br>";  // metodo .repeat(i) para mostrar cantidad i de * por linea
        
    }

    // Ejercicio 7 Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.
    for (let i = 1; i <= 10; i++) { // fila de tabla
        
        for (let j = 1; j <= 10; j++) { // "columna" ejemplo: 1 (i) x 2 (j)
            
            document.getElementById("tabla-" + i).innerHTML += i + " x " + j + " = " + i*j + "<br>"; // salto de linea por cada fila de una tabla
            
        }

    }

    /*
        8. Ejercicio 8 Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo
        rectángulo como el de más abajo.
    */
    /*let base = parseInt(prompt('Ingrese el número para la base del triángulo:'));

    for (let i = 1; i <= base; i++) {

        for (let j = 1; j < i; j++) {

            if (j % 2 != 0) {
             
                document.getElementById("ej8").innerHTML += String(j).repeat(i) + "<br>";

            }
            
        }
        
    }*/

    /*
        Ejercicio 9 Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
        pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.
    */
    const psswd = "contraseña";
    let intento;
    
    do {

        intento = prompt('Ingrese la contraseña:');

    } while (intento != psswd);

    document.getElementById('ej9').innerHTML = "Contraseña correcta";

    /*
       Ejercicio 10 Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
        número primo o no. 
    */
    numEntero = parseInt(prompt('Ingrese un número entero cualquiera:'));
    let primo = true;

    contador = 2;
    if (numEntero < 2) { // los numeros menores que 2 no pueden ser primos

            primo = false;

    }

    // el bucle continua mientras el numero sea primo y el contador no sea sea igual o mayor que el numero introducido
    // puesto que todo numero es divisible entre si mismo
    while (primo && contador < numEntero) {
    
        // si el resto de la division del numero entre el siguiente numero es 0
        // el numero deja de ser primo y, por tanto, en la siguiente vuelta se saldria del bucle
        if (numEntero % contador == 0) {

            primo = false;

        }

        contador++; // independientemente de cual sea el caso, el contador se aumenta

    }

    let esPrimo = primo ? "El número " + numEntero + " es primo" : "El número " + numEntero + " no es primo";

    document.getElementById("ej10").innerHTML = esPrimo;

    /*
        Ejercicio 11 Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a una
        las letras de la palabra introducida empezando por la última.
    */
    palabra = prompt('Ingrese una cadena de texto:');

    // i = palabra.length - 1 porque los indices se cuentan desde 0, es decir, 0,1,2,3...
    // por tanto, la posicion de la ultima letra es el largo de la cadena -1
    for (let i = palabra.length - 1; i >= 0; i--) {
        
        document.getElementById("ej11").innerHTML += palabra[i];
        
    }

    /*
        Ejercicio 12 Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre por
        pantalla el número de veces que aparece la letra en la frase.
    */
    let frase = prompt('Ingrese una frase:').toLowerCase(); // no tener en cuenta mayúsculas
    let letra = prompt('Ingrese la letra que desea buscar dentro de la cadena:').toLocaleLowerCase();
    let coincidencias = 0;

    for (let i = 0; i < frase.length; i++) {
        
        if (frase[i] === letra) {

            coincidencias++; // conteo de veces que se encuentra la letra

        }
        
    }

    document.getElementById("ej12").innerHTML = "La letra " + letra + " se encuentra " + coincidencias + " veces en la cadena"

    /*
        Ejercicio 13 Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
        usuario escriba “salir” que terminará.
    */
   let eco;

    do {

        eco = prompt('Ingrese texto:');

        if (eco.toLowerCase() != "salir") {

            document.getElementById("ej13").innerHTML += eco + "<br>";

        }

    } while (eco.toLowerCase() != "salir");

    /*
        Ejercicio 14 Escribir un programa que pregunte al usuario una cantidad a pedir, el interés anual y el
        número de años en el que lo amortizara, y muestre por pantalla las cuotas pagadas durante cada años
        suponiendo que actualizan los intereses cada año.
    */
    let aPedir = parseFloat(prompt('Ingrese una cantidad a pedir:'));
    interesAnual = parseInt(prompt('Ingrese el interés anual:')) / 100;
    anyos = parseInt(prompt('Ingrese el número de años en el que amortizará:'));
    let cuotas;

    for (let i = 1; i <= anyos; i++) {
        
        interesAnual += (10/100);
        cuotas = parseFloat(aPedir * (1 + interesAnual) ** i).toFixed(2);
        document.getElementById("ej14").innerHTML += "Año " + i + ": " + cuotas + "€ <br>";
        
    }

});