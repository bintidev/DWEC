document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Toma una entrada con window.prompt() y muestra su tamaño
    let cadena = window.prompt('1. Ingrese una cadena:');

    document.getElementById("ej1").innerHTML = "Longitud de la cadena " + cadena + ": " + cadena.length;

    // 2. Toma una entrada con window.prompt() y nos muestre el caracter que esta en la mitad con charAt()
    let cadena2 = window.prompt('2. Ingrese otra cadena:');
    let caracterCentral = parseInt((cadena2.length) / 2);

    document.getElementById("ej2").innerHTML = "Cadena: " + cadena2 + "<br>Caracter en el medio de la cadena: " + cadena2.charAt(caracterCentral);

    // 3. Modifica el anterior para que muestre tambien su codigo Unicode
    // no se modifica como tal, sino que se implementan los cambios a este ejercicio
    document.getElementById("ej3").innerHTML = document.getElementById("ej2").innerHTML + " - Caracter Unicode: " + cadena2.charCodeAt(caracterCentral);

    // 4. Modifica el primero anterior para que muestre tambien su codigo Unicode
    // igual que el caso anterior
    document.getElementById("ej4").innerHTML = document.getElementById("ej1").innerHTML + " - Caracter Unicode del primer caracter: " + cadena.charCodeAt(0);

    // 5. Toma dos entradas con window.prompt() y unelas
    let entrada1 = window.prompt('5. Ingrese un texto cualquiera:');
    let entrada2 = window.prompt('Ingrese otro texto cualquiera:');
    let union = entrada1.concat(entrada2);

    document.getElementById("ej5").innerHTML = "Texto 1: " + entrada1 + " - Texto 2: " + entrada2 + "<br>Resultado de la concatenación de ambos textos: " + union;

    // 6. Toma una numero (si no es un numero da error) y muestra su carácter unicode asociado. FromCharCode()
    let numero = parseInt(window.prompt('6. Ingrese un número:'));

    while (isNaN(numero)) { // sigue pidiendo número mientras el valor introducido no sea numerico (is Not a Number)

        numero = parseInt(window.prompt('Error, valor no numérico. Ingrese un número:'));

    }

    document.getElementById("ej6").innerHTML = "Caracter Unicode asociado al número " + numero + ": " + String.fromCharCode(numero);

    // 7. Toma dos entradas con window.prompt() y que se busque la primera aparicion de la primera entrada en la segunda con indexOf()
    entrada1 = window.prompt('7. Ingrese una primera entrada:');
    entrada2 = window.prompt('Ingrese una segunda entrada:');

    let aparicion = (entrada1.toLocaleLowerCase()).charAt(0); // almacena el primer caracter de "entrada1"
    let buscador = (entrada2.toLocaleLowerCase()).indexOf(aparicion); // busca en "entrada2" la posición del caracter extraído de "entrada1" si es que existe
    let resultado;

    if (buscador < 0) { // en caso de haber recorrido toda la cadena y no encuentre la aparición en la segunda entrada

        resultado = "No se han encontrado coincidencias";

    } else {

        resultado = "Índice de la primera aparición de la primera entrada dentro la segunda entrada: " + buscador;

    }

    document.getElementById("ej7").innerHTML = "Primera entrada: " + entrada1 + " - Segunda entrada: " + entrada2 + "<br>Primera aparición: "
                                                +  aparicion + "<br>" + resultado;

    // 8. Toma dos entradas con window.prompt() y que se busque la ultima aparición de la primera entrada en la segunda con lastIndexOf()
    entrada1 = window.prompt('8. Ingrese primera entrada:');
    entrada2 = window.prompt('Ingrese segunda entrada:');

    aparicion = (entrada1.toLowerCase()).charAt(entrada1.length - 1); // almacena el último caracter de "entrada1"
    buscador = (entrada2.toLowerCase()).lastIndexOf(aparicion); // busca la última aparición del caracter de "entrada1" dentro de "entrada2"

    if (buscador < 0) {

        resultado = "No se han encontrado coincidencias";

    } else {

        resultado = "Índice de la última aparición de la primera entrada dentro la segunda entrada: " + buscador;

    }

    document.getElementById("ej8").innerHTML = "Primera entrada: " + entrada1 + " - Segunda entrada: " + entrada2 + "<br>Última aparición: "
                                                +  aparicion + "<br>" + resultado;

    /*
        9. Ejecuta el siguiente codigo y explica que hace la variable expresion y hallado match() Busca una coincidencia
        entre una expresión regular y una cadena y devuelve las coincidencias o null si no ha encontrado nada.
    */
    cadena = "Los temas son tema 1, tema 3, tema 5 y tema 6";
    //expresion = /(capítulo \d+(\.\d)*)/i;
    expresion = /(tema \d+)/i;
    hallado = cadena.match(expresion);
    document.getElementById("ej9").innerHTML = cadena + "<br> expresion en " + hallado[1];

    // explicación
    document.getElementById("ej9").innerHTML += "<br><br>" + "La variable expresion almacena <var>" + expresion + "</var> "
                                                + "que indica lo siguiente: busca la palabra tema dentro de la cadena, sin tener "
                                                + "en cuenta mayúscuulas o minúsculas (i), y que le siga un número, aunque sea una sola aparición; por otro lado "
                                                + "hallado almacena <var>" + hallado + "</var> almacena la primera coincidencia "
                                                + "encontrada entre la expresión regular y la cadena <br><br>";

    // prueba propia
    cadena = "Esta es mi 1a prueba de búsqueda de coincidencias... con expresiones regulares";
    expresion = /(es mi \d*a prueba)/i;
    hallado = cadena.match(expresion);
    document.getElementById("ej9").innerHTML += cadena + "<br> expresion en " + hallado[1];

    // 10. Toma dos entradas con window.prompt() y que se reemplace la primera en la segunda replace()
    // ADICIÓN: reemplazar texto coincidente de 1a por 2a en mayúsculas
    entrada1 = window.prompt('10. Ingrese la cadena principal:');
    entrada2 = window.prompt('Ingrese extracto de texto que actuará como reemplazo:');

    // no distingue entre mayúsulas y minúsculas
    let reemplazo = (entrada1.toLowerCase()).replace(entrada2.toLowerCase(), entrada2.toUpperCase());

    document.getElementById("ej10").innerHTML = "Cadena principal: " + entrada1 + " - Reemplazo: " + entrada2 + "<br>Resultado: " + reemplazo;

    // 11. search() Busca una subcadena en la cadena y devuelve la posición dónde se encontró.
    cadena = window.prompt('11. Ingrese una cadena de texto:');
    let subCadena = window.prompt('Ingrese la subcadena a buscar:');
    let subcadPos = (cadena.toLowerCase()).search(subCadena.toLowerCase());

    if (subcadPos < 0) {

        resultado = "No se han encontrado coincidencias";

    } else {

        resultado = "Entrada: " + cadena + " - Subcadena a buscar: " + subCadena + "<br>Primera aparición encontrada en la posición " + subcadPos;

    }

    document.getElementById("ej11").innerHTML = resultado;

    // 12. Toma una entradas con window.prompt() y Extrae (la mitad) de la cadena . slice()
    cadena = window.prompt('12. Ingrese una cadena:');
    let mitadCadena = cadena.slice(cadena.length / 2); // recorta la cadena desde la mitad

    document.getElementById("ej12").innerHTML = "Cadena sin recortar: " + cadena + "<br>Cadena recortada a la mitad: " + mitadCadena;

    /*
        13. Toma una entradas con window.prompt() Divide una cadena en un array de subcadenas separados por
        palabras. split()
    */
    cadena = window.prompt('13. Ingrese una cadena de texto:');
    let separador = window.prompt('Ingrese la palabra/caracter que actuará como separador:');

    let arrayCadena = cadena.split(separador);

    document.getElementById("ej13").innerHTML = "Cadena a separar: " + cadena + " - Separador: " + separador + "<br>";

    for (let i in arrayCadena) {
        
        document.getElementById("ej13").innerHTML += arrayCadena[i] + "<br>";
        
    }
    
    /*
        14. substr() Extrae los caracteres de una cadena, comenzando en una determinada posición y con el número
        de caracteres indicado.
    */
    cadena = window.prompt('14. Ingrese una cadena de texto:');
    let caracteres = parseInt(window.prompt('Ingrese la cantidad de caracteres a extraer:'));
    let posicion = parseInt(window.prompt('Ingrese la posición desde la que desea empezar la extracción'));
    resultado;

    // validación de posición
    if (posicion >= cadena.length) {

        resultado = "Error. Posición fuera de rango";

    } else if ((cadena.length - posicion) < caracteres) {

        resultado = "Error. No es posible extraer dicha cantidad de caracteres";

    } else {

        resultado = "Cadena: " + cadena + " - Cantidad de caracteres a extraer: " + caracteres
                    + " - Posición de inicio: " + posicion + "<br>Resultado: "
                    + cadena.substr(posicion, caracteres);

    }

    document.getElementById("ej14").innerHTML = resultado;

    // 15. substring() Extrae los caracteres de una cadena entre dos índices especificados.
    cadena = window.prompt('15. Ingrese un texto:');
    let pos1 = parseInt(window.prompt('Índice de inicio de extracción:'));
    let pos2 = parseInt(window.prompt('Índice límite de extracción:'));

    if ((pos1 < 0 || pos1 >= cadena.length) || (pos2 < 0 || pos2 >= cadena.length)) {

        resultado = "Error. Una de las posiciones está fuera del rango permitido";

    } else {

        resultado = "Cadena: " + cadena + " - Posición de inicio: " + pos1 + " - Posición límite: " + pos2
                    + "Resultado: " + cadena.substring(pos1, pos2);

    }

    document.getElementById("ej15").innerHTML = resultado;

    /*
        16. Toma una entrada con window.prompt() y ponlo en en minúsculas Y en mayúsculas con toLowerCase()
        toUpperCase()
    */
    cadena = window.prompt('16. Ingrese texto:');
    let minusculas = cadena.toLowerCase();
    let mayusculas = cadena.toUpperCase();

    document.getElementById("ej16").innerHTML = "Cadena original: " + cadena + "<br>Cadena en mayúsculas: "
                                                + mayusculas + " - Cadena en minúsculas: " + minusculas;

    /*
        17. Modifica el ejercicio 7 con split() para ponerlas en negrita la cadena buscada
        ejemplo ‘m’ ‘limon’ resultado li-m-on
    */
    entrada1 = window.prompt('17. Ingrese una primera entrada:');
    entrada2 = window.prompt('Ingrese una segunda entrada:');

    aparicion = (entrada1.toLowerCase()).charAt(0); // almacena el primer caracter de "entrada1"
    buscador = (entrada2.toLowerCase()).indexOf(aparicion); // busca en "entrada2" la posición del caracter extraído de "entrada1" si es que existe

    resultado;

    if (buscador < 0) { // en caso de haber recorrido toda la cadena y no encuentre la aparición en la segunda entrada

        resultado = "No se han encontrado coincidencias";

    } else {

        let partes = entrada2.split(aparicion); // elimina la aparición encontrada de entrada2
        let resaltado = partes.join("<b>" + aparicion + "</b>"); // vuelve a insertarla como 'separador' en negrita
        resultado = "'" + aparicion + "'    '" + entrada2 + "'  resultado " + resaltado;

    }

    document.getElementById("ej17").innerHTML = resultado;

});