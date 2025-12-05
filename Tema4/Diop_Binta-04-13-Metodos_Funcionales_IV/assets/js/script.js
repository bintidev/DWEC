
/*
Ejercicio 1: Filtrar productos con precios menores a un valor
Contexto: Tienes un catálogo de productos con sus precios y necesitas mostrar 
aquellos productos que estén en oferta (precio menor a 50).
1.Descripción: Tienes un array con los precios de los productos [100, 45, 30, 70, 
25]. Luego:
•Usa Array.filter() para filtrar los productos que tengan un precio menor a 
50.
2.Resultado esperado:
const precios = [100, 45, 30, 70, 25];
const enOferta = precios.filter(precio => precio < 50); 
console.log(enOferta); // [45, 30, 25], estos productos están en oferta
*/
function ejercicio1() {

    let info = document.getElementById('ej1');

    let precios = Array.of(100, 45, 30, 70, 25);
    info.innerHTML = `<li>Precios de los productos: ${precios}</li>`;

    let enOferyta = precios.filter(precio => precio < 50);
    info.innerHTML += `<li>Productos con precios menor a 50€: ${enOferyta}</li>`;

}

/*
Ejercicio 2: Desanidar listas de comentarios en un foro
Contexto: Tienes una lista de comentarios en un foro, pero algunos comentarios son 
respuestas a otros (anidados) y deseas obtener una lista plana de todos los 
comentarios.
1.Descripción: Tienes un array anidado con los comentarios:
const comentarios = [
["Buen post", "Gracias"],
["Interesante"],
["No estoy de acuerdo", ["Muy cierto", "Concuerdo"]]
];
•Usa Array.flat() para crear un array plano con todos los comentarios, 
eliminando los niveles de anidación.
2.Resultado esperado:
const comentarios = [
["Buen post", "Gracias"],
["Interesante"],
["No estoy de acuerdo", ["Muy cierto", "Concuerdo"]]
];
const todosComentarios = comentarios.flat(2); 
console.log(todosComentarios); 
// ["Buen post", "Gracias", "Interesante", "No estoy de acuerdo", "Muy cierto", "Concuerdo"]

*/
function ejercicio2() {

    let info = document.getElementById('ej2');

    let comentarios = [["Buen post", "Gracias"], ["Interesante"], ["No estoy de acuerdo", ["Muy cierto", "Concuerdo"]]];

    let todosLosComentarios = comentarios.flat();
    info.innerHTML = `<li>Todos los comentarios: ${todosLosComentarios}</li>`;

}

/*
    Ejercicio 3: Procesamiento de datos de usuarios y asignación de 
etiquetas
Contexto: Tienes una lista de usuarios y quieres asignarles etiquetas dependiendo 
de su estatus y, al mismo tiempo, crear un array plano con los estatus.
1.Descripción: Tienes un array con objetos de usuarios con el formato { nombre: 
string, roles: string[] }. Luego:
•Usa Array.flatMap() para descomponer los roles de cada usuario y 
obtener un array plano con todas las etiquetas.
2.Resultado esperado:
const usuarios = [
  { nombre: "Juan", roles: ["admin", "editor"] },
  { nombre: "María", roles: ["usuario"] },
  { nombre: "Pedro", roles: ["moderador", "editor"] }
];
const rolesPlanos = usuarios.flatMap(usuario => usuario.roles);
console.log(rolesPlanos); // ["admin", "editor", "usuario", "moderador", "editor"]

*/
function ejercicio3() {

    let info = document.getElementById('ej3');

    let usuarios = [
        { nombre: "Juan", roles: ["admin", "editor"] },
        { nombre: "María", roles: ["usuario"] },
        { nombre: "Pedro", roles: ["moderador", "editor"] }
    ]

    let rolesPlanos = usuarios.flatMap(usuario => usuario.roles);
    info.innerHTML = `<li>Roles de usuario: ${rolesPlanos}</li>`;

}

