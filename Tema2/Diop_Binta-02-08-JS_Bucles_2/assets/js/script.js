document.addEventListener ("DOMContentLoaded", function () {

    /*
        Ejercicio 1. Escribir un programa que cree muestre todos los elementos de este array con for of
        const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ];
        en una lista html con color verde.
    */
    const arr1 = ["Málaga", "Sevilla", "Córdoba", "Huelva", "Cádiz", "Almería", "Granada" ];

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
        boton.addEventListener("click", function () {
            alert("La ciudad más bonita es " + arr1[i]);
        }); // evento "click" y no onclick. se debe pasar el evento a través de una función
        formulario.appendChild(boton); // añade el elemento al final del formulario

    }

    /*
        Ejercicio 6. Escribe un programa que dibuje la frase "hola que tal" 10 veces cada vez mas pequeña ...
        puedes usar algo como document.write(&lt;p style="font-size: "+i+"px"> hola que tal &lt;p>);
    */
    for (let i = 1; i <= 10; i++) {
        
        let texto = document.createElement("p");
        texto.innerHTML = "hola que tal";
        texto.style.fontSize = (20 - i + "px");
        document.getElementById("ej6").appendChild(texto);
        
    }

    /*
        Ejercicio 7. Copia este codigo y ejecutalo modificalo para hacerlo con un while y un do loop
    */
    function howMany(selectObject) {

        let numberSelected = 0;
        let i = 0; // declaración de contador

        do {

            // .options -> atributo que representa las opciones de un elemento select
            // .selected -> atributo que representa si está seleccionado
            if (selectObject.options[i].selected) { // comprueba que la opción leída está seleccionada

                    numberSelected++; // de ser así aumenta en uno la cantidad de opciones seleccionadas
            }
            i++; // aumenta en uno para leer la siguiente opción

        } while (i < selectObject.options.length); // se repite el proceso por cada opción del elemento <select>

        /*for (let i = 0; i < selectObject.options.length; i++) {

            if (selectObject.options[i].selected) {

                numberSelected++;
            }
        }*/

        return numberSelected;
    }

    let btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        alert("Número de opciones seleccionadas: " + howMany(document.selectForm.musicTypes));
    });

    /*
        Ejercicio 8. un bucle para pintar esta figura usando una tabla que ponemos de fondo el color adecuado la
        tabla debe tener estos valores (pista es un array 3x3)
    */
    let rgb = [
                    "#0000FF", "#00FF00", "#FF0000",
                    "#FF0000", "#0000FF", "#00FF00",
                    "#00FF00", "#FF0000", "#0000FF"
                ];

    tabla = document.getElementById("ej8");

    let indice = 0; // indice para recorrer la tabla

    for (let i = 0; i < 3; i++) { // 3 filas
        
        let fila = document.createElement("tr"); // nueva fila por iteración
        

        for (let j = 0; j < 3; j++) { // 3 columnas
            
            let columna = document.createElement("td"); // nueva columna dentro de fila
            columna.style.backgroundColor = rgb[indice]; // colorear con color correspondiente
            fila.appendChild(columna); // insertar columna dentro de la fila
            indice++; // avanza posición en el array
            
        }

        tabla.appendChild(fila); // inserta la fila en la tabla
        
    }

    /*
        Ejercicio 9. Modifica el anterior para crear esta figura (PISTA: es un array 6x6 y se
        usan los colores ("f0f","ff0", "0ff")
    */
    let colores1 = [
                        "#f0f", "#f0f", "#f0f", "#f0f", "#f0f", "#f0f",
                        "#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0",
                        "#ff0", "#0ff", "#0ff", "#0ff", "#0ff", "#ff0",
                        "#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0",
                        "#f0f", "#f0f", "#f0f", "#f0f", "#f0f", "#f0f"
                    ];

    tabla = document.getElementById("ej9");

    indice = 0; // indice para recorrer la tabla

    for (let i = 0; i < 5; i++) { // 5 filas
        
        let fila = document.createElement("tr"); // nueva fila por iteración
        

        for (let j = 0; j < 6; j++) { // 6 columnas
            
            let columna = document.createElement("td"); // nueva columna dentro de fila
            columna.style.backgroundColor = colores1[indice]; // colorear con color correspondiente
            fila.appendChild(columna); // insertar columna dentro de la fila
            indice++; // avanza posición en el array
            
        }

        tabla.appendChild(fila); // inserta la fila en la tabla
        
    }

    /*
        Ejercicio 10. Modifica el anterior para crear esta figura (PISTA: es un
        array 6x8y se usan los colores ("f0f","ff0", "0ff")
    */
    let colores2 = [
                        
                        "#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0",
                        "#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0",
                        "#f0f", "#f0f", "#f0f", "#f0f", "#f0f", "#f0f",
                        "#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0",
                        "#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0",
                        "#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0",
                        "#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0",
                        "#ff0", "#f0f", "#ff0", "#ff0", "#f0f", "#ff0",
                        "#f0f", "#ff0", "#ff0", "#ff0", "#ff0", "#f0f",
                        "#f0f", "#ff0", "#ff0", "#ff0", "#ff0", "#f0f",
                    ];

    tabla = document.getElementById("ej10");

    indice = 0; // indice para recorrer la tabla

    for (let i = 0; i < 9; i++) { // 9 filas
        
        let fila = document.createElement("tr"); // nueva fila por iteración
        

        for (let j = 0; j < 6; j++) { // 6 columnas
            
            let columna = document.createElement("td"); // nueva columna dentro de fila
            columna.style.backgroundColor = colores2[indice]; // colorear con color correspondiente
            fila.appendChild(columna); // insertar columna dentro de la fila
            indice++; // avanza posición en el array
            
        }

        tabla.appendChild(fila); // inserta la fila en la tabla
        
    }

});