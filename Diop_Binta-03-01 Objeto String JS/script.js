document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Toma una entrada con window.prompt() y muestra su tamaño
    let cadena1 = window.prompt('Ingrese una cadena:');

    document.getElementById("ej1").innerHTML = "Longitud de la cadena: " + cadena1.length;

    // 2. Toma una entrada con window.prompt() y nos muestre el caracter que esta en la mitad con charAt()
    let cadena2 = window.prompt('Ingrese otra cadena:');
    let caracterCentral = parseInt((cadena2.length) / 2);

    document.getElementById("ej2").innerHTML = "Caracter en el medio de la cadena: " + cadena2.charAt(caracterCentral);

    // 3. Modifica el anterior para que muestre tambien su codigo Unicode
    // no se modifica como tal, sino que se implementan los cambios a este ejercicio
    document.getElementById("ej3").innerHTML = document.getElementById("ej2").innerHTML + " - Caracter Unicode: " + cadena2.charCodeAt(caracterCentral);

    // 4. Modifica el primero anterior para que muestre tambien su codigo Unicode
    // igual que el caso anterior
    document.getElementById("ej4").innerHTML = document.getElementById("ej1").innerHTML + " - Caracter Unicode del primer caracter: " + cadena1.charAt(0);

    // 5. Toma dos entradas con window.prompt() y unelas
    let entrada1 = window.prompt('Ingrese un texto cualquiera:');
    let entrada2 = window.prompt('Ingrese otro texto cualquiera:');
    let union = entrada1.concat(entrada2);

    document.getElementById("ej5").innerHTML = "Resultado de la concatenación de mabos textos: " + union;

    // 6. Toma una numero (si no es un numero da error) y muestra su carácter unicode asociado. FromCharCode()
    let numero = parseInt(window.prompt('Ingrese un número:'));

    while (isNaN(numero)) { // sigue pidiendo número mientras el valor introducido no sea numerico (is Not a Number)

        numero = parseInt(window.prompt('Error, valor no numérico. Ingrese un número:'));

    }

    let unicodeNum = numero.toString().charCodeAt(0); // 0 porque es un único caracter

    document.getElementById("ej6").innerHTML = "Caracter Unicode asociado al número: " + unicodeNum;

    // 7. Toma dos entradas con window.prompt() y que se busque la primera aparicion de la primera entrada en la segunda con indexOf()
    entrada1 = window.prompt('Ingrese una primera entrada:');
    entrada2 = window.prompt('Ingrese una segunda entrada:');

    let aparicion = entrada1.charAt(0); // almacena el primer caracter de "entrada1"
    let buscador = entrada2.indexOf(aparicion); // busca en "entrada2" la posición del caracter extraído de "entrada1" si es que existe
    let resultado;

    if (buscador < 0) { // en caso de haber recorrido toda la cadena y no encuentre la aparición en la segunda entrada

        resultado = "No se han encontrado coincidencias";

    } else {

        resultado = "Índice de la primera aparición de la primera entrada dentro la segunda entrada: " + buscador;

    }

    document.getElementById("ej7").innerHTML = resultado;

    // 8. Toma dos entradas con window.prompt() y que se busque la ultima aparición de la primera entrada en la segunda con lastIndexOf()
    entrada1 = window.prompt('Ingrese primera entrada:');
    entrada2 = window.prompt('Ingrese segunda entrada:');

    aparicion = entrada1.charAt(entrada1.length - 1); // almacena el último caracter de "entrada1"
    buscador = entrada2.lastIndexOf(aparicion); // busca la última aparición del caracter de "entrada1" dentro de "entrada2"

    if (buscador < 0) {

        resultado = "No se han encontrado coincidencias";

    } else {

        resultado = "Índice de la última aparición de la primera entrada dentro la segunda entrada: " + buscador;

    }

    document.getElementById("ej8").innerHTML = resultado;

    /*
        9. Ejecuta el siguiente codigo y explica que hace la variable expresion y hallado match() Busca una coincidencia
        entre una expresión regular y una cadena y devuelve las coincidencias o null si no ha encontrado nada.
    */
    let cadena = "Los temas son tema 1, tema 3, tema 5 y tema 6";
    //expresion = /(capítulo \d+(\.\d)*)/i;
    expresion = /(tema \d+)/i;
    hallado = cadena.match(expresion);
    document.getElementById("ej9").innerHTML = cadena + "<br> expresion en " + hallado[1];

    // explicación
    document.getElementById("ej9").innerHTML += "<br><br>" + "La variable expresion almacena <var>" + expresion + "</var> "
                                                + "que indica lo siguiente: busca la palabra tema dentro de la cadena "
                                                + "y que le siga un número, aunque sea una sola aparición; por otro lado "
                                                + "hallado almacena <var>" + hallado + "</var> almacena la primera coincidencia "
                                                + "encontrada entre la expresión regular y la cadena <br><br>";

    // prueba propia
    cadena = "Esta es mi 1a prueba de búsqueda de coincidencias... con expresiones regulares";
    expresion = /(es mi \d*a prueba)/i;
    hallado = cadena.match(expresion);
    document.getElementById("ej9").innerHTML += cadena + "<br> expresion en " + hallado[1];

    // 10. Toma dos entradas con window.prompt() y que se reemplace la primera en la segunda replace()
    /*entrada1 = window.prompt('Ingrese primera entrada:');
    entrada2 = window.prompt('Ingrese segunda entrada:');*/

    let reemplazo = entrada2.replace(entrada1);

    // 11. search() Busca una subcadena en la cadena y devuelve la posición dónde se encontró.
    cadena = window.prompt('Ingrese una cadena de texto:');
    let subCadena = window.prompt('Ingrese la subcadena a buscar:');
    let subcadPos = cadena.search(subCadena);

    if (subcadPos < 0) {

        resultado = "No se han encontrado coincidencias";

    } else {

        resultado = "Subcadena a buscar: " + cadena + " - Encontrada en la posición " + subcadPos;

    }

    document.getElementById("ej11").innerHTML = resultado;

});