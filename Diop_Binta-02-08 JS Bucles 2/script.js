document.addEventListener ("DOMContentLoaded", function () {

    /*
        Ejercicio 1. Escribir un programa que cree muestre todos los elementos de este array con for of
        const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ];
        en una lista html con color verde.
    */
    const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ];

    for (let i of arr1) {

        let lista = document.getElementById('ej1');
        let elemento = document.createElement("li");
        elemento.innerHTML = i;
        lista.appendChild(elemento);

    };

    // Ejercicio 2. Modifica el anterior para que el verde sea un degradado (000000 va a 00ff00)
    const color = ["#000000", "#003300", "#005500", "#007700", "#009900", "#00dd00", "#00ff00"];

    for (let i in arr1) {

        let lista = document.getElementById('ej2');
        let elemento = document.createElement("li");
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
        elemento.innerHTML = i + ": " + Mis_notas[i];
        notas.appendChild(elemento);

    }

    /*
        Ejercicio 4. Sea estos dos arrays
        const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ];
        const arr2 = ["bonita", "Guapa", " Bella", "Pintoresca", "Hermosa" ];
        Usa for of doble para combinarlos todos y mostrarlos en una tabla
    */
    /*const arr2 = ["bonita", "Guapa", " Bella", "Pintoresca", "Hermosa" ];

    id = 1;
    for (let i of arr1) {

        for (let j of arr2) {

            document.getElementById('ej4_' + id).innerHTML = i + " - " + arr2[i][j] + "<br>";
            

        }
        id++;

    }*/

    /*
        Ejercicio 5. Crea un script que cree un formulario con tantos botones como haya en el siguiente
        const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ]; ponle esto dentro de cada boton
    */
    for (let i in arr1) {

        let formulario = document.getElementById('ej5');
        let boton = document.createElement("input");
        
        boton.type = "button";
        boton.value = arr1[i];
        // boton.onclick('alert("La ciudad mas bonita es ' + arr1[i] + '")');
        formulario.appendChild(boton);

    }

});