

/*
    Ejercicio 1: Crear un Set de Personajes Crea un conjunto (Set) llamado personajesSet e 
    agrega al menos cinco personajes de "El Señor de los Anillos" como elementos.
*/
let shadowFaces = new Set();

shadowFaces.add('Rum');
shadowFaces.add('Emilico');
shadowFaces.add('Shaun');
shadowFaces.add('Rosemary');
shadowFaces.add('Patrick');

/*
    Ejercicio 2: Imprimir Personajes Itera sobre el conjunto personajesSet e imprime cada 
    personaje en la consola.
*/
function ejercicio2() {

    let ld = shadowFaces;

    for (let i of ld) {
        let elemLi = document.createElement("li");
        elemLi.innerHTML = i;
        document.getElementById('ej2').appendChild(elemLi);
    }

}

/*
    Ejercicio 3: Verificar la Existencia de un Personaje Escribe una función que tome el conjunto 
    personajesSet y un nombre de personaje como argumentos, y devuelva true si el personaje 
    está presente en el conjunto, y false en caso contrario.
*/
function ejercicio3(conjunto, personaje) {

    let existe = conjunto.has(personaje) ? `${personaje} es parte de este anime` : `No hay ningún personaje con el nombre${personaje}`;

    document.getElementById('ej3').innerHTML = existe;

}

/*
    Ejercicio 4: Obtener el Número de Personajes Escribe una función que tome el conjunto 
    personajesSet como argumento y devuelva el número total de personajes en el conjunto.
*/
function ejercicio4(conjunto) {

    document.getElementById('ej4').innerHTML = `Cantidad actual de personajes en el conjunto: ${conjunto.size}`;

}

/*
    Ejercicio 5: Agregar Personajes Únicos Escribe una función que tome el conjunto 
    personajesSet y un nuevo personaje como argumentos, y añada el nuevo personaje al conjunto 
    solo si no está presente. Devuelve el conjunto actualizado.
*/
function ejercicio5(conjunto, nuevoPersonaje) {

    if (!conjunto.has(nuevoPersonaje)) {

        conjunto.add(nuevoPersonaje);

    }

    for (let i of conjunto) {
        let elemLi = document.createElement("li");
        elemLi.innerHTML = i;
        document.getElementById('ej5').appendChild(elemLi);
    }

}

/*
    Ejercicio 6: Eliminar Personaje Escribe una función que tome el conjunto personajesSet y 
    un personaje como argumentos, y elimine el personaje del conjunto si está presente. Imprime un 
    mensaje indicando si el personaje fue eliminado o si no estaba en el conjunto.
*/
function ejercicio6(conjunto, personaje) {

    if (conjunto.has(personaje)) {

        conjunto.delete(personaje);
        document.getElementById('ej6').innerHTML = `Se ha borrado el personaje ${personaje}`;

    } else {

        document.getElementById('ej6').innerHTML = `Error. El personaje ${personaje} no existe`;

    }

    for (let i of conjunto) {
        let elemLi = document.createElement("li");
        elemLi.innerHTML = i;
        document.getElementById('listaAct').appendChild(elemLi);
    }

}

/*
    Ejercicio 7: Combinar dos Sets de Personajes Crea dos conjuntos de personajes, set1 y set2, 
    y luego escribe una función que combine ambos conjuntos en uno solo. Asegúrate de que no haya 
    elementos duplicados en el nuevo conjunto.
*/

function ejercicio7() {

    let shadowLords = new Set();

    shadowLords.add('Shirley');
    shadowLords.add('Kate');
    shadowLords.add('John');
    shadowLords.add('Maryrose');
    shadowLords.add('Ricky');

    let shadowHouse = shadowLords.union(shadowFaces);

    for (let i of shadowFaces) {
        let elemLi = document.createElement("li");
        elemLi.innerHTML = i;
        document.getElementById('ej7_faces').appendChild(elemLi);
    }

    for (let i of shadowLords) {
        let elemLi = document.createElement("li");
        elemLi.innerHTML = i;
        document.getElementById('ej7_lords').appendChild(elemLi);
    }

    for (let i of shadowHouse) {
        let elemLi = document.createElement("li");
        elemLi.innerHTML = i;
        document.getElementById('ej7_final').appendChild(elemLi);
    }

}
