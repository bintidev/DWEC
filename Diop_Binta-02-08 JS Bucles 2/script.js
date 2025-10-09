document.addEventListener ("DOMContentLoaded", function () {

    /*
        Ejercicio 1. Escribir un programa que cree muestre todos los elementos de este array con for of
        const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ];
        en una lista html con color verde.
    */
    const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ];

    for (let i of arr1) {

        let lista = document.getElementById('ej1'); // bloque HTML (lista) donde se van a introducir los elementos
        let elemento = document.createElement("li"); // crea un elemento de lista
        elemento.innerHTML = i; // el contenido del item de lista será el valor leído por el array
        lista.appendChild(elemento); // añade al final de la lista

    };

    // Ejercicio 2. Modifica el anterior para que el verde sea un degradado (000000 va a 00ff00)
    const color = ["#000000", "#003300", "#005500", "#007700", "#009900", "#00dd00", "#00ff00"];

    for (let i in arr1) {

        lista = document.getElementById('ej2');
        let elemento = document.createElement("li");
        // el contenido del elemento de lista será un h1 de la provincia de "arr1" con el color leído del array "color"
        elemento.innerHTML = "<h1 style='color: " + color[i] + "'>" + arr1[i] + "</h1>";
        lista.appendChild(elemento);

    };

    /*
        Ejercicio 3. Usa for in para ver todas las asignaturas de este objeto y for of para ver el contenido
        var Mis_notas = { mates: 9, Lengua: 6, Efisica: 5, Quimica: 9, fisica: 5, ingles: 5 };
    */
    var Mis_notas = { Mates: 9, Lengua: 6, Efisica: 5, Quimica: 9, Fisica: 5, Ingles: 5 };

    for (let i in Mis_notas) {

        let notas = document.getElementById('ej3');
        let elemento = document.createElement("li");
        elemento.innerHTML = i + ": " + Mis_notas[i]; // i imprime la clave (asignatura) y Mis_notas[i] imprime el valor (nota)
        notas.appendChild(elemento);

    }

    /*
        Ejercicio 4. Sea estos dos arrays
        const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ];
        const arr2 = ["bonita", "Guapa", " Bella", "Pintoresca", "Hermosa" ];
        Usa for of doble para combinarlos todos y mostrarlos en una tabla
    */
    const arr2 = ["bonita", "Guapa", " Bella", "Pintoresca", "Hermosa" ];

    let tabla = document.getElementById('ej4');

    for (let i of arr1) {

        elemento = document.createElement("td"); // crea una nueva columna por cada ciclo del bucle interno terminado

        for (let j of arr2) {

            // el contenido de lista será la provicia (i) y sus atributos (j)
            // se muestran **TODOS** los atributos por cada provincia
            elemento.innerHTML += i + " - " + j + "<br>";
            tabla.appendChild(elemento);

        }

    }

    /*
        Ejercicio 5. Crea un script que cree un formulario con tantos botones como haya en el siguiente
        const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ]; ponle esto dentro de cada boton
    */
    for (let i in arr1) {

        let formulario = document.getElementById('ej5');
        let boton = document.createElement("input"); // crea un elemento input
        
        boton.type = "button"; // de tipo boton
        boton.value = arr1[i]; // para mostrar el nombre de la provincia como texto para cada boton
        formulario.appendChild(boton); // añade el elemento al final del formulario
        formulario.innerHTML += "<br>"; // salto de línea por cada botón introducido

    }

    boton.addEventListener(onclick, alert('La ciudad más bonita es ' + arr1[i]));

});