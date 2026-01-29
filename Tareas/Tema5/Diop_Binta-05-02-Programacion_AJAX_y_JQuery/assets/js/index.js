function objetoXHR() {
    if (window.XMLHttpRequest) {
        // El navegador implementa la interfaz XHR de forma nativa
        return new XMLHTTPRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                
                DAW Modelo de objetos del documento en javascript. José Luis Comesaña
                
                - 7 -
                
                devolviendo el nuevo objeto creado. */
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) { }//Capturamos el error,
        }
    }
    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
    Emitimos un mensaje de error usando el objeto Error.
    Más información sobre gestión de errores en:
    HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
    */
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////
crearEvento(window, "load", iniciar);
/////////////////////////////////////////////////////////
function iniciar() {
    // Creamos un objeto XHR.
    miXHR = new objetoXHR();
    // Cargamos en el objeto con ID resultados el contenido
    // del fichero datos.txt empleando una petición AJAX.
    cargarSync(document.getElementById("resultados"), "fecha.php");
}
/////////////////////////////////////////////////////////
// Función cargarSync: carga el contenido de la url
// en el objeto que se le pasa como referencia,
// usando una petición AJAX de forma SINCRONA.
/////////////////////////////////////////////////////////
function cargarSync(objeto, url) {
    if (miXHR) {
        alert("Comenzamos la petición AJAX");
        //Si existe el objeto miXHR
        miXHR.open('GET', url, false); //Abrimos la url, false=SINCRONA
        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST
        miXHR.send(null);
        //Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
        textoDIV(objeto, miXHR.responseText);
        alert("Terminó la petición AJAX");
    }
}