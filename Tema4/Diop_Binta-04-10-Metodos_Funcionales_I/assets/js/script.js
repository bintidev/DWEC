
/*
    Ejercicio 1: Inventario de productos en una tienda
    Contexto: Estás manejando el inventario de una tienda y comienzas con un 
    inventario básico de productos.

        1.Descripción: Crea un array con los ID de los productos de la tienda [1, 2, 3, 4, 5] usando Array.of(). Luego:

            •Un cliente devolvió productos dañados, así que usa Array.fill() para 
            marcar los productos en las posiciones 2 a 4 con el código 7 (producto 
            defectuoso).
            •La tienda recibió nuevos productos, así que usa Array.unshift() para 
            agregar dos nuevos IDs (0 y 0) al inventario (nuevos productos).
            •Se vendió el último producto, así que usa Array.pop() para eliminar el 
            último ID.
            •Finalmente, llega un nuevo lote con IDs [10, 20, 30], por lo que debes 
            combinar los arrays con Array.concat().

        2.Resultado esperado:
        [0, 0, 1, 7, 7, 10, 20, 30
*/
function ejercicio1() {

    let info = document.getElementById('ej1');

    let ids = Array.of(1, 2, 3, 4, 5);
    info.innerHTML = `<li>Identificadores de productos: ${ids}</li>`;

    ids.fill(7, 1, 4);
    info.innerHTML += `<li>Productos defectuosos: ${ids}</li>`;

    ids.unshift(0, 0);
    info.innerHTML += `<li>Nuevos productos: ${ids}</li>`;

    ids.pop();
    info.innerHTML += `<li>Vendido último producto: ${ids}</li>`;

    let nuevo = ids.concat(10, 20, 30);
    info.innerHTML += `<li>Nuevo lote con otros IDs: ${nuevo}</li>`;

}

/*
    Ejercicio 2: Lista de empleados
    Contexto: Estás gestionando una lista de empleados de una empresa.

        1.Descripción: Crea un array de empleados a partir de las iniciales de sus 
        nombres usando Array.from() a partir del string "abcdef" (por ejemplo: Ana, 
        Bruno, Carlos, Daniela, Ernesto, Fernanda). Luego:

            •Usa Array.at() para obtener el nombre del tercer y último empleado.
            •El segundo empleado ha cambiado de departamento, así que usa 
            Array.with() para cambiar su inicial por "X".
            •El primer empleado se ha jubilado, por lo que debes eliminarlo con 
            Array.shift().
            •Finalmente, has contratado a dos nuevos empleados, así que usa 
            Array.push() para añadir "Y" y "Z" al final de la lista.

        2.Resultado esperado:
        ['b', 'X', 'd', 'e', 'Y', 'Z']

*/
function ejercicio2() {

    let info = document.getElementById('ej2');

    let iniciales = 'abcde';
    let empleados = Array.from(iniciales);
    info.innerHTML = `<li>Iniciales de empleados: ${empleados}</li>`;

    info.innerHTML += `<li>Nombre del tercer y último empleados: ${empleados.at(0)} - ${empleados.at(2)}</li>`;

    let cambioDepartamento = empleados.with(2, 'X');
    info.innerHTML += `<li>Cambio de inicial del segundo empleado: ${cambioDepartamento}</li>`;

    cambioDepartamento.shift();
    info.innerHTML += `<li>Primer empleado jubilado: ${cambioDepartamento}</li>`;

    cambioDepartamento.push('Y', 'Z');
    info.innerHTML += `<li>Nuevos empleados: ${cambioDepartamento}</li>`;

}

/*
    Ejercicio 3: Gestión de calificaciones
    Contexto: Eres un profesor que está gestionando las calificaciones de los 
    estudiantes.

        1.Descripción: Tienes un array que contiene las calificaciones de los estudiantes 
        [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]. Luego:

            •Algunas calificaciones deben ser ajustadas, así que usa Array.fill() para 
            modificar las calificaciones entre las posiciones 4 y 8 por 99 (ajuste 
            especial).
            •Se agregaron estudiantes a la lista, así que usa Array.unshift() para 
            agregar las calificaciones de tres nuevos estudiantes (5, 6, 7).
            •Un estudiante ha sido transferido y uno más se graduó, por lo que usa 
            Array.pop() y Array.shift() para eliminar las calificaciones del último y 
            primer estudiante respectivamente.

        2.Resultado esperado:
        [6, 7, 10, 11, 99, 99, 99, 99, 15, 16, 17, 18, 19]
*/
function ejercicio3() {

    let info = document.getElementById('ej3');

    let calificaciones = Array.of(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
    info.innerHTML = `<li>Calificaciones de alumnos: ${calificaciones}</li>`;

    calificaciones.fill(99, 2, 6);
    info.innerHTML += `<li>Ajuste de calificaciones: ${calificaciones}</li>`;

    calificaciones.unshift(5, 6, 7);
    info.innerHTML += `<li>Calificaciones de nuevos estudiantes: ${calificaciones}</li>`;

    calificaciones.pop();
    calificaciones.shift();
    info.innerHTML += `<li>Estudiante transferido y graduado eliminadosz: ${calificaciones}</li>`;

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

        if (typeof (obj[i]) == 'object') {

            for (let j in obj[i]) {

                Object.freeze(obj[i][j]);

                if (typeof (obj[i][j]) == 'object') {

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

        if (typeof (obj[i]) == 'object') {

            for (let j in obj[i]) {

                let elemList = document.createElement('li');
                elemList.innerHTML = obj[i][j];
                document.getElementById(id).appendChild(elemList);

                if (typeof (obj[i][j]) == 'object') {

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