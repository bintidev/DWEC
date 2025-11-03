
/*
    Ejercicio 1. Realiza un ejercicio que te cree un array con 50 números random (Math.random) con un bucle y
    que te calcule el mayor menor, media.
*/
function ejercicio1() {

    let array1 = new Array(50);

    // relleno del array con numeros aleatorios
    for (let i = 0; i < array1.length; i++) {

        let aleatorio = Math.ceil(Math.random() * 50);
        array1[i] = aleatorio;
        
    }

    // min y max -> inicializados con el primer valor del array
    // para luego realizar comparaciones con el resto
    // sum -> suma de los valores almacenados en el array
    let min = array1[0], max = array1[0], sum = 0, media;

    // calculo de valores minimo y maximo, y media de todos los valores en el array
    for (let i = 0; i < array1.length; i++) {

        if (array1[i] < min) {
            min = array1[i];
        }

        if (array1[i] > max) {
            max = array1[i]; 
        }

        sum += array1[i];
        
    }

    media = sum / array1.length;

    document.getElementById("ej1").innerHTML = `Valor mínimo en el array: ${min} <br>
                                                Valor máximo en el array: ${max} <br>
                                                Media de todos los valores almacenados: ${media}`;

}

/*
    Ejercicio 2. Realiza un ejercicio que te cree un array con 50 números random (Math.random) enteros del uno
    al 10 con un bucle y que te los ordene de mayor a menor y te calcule la moda (elemento que mas se
    repite ) y la mediana
*/
function ejercicio2() {

    let array2 = new Array(50);

    // relleno del array con numeros aleatorios
    for (let i = 0; i < array2.length; i++) {

        let aleatorio = Math.ceil(Math.random() * 50);
        array2[i] = aleatorio;
        
    }

    // muestra el contenido del array
    document.getElementById("ej2").innerHTML = `Contenido del array: ${array2} <br>`;

    // calculo de la moda
    let moda = array2[0], mediana;

    // ordenamiento
    array2.sort();
    document.getElementById("ej2").innerHTML += `Array ordenado: ${array2} <br>`;

    // calculo de la mediana
    mediana = array2[array2.length / 2];
    document.getElementById("ej2").innerHTML += `Mediana: ${mediana} <br>`;


}

// Ejercicio 3. Ejecuta este código y observa que hace

// crea dos nuevos arrays vacios
var arrayX = new Array();
var arrayY = new Array();
var arrayZ = new Array();
var arrayVal = new Array();
var array = new Array();
var arraymix = new Array();

function ejercicio3() {

    // almacena la cadena de texto X1,X2,X3,X4,X5
    // [0] -> getElementsByName normalmente devuelve un array
    // al ser el unico valor se accede a el a traves de la posicion 0
    let arrayXstr = document.getElementsByName("caja1")[0].value;
    // separa la cadena en un array, tomando por separador las comas,
    // y almacena el array en arrayX
    arrayX = arrayXstr.split(',');

    // almacena el tamaño de arrayX
    lX = arrayX.length;
    
    // guarda en el array vacion arraymix los elementos de arrayX
    // añadiendolos al final
    for (let i = 0; i < lX; i++) { arraymix.push(arrayX[i]); }

    // une los elementos de arraymix en un string separador por guiones ('-') y los muestra
    let contenidostr = "El contenido del array es " + arraymix.join('-');
    // muestra el tamaño de arraymix
    let tamanostr = "El tamaño del array es " + arraymix.length;
    
    document.getElementById("explica").innerHTML = contenidostr ;
    document.getElementById("tamano").innerHTML = tamanostr;

}

/*
    4. Modifica el código anterior para sustituir los alert por
    document.getElementById("idetiqueta").innerHTML
*/
function ejercicio4() {

    let arrayVal = document.getElementsByName("caja2")[0].value;

    array = arrayVal.split(',');

    l = array.length;

    for (let i = 0; i < l; i++) { arraymix.push(array[i]); }

    let contenidostr = "El contenido del array es " + arraymix.join('-');
    let tamanostr = "El tamaño del array es " + arraymix.length;
    
    document.getElementById("explica2").innerHTML = contenidostr ;
    document.getElementById("tamano2").innerHTML = tamanostr;

}

/*
    Ejercicio 5. Modifica el ejercicio anterior para que pulsando en un
    botón y te los ordene y muestre
*/
function ejercicio5() {

    let arrayVal = document.getElementsByName("caja3")[0].value;

    array = arrayVal.split(',');

    l = array.length;

    for (let i = 0; i < l; i++) { arraymix.push(array[i]); }

    arraymix.sort();

    let contenidostr = "El contenido del array es " + arraymix.join('-');
    let tamanostr = "El tamaño del array es " + arraymix.length;
    
    document.getElementById("explica3").innerHTML = contenidostr ;
    document.getElementById("tamano3").innerHTML = tamanostr;

}

