
// instanciacion de objetos
// ej1
let estudiante = {

    name: 'Luis',
    grade: 7,
    approved: 'false'

}

// ej2
let controles = {

    volume: 50,
    brightness: 80

}

// ej3
let userSettings = {

    user: {
        name: "Ana",
        preferences: {
            theme: "dark"
        }

    }

}

/*
    Ejercicio 1: Datos de un estudiante
    Crea un objeto:
    { name: "Luis", grade: 7, approved: false }
        1. Congélalo con Object.freeze.
        2. Intenta:
            •cambiar la nota
            •agregar una propiedad age
            •eliminar la propiedad approved
*/
function ejercicio1() {

    mostrarObjeto('ej1_ori', estudiante);

    Object.freeze(estudiante);

    estudiante.grade = 6;
    estudiante.age = 20;
    delete estudiante.approved;

    mostrarObjeto('ej1_mod', estudiante);

}

/*
    Crea un objeto:
    { volume: 50, brightness: 80 }
        1. Súbelo una propiedad contrast = 100 ANTES de sellarlo.
        2. Luego usa Object.seal().
        3. Intenta cambiar los valores existentes.
        4. Intenta agregar otro campo o borrar uno.
*/
function ejercicio2() {

    controles.contrast = 100;

    Object.seal(controles);

    mostrarObjeto('ej2_ori', controles);

    controles.volume = 80;
    controles.brightness = 55;
    controles.saturation = 30;
    delete controles.brightness;

    mostrarObjeto('ej2_mod', controles);

}

/*
    Ejercicio 3: Congelación profunda
    Crea una función deepFreeze(obj) que:
        •congele el objeto con Object.freeze()
        •si detecta valores que son objetos, también los congele recursivamente
    Después:
        1. Aplica deepFreeze() a este objeto:
        {
            user: {
                name: "Ana",
                preferences: {
                theme: "dark"
                }
            }
        }
        2. Intenta cambiar user.name y preferences.theme.
*/
function deepFreeze(obj) {

    Object.freeze(obj);

}


function ejercicio3() {

    mostrarObjeto(userSettings);

    deepFreeze(userSettings);

    userSettings.user.name = 'Rosa';
    userSettings.user.preferences.theme = 'light';

    mostrarObjeto(userSettings);

}

// Ejercicio 4. Crea una función anónima que calcule el triple de un numero y asigna lo a una variable y ejecutalo.
let triple = function (n) { return `El triple de ${n} es ${n * 3}`; }

/*
    Ejercicio 5. Crea una función anónima con flechas que calcule el cuadrado de un numero y asigna lo a una 
    variable y ejecutalo
*/
let cuadrado = (n) => `El cuadrado del número ${n} es ${Math.pow(n, 2)}`;

// Ejercicio 6. Crea una función anónima con flechas que escriba hola mundo y que se ejecute automáticamente
(() => document.getElementById("ej6").innerHTML = 'Hola mundo! 👋')();

// imprime por pantalla los atributos del objeto indicado
function mostrarObjeto(id, obj) {

    for (let i in obj) {

        let elemList = document.createElement('li');
        elemList.innerHTML = obj[i];
        document.getElementById(id).appendChild(elemList);

    }

}