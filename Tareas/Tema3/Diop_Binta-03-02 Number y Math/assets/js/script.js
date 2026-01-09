

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
        - logaritmo neperiano del valor
        - logaritmo base 2 del valor
        - logaritmo base 10 del valor
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
        - cos(x) Devuelve el coseno de x (x está en radianes).
        - sin(x) Devuelve el seno de x (x está en radianes). 
        - tan(x) Devuelve la tangente de un ángulo.         
*/
function ejercicio6() {

    if (radianes == undefined || angulo == undefined) { // dependencia de la ejecución del ejercicio 5

        alert("Asegúrese de ejecutar el ejercicio 5 primero");

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

        document.getElementById("ej6").innerHTML = document.getElementById("ej5").innerHTML + resultado;
    }

}

/*
    7. Toma una entrada con window.prompt() y debe tener un if para que su valor este entre en el rango (0 y 1)
    en caso contrario debe dar error y calcule los siguientes valores
        - acos(x) Devuelve el arcocoseno de x, en radianes.
        - asin(x) Devuelve el arcoseno de x, en radianes.
        - atan(x) Devuelve el arcotangente de x, en radianes con un valor entre -PI/2 y PI/2.
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
    10. Toma numeros con window.prompt() hasta que el numero entrado sea 0 y calcula su máximo y mínimo
        - max(x,y,z,...,n) Devuelve el número más alto de los que se pasan como parámetros.
        - min(x,y,z,...,n) Devuelve el número más bajo de los que se pasan como parámetros.
*/
function ejercicio10() {

    max = Number.MAX_VALUE;
    min = Number.MIN_VALUE;

    do {

        numero = parseInt(window.prompt('Ingrese un número:'));

        if (numero != 0) { // para que no tenga en cuenta el 0

            min = Math.min(numero, min);
            max = Math.max(numero, max);

        }


    } while (numero != 0);

    resultado = `Valor máximo recogido: ${max} - Valor mínimo recogido: ${min}`;
    document.getElementById("ej10").innerHTML = resultado;

}

/*
    11. Toma una entrada con window.prompt() debes sacar un numero aleatorio entre 0 y ese numero usando
    esta formula
        - aleatorio entre 0 y B = AleatorioMaxB= round(random()*B)
        - aleatorio entre A y B = AleatorioMaxB= round( random()*(B-A) ) + A
*/
function ejercicio11() {
    
    let a = parseInt(window.prompt('Ingrese un número de inicio entero positivo:'))
    let b = parseInt(window.prompt('Ingrese un número límite entero positivo:'))

    aleatorioCeroyB = Math.random() * b;
    aleatorioAyB = (Math.random() * (b - a + 1)) + a;

    resultado = `Número aleatorio entre 0 y ${b}: ${aleatorioCeroyB.toFixed(2)} <br>
                Número aleatorio entre ${a} y ${b}: ${aleatorioAyB.toFixed(2)}`;

    document.getElementById("ej11").innerHTML = resultado;

}

/*
    12. Toma una entrada con window.prompt() debes mostrarla
        1. en base 2, 8 y 16
        2. notación exponencial.
        3. con 10 digitos decimales después del punto decimal.
        4. con número a la longitud 8
*/
function ejercicio12() {

    numero = parseInt(window.prompt('Ingrese un número:'));

    // bases
    base2 = numero.toString(2);
    base8 = numero.toString(8);
    base16 = numero.toString(16);

    // notación exponencial
    exponencial = numero.toExponential();

    // 10 digitos decimales despues del punto
    digitosDecimales = numero.toFixed(10);

    // longitud 8
    aLaLongitud = numero.toPrecision(8);

    resultado = `Número: ${numero} <br>
                En base 2: ${base2} - En base 8: ${base8} - En base 16: ${base16} <br>
                Notación exponencial: ${exponencial} <br>
                10 dígitos tras la coma decimal: ${digitosDecimales} <br>
                A la longitud 8: ${aLaLongitud}`;

    document.getElementById("ej12").innerHTML = resultado;
}

/*
    13. Toma una entrada con window.prompt() debes mostrarla
        1. Como Euros
        2. Como yenes
        3. Con 3 decimales minimo
        4. Con 3 decimales minimo y maximo
*/
function ejercicio13() {

    let cantidad = parseFloat(window.prompt('Ingrese una cantidad monetaria:'));
    let euros = cantidad.toLocaleString("es-ES", {style: "currency", currency: "EUR"}); // en euros
    let yenes = cantidad.toLocaleString("ja-JP", {style: "currency", currency: "JPY"}); // en yenes
    let decimalesMin = cantidad.toLocaleString(undefined, {minimumFractionDigits: 3}); // decimales mínimos
    let decimalesMinYMax = cantidad.toLocaleString(undefined, {minimumFractionDigits: 3, maximumFractionDigits: 3}); // decimales mínimos y máximos

    resultado = `Cantidad introducida: ${cantidad} <br>
                En euros: ${euros} - Equivalencia en yenes: ${yenes} <br>
                Mínimo de 3 decimales: ${decimalesMin} - Mínimo y máximo de 3 decimales: ${decimalesMinYMax}`;

    document.getElementById("ej13").innerHTML = resultado;

}

