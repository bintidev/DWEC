

/*
    Ejercicio 1.Crea una función Ej1Trigonometica que se le pase dos parametros 
    1)un número que es angulo en grados 
    2)un valor : cos, sen o tan
    la función debe pasar el valor a radianes y devolver el resultado dependiendo del parámetro la operación 
    correcta
    •cos→ coseno
    •sen → seno
    •tan → tangente
    •Lo tienes que pasar sabiendo las funciones  solo admiten Radianes (PI's) y que 180º = PI
*/
function ejercicio1Trigonometica() {

    let angulo = parseFloat(window.prompt("Introduce un número correspondiente a los grados:"));
    let valor = window.prompt("Escoja la operación a realizar (cos, sen, tan):");

    let radianes = (angulo / 180) * Math.PI;
    let resultado;

    switch (valor) {
        case 'cos':
            resultado = Math.cos(radianes);
            break;

        case 'sen':
            resultado = Math.sin(radianes);
            break;
    
        case 'tan':
            resultado = Math.tan(radianes);
            break;
            
        default:
            resultado = 'Operación propocionada incorrecta';
            break;
    }

    document.getElementById("ej1").innerHTML = `Ángulo: ${angulo}º <br>
                                                Operación seleecionada: ${valor} <br>
                                                Resultado de la conversión a radianes del ángulo: ${resultado.toFixed(3)}`;
        
}

/*
    Ejercicio 2. Crea una función Ej2JS  que le pases una lista de valores y un id y te cree una lista ordenada con 
    ellos escrita en el el id
*/
function ejercicio2(id, txt) {

    // los valores se meten de forma literal en el array
    // y por tanto se recoge como un solo elemento: "texto,texto,texto,texto"

    // SEPARA la cadena, que no se hizo al pasarlo por parametro
    // y ahora cada palabra/caracter es un elemento distinto del array
    let txtSeparados = txt.split(',');

    for (let i = 0; i < txtSeparados.length; i++) {
        
        let listEl = document.createElement("li");
        listEl.innerHTML = txtSeparados[i];
        document.getElementById(id).appendChild(listEl);
        
    }

}

/*
    Ejercicio 3. Modifica el anterior para  que uses parametros rest con un numero indeterminado de parametros
*/
function entradasEjercicio3() {

    const cantInput = window.prompt('¿Cuántos elementos desea introducir en el formulario?');
    const inputs = Array();

    for (let i = 1; i <= cantInput; i++) {
        
        inputs.push(window.prompt('Ingrese texto:'));
        
    }

    for (let i in inputs) {
        ejercicio3('ej3', `${inputs[i]}`,);
    }

}

function ejercicio3(id, ...arr) {

    for (let i = 0; i <= arr; i++) {
        
        let listEl = document.createElement("li");
        listEl.innerHTML = arr[i];
        document.getElementById(id).appendChild(listEl);
        
    }

}

// Ejercicio 4. Crea una función anónima que calcule el triple de un numero y asigna lo a una variable y ejecutalo.
let triple = function (n) { return `El triple de ${n} es ${n * 3}`; }

/*
    Ejercicio 5. Crea una función anónima con flechas que calcule el cuadrado de un numero y asigna lo a una 
    variable y ejecutalo
*/
let cuadrado = (n) => `El cuadrado del número ${n} es ${Math.pow(n, 2)}`;

// Ejercicio 6. Crea una función anónima con flechas que escriba hola mundo y que se ejecute automáticamente
(() => document.getElementById("ej6").innerHTML = 'Hola mundo! 👋') ();

// Ejercicio 7. Haz una función que recorra el array calculando la media por años y lo muestre.

function ejercicio7(arr) {

    let negrita = (txtarr) => { txtarr.map((e) => '<strong>' + e + '</strong>'); }
    let enNegrita = negrita(arr);

    for (let i in enNegrita) {
        let listEl = document.createElement("li");
        listEl.innerHTML = enNegrita[i];
        document.getElementById('ej7').appendChild(listEl);
    }nerH

}

/*
    Ejercicio 8. Modifica el anterior para Concatenar tres arrays (arrayX ,arrayY, arrayZ) de la siguiente forma:
    X1-Y1-Z1-X2-Y2-Z2-X3-Z3-X4-Z4-X5-Z5-Z6-Z7-Z8
    (ojo que debes usar push para añadir por detras)
    Los vectores tendrán la diferente longitud. (El for es el máximo
    de los tamaños y tienes que hacer un if antes de insertar para
    asegurarte que estas en tamaño)
*/
function ejercicio8() {

    // tomando los valores introducidos y almacenandolos en variables
    arrayX = document.getElementsByName("caja6-1")[0].value;
    arrayY = document.getElementsByName("caja6-2")[0].value;
    arrayZ = document.getElementsByName("caja6-3")[0].value;

    // conversion a array tomando por separacion la coma
    let arrayXstr = arrayX.split(',');
    let arrayYstr = arrayY.split(',');
    let arrayZstr = arrayZ.split(',');

    // para obtener la longitud del array mas grande, en caso de
    // que tuvieran distinto tamaño
    let arrayMayor = Math.max(arrayXstr.length, arrayYstr.length, arrayZstr.length);

    // rellenando el array arraymix con los elementos de arrayXstr, arrayYstr y arrayZstr
    // NOTA: se toma como limite el array mas largo, para que no termine su recorrido
    // con el del arrays mas cortos
    for (let i = 0; i < arrayMayor; i++) {

        // en caso de que no tuvieran el mismo tamaño puede ocurrir que
        // sobrepase el largo de los arrays mas cortos y, por tanto, que
        // no haya mas elementos para leer
        // con este bloque, no se interrumpe el recorrido de los otros aarays
        // de los que aun se puede leer elementos
        if (arrayXstr[i] != undefined) {  arraymix.push(arrayXstr[i]); };
        if (arrayYstr[i] != undefined) {  arraymix.push(arrayYstr[i]); };
        if (arrayZstr[i] != undefined) {  arraymix.push(arrayZstr[i]); };
        
    }

    // contenido y tamaño de array
    let contenidostr = arraymix.join('-');
    let tamanostr = arraymix.length;
    
    // muestra por pantalla
    document.getElementById("explica5").innerHTML = `Contenido del array ${contenidostr}`;
    document.getElementById("tamano5").innerHTML = `El tamaño del array es ${tamanostr}`;

}

// 9. Modifica el siguiente código para ver el contenido de la etiqueta que se le indique
function ejercicio9() {

    

}