/*
    Ejercicio 6. Dado un vector de enteros, comprobar el mayor, el
    menor y por último la media de todos.
*/
function ejercicio6() {

    let arrayVal = document.getElementsByName("caja4")[0].value;

    array = arrayVal.split(',');

    l = array.length;

    for (let i = 0; i < l; i++) { arraymix.push(parseInt(array[i])); }

    // variables para el calculo
    let min = arraymix[0], max = arraymix[0], sum = 0, media = 0;

    // menor, mayor y suma
    for (let i = 0; i < arraymix.length; i++) {

        if (arraymix[i] < min) {
            min = arraymix[i];
        }

        if (arraymix[i] > max) {
            max = arraymix[i]; 
        }

        sum += arraymix[i];
        
    }

    // calculo de media
    media = sum / arraymix.length;

}

/*
    7. Ejecuta el siguiente código para ver como se Usa getElementsByName().InnerHTML para acceder a un
    elemento identificado por el id escrito entre paréntesis.
*/
function ejercicio7() {
    
    // tomando los valores introducidos y almacenandolos en variables
    arrayX = document.getElementsByName("caja5-1")[0].value;
    arrayY = document.getElementsByName("caja5-2")[0].value;

    // conversiona a array tomando por separacion la coma
    let arrayXstr = arrayX.split(',');
    let arrayYstr = arrayY.split(',');

    // rellenando el array arraymix con los elementos de arrayXstr y arrayYstr
    for (let i = 0; i < arrayXstr.length; i++) {
        
        arraymix.push(arrayXstr[i]);
        arraymix.push(arrayYstr[i]);
        
    }

    // contenido y tamaño de array
    let contenidostr = arraymix.join('-');
    let tamanostr = arraymix.length;
    
    // muestra por pantalla
    document.getElementById("explica4").innerHTML = `Contenido del array ${contenidostr}`;
    document.getElementById("tamano4").innerHTML = `El tamaño del array es ${tamanostr}`;

}

/*
    Ejercicio 8. Modifica el anterior para Concatenar tres arrays (arrayX ,arrayY, arrayZ) de la siguiente forma:
    X1-Y1-Z1-X2-Y2-Z2-X3-Z3-X4-Z4-X5-Z5-Z6-Z7-Z8
    (ojo que debes usar push para añadir por detras)
    Los vectores tendrán la diferente longitud. (El for es el máximo
    de los tamaños y tienes que hacer un if antes de insertar para
    asegurarte que estas en tamaño)
*/
function ejercicio8() {

    // tomando los valores introducidos y almacenandolos en variables
    arrayX = document.getElementsByName("caja6-1")[0].value;
    arrayY = document.getElementsByName("caja6-2")[0].value;
    arrayZ = document.getElementsByName("caja6-3")[0].value;

    // conversion a array tomando por separacion la coma
    let arrayXstr = arrayX.split(',');
    let arrayYstr = arrayY.split(',');
    let arrayZstr = arrayZ.split(',');

    // para obtener la longitud del array mas grande, en caso de
    // que tuvieran distinto tamaño
    let arrayMayor = Math.max(arrayXstr.length, arrayYstr.length, arrayZstr.length);

    // rellenando el array arraymix con los elementos de arrayXstr, arrayYstr y arrayZstr
    // NOTA: se toma como limite el array mas largo, para que no termine su recorrido
    // con el del arrays mas cortos
    for (let i = 0; i < arrayMayor; i++) {

        // en caso de que no tuvieran el mismo tamaño puede ocurrir que
        // sobrepase el largo de los arrays mas cortos y, por tanto, que
        // no haya mas elementos para leer
        // con este bloque, no se interrumpe el recorrido de los otros aarays
        // de los que aun se puede leer elementos
        if (arrayXstr[i] != undefined) {  arraymix.push(arrayXstr[i]); };
        if (arrayYstr[i] != undefined) {  arraymix.push(arrayYstr[i]); };
        if (arrayZstr[i] != undefined) {  arraymix.push(arrayZstr[i]); };
        
    }

    // contenido y tamaño de array
    let contenidostr = arraymix.join('-');
    let tamanostr = arraymix.length;
    
    // muestra por pantalla
    document.getElementById("explica5").innerHTML = `Contenido del array ${contenidostr}`;
    document.getElementById("tamano5").innerHTML = `El tamaño del array es ${tamanostr}`;

}

// 9. Modifica el siguiente código para ver el contenido de la etiqueta que se le indique
function ejercicio9() {

    

}
