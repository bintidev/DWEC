
document.addEventListener("DOMContentLoaded", function () {

    // Ejercicio 1 Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces con for
    let palabra = prompt('Ingrese una palabra a continuación:');

    for (let i = 1; i <= 10; i++) {

        // ALTERNATIVA A AÑADIR UN NUEVO ELEMENTO
        // para evitar la sobreescritura de contenido se escribe en adición a los que
        // está ya escrito dentro del propio elemento, el nuevo valor/texto
        document.getElementById("ej1").innerHTML = (document.getElementById("ej1").innerHTML + palabra + " ");

    }

    /*
        Ejercicio 2 Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años
        que ha cumplido (desde 1 hasta su edad). (while)
    */
   let edad = parseInt(prompt('Ingrese su edad:'));

   cumplidos = 1;

   while (cumplidos <= edad) {

    if (cumplidos == edad) {

        document.getElementById("ej2").innerHTML = (document.getElementById("ej2").innerHTML + cumplidos);

    } else {

        document.getElementById("ej2").innerHTML = (document.getElementById("ej2").innerHTML + cumplidos + " - ");

    }

    cumplidos++;

   }

   /*
    Ejercicio 3 Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
    todos los números impares desde 1 hasta ese número separados por comas.
   */
    let numEntero = parseInt(prompt('Ingrese un número entero positivo:'));

    for (let i = 1; i <= numEntero; i++) {
        
        if (i % 2 != 0) {

            if (i == numEntero) {

            document.getElementById("ej3").innerHTML = (document.getElementById("ej3").innerHTML + i);

            } else {

                document.getElementById("ej3").innerHTML = (document.getElementById("ej3").innerHTML + i + ", ");

            }
            

        }
        
    }

    /*
        Ejercicio 4 Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla la
        cuenta atrás desde ese número hasta cero separados por comas.
    */
    numEntero = parseInt(prompt('Ingrese otro número entero positivo:'));

    for (let i = numEntero; i >= 0; i--) {

        if (i == 0) {

            document.getElementById("ej4").innerHTML = (document.getElementById("ej4").innerHTML + i);

            } else {

                document.getElementById("ej4").innerHTML = (document.getElementById("ej4").innerHTML + i + ", ");

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
        
        capitalFinal = parseFloat(inversion * (1 + interesAnual) ** i).toFixed(2);
        document.getElementById("ej5").innerHTML = (document.getElementById("ej5").innerHTML + "Año " + i + ": " + capitalFinal + "€ <br>");
        
    }

    /*
        Ejercicio 6 Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo
        rectángulo como el de más abajo, de altura el número introducido.
    */
    let numAsteriscos = parseInt(prompt('Ingrese el número de asteriscos para el triángulo:'))

    for (let i = 1; i <= numAsteriscos; i++) {
             
        document.getElementById("ej6").innerHTML = (document.getElementById("ej6").innerHTML + "*".repeat(i) + "<br>");  
        
    }

    // Ejercicio 7 Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.
    for (let i = 1; i <= 10; i++) {
        
        for (let j = 1; j <= 10; j++) {
            
            document.getElementById("tabla-" + i).innerHTML = (document.getElementById("tabla-" + i).innerHTML + i + " x " + j + " = " + i*j + "<br>");
            
        }
        
        document.getElementById("tabla-" + i).innerHTML = (document.getElementById("tabla-" + i).innerHTML + "<br>");

    }

    /*
        8. Ejercicio 8 Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo
        rectángulo como el de más abajo.
    */
    let base = parseInt(prompt('Ingrese el número para la base del triángulo:'));

    /*for (let i = 1; i <= base; i++) {

        if (i % 2 != 0) {
             
            document.getElementById("ej8").innerHTML = (document.getElementById("ej8").innerHTML + i.repeat(i) + "<br>");  

        }
        
    }*/

    /*
        Ejercicio 9 Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
        pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.
    */
    let psswd = "contraseña";
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
    let primo = false;

    contador = 3;
    if (numEntero == 2) {

        primo = true;

    } else {

        while (numEntero % contador != 0 && contador < numEntero) {

            contador++;
            primo = true;

        }

    }

    let esPrimo = primo ? "El número " + numEntero + " es primo" : "El número " + numEntero + " no es primo";

    document.getElementById('ej10').innerHTML = esPrimo;

});