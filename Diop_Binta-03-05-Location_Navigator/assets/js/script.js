
/*
    Ejercicio 1. Crea un script que lea dos números con prompt y que cree una ventanas nueva con el tamaño indicado <br>
    Debes usar <code>var subVentana=window.open("nueva.html","nueva","height=800,width=600");</code>
*/
function ejercicio1() {

    document.getElementById("ej1").innerHTML += "<br><br> Texto añadido con <code>document.getElementById('idElemento').innerHTML</code>";

}

// Ejercicio 2. Modifica el script anterior para cerrarla
function ejercicio2() {

    const propiedades = ["hash", "host", "hostname", "href", "pathname", "port", "protocol", "search"];
    const descripcion = [
                            "Contiene el nombre del enlace.",
                            "Contiene el nombre del servidor y el número del puerto.",
                            "Contiene el nombre del dominio del servidor.",
                            "Contiene la URL completa.",
                            "Contiene el camino de la URL.",
                            "Contiene el protocolo utilizado.",
                            "Contiene la información pasada por una llamada a un script."
                        ]

    mostrarPropiedades(propiedades, descripcion, "ej2");

}

// 3. Ejecuta el siguiente código y explica que hace assign().
function ejercicio3() {

    location.assign("https://www.iesplayamar.es");

}

/*
    Ejercicio 4. Crea un script que lea una url con prompt y que la abra en una nueva ventana  y que muestre sus 
    siguientes propiedades. 
        •defaultStatus 
        •length
        •location 
        •name
*/
function ejercicio4() {

    let url = window.prompt('Ingrese una URL:');
    
    location.assign(url);

    return location;

}

// 5. Haz un ejemplo de window.reload()  añadiendo un botón al anterior ejercicio
function ejercicio5() {

    let recarga = document.createElement("button");
    recarga.innerHTML = "Recargar";

    recarga.addEventListener("click", function () {
        ejercicio4().reload();
    });

    document.getElementById("ej4").appendChild(recarga);

}

// 6. Haz un ejemplo de window.replace()  añadiendo un botón al anterior ejercicio
function ejercicio6() {

    let reemplazo = document.createElement("button");
    reemplazo.innerHTML = "Reemplazar";

    reemplazo.addEventListener("click", function () {
        ejercicio4().replace();
    });

    document.getElementById("ej4").appendChild(reemplazo);

}

// 7. ¿Que diferencia hay entre replace y assign?
function ejercicio7() {
    
    document.getElementById("ej7").innerHTML += `Mientras <code>assign()</code> crea un nuevo documento,
                                                <code>replace()</code> lo que hace es reemplazar el historial
                                                actual mientras carga la URL.`;

}

// Ejercicio 8. Usa este código para observar el uso De  clearInterval y  setInterval
function ejercicio8() {

    const propiedades = ["appCodeName", "appName", "appVersion", "cookieEnabled", "platform", "userAgent"];
    const descripcion = [
                            "Contiene el en código del navegador.",
                            "Contiene el nombre del cliente.",
                            "Contiene infoirmación sobre la versión del cliente.",
                            "Determina si las cookies están o no habilitadas en el navegador.",
                            "Contiene información sobre la plataforma sobre la que se ejecuta el programa cliente.",
                            "Contiene la cabecera completa del agente enviada a una petición HTTP.",
                        ]


    mostrarPropiedades(propiedades, descripcion, "ej8");

}

// 9. Copia  un script que te  cargue las coordenadas usadas por muestre las siguientes propiedades del objeto location
function ejercicio9() {

    try {
            if (navigator.geolocation.getCurrentPosition(showPosition).GeolocationPositionError != PERMISSION_DENIED)  {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        } catch (e) {
            document.getElementById("ej9").innerHTML = "Geolocation is not supported by this browser.";
        }

    function showPosition(position) {

        document.getElementById("ej9").innerHTML = "Latitude: " + position.coords.latitude + "<br>" +
                                                    "Longitude: " + position.coords.longitude;

    }

}

// 10. Modifica dicho script con assign para que te cargue el mapa de google maps
function ejercicio10() {

    try {
            if (navigator.geolocation.getCurrentPosition(showPosition).GeolocationPositionError != PERMISSION_DENIED)  {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        } catch (e) {
            document.getElementById("ej9").innerHTML = "Geolocation is not supported by this browser.";
        }

    function showPosition(position) {

        location.assign('https://www.google.es/maps/@' + position.coords.latitude + ',' + position.coords.latitude + '15z')

    }


}

function mostrarPropiedades(prop, desc, idEj) {

    for (let i = 0; i < prop.length; i++) {

        let listElement = document.createElement("li");
        let definicionList = document.createElement("dl");
        let deficnicionDato = document.createElement("dd");

        definicionList.innerHTML = prop[i];
        deficnicionDato.innerHTML = desc[i];

        definicionList.appendChild(deficnicionDato);
        listElement.appendChild(definicionList);

        document.getElementById(idEj).appendChild(listElement);

    }

}