/*
    14. Toma una entrada con window.prompt() a b c y resulelve la ecuación <br>
*/
function ejercicio14() {

    let a = parseInt(window.prompt('Ingrese un valor positivo para a:'));
    let b = parseInt(window.prompt('Ingrese un valor positivo para b:'));
    let c = parseInt(window.prompt('Ingrese un valor positivo para c:'));

    let  resultado1;
    let resultado2;

    if (a == 0) {

        if (b != 0) {
            
            resultado1 = (-c / b);
            
        }

    } else if (b == 0) {

        if (c != 0) {

            resultado1 = Math.sqrt((-c) / a);
            resultado2 = -(Math.sqrt((-c) / a));

        }


    } else if (c == 0) {

        resultado1 = 0;
        resultado2 = -b / (2 * a);

    } else {

        resultado1 = (-b + Math.sqrt((b ** 2) - (4 * a* c))) / (2 * a);
        resultado2 = (-b - Math.sqrt((b ** 2) - (4 * a* c))) / (2 * a);

    }

    resultado = (resultado2 == undefined) ? `Resultado único: ${resultado1.toFixed(2)}` : `Resultado 1: ${resultado1.toFixed(2)} - Resultado 2: ${resultado2.toFixed(2)}`;

    document.getElementById("ej14").innerHTML = resultado;

}

/*
    15. Resuelvelo
*/


/*
    16. Toma una entrada con window.prompt() para tomar una de estas figuras y que pregunte sus cooredenadas
    y muestre el area y el volumen
*/
function ejercicio16() {

    let figura = window.prompt('Ingrese el nombre de una figura:');
    let area;
    let volumen;
    let a, b, c, g;
    let altura;
    let radio;

    switch (figura.toLowerCase()) {

        case 'cubo':
            a = parseFloat(window.prompt('Ingrese la longitud de las aristas:'));
            area = 6 * Math.pow(a, 2);
            volumen = Math.pow(a, 3);
            break;

        case 'ortoedro':
            a = parseFloat(window.prompt('Ingrese longitud de la arista:'));
            b = parseFloat(window.prompt('Ingrese longitud de la profundidad:'));
            c = parseFloat(window.prompt('Ingrese longitud de la cara:'));
            area = 2 * ((a * b) + (b * c) + (a * c));
            volumen = a * b * c;
            break;

        case 'esfera':
            radio = parseFloat(window.prompt('Ingrese la longitud del radio:'));
            area = 4 * Math.PI * Math.pow(radio, 2);
            volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
            break;

        case 'cilindro':
            altura = parseFloat(window.prompt('Ingrese la altura:'));
            radio = parseFloat(window.prompt('Ingrese la longitud del radio:'));
            area = 2 * Math.PI * radio * (radio + altura);
            volumen = Math.PI * Math.pow(radio, 2) * altura;
            break;

        case 'cono':
            altura = parseFloat(window.prompt('Ingrese la altura:'));
            radio = parseFloat(window.prompt('Ingrese la longitud del radio:'));
            g = Math.sqrt((altura ** 2) + (radio ** 2));
            area = Math.PI * radio * (radio + g);
            volumen = (1 / 3) * Math.PI * Math.pow(radio, 2) * altura;
            break;

        case 'piramide':
            altura = parseFloat(window.prompt('Ingrese la altura:'));
            a = parseFloat(window.prompt('Ingrese la longitud de la arista:'));
            let hc = parseFloat(window.prompt('Ingrese la altura de la cara:'));
            let areaBase = a ** 2;
            let areaLaterales = (a * hc) / 2;
            area = areaLaterales + areaBase;
            volumen = (1 / 3) * areaBase * altura;
            break;

        default:
            break;

    }

    resultado = (area == undefined || volumen == undefined) ? "Nombre de figura inválido" :
                                                                `Nombre de Figura: ${figura} <br>
                                                                Área: ${area} - Volumen: ${volumen}`;

    document.getElementById("ej16").innerHTML = resultado;

}

/*
    17. Toma una entrada con window.prompt() para tomar el numero de Iones muestre el Ph con una tabla
    que muestre su fondo de rojo intenso muy acido a azul intenso muy basico
*/
function ejercicio17() {

    

}