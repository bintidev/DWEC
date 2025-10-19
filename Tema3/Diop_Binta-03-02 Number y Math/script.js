

/******************************************************
* Mejora de UX -> ejercicios divididos en funciones
*******************************************************/

let resultado = ''; // ambito global
let numero;
/*
    1. Toma una entrada con window.prompt() y que nos pida la un radio y debemos calcular la circunferencia
    (2*PI*Radio) y el area (PI*Radio2)
*/
function ejercicio1() {

        let radio = parseFloat(window.prompt('Ingrese el radio de la circunferencia:'));
        let perimetro = 2 * Math.PI * radio;
        let area = Math.PI * Math.pow(radio, 2);

        resultado = `Radio de la circunferencia: ${radio} <br>
                    Perímetro: ${perimetro.toFixed(2)} <br>
                    Área: ${area.toFixed(2)}`;

        document.getElementById("ej1").innerHTML = resultado;

}

// 2. Toma dos entradas con window.prompt() y que nos pida los dos catetos y debemos calcular la hipotenusa
function ejercicio2() {

    let cateto1 = parseFloat(window.prompt('Ingrese longitud del primer cateto:'));
    let cateto2 = parseFloat(window.prompt('Ingrese longitud del segundo cateto:'));

    let hipotenusa = Math.sqrt((cateto1 ** 2) + (cateto2 ** 2));

    resultado = `Primer cateto: ${cateto1} - Segundo cateto: ${cateto2} <br>
                Longitud de la hipotenusa: ${hipotenusa.toFixed(2)}`;
    
    document.getElementById("ej2").innerHTML = resultado;

}

/*
    3. Haz un script que nos muestre los siguientes constantes
        1. E --> el número Euler
        2. LN2 --> el logaritmo neperiano de 2
        3. LN10 --> el logaritmo neperiano de 10
        4. LOG2E --> el logaritmo base 2 de E
        5. LOG10E --> el logaritmo base 10 de E
*/
function ejercicio3() {

    const constantesMath = [Math.E, Math.LN2, Math.LN10, Math.LOG2E, Math.LOG10E];
    const nombreConst = [
                            "Número de Euler", "Logaritmo neperiano de 2",
                            "Logaritmo neperiano de 10", "Logaritmo base 2 de E",
                            "Logaritmo base de 10 de E"
                        ]

    for (let i = 0; i < constantesMath.length; i++) {
        
        let elementoLista = document.createElement("li");
        elementoLista.innerHTML = `${nombreConst[i]}: ${constantesMath[i]}`;

        document.getElementById("ej3").appendChild(elementoLista);
        
    }

}

/*
    4. Toma una entrada con window.prompt() y que nos pida un numero y debemos calcular los siguientes
    valores:
    logaritmo neperiano del valor
    logaritmo base 2 del valor
    logaritmo base 10 del valor
*/
function ejercicio4() {

    numero = parseFloat(window.prompt('Ingrese un número:'));

    let logValor = Math.log(numero).toFixed(3);
    let log2Valor = Math.log2(numero).toFixed(3);
    let log10Valor = Math.log10(numero).toFixed(3);

    resultado = `<li>Logaritmo neperiano del valor: ${logValor}</li>
                <li>Logaritmo base 2 del valor: ${log2Valor}</li>
                <li>Logaritmo base 10 del valor: ${log10Valor}</li>`;

    document.getElementById("ej4").innerHTML = resultado;

}


// globales para ejercicios 5 y 6
let angulo;
let radianes;

/*
    5. Toma como entrada un angulo entre 0 y 360 con window.prompt() y nos la debe convertir en radianes (
    radianes = (grados/180)*PI ) debe tener un if para que su valor este entre 0 y 360 en caso contrario debe
    dar error.
*/
function ejercicio5() {

    angulo = parseInt(window.prompt('Ingrese un ángulo (0-360º):'));

    if (angulo < 0 || angulo > 360) {

        resultado = "Error. El valor del ángulo está fuera del rango permitido";

    } else {

        radianes = (angulo / 180) * Math.PI;
        resultado = `Radianes equivalentes a un ángulo de ${angulo} grados: ${radianes.toFixed(3)}`;

    }

    document.getElementById("ej5").innerHTML = resultado;

}

/*
        6. Modifica el anterior script para muestre los siguientes valores del valor tomado
    cos(x) Devuelve el coseno de x (x está en radianes).
    sin(x) Devuelve el seno de x (x está en radianes). 
    tan(x) Devuelve la tangente de un ángulo.         
*/
function ejercicio6() {

    if (radianes == undefined || angulo == undefined) { // dependencia de la ejecución del ejercicio 5

        alert("Asegúrese de ejecutar el ejerciio 5 primero");

    } else {

        let coseno = Math.cos(radianes);
        let seno = Math.sin(radianes);
        let tangente = Math.tan(angulo);

        resultado = `<br><br><b>Modificación</b>
                        <ol>
                            <li>Coseno del ángulo: ${coseno.toFixed(5)}</li>
                            <li>Seno del ángulo: ${seno.toFixed(5)}</li>
                            <li>Tangente del ángulo: ${tangente.toFixed(5)}</li>
                        </ol>`;

        document.getElementById("ej6").innerHTML = resultado;
    }

}

/*
    7. Toma una entrada con window.prompt() y debe tener un if para que su valor este entre en el rango (0 y 1)
    en caso contrario debe dar error y calcule los siguientes valores
    acos(x) Devuelve el arcocoseno de x, en radianes.
    asin(x) Devuelve el arcoseno de x, en radianes.
    atan(x) Devuelve el arcotangente de x, en radianes con un valor entre -PI/2 y PI/2.
*/
function ejercicio7() {

    let valor = parseFloat(window.prompt('Ingrese un valor entre 0 y 1:'));

    if (valor < 0 || valor > 1) {

        resultado = "Error. Valor fuera de rango";

    } else {

        radianes = (valor / 180) * Math.PI;
        
        let arcocoseno = Math.acos(radianes);
        let arcoseno = Math.asin(radianes);
        let arcotangente = Math.atan(radianes)

        resultado = `Valor introducido: ${valor} <br>
                    <ul>
                        <li>Arcocoseno: ${arcocoseno}</li>
                        <li>Arcoseno: ${arcoseno}</li>
                        <li>Arcotangente: ${arcotangente}</li>
                    </ul>`;

    }

    document.getElementById("ej7").innerHTML = resultado;

}

/*
    8. Toma un numero con window.prompt() y debe tener un if para que sea un numero y que calcule su techo,
    suelo y redondeo.
*/
function ejercicio8() {

    numero = parseFloat(window.prompt('Ingrese un número entero:'));

    if (isNaN(numero)) {

        resultado = "Error. Tipo de valor introducido inválido: string";

    } else {

        let techo = Math.ceil(numero);
        let suelo = Math.floor(numero);
        let redondeo = Math.round(numero);

        resultado = `Aproximaciones para el número ${numero}:
                    <ul>
                        <li><code>Math.ceil(x)</code>: ${techo}</li>
                        <li><code>Math.floor(x)</code>: ${suelo}</li>
                        <li><code>Math.round(x)</code>: ${redondeo}</li>
                    </ul>`;

    }

    document.getElementById("ej8").innerHTML = resultado;

}

/*
    9. Toma un numero con window.prompt() y debe tener un if para que sea un numero y que calcule su
    redondeo con un decimal con esta formula
    Redondeo1Decimal(x)= Redondeo(x*10)/10
*/
function ejercicio9() {

    numero = parseFloat(window.prompt('Ingrese un número:'));

    if (isNaN(numero)) {

        resultado = "Error. Tipo de valor introducido inválido: string";

    } else {

        let redondeo1Decimal = Math.round(numero * 10) / 10;
        resultado = `Resultado del redondeo a un decimal del número ${numero}: ${redondeo1Decimal}`;

    }

    document.getElementById("ej9").innerHTML = resultado;

}

/*
    
*/

