
/*
    Ejercicio 1. Crea un script que lea dos números con prompt y que cree una ventanas nueva con el tamaño indicado <br>
    Debes usar <code>var subVentana=window.open("nueva.html","nueva","height=800,width=600");</code>
*/

let subVentana;

function ejercicio1() {

    let ancho = parseInt(window.prompt('Ingrese ancho para la nueva ventana:'));
    let alto = parseInt(window.prompt('Ingrese alto para la nueva ventana:'));

    subVentana = window.open("./personalizada.html", "personalizada", `height = ${alto}, width = ${ancho}`);

}

/*
    Ejercicio 2. Modifica el script anterior para cerrarla
*/
function ejercicio2() {

    subVentana.close();

}

/*
    Ejercicio 3. Modifica el script anterior para comprobar si esta abierta o cerrada
*/
function ejercicio3() {

    let estadoVentana = subVentana.closed ? "La ventana ha sido cerrada" : "La ventana sigue abierta";
    document.getElementById("ej3").innerHTML = estadoVentana;

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
    let ventanaURL = window.open(url, "URL especificada por usuario");

    let estado = ventanaURL.defaultStatus;
    let numFrames = ventanaURL.length;
    let localizacion = ventanaURL.location;
    let nombre = ventanaURL.name;

    document.getElementById("ej4").innerHTML = `<li>Estado de la ventana: ${estado}</li> <br>
                                                <li>Número de frames en ventana: ${numFrames}</li> <br>
                                                <li>URL del fichero: ${localizacion}</li> <br>
                                                <li>Nombre de la ventana: ${nombre}</li>`;

}

/*
    Ejercicio 5. Muestra una ventana emergente de alerta con el mensaje “ALERTA Te estan Robando el banco” y 
    después  Muestra una ventana emergente de alerta con el  mensaje “Estas de acuerdo?” y dependiendo de él 
    Escribe de acuerdo o no.
*/
function ejercicio5() {

    alert('ALERTA!! Te están roabndo el banco');
    let aceptado = confirm('¿Te vas a quedar de brazos cruzados?') ? "Estás de acuerdo. pues vale..." : "No estás de acuerdo. A POR ELLOS";

    document.getElementById("ej5").innerHTML = aceptado;

}

/*
    Ejercicio 6. Usa este código para crear un ejemplo de clearInterval() Resetea el cronómetro ajustado con 
    setInterval() y setInterval( funcion, milisegundos)
*/
var driverIntervalo = null; // declaracion e inicializacion del temporizador

function ejercicio6() {

    let inicio = document.createElement("input");
    inicio.type = "button";
    inicio.value = "Iniciar";
    inicio.addEventListener("click", iniciar());

    let finalizacion = document.createElement("input");
    finalizacion.type = "button";
    finalizacion.value = "Parar";
    finalizacion.addEventListener("click", parar());

    document.getElementById("ej6").appendChild(inicio);
    document.getElementById("ej6").appendChild(finalizacion);

}

function diHola() {

    document.getElementById("ej6").innerHTML += "Hola";

}

function iniciar() {

    if (driverIntervalo == null) { // si el temporizador esta vacio
        driverIntervalo = setInterval(diHola, 100);
        // se crea un nuevo temporizador que ejecutará la función
        // ejercicio6 cada 100 milisegundos
    }
    
}

function parar() {

    clearInterval(driverIntervalo) // resetea el temporizador
    driverIntervalo = null; // lo da el valor vacío

}

/*
    Ejercicio 7. Modificalo para que te muestre la hora cada segundo
*/
function ejercicio7() {
    
    

}