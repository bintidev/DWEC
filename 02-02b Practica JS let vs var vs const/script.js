
// 


// 22. En el un archivo y declara varias variables en una sola linea
var v1; let v2; const v3 = 0

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
    document.getElementById("ej25").innerHTML = "<li>typeof('hola mundo'): " + typeof("hola mundo") + "</li><br>"
                                                + "<li>typeof(-82.6): " + typeof(-82.6) + "</li><br>"
                                                + "<li>typeof(null):" + typeof(null) + "</li><br>"
                                                + "<li>typeof(coche):" + typeof(coche) + "</li><br>"
                                                + "<li>typeof(frutas):" + typeof(frutas) + "</li><br>"
                                                + "<li>typeof(saludo):" + typeof(saludo()) + "</li><br>"
});

// 26. Ejecuta estos datos y muestralos en un documento htm
var a=true;
var b=hola;
var c=1;

// ej26_1
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('ej26_1').innerHTML = a;
});

// ej21_2
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('ej26_1').innerHTML = b;
});
