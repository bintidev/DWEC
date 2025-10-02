
// 21. Usa la función alert para enseñar el mensaje holamundo
document.addEventListener("DOMContentLoaded", function () {
    alert("hola Mundo");


    // 22. En el un archivo y declara varias variables en una sola linea
    var v1; let v2; const v3 = 0;

    // 25. Usa la función typeof para mostrar el tipo de los códigos
    // objeto
    let coche = {
        marca: "Toyota",
        modelo: "Corolla",
        arrancar: () => {
            console.log("coche arrancado")
        }
    };

    // array
    const frutas = new Array("sandía", "melón", "melocotón");

    // función
    function saludo() {
        console.log("hola!")
    };

    const tipos = [typeof('holamundo'), typeof(-82.6), typeof(null), typeof(coche), typeof(frutas), typeof(saludo)];

    for (let i = 0; i < tipos.length; i++) {

        let bloque = document.getElementById('ej25'); // selecciona el elemento HTML con el id especificado
        let elemento = document.createElement("li"); // crea un nuevo elemento de lista en el documento HTML
        elemento.innerHTML = tipos[i]; // el contenido del elemento de lista será el tipo leído del array "tipos"
        bloque.appendChild(elemento); // añadimos cada nuevo elemento al final como hijo de la lista

    };

    // 26. Ejecuta estos datos y muestralos en un documento htm
    var a = true;
    var b = "hola";
    var c = 1;

    // array para almacenar los datos y operaciones
    const datos = [a, b, c, 4+4, "4"+4, a+c, b+c, (2.9e3)+1, (2.9e3)+b, (2.9e3)+a]

    // bucle para insertar los datos en el elemento correspondiente del HTML
    x = 1; // parte numérica del id (ej26_x)
    for (let i = 0; i < datos.length; i++) {

        document.getElementById('ej26_' + x).innerHTML = datos[i];
        x++;

    };

    /*
        27. Usa la función parseFloat y parseInt para convertir explícitamente los valores 2.9e3, 30.1e-3,
        0,000000004 , 0,6, 3000000 , 301231000
    */
    const flotantes = [parseFloat(2.9e3), parseFloat(30.1e-3), parseFloat(0.000000004), parseFloat(0.6), parseFloat(3000000), parseFloat(301231000)];
    const enteros = [parseInt(2.9e3), parseInt(30.1e-3), parseInt(0.000000004), parseInt(0.6), parseInt(3000000), parseInt(301231000)];

    for (let f = 0; f < flotantes.length && f < enteros.length; f++) { // uso la misma variabl para recorrer los dos arrays simultáneamente

        let bloque2 = document.getElementById('ej27'); // selecciona el elemento HTML con el id especificado
        let elemento2 = document.createElement("li"); // crea un nuevo elemento de lista en el documento HTML
        elemento2.innerHTML = flotantes[f] + " - " + enteros[f]; // el contenido del elemento de lista será el tipo leído del array "tipos"
        bloque2.appendChild(elemento2); // añadimos cada nuevo elemento al final como hijo de la lista

    };

    // 28. Usa la función length para hallar el tamaño de las cadenas "123456"
    let cadena = "123456";
    document.getElementById('ej28').innerHTML = cadena.length;

    // 29. Declara varias variables con const e intenta cambiarlas y visualizalas con un alert que pasa
    const prueba = 45.8;
    const prueba2 = 'B';
    const prueba3 = false;

    prueba = "hoa";
    alert(prueba);

    prueba2 = false;
    alert(prueba2);

    prueba3 = 31;
    alert(prueba3);

    /*
        30. Declara varias variables con var dentro de un bloque if al principio e intenta acceder a ellas para
        mostrarlas dentro del bloque y fuera del bloque con un alert que pasa?
    */
    // PENDIENTE DE ARREGLO

    let control = true;

    if (control) {

            var val1 = "un texto chulo";
            var val2 = true;
            var val3 = 24.0705;

            alert(val1);
            alert(val2);
            alert(val3);

            control = false;

    };

    alert(val1);
    alert(val2);
    alert(val3);

    /*
        31. Realiza el mismo ejercicio anterior pero con varias variables con let dentro de un bloque if . Se
        pueden ver el contenido de las variables.
    */
    // PENDIENTE DE ARREGLO
    if (control) {

        let val1_2 = "otro texto chulo";
        let val2_2 = false;
        let val3_2 = 25.0510;

        alert(val1_2);
        alert(val2_2);
        alert(val3_2);

        control = false;
    };

        alert(val1_2);
        alert(val2_2);
        alert(val3_2);
});