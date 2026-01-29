

/*
    Ejercicio 0: Ejecuta cada uno de los ejemplos pero modificando la salida para que lo muestre en
    un div.
*/
function ejercicio0() {

    let block = document.getElementById('ej0');

    // EJEMPLO 1
    let map = new Map();
    map.set('1', 'str1');   // un string como clave
    map.set(1, 'num1');     // un número como clave
    map.set(true, 'bool1'); // un booleano como clave
    // ¿recuerda el objeto regular? convertiría las claves a string.
    // Map mantiene el tipo de dato en las claves, por lo que estas dos son diferentes:
    block.innerHTML += `<b>EJEMPLO 1</b><br>`;
    block.innerHTML += `map.get(1): ${map.get(1)}<br>`; // 'num1'
    block.innerHTML += `map.get('1'): ${map.get('1')}<br>`; // 'str1'
    block.innerHTML += `map.size: ${map.size}<br>`; // 3

    // EJEMPLO 2
    let recipeMap = new Map([
        ['pepino', 500],
        ['tomates', 350],
        ['cebollas', 50]
    ]);

    block.innerHTML += `<br><b>EJEMPLO 2</b><br>`;
    block.innerHTML += `map.get('pepino'): ${recipeMap.get('pepino')}<br>`; // 'num1'
    block.innerHTML += `map.get('tomates'): ${recipeMap.get('tomates')}<br>`; // 'str1'

    // EJEMPLO 3
    let john = { name: "John" };
    // para cada usuario, almacenemos el recuento de visitas
    let visitsCountMap = new Map();
    // john es la clave para el Map
    visitsCountMap.set(john, 123);
    block.innerHTML += `<br><b>EJEMPLO 3</b><br>`;
    block.innerHTML += `visitsCountMap.get(john): ${visitsCountMap.get(john)}<br>`; // 123

    // EJEMPLO 4
    let ben = { name: "Ben" };
    let visitsCountObj = {}; // intenta usar un objeto
    visitsCountObj[ben] = 234; // intenta usar el objeto ben como clave
    visitsCountObj[john] = 123; // intenta usar el objeto john como clave, el objeto ben es reemplazado
    // Esto es lo que se escribió!
    block.innerHTML += `<br><b>EJEMPLO 4</b><br>`;
    block.innerHTML += `visitsCountObj["[object Object]"]: ${visitsCountObj["[object Object]"]}<br>`; // 123

    // EJEMPLO 5
    let mapconjunto = map.set('1', 'str1')
        .set(1, 'num1')
        .set(true, 'bool1');

    block.innerHTML += `<br><b>EJEMPLO 5</b><br>`;
    for (let [clave, valor] of mapconjunto) {
        block.innerHTML += `Clave: ${clave} - Valor: ${valor}<br>`;
    }

    // EJEMPLO 6
    let recipeMap2 = new Map([
        ['pepino', 500],
        ['tomates', 350],
        ['cebollas', 50]
    ]);

    block.innerHTML += `<br><b>EJEMPLO 6</b><br>`;
    // iterando sobre las claves (verduras)
    for (let vegetable of recipeMap2.keys()) {
        block.innerHTML += `Vegetal: ${vegetable}<br>`;
    }
    // iterando sobre los valores (precios)
    for (let amount of recipeMap2.values()) {
        block.innerHTML += `Precio: ${amount}<br>`;
    }
    // iterando sobre las entradas [clave, valor]
    for (let entry of recipeMap2) { // lo mismo que recipeMap.entries()
        block.innerHTML += `Entrada: ${entry}<br>`; // pepino,500 (etc)
    }

    // EJEMPLO 7
    // recorre la función para cada par (clave, valor)
    block.innerHTML += `<br><b>EJEMPLO 7</b><br>`;
    recipeMap2.forEach((value, key) => {
        block.innerHTML += `Clave: ${key} - Valor: ${value}<br>`;
    });

    // EJEMPLO 8
    // array de [clave, valor]
    let map2 = new Map([
        ['1', 'str1'],
        [1, 'num1'],
        [true, 'bool1']
    ]);
    block.innerHTML += `<br><b>EJEMPLO 8</b><br>`;
    block.innerHTML += `map2.get(1): ${map2.get(1)}<br>`; // num1

    // EJEMPLO 9
    let obj = {
        name: "John",
        age: 30
    };

    let map3 = new Map(Object.entries(obj));
    block.innerHTML += `<br><b>EJEMPLO 9</b><br>`;
    block.innerHTML += `map3.get('name'): ${map3.get('name')}<br>`; // John

    // EJEMPLO 10
    let prices = Object.fromEntries([['banana', 1], ['orange', 2], ['meat', 4]]);
    // ahora prices = { banana: 1, orange: 2, meat: 4 }
    block.innerHTML += `<br><b>EJEMPLO 10</b><br>`;
    block.innerHTML += `prices.orange: ${prices.orange}<br>`; // 2

    // EJEMPLO 11
    let map4 = new Map();
    map4.set('banana', 1);
    map4.set('orange', 2);
    map4.set('meat', 4);
    let obj2 = Object.fromEntries(map4.entries()); // hace un objeto simple (*)
    // Hecho!
    // obj = { banana: 1, orange: 2, meat: 4 }
    block.innerHTML += `<br><b>EJEMPLO 11</b><br>`;
    block.innerHTML += `obj2.orange: ${obj2.orange}<br>`; // 2

}

