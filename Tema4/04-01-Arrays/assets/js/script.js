
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

/*
    Ejercicio 2. Realiza un ejercicio que te cree un array con 50 números random (Math.random) enteros del uno
    al 10 con un bucle y que te los ordene de mayor a menor y te calcule la moda (elemento que mas se
    repite ) y la mediana
*/
function ejercicio2() {

    const propiedades = ["domain", "lastModified", "readyState", "referrer", "title", "URL"];
    const descripcion = [
                            "Cadena que contiene el nombre de dominio del servidor que cargó el documento.",
                            "Devuelve la fecha y hora de la última modificación del documento.",
                            "Devuelve el estado de carga del documento actual.",
                            "Cadena que contiene la URL del documento desde el cuál llegamos al documento actual.",
                            "Devuelve o ajusta el título del documento.",
                            "Devuelve la URL completa del documento."
                        ]

    mostrarPropiedades(propiedades, descripcion, "ej2");

}

// 3. Ejecuta el siguiente código para observar como podemos cambiar el titulo de la pagina
function ejercicio3() {

    let nombre = prompt('Ingrese su nombre:','');
    alert("Titulo antiguo: " + document.title); // muestra el titulo de la pagina antes de modificarlo

    document.title = nombre;
    alert("Titulo nuevo: " + document.title); // muestra el tittulo de la pagina tras la modificacion

}

/*
    4. Modifica el código anterior para sustituir los alert por
    document.getElementById("idetiqueta").innerHTML
*/
function ejercicio4() {

    let nombre = prompt('Ingrese nuevo titulo:','');
    document.getElementById("ej4").innerHTML = "Titulo antiguo: " + document.title + "<br>";

    document.title = nombre;
    document.getElementById("ej4").innerHTML += "Titulo nuevo: " + document.title;

}

// 5. Ejercicio Usa getElementById()para acceder a un elemento identificado por el id escrito entre paréntesis.
function ejercicio5() {

    let nombre = prompt('Ingrese su nombre:','');
    document.getElementById("ej5").innerHTML = `Hola, ${nombre}!!`;

}

/*
    6. Ejercicio Usa getElementsByName().InnerElement para acceder a un elemento identificado por el id escrito
    entre paréntesis.
*/
function ejercicio6() {

    let nombre = prompt('Ingrese su nombre:','');
    document.getElementById("ej6.1").innerHTML = `¿Te llamas ${nombre}?`;
    document.getElementById("ej6.2").innerHTML = `Encantadx de conocerte ${nombre} 😊`;

}

/*
    7. Ejecuta el siguiente código para ver como se Usa getElementsByName().InnerHTML para acceder a un
    elemento identificado por el id escrito entre paréntesis.
*/
function ejercicio7() {
    
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

}

// 9. Modifica el siguiente código para ver el contenido de la etiqueta que se le indique
function ejercicio9() {

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

function mostrarPropiedades(prop, desc, idEj) {

    for (let i = 0; i < prop.length; i++) {

        let listElement = document.createElement("li");
        let definicionList = document.createElement("dl");
        let deficnicionDato = document.createElement("dd");

        resaltado.innerHTML = definicionList;
        definicionList.innerHTML = prop[i];
        deficnicionDato.innerHTML = desc[i];

        definicionList.appendChild(deficnicionDato);
        listElement.appendChild(definicionList);

        document.getElementById(idEj).appendChild(listElement);

    }

}

// 
/*function recorreHtmlColl(coleccion) {

    

}*/