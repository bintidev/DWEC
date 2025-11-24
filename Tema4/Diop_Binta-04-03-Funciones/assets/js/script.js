

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
/*
    recoge la entrada del usuario, en base a la cantidad de elementos
    que pretende pasar por parámetro a la funcion, en un array

    al final, llama a la funcion que mostrara cada elemento del
    array como un elemento de lista
*/
function entradasEjercicio3() {

    const cantInput = window.prompt('¿Cuántos elementos desea introducir en el formulario?');
    const inputs = Array();

    for (let i = 1; i <= cantInput; i++) {
        
        inputs.push(window.prompt('Ingrese texto:'));
        
    }

    for (let i in inputs) {
        ejercicio3('ej3', `${inputs[i]}`);
    }

}

function ejercicio3(id, ...arr) {

    for (let i = 0; i < arr.length; i++) {
        
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
    }

}

/*
    Ejercicio 8. Escribe una función que genere al azar 20 números enteros comprendidos entre 0 y 9. 
    Estos números se deben introducir en un array de 4 filas por 5 columnas y mostrárnoslo como un string que 
    sea una tabla
*/
function ejercicio8() {

    let arr = new Array();

    for (let i = 0; i < 4; i++) {

        arr[i] = new Array(); // cada posicion contiene un array vacio

        for (let j = 0; j < 5; j++) {

            let numAleatorio = Math.round(Math.random() * 9);
            arr[i][j] = numAleatorio;
            
        }

    }

    //document.getElementById("ej8").innerHTML = `${arr.length}`;

    for (let i = 0; i < arr.length; i++) {

        let row = document.createElement("tr");

        for (let j = 0; j < arr[i].length; j++) {

            let col = document.createElement("td");
            col.innerHTML = arr[i][j];
            row.appendChild(col);

        }

        document.getElementById("ej8").appendChild(row);

    }

}

/*
    Ejercicio 9.Crea un función que te dibuje el cuadrado mágico 3x3 en 
    una tabla con el valor de entrada i
    Un cuadrado mágico es una tabla de grado primario donde se dispone de una 
    serie de números enteros en un cuadrado o matriz de forma tal que la suma 
    de los números por columnas, filas y diagonales principales sea la misma.
*/
function ejercicio9() {

    

}

// Ejercicio 10. Haz una función que se le pase un id y un color y cambie su color de texto. Debes usar el siguiente código
function ejercicio10(id, color) {

    let obj = document.getElementById(id); 
    obj.style.color = color;

}

// Ejercicio 12. Haz un ejercicio que calcule el factorial de un numero de manera recursiva.
function ejercicio12Factorial(valor) {

    if (valor == 1) return 1;
    else return valor + ejercicio12Factorial(valor - 1);

}