/*
Ejercicio 4: Imprimir una lista de tareas pendientes
Contexto: Tienes una lista de tareas y quieres imprimirlas una por una en la consola.
1.Descripción: Tienes un array con las tareas pendientes [“Lavar platos”, 
“Comprar comida”, “Hacer ejercicio”]. Luego:
•Usa Array.forEach() para recorrer el array y mostrar cada tarea con su 
índice.
2.Resultado esperado:
const tareas = ["Lavar platos", "Comprar comida", "Hacer ejercicio"];
tareas.forEach((tarea, index) => {
  console.log(`${index + 1}. ${tarea}`);
});
// 1. Lavar platos
// 2. Comprar comida
// 3. Hacer ejercicio
*/
function ejercicio4() {

    let info = document.getElementById('ej4');

    let tareasPendientes = ['Lavar platos', 'Comprar comida', 'Hacer ejercicio'];

    tareasPendientes.forEach((tarea, index) => {
        info.innerHTML += `<li>${index + 1}. ${tarea}</li>`;
    });

}

/*
    Ejercicio 5: Generar una lista de precios con IVA aplicado
Contexto: Tienes una lista de precios de productos y quieres generar una nueva lista 
en la que apliques el 21% de IVA (Impuesto sobre el Valor Añadido).
1.Descripción: Tienes un array con los precios originales [100, 200, 300]. Luego:
•Usa Array.map() para crear un nuevo array en el que cada precio tenga el 
IVA incluido.
2.Resultado esperado:
const precios = [100, 200, 300];
const preciosConIVA = precios.map(precio => precio * 1.21);
console.log(preciosConIVA); // [121, 242, 363], precios con IVA aplicado
*/
function ejercicio5() {

    let info = document.getElementById('ej5');

    let preciosOriginales = Array.of(100, 200, 300);
    info.innerHTML = `<li>Precios originales: ${preciosOriginales}</li>`;

    let preciosIVA = preciosOriginales.map(precio => precio = precio * 1.21);
    info.innerHTML += `<li>Precios con IVA: ${preciosIVA}</li>`;

}

/*
    Ejercicio 6: Filtrar usuarios activos en un sistema
Contexto: Tienes una lista de usuarios y quieres filtrar aquellos que están activos.
1.Descripción: Tienes un array de objetos que representan usuarios con el 
formato { nombre: string, activo: boolean }. Luego:
•Usa Array.filter() para obtener una lista con solo los usuarios activos.
2.Resultado esperado:
const usuarios = [
  { nombre: "Juan", activo: true },
  { nombre: "María", activo: false },
  { nombre: "Pedro", activo: true }
];
const usuariosActivos = usuarios.filter(usuario => usuario.activo);
console.log(usuariosActivos);
// [{ nombre: "Juan", activo: true }, { nombre: "Pedro", activo: true }]
*/
function ejercicio6() {

    let info = document.getElementById('ej6');

    let usuarios = [
        { nombre: "Juan", activo: true },
        { nombre: "María", activo: false },
        { nombre: "Pedro", activo: true }
    ];
    let usuariosPlano = usuarios.flatMap(usuario => `{ nombre: ${usuario.nombre}, activo: ${usuario.activo} }`);
    info.innerHTML = `<li>Todos los usuarios: ${usuariosPlano}</li>`;

    let usuariosActivos = usuarios.filter(usuario => usuario.activo);
    let usuariosActivosPlano = usuariosActivos.flatMap(usuario => `{ nombre: ${usuario.nombre}, activo: ${usuario.activo} }`);
    info.innerHTML += `<li>Usuarios activos: ${usuariosActivosPlano}</li>`;

}

/*
    Ejercicio 7: Simplificación de listas de categorías de productos
Contexto: Tienes una lista con categorías de productos, algunas de las cuales están 
anidadas, y necesitas obtener una lista plana con todas las categorías.
1.Descripción: Tienes un array anidado con las categorías [“Electrónica”, 
[“Teléfonos”, “Computadoras”], “Ropa”]. Luego:
•Usa Array.flat() para descomponer las categorías anidadas en una lista 
plana.
2.Resultado esperado:
const categorias = ["Electrónica", ["Teléfonos", "Computadoras"], "Ropa"];
const categoriasPlanas = categorias.flat();
console.log(categoriasPlanas); 
// ["Electrónica", "Teléfonos", "Computadoras", "Ropa"]
*/
function ejercicio7() {

    let info = document.getElementById('ej7');

    let categorias = ["Electrónica", ["Teléfonos", "Computadoras"], "Ropa"];

    let categoriasPlano = categorias.flat();

    info.innerHTML = `<li>Categorías de producto: ${categoriasPlano}</li>`;

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