/*
    Ejercicio 1: Crear un Map de Personajes Crea un objeto Map llamado personajes donde las claves 
    sean los nombres de algunos personajes de Los Simpsons y los valores sean las ocupaciones de 
    esos personajes.
*/

let personajes = new Map();

personajes.set('Homero Simpson', 'Empleado de planta nuclear');
personajes.set('Marge Simpson', 'Ama de casa');
personajes.set('Bart Simpson', 'Estudiante');
personajes.set('Lisa Simpson', 'Estudiante');
personajes.set('Abe Simpson', 'Veterano');

/*
    Ejercicio 2: Imprimir Ocupaciones Itera sobre el mapa de personajes e imprime en la consola el 
    nombre del personaje seguido de su ocupación.
*/
function ejercicio2() {

    let block = document.getElementById('ej2');

    for (let [clave, valor] of personajes) {
        block.innerHTML += `Clave: ${clave} - Valor: ${valor}<br>`;
    }

}

/*
    Ejercicio 3: Encontrar Personajes por Ocupación Escribe una función que tome el mapa de 
    personajes y una ocupación como argumentos, y devuelva un array con los nombres de los 
    personajes que tienen esa ocupación.
*/
function ejercicio3(map, ocupacion) {

    let personajesConOcupacion = [];

    for (let [clave, valor] of map) {
        if (valor === ocupacion) {
            personajesConOcupacion.push(clave);
        }
    }

    document.getElementById('ej3').innerHTML = `Personajes con ocupación "${ocupacion}": ${personajesConOcupacion.join(', ')}`;

}

/*
    Ejercicio 4: Modificar Ocupación Escribe una función que tome el mapa de personajes, el nombre 
    de un personaje y una nueva ocupación, y actualice la ocupación del personaje en el mapa.
*/
function ejercicio4(nombrePersonaje, nuevaOcupacion) {

    if (personajes.has(nombrePersonaje)) {
        personajes.set(nombrePersonaje, nuevaOcupacion);
        document.getElementById('ej4').innerHTML = `Se ha actualizado la ocupación de ${nombrePersonaje} a "${nuevaOcupacion}"`;
    } else {
        document.getElementById('ej4').innerHTML = `Error. El personaje ${nombrePersonaje} no existe`;
    }

}

/*
    Ejercicio 5: Contar Ocupaciones Únicas Escribe una función que tome el mapa de personajes y 
    devuelva el número de ocupaciones únicas presentes en el mapa.
*/
function ejercicio6(conjunto) {



}

/*
    Ejercicio 6: Eliminar Personaje Escribe una función que tome el mapa de personajes y el nombre 
    de un personaje, y elimine ese personaje del mapa.bos conjuntos en uno solo. Asegúrate de que no haya 
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
