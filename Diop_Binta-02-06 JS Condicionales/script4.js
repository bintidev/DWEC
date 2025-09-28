
document.addEventListener("DOMContentLoaded", function () {

// 1. copia el siguiente código y ejecutalo
    var nombre;
    var edad;

    nombre = prompt('Ingrese su nombre:');
    edad = prompt('Ingrese su edad:');

    document.getElementById('ej1').innerHTML = "Hola " + nombre + ", así que tienes " + edad;

});