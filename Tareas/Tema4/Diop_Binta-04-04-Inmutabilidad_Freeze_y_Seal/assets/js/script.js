
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

// ej4
let car1 = {

    brand: "Ford",
    year: 2010

}

let car2 = {

    brand: "Ford",
    year: 2010

}

// ej5
let state = {

    settings: {
        notifications: true,
        theme: "light"
    },

    user: {
        name: "Carlos",
        loggedIn: true
    }

};

// ej6
let book = {

    id: 1,
    title: "1984",
    author: "Orwell"

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

    // no permite modificar, elminar o añadir atributos
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

    // solo permite modificar atributos
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
function ejercicio3() {

    mostrarObjetoProfundo('ej3_ori', userSettings);

    deepFreeze(userSettings);

    userSettings.user.name = 'Rosa';
    userSettings.user.preferences.theme = 'light';

    mostrarObjetoProfundo('ej3_mod', userSettings);

}

/*
    Ejercicio 4: Diferencias freeze vs seal
    Crea dos objetos iguales:
    const car1 = { brand: "Ford", year: 2010 };
    const car2 = { brand: "Ford", year: 2010 };
    Haz lo siguiente:
        1. Aplica freeze a car1.
        2. Aplica seal a car2.
        3. Luego intenta:
            •cambiar year en ambos
            •agregar propiedad color
            •eliminar propiedad brand
*/
function ejercicio4() {

    mostrarObjeto('ej4_car1_ori', car1);
    mostrarObjeto('ej4_car2_ori', car2);

    // no permite ningun tipo de cambio sobre el objeto
    Object.freeze(car1);
    // modfica el valor del atributo year
    Object.seal(car2);

    car1.year = 2005;
    car2.year = 2014;

    car1.color = 'beige';
    car2.color = 'pink matte';

    delete car1.brand;
    delete car2.brand;

    mostrarObjeto('ej4_car1_mod', car1);
    mostrarObjeto('ej4_car2_mod', car2);

}

/*
    Ejercicio 5: Estado de una app
    Imagina un estado Redux:
    const state = {
    settings: {
        notifications: true,
        theme: "light"
    },
    user: {
        name: "Carlos",
        loggedIn: true
    }
    };
    1. Congélalo superficialmente con freeze().
    2. Cambia loggedIn y observa que NO cambia.
    3. Cambia theme y observa que SÍ cambia.
    4. Explica por qué ocurre esto.
*/
function ejercicio5() {

    mostrarObjetoProfundo('ej5_ori', state);

    Object.freeze(state);

    state.settings.theme = 'dark';
    state.user.loggedIn = false;

    mostrarObjetoProfundo('ej5_mod', state);

}

/*
    Ejercicio 6: Sellar un modelo
    Crea un objeto:
    const book = { id: 1, title: "1984", author: "Orwell" };
        1. Sella el objeto.
        2. Implementa una función updateBook(obj, newTitle) que:
            •intente cambiar el título
            •intente agregar propiedad pages
            •intente eliminar author
        3. Comprueba qué cambios se aplican.
    */
function ejercicio6() {

    mostrarObjeto('ej6_ori', book);

    Object.seal(book);

    updateBook(book, 'Twilight');

    mostrarObjeto('ej6_mod', book);

}

// congelamiento ("inmutabilidad") profunda
// para objetos compuestos de otros objetos, y sucesivamente
function deepFreeze(obj) {

    for (let i in obj) {

        Object.freeze(obj[i]);

        if (typeof(obj[i]) == 'object') {

            for (let j in obj[i]) {

                Object.freeze(obj[i][j]);

                if (typeof(obj[i][j]) == 'object') {

                    for (let k in obj[i][j]) {

                        Object.freeze(obj[i][j][k]);

                    }

                }

            }

        }

    }

}

// modificar un objeto (especificamente, el objeto book del ej6)
function updateBook(obj, newTitle) {

    obj.title = newTitle;
    obj.pages = 512;
    delete obj.author;

}

// imprime por pantalla los atributos del objeto indicado
function mostrarObjeto(id, obj) {

    for (let i in obj) {

        let elemList = document.createElement('li');
        elemList.innerHTML = obj[i];
        document.getElementById(id).appendChild(elemList);

    }

}

// hace lo mismo que la funcion anterior para los objetos que
// contienen, a su vez, objetos en su interior
function mostrarObjetoProfundo(id, obj) {

    for (let i in obj) {

        if (typeof(obj[i]) == 'object') {

            for (let j in obj[i]) {

                let elemList = document.createElement('li');
                elemList.innerHTML = obj[i][j];
                document.getElementById(id).appendChild(elemList);

                if (typeof(obj[i][j]) == 'object') {

                    for (let k in obj[i][j]) {

                        let elemList = document.createElement('li');
                        elemList.innerHTML = obj[i][j][k];
                        document.getElementById(id).appendChild(elemList);

                    }

                }

            }

        } else {

            let elemList = document.createElement('li');
            elemList.innerHTML = obj[i];
            document.getElementById(id).appendChild(elemList);

        }

    }

}