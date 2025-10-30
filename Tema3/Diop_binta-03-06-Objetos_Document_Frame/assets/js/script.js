
/*
    Ejercicio 1. Crea un script que lea dos números con prompt y que cree una ventanas nueva con el tamaño indicado <br>
    Debes usar <code>var subVentana=window.open("nueva.html","nueva","height=800,width=600");</code>
*/
function ejercicio1() {

    /*const colecciones = [document.anchors,  document.applets, document.links, document.forms, document.images, document.scripts, document.styleSheets, document.cookie];
    let lista = document.getElementById("ej1");

    // anchors[]
    for (let i = 0; i < colecciones.length; i++) {

        let elLista = document.createElement("li");

        for (let j in colecciones[i]) {

            elLista.innerHTML += j;

        }

        lista.appendChild(elLista);

    }*/


}

// 2. Muestra las siguientes Propiedades del objeto Document
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

    nombre = prompt('Ingrese su nombre:','');
    alert("Titulo antiguo: " + document.title); // displays "Hello World!"

    document.title = nombre;
    alert("Titulo nuevo: " + document.title); // displays "Goodbye World!"

}

/*
    4. Modifica el código anterior para sustituir los alert por
    document.getElementById("idetiqueta").innerHTML
*/
function ejercicio4() {

    nombre = prompt('Ingrese nuevo titulo:','');
    document.getElementById("ej4").innerHTML = "Titulo antiguo: " + document.title + "<br>";

    document.title = nombre;
    document.getElementById("ej4").innerHTML += "Titulo nuevo: " + document.title;

}

// 5. Haz un ejemplo de window.reload()  añadiendo un botón al anterior ejercicio
function ejercicio5() {

    

}

// 6. Haz un ejemplo de window.replace()  añadiendo un botón al anterior ejercicio
function ejercicio6() {



}

// 7. ¿Que diferencia hay entre replace y assign?
function ejercicio7() {
    
    

}

// Ejercicio 8. Usa este código para observar el uso De  clearInterval y  setInterval
function ejercicio8() {

    

}

// 9. Copia  un script que te  cargue las coordenadas usadas por muestre las siguientes propiedades del objeto location
function ejercicio9() {

    

}

// 10. Modifica dicho script con assign para que te cargue el mapa de google maps
function ejercicio10() {

    


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