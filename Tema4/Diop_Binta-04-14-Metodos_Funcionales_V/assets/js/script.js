
/*
Ejercicio 1: Sumar el total de ventas de un día
Contexto: Tienes una lista de ventas realizadas en un día y necesitas calcular el total de todas las 
ventas.
1.Descripción: Tienes un array con los monto de ventas [100, 200, 300, 400]. Luego:
•Usa Array.reduce() para calcular el total sumando cada venta.
2.Resultado esperado:
const ventas = [100, 200, 300, 400];
const totalVentas = ventas.reduce((acumulador, venta) => acumulador + venta, 0);
console.log(totalVentas); // 1000, es el total de las ventas
*/
function ejercicio1() {

    let info = document.getElementById('ej1');

    let ventas = Array.of(100, 200, 300, 400);
    info.innerHTML = `<li>Ventas por día: ${ventas}</li>`;

    let ventasTotales = ventas.reduce((acc, venta) => acc + venta, 0);
    info.innerHTML += `<li>Total de ventas: ${ventasTotales}</li>`;

}

/*
Ejercicio 2: Concatenar nombres de empleados en orden inverso
Contexto: Tienes una lista de empleados y necesitas concatenar sus nombres, pero en orden 
inverso para mostrarlos en un informe especial.
1.Descripción: Tienes un array con los nombres de los empleados [“Juan”, “María”, “Pedro”, 
“Luis”]. Luego:
•Usa Array.reduceRight() para concatenar los nombres en orden inverso.
2.Resultado esperado:
const empleados = ["Juan", "María", "Pedro", "Luis"];
const nombresInvertidos = empleados.reduceRight((acumulador, nombre) => acumulador + " " + nombre);
console.log(nombresInvertidos); // "Luis Pedro María Juan"
*/
function ejercicio2() {

    let info = document.getElementById('ej2');

    let empleados = ["Juan", "María", "Pedro", "Luis"];
    info.innerHTML = `<li>Lista de nombre de empleados: ${empleados}</li>`;

    let empleadosInverso = empleados.reduceRight((acc, nombre) => acc + `${nombre} `, "")
    info.innerHTML += `<li>Lista de nombre de empleados invertida: ${empleadosInverso}</li>`;

}

/*
Ejercicio 3: Contar la cantidad de productos en un inventario
Contexto: Tienes un inventario de productos con diferentes cantidades y necesitas saber el total de 
todos los productos.
1.Descripción: Tienes un array con las cantidades [5, 10, 20, 15]. Luego:
•Usa Array.reduce() para calcular la suma total de productos en el inventario.
2.Resultado esperado:
const cantidades = [5, 10, 20, 15];
const totalProductos = cantidades.reduce((acumulador, cantidad) => acumulador + cantidad, 0);
console.log(totalProductos); // 50, el total de productos en el inventario
*/
function ejercicio3() {

    let info = document.getElementById('ej3');

    let inventario = Array.of(5, 10, 20, 15);
    info.innerHTML = `<li>Inventario existente de productos: ${inventario}</li>`;

    let inventarioTotal = inventario.reduce((acc, cant) => acc + cant, 0);
    info.innerHTML += `<li>Inventario existente de productos: ${inventarioTotal}</li>`;

}

/*
Ejercicio 5: Convertir un array de números a una cadena
Contexto: Tienes un array de números y necesitas convertirlo en una cadena para mostrarlo en un 
informe.
1.Descripción: Tienes un array con los números [1, 2, 3, 4, 5]. Luego:
•Usa Array.toString() para convertir el array en una cadena separada por comas.
2.Resultado esperado:
const numeros = [1, 2, 3, 4, 5];
const cadenaNumeros = numeros.toString();
console.log(cadenaNumeros); // "1,2,3,4,5"
*/
function ejercicio4() {

    let info = document.getElementById('ej4');

    let palabras = ["JavaScript", "es", "increíble"];
    info.innerHTML = `<li>Lista de palabras como array: ${palabras}</li>`;

    let palabrasCadena = palabras.join(' ');
    info.innerHTML += `<li>Lista de palabras unificada como cadena: ${palabrasCadena}</li>`;

}

/*
Ejercicio 5: Convertir un array de números a una cadena
Contexto: Tienes un array de números y necesitas convertirlo en una cadena para mostrarlo en un 
informe.
1.Descripción: Tienes un array con los números [1, 2, 3, 4, 5]. Luego:
•Usa Array.toString() para convertir el array en una cadena separada por comas.
2.Resultado esperado:
const numeros = [1, 2, 3, 4, 5];
const cadenaNumeros = numeros.toString();
console.log(cadenaNumeros); // "1,2,3,4,5"
*/
function ejercicio5() {

    let info = document.getElementById('ej5');

    let numeros = Array.of(1, 2, 3, 4, 5);
    info.innerHTML += `<li>Array numeros como cadena: ${numeros.toString()}</li>`;

}

/*
Ejercicio 6: Mostrar una lista de precios en formato local
Contexto: Tienes una lista de precios en dólares y quieres mostrarlos en formato local con el 
símbolo de moneda.
1.Descripción: Tienes un array con los precios [1000, 2000, 3000]. Luego:
•Usa Array.toLocaleString() para convertir los números a una cadena en formato 
local, mostrando el símbolo de moneda.
2.Resultado esperado:
const precios = [1000, 2000, 3000];
const preciosLocales = precios.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(preciosLocales); // "1,000.00,2,000.00,3,000.00" en formato local de EE.UU
*/
function ejercicio6() {

    let info = document.getElementById('ej6');

    let precios = Array.of(1000, 2000, 3000);
    info.innerHTML = `<li>Array de precio: ${precios}</li>`;

    info.innerHTML += `<li>Array de precio a LocaleString: ${precios.toLocaleString("en-US", { style: "currency", currency: "USD" })}</li>`;

}

/*
Ejercicio 7: Calcular el total de ingresos de un mes
Contexto: Tienes un array que contiene los ingresos semanales de un mes y quieres calcular el 
ingreso total del mes.
1.Descripción: Tienes un array con los ingresos semanales [500, 1000, 1500, 2000]. Luego:
•Usa Array.reduce() para sumar los ingresos y obtener el total del mes.
2.Resultado esperado:
const ingresosSemanales = [500, 1000, 1500, 2000];
const totalIngresos = ingresosSemanales.reduce((total, ingreso) => total + ingreso, 0);
console.log(totalIngresos); // 5000, es el total de ingresos del mes
*/
function ejercicio7() {

    let info = document.getElementById('ej7');

    let ingresos = Array.of(500, 1000, 1500, 2000);
    info.innerHTML = `<li>Ingresos semanales: ${ingresos}</li>`;

    let ingresoMensual = ingresos.reduce((acc, ing) => acc + ing, 0);
    info.innerHTML += `<li>Ingreso mensual: ${ingresoMensual}</li>`;

}

/*
    Ejercicio 8: Crear una lista de nombres en mayúsculas
Contexto: Tienes una lista de nombres y quieres convertirlos todos a mayúsculas 
para mostrarlos en un informe.
1.Descripción: Tienes un array con los nombres [“juan”, “maría”, “pedro”]. Luego:
•Usa Array.map() para crear un nuevo array con todos los nombres en 
mayúsculas.
2.Resultado esperado:
const nombres = ["juan", "maría", "pedro"];
const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayus); // ["JUAN", "MARÍA", "PEDRO"]
*/
function ejercicio8() {

    let info = document.getElementById('ej8');

    let nombres = ["juan", "maría", "pedro"];
    info.innerHTML = `<li>Lista de nombres sin modificar; ${nombres}</li>`;

    let nombresMayuscula = nombres.map(nombre => nombre.toUpperCase());
    info.innerHTML += `<li>Lista de nombres en mayúscula; ${nombresMayuscula}</li>`;

}

/*
    Ejercicio 9: Imprimir las cantidades de productos vendidos
Contexto: Tienes una lista con las cantidades de productos vendidos y necesitas 
imprimirlas en la consola para llevar un control.
1.Descripción: Tienes un array con las cantidades [10, 20, 30, 40]. Luego:
•Usa Array.forEach() para recorrer el array y mostrar cada cantidad junto 
con un mensaje.
2.Resultado esperado:
const cantidades = [10, 20, 30, 40];
cantidades.forEach(cantidad => {
  console.log(`Se vendieron ${cantidad} productos.`);
});
// Se vendieron 10 productos.
// Se vendieron 20 productos.
// Se vendieron 30 productos.
// Se vendieron 40 productos.
*/
function ejercicio9() {

    let info = document.getElementById('ej9');

    let cantidades = Array.of(10, 20, 30, 40);

    cantidades.forEach((cantidad) => {
        info.innerHTML += `<li>Se vendieron ${cantidad} productos</li>`;
    });

}

/*
    Ejercicio 10: Calcular el precio total de productos con descuento
Contexto: Tienes una lista de precios de productos y necesitas calcular el precio con 
un descuento aplicado del 10%.
1.Descripción: Tienes un array con los precios [50, 100, 150]. Luego:
•Usa Array.map() para crear un nuevo array donde cada precio tenga 
aplicado el descuento del 10%.
2.Resultado esperado:
const precios = [50, 100, 150];
const preciosConDescuento = precios.map(precio => precio * 0.9);
console.log(preciosConDescuento); // [45, 90, 135], precios con descuento aplicado
*/
function ejercicio10() {

    let info = document.getElementById('ej10');

    let precios = Array.of(50, 100, 150);
    info.innerHTML = `<li>Precios: ${precios}</li>`;

    let preciosDescuento = precios.map(precio => precio = precio * 0.9);
    info.innerHTML += `<li>Precios con descuento del 10%: ${preciosDescuento}</li>`;

}

