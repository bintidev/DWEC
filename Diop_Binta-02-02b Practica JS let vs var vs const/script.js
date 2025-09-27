
// 21. Usa la función alert para enseñar el mensaje holamundo
document.addEventListener("DOMContentLoaded", function () {
    alert("hola Mundo");
});

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
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('ej25').innerHTML = "<li>typeof('hola mundo'): " + typeof("hola mundo") + "</li><br>"
                                                + "<li>typeof(-82.6): " + typeof(-82.6) + "</li><br>"
                                                + "<li>typeof(null): " + typeof(null) + "</li><br>"
                                                + "<li>typeof(coche): " + typeof(coche) + "</li><br>"
                                                + "<li>typeof(frutas): " + typeof(frutas) + "</li><br>"
                                                + "<li>typeof(saludo): " + typeof(saludo()) + "</li><br>"
});

// 26. Ejecuta estos datos y muestralos en un documento htm
var a = true;
var b = "hola";
var c = 1;

// array para almacenar los datos y operaciones
const datos = [a, b, c, 4+4, "4"+4, a+c, b+c, (2.9e3)+1, (2.9e3)+b, (2.9e3)+a]

// bucle para insertar los datos en el elemento correspondiente del HTML
for (let i = 0; i < datos.length; i++) {
    x = 1; // parte numérica del id
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById('ej26_' + x).innerHTML = datos[i];
        x++;
    });

}

/*
    27. Usa la función parseFloat y parseInt para convertir explícitamente los valores 2.9e3, 30.1e-3,
    0,000000004 , 0,6, 3000000 , 301231000
*/
let var1F  = parseFloat(2.9e3); let var1I  = parseInt(2.9e3);
let var2F = parseFloat(30.1e-3); let var2I = parseInt(30.1e-3);
let var3F = parseFloat(0.000000004); let var3I = parseInt(0.000000004);
let var4F = parseFloat(0.6); let var4I = parseInt(0.6);
let var5F = parseFloat(3000000); let var5I = parseInt(3000000);
let var6F = parseFloat(301231000); let var6I = parseInt(301231000);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('ej27').innerHTML = "<li>2.9e3: Float: " + var1F + "- Int: " + var1I + "</li><br>"
                                                + "<li>30.1e-3: Float: " + var2F + "- Int: " + var2I + "</li><br>"
                                                + "<li>0.000000004: Float: " + var3F + "- Int: " + var3I + "</li><br>"
                                                + "<li>0.6: Float: " + var4F + "- Int: " + var4I + "</li><br>"
                                                + "<li>3000000: Float: " + var5F + "- Int: " + var5I + "</li><br>"
                                                + "<li>301231000: Float: " + var5F + "- Int: " + var5I + "</li><br>"
});

// 28. Usa la función length para hallar el tamaño de las cadenas "123456"
let txt = "123456";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('ej28').innerHTML = txt.length;
});

// 29. Declara varias variables con const e intenta cambiarlas y visualizalas con un alert que pasa
const prueba = 45.8;
const prueba2 = 'B';
const prueba3 = false;

document.addEventListener("DOMContentLoaded", function () {
    prueba = "hoa";
    alert(prueba);
});

document.addEventListener("DOMContentLoaded", function () {
    prueba2 = false;
    alert(prueba2);
});

document.addEventListener("DOMContentLoaded", function () {
    prueba3 = 31;
    alert(prueba3);
});

/*
    30. Declara varias variables con var dentro de un bloque if al principio e intenta acceder a ellas para
    mostrarlas dentro del bloque y fuera del bloque con un alert que pasa?
*/
// PENDIENTE DE ARREGLO
/*let c = true;

document.addEventListener("DOMContentLoaded", function () {
    if (c) {

        var val1 = "un texto chulo";
        var val2 = true;
        var val3 = 24.0705;

        alert(val1);
        alert(val2);
        alert(val3);

    };

    alert(val1);
    alert(val2);
    alert(val3);
});*/

/*
    31. Realiza el mismo ejercicio anterior pero con varias variables con let dentro de un bloque if . Se
    pueden ver el contenido de las variables.
*/
// PENDIENTE DE ARREGLO
/*let c = true;

if (c) {

    let val1 = "un texto chulo";
    let val2 = true;
    let val3 = 24.0705;

    alert(val1);
    alert(val2);
    alert(val3);

};

    alert(val1);
    alert(val2);
    alert(val3);*/