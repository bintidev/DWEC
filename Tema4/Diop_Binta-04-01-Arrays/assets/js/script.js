
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

<<<<<<< HEAD
    // calculo de valores minimo y maximo, y media de todos los valores en el arra
=======
    // calculo de valores minimo y maximo, y media de todos los valores en el array
>>>>>>> 2d946ce72628aa367288ed00e33ae643548ae072
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
<<<<<<< HEAD
    repite) y la mediana
*/
function ejercicio2() {

    let array1 = new Array(50);

    // relleno del array con numeros aleatorios
    for (let i = 0; i < array1.length; i++) {

        let aleatorio = Math.ceil(Math.random() * 50);
        array1[i] = aleatorio;
        
    }

    // moda -> inicializados con el primer valor del array
    // mediana -> suma de los valores almacenados en el array
    let min = array1[0], max = array1[0], sum = 0, media;

    // calculo de valores minimo y maximo, y media de todos los valores en el arra
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

// 3. Ejecuta el siguiente código para observar como podemos cambiar el titulo de la pagina
function ejercicio3() {

    let nombre = prompt('Ingrese su nombre:','');
    alert("Titulo antiguo: " + document.title); // muestra el titulo de la pagina antes de modificarlo

    document.title = nombre;
    alert("Titulo nuevo: " + document.title); // muestra el tittulo de la pagina tras la modificacion
=======
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
>>>>>>> 2d946ce72628aa367288ed00e33ae643548ae072

}

/*
    4. Modifica el código anterior para sustituir los alert por
    document.getElementById("idetiqueta").innerHTML
*/
function ejercicio4() {

<<<<<<< HEAD
    let nombre = prompt('Ingrese nuevo titulo:','');
    document.getElementById("ej4").innerHTML = "Titulo antiguo: " + document.title + "<br>";

    document.title = nombre;
    document.getElementById("ej4").innerHTML += "Titulo nuevo: " + document.title;

}

// 5. Ejercicio Usa getElementById()para acceder a un elemento identificado por el id escrito entre paréntesis.
function ejercicio5() {

    let nombre = prompt('Ingrese su nombre:','');
    document.getElementById("ej5").innerHTML = `Hola, ${nombre}!!`;
=======
    let arrayVal = document.getElementsByName("caja2")[0].value;

    array = arrayVal.split(',');

    l = array.length;

    for (let i = 0; i < l; i++) { arraymix.push(array[i]); }

    let contenidostr = "El contenido del array es " + arraymix.join('-');
    let tamanostr = "El tamaño del array es " + arraymix.length;
    
    document.getElementById("explica2").innerHTML = contenidostr ;
    document.getElementById("tamano2").innerHTML = tamanostr;
>>>>>>> 2d946ce72628aa367288ed00e33ae643548ae072

}

/*
<<<<<<< HEAD
    6. Ejercicio Usa getElementsByName().InnerElement para acceder a un elemento identificado por el id escrito
    entre paréntesis.
*/
function ejercicio6() {

    let nombre = prompt('Ingrese su nombre:','');
    document.getElementById("ej6.1").innerHTML = `¿Te llamas ${nombre}?`;
    document.getElementById("ej6.2").innerHTML = `Encantadx de conocerte ${nombre} 😊`;
=======
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
>>>>>>> 2d946ce72628aa367288ed00e33ae643548ae072

}

/*
    7. Ejecuta el siguiente código para ver como se Usa getElementsByName().InnerHTML para acceder a un
    elemento identificado por el id escrito entre paréntesis.
*/
function ejercicio7() {
    
<<<<<<< HEAD
    let numero = parseInt(prompt('Ingrese el numero que deseas selecionar:',''));
    let indice_string = "El " + numero + "o elemento de la lista es ";

    // recoge todos los elementos de lista existentes en el HTML
    const collection = document.getElementsByTagName("li");

    // muestra el texto almacenado en indice_string en el contenido del elemento con id indice
    document.getElementById("indice").innerHTML = indice_string;
    // obtiene un array del contenido de los elementos li del documento
    // y, de estos, busca la posicion del array que se corresponderia con el
    // numero ingresado por el usuario
    document.getElementById("lista").innerHTML = collection[numero - 1].innerHTML;

}

// 8. Modifica el siguiente código para ver el contenido de la etiqueta que se le indique
function ejercicio8() {

    let etiqueta = prompt('Ingrese el contenido que deseas conocer (p,h1,h2,span) que deseas seleccionar:','');

    // almacena un array con el contenido de la/s etiqueta/s, especificada por el usuario,
    // existentes en el documento
    const collection = document.getElementsByTagName(etiqueta);

    document.getElementById("explica").innerHTML = "El contenido de la etiqueta " + etiqueta + " es: ";
    // obtiene el contenido de la primera etiqueta existente en el documento
    document.getElementById("elemento").innerHTML = collection[0].innerHTML; ;    
=======
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
>>>>>>> 2d946ce72628aa367288ed00e33ae643548ae072

}

// 9. Modifica el siguiente código para ver el contenido de la etiqueta que se le indique
function ejercicio9() {

<<<<<<< HEAD
    let numero = prompt('Ingresa el numero de la etiqueta:','');

    // almacena un array con los elementos con el atributo name especificado por el usuario
    // (en este caso de obtiene un array con un unico elemento de name etiquetaN)
    let elements = document.getElementsByName("etiqueta" + numero);
    // recoge el contenido del elemento
    let valorDeEtiqueta = elements[0].value;

    // muestra el resultado dentro de un elemento del documento especificado por id
    document.getElementById("explica2").innerHTML = "El contenido de la etiqueta " + numero + " es: ";
    document.getElementById("elemento2").innerHTML = valorDeEtiqueta;

}
=======
    

}
>>>>>>> 2d946ce72628aa367288ed00e33ae643548ae072
