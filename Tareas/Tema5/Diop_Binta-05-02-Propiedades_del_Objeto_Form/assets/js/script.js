
/*
Ejercicio 1. Copia el siguiente código. Programa la funcion para que se vea el valor del text de las
5 maneras posibles
*/
function ejercicio1() {

    let mostrar = document.getElementById('ej1')

    let m1 = document.getElementById('entradaId').value
    let m2 = document.formularioBusquedaName.entradaName.value
    let m3 = document.formularioBusquedaName.elements[0].value
    let m4 = document.forms['formularioBusquedaName'].elements[0].value
    let m5 = document.forms['formularioBusquedaName'].entradaName.value

    mostrar.innerHTML = `<ul>
                            <li>${m1}</li>
                            <li>${m2}</li>
                            <li>${m3}</li>
                            <li>${m4}</li>
                            <li>${m5}</li>
                        </ul>`

}

/*
Ejercicio 2. Copia el siguiente codigo
*/
function convertirMayusculas() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
}

/*
Ejercicio 3. Sobre el anterior codigo Usa las siguientes propiedades para mostrar los valores siguientes en
la region ej3 con un titulo descriptivo (puedes usar una lista)

defaultValue Ajusta o devuelve el valor por defecto de un campo de texto.
maxLength Devuelve o ajusta la longitud máxima de caracteres permitidos en el campo de tipo texto
name Ajusta o devuelve el valor del atributo name de un campo de texto.
readOnly Ajusta o devuelve si un campo es de sólo lectura, o no.
size Ajusta o devuelve el ancho de un campo de texto (en caracteres).
type Devuelve el tipo de un campo de texto.
value Ajusta o devuelve el contenido del atributo value de un campo de texto.
*/
function ejercicio3() {

    let mostrar1 = document.getElementById('ej3-1')
    let mostrar2 = document.getElementById('ej3-2')

    let el1 = document.formulario.nombre
    let el2 = document.formulario.aprobar

    // INPUT TEXT
    mostrar1.innerHTML += `<ul>
                <li>${el1.defaultValue}</li>
                <li>${el1.maxLength}</li>
                <li>${el1.name}</li>
                <li>${el1.readOnly}</li>
                <li>${el1.size}</li>
                <li>${el1.type}</li>
                <li>${el1.value}</li>
                </ul>`

    // INPUT RADIO
    mostrar2.innerHTML += `<ul>
                <li>${el2.defaultValue}</li>
                <li>${el2.maxLength}</li>
                <li>${el2.name}</li>
                <li>${el2.readOnly}</li>
                <li>${el2.size}</li>
                <li>${el2.type}</li>
                <li>${el2.value}</li>
                </ul>`

}

/*
Ejercicio 4. Sobre el anterior codigo al pulsar el botton ejercicio4 se debe insertar en el texto un nombre
aleatorio sacado de un array de vuestra eleccion
*/
const names = ['Ludo', 'Engine', 'Riyo', 'Zanka', 'Leguto', 'Dear', 'Seniu', 'Guitar']

function ejercicio4() {

    document.getElementById('nombre').value = names[Math.random() * names.length]

}

/*
Ejercicio 5. Sobre el anterior codigo al pulsar el botton ejercicio5 se debe activar o desactivar el checkbox
*/
function ejercicio5() {

    let check = document.getElementById('aprobar')

    if (check.checked) {
        check.removeAttribute('checked')
    } else {
        check.setAttribute('checked', '')
    }

}

/*
Ejercicio 6. Sobre el anterior codigo Debes insertar un radio input con 5 alternativas y al pulsar el botton
ejercicio6 se debe ir seleccionando el siguiente valor.
*/
let selectedEl = 1

function ejercicio6() {

    let curso = document.getElementById('curso' + selectedEl)

    if (selectedEl >= 5) {
        selectedEl = 1
    } else {
        selectedEl++
    }

    curso.setAttribute('checked', '')

}

/*
Ejercicio 7. Sobre el anterior codigo Debes insertar un select con 6 alternativas y al pulsar el botton
ejercicio7 se deben mostrar las 6 alternativas con negrita el que este seleccionado. Puedes usar este
codigo para acceder
*/
function ejercicio7() {

    let opciones = document.formulario.provincia.options

    for (let i = 0; i < opciones; i++) {

    }
    //let opciones = document.formulario.provincia.options
    document.formulario.provincia.options[n].value

}

/*
Ejercicio 8: Crear un resumen de compras en orden inverso
Contexto: Tienes una lista de productos comprados y quieres crear un resumen con los productos 
listados en orden inverso.
1.Descripción: Tienes un array con los productos [“Manzana”, “Naranja”, “Plátano”]. Luego:
•Usa Array.reduceRight() para crear un resumen en orden inverso.
2.Resultado esperado:
const productos = ["Manzana", "Naranja", "Plátano"];
const resumen = productos.reduceRight((acumulador, producto) => acumulador + ", " + producto);
console.log(resumen); // "Plátano, Naranja, Manzana"
*/
function ejercicio8() {

    let info = document.getElementById('ej8');

    let productos = ["Manzana", "Naranja", "Plátano"];
    info.innerHTML = `<li>Productos: ${productos}</li>`;

    let resumen = productos.reduceRight((acc, prod) => acc += `, ${prod}`);
    info.innerHTML += `<li>Resumen inverso: ${resumen}</li>`;

}

/*
Ejercicio 9: Generar una cadena de números de un array
Contexto: Tienes una lista de números y necesitas convertirla en una cadena para fines de 
visualización.
1.Descripción: Tienes un array con los números [10, 20, 30, 40]. Luego:
•Usa Array.toString() para convertirlo a una cadena separada por comas.
2.Resultado esperado:
const numeros = [10, 20, 30, 40];
const cadena = numeros.toString();
console.log(cadena); // "10,20,30,40"
*/
function ejercicio9() {

    let info = document.getElementById('ej9');

    let numeros = [10, 20, 30, 40];
    info.innerHTML += `<li>Numeros separados por coma: ${numeros.toString()}</li>`;

}

/*
Ejercicio 10: Mostrar precios en diferentes formatos locales
Contexto: Tienes un array de precios y quieres mostrar estos precios en diferentes formatos locales 
(por ejemplo, en dólares y en euros).
1.Descripción: Tienes un array con los precios [1000, 1500, 2000]. Luego:
•Usa Array.toLocaleString() para convertir los precios en formato de EE.UU. y Europa.
2.Resultado esperado:
const precios = [1000, 1500, 2000];
const preciosEnUSD = precios.map(precio => precio.toLocaleString("en-US", { style: "currency", currency: 
"USD" }));
const preciosEnEUR = precios.map(precio => precio.toLocaleString("de-DE", { style: "currency", currency: 
"EUR" }));
console.log(preciosEnUSD); // ["$1,000.00", "$1,500.00", "$2,000.00"]
console.log(preciosEnEUR); // ["1.000,00 €", "1.500,00 €", "2.000,00 €"]
*/
function ejercicio10() {

    let info = document.getElementById('ej10');

    let precios = Array.of(1000, 1500, 2000);
    info.innerHTML = `<li>Precios: ${precios}</li>`;

    let preciosUSD = precios.map(precio => precio.toLocaleString("en-US", { style: "currency", currency: "USD" }));
    info.innerHTML += `<li>Precios en formato EE.UU: ${preciosUSD}</li>`;

    let preciosEUR = precios.map(precio => precio.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));
    info.innerHTML += `<li>Precios en formato EUR: ${preciosEUR}</li>`;

}

