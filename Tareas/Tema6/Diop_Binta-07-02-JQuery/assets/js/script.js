
/*
    Existe una forma abreviada para $(document).ready() la cual podrá encontrar algunas veces; sin embargo, es
    recomendable no utilizarla en caso que este escribiendo código para gente que no conoce jQuery.
    $(document).ready => $
    
    Forma abreviada para $(document).ready()
    $(function() { console.log('el documento está preparado'); });
    Además es posible pasarle a $(document).ready() una función nombrada en lugar de una anónima:
    
    Pasar una función nombrada en lugar de una función anónima
    function readyFn() { // código a ejecutar cuando el documento este listo }
    $(document).ready(readyFn);
*/
function ejercicio1() {

    $(document).ready(function () {
        alert('El documento está preparado')
    });

    // anonima
    $(function () { alert('El documento está preparado'); })

    // flecha
    $(() => { alert('El documento está preparado') })

}

/*
    Selección de elementos en base a su id
    $('#myId'); // notar que los IDs deben ser únicos por página

*/
function ejercicio2() {

    // recoge el texto dentro del elemento con id ej2
    let msg = $('#ej2').prop('innerHTML')
    $('#ej2-1').append(msg + '<br>') // muestra el mensaje recogido del elemento anterior en otro

    let lista = '<ol>' // crea una lista ordenada

    msg.split(' ').forEach(el => { // conversión en array, separando por espacios
        lista += `<li>${el}</li>` // se añade al final de la lista el texto
        // del primer elemento
    })

    lista += '</ol>'
    $('#ej2-2').append(lista)
}

/*
    Ejercicio 3: Gestión de calificaciones
    Contexto: Eres un profesor que está gestionando las calificaciones de los 
    estudEjercicio 3: Validación de formularios
    Contexto: Estás validando un formulario en el que se espera que todos los campos estén 
    completados.

        1.Descripción: Tienes un array que representa el estado de varios campos en un formulario, 
        donde cada valor es un booleano indicando si el campo está lleno (true) o vacío (false): 
        [true, true, false, true]. Luego:

            •Usa Array.every() para verificar si todos los campos están completos.
            •Si algún campo está vacío, muestra un mensaje de advertencia.
        
            2.Resultado esperado:
        const campos = [true, true, false, true];
        campos.every(campo => campo); // false, aún hay campos vacíos
*/
function ejercicio3() {

    let first = $('ul#ej3-list li:first').prop('innerHTML');
    let second = $('ul#ej3-list li:nth-child(2)').prop('innerHTML');
    let third = $('ul#ej3-list li:nth-child(3)').prop('innerHTML');
    let fourth = $('ul#ej3-list li:nth-child(4)').prop('innerHTML');
    let fifth = $('ul#ej3-list li:nth-child(5)').prop('innerHTML');
    let sixth = $('ul#ej3-list li:last').prop('innerHTML');

    let list_elems = [first, second, third, fourth, fifth, sixth];

    $('#ej3-result').append('<p>')
    list_elems.forEach(elem => {
        $('#ej3-result').prop('innerHTML', `${elem}, `)
    })
    $('#ej3-result').append('</p>')

}

/*
    Ejercicio 4: Verificación de permisos de usuarios
    Contexto: Estás verificando si al menos uno de los usuarios tiene permiso para realizar una acción.
    
    1.Descripción: Tienes un array que indica si ciertos usuarios tienen permisos [false, false, 
    true, false]. Luego:
        
        •Usa Array.some() para verificar si al menos un usuario tiene permisos para realizar 
        una acción específica.
    
        2.Resultado esperado:
    const permisos = [false, false, true, false];
    permisos.some(permiso => permiso); // true, al menos un usuario tiene permisos
*/
function ejercicio4() {

    let info = document.getElementById('ej4');

    let permisos = [false, false, true, false];
    if (permisos.some(perm => perm)) {
        info.innerHTML += `<li>Al menos un usuario tiene permisos</li>`;
    } else {
        info.innerHTML += `<li>Ningún usuario tiene permisos</li>`;
    }

}

/*
    Ejercicio 5: Encontrar el primer producto con stock bajo
    Contexto: Tienes un inventario de productos con sus cantidades y necesitas encontrar el primer 
    producto con un stock menor a 10 unidades.

    1.Descripción: Tienes un array con las cantidades de stock [15, 7, 25, 5]. Luego:

        •Usa Array.find() para encontrar el primer producto con stock menor a 10.
    
        2.Resultado esperado:
    const stock = [15, 7, 25, 5];
    stock.find(cantidad => cantidad < 10); // 7, es el primer producto con stock bajo
*/
function ejercicio5() {

    let info = document.getElementById('ej5');

    let stock = [15, 7, 25, 5];

    info.innerHTML += `<li>Primer producto con stock menor a 10: ${stock.find(cant => cant < 10)}</li> `;

}

/*
    Ejercicio 6: Encontrar el último pedido urgente
    Contexto: Estás gestionando pedidos y necesitas encontrar el último pedido con prioridad alta.

    1.Descripción: Tienes un array con las prioridades de los pedidos [“baja”, “media”, “alta”, 
    “baja”]. Luego:

        •Usa Array.findLast() para encontrar el último pedido con prioridad "alta".
    
    2.Resultado esperado:
    const prioridades = ["baja", "media", "alta", "baja"];
    prioridades.findLast(prioridad => prioridad === "alta"); // "alta", es el último pedido urgente
*/
function ejercicio6() {

    let info = document.getElementById('ej6');

    let prioridad = ["baja", "media", "alta", "baja"];

    info.innerHTML += `<li>Último pedido con prioridad alta: ${prioridad.findLast(prio => prio === 'alta')}</li> `;

}

/*
    Ejercicio 7: Encontrar el índice del primer producto en oferta
    Contexto: En una tienda en línea, necesitas encontrar el índice del primer producto que está en 
    oferta.

    1.Descripción: Tienes un array que indica el precio de los productos [100, 50, 30, 150]. Luego:
        
        •Usa Array.findIndex() para encontrar el índice del primer producto cuyo precio es 
        menor a 50 (producto en oferta).
    
        2.Resultado esperado:
    const precios = [100, 50, 30, 150];
    precios.findIndex(precio => precio < 50); // 2, es el índice del primer producto en oferta
*/
function ejercicio7() {

    let info = document.getElementById('ej7');

    let precios = [100, 50, 30, 150];

    info.innerHTML += `<li>Índice del 1er producto con precio menor a 50€: ${precios.findIndex(p => p < 50)}</li> `;

}

/*
    Ejercicio 8: Encontrar el índice del último cliente VIP
    Contexto: Tienes una lista de clientes y necesitas encontrar el índice del último cliente VIP.
        1.Descripción: Tienes un array con el estatus de los clientes [“regular”, “VIP”, “regular”, 
        “VIP”]. Luego:

            •Usa Array.findLastIndex() para encontrar el índice del último cliente con estatus 
            "VIP".

        2.Resultado esperado:
        const clientes = ["regular", "VIP", "regular", "VIP"];
        clientes.findLastIndex(cliente => cliente === "VIP"); // 3, es el índice del último cliente VIP
*/
function ejercicio8() {

    let info = document.getElementById('ej8');

    let estatus = ['regular', 'VIP', 'regular', 'VIP'];

    info.innerHTML += `<li>Índice del último cliente con estatus VIP: ${estatus.findLastIndex(est => est === 'VIP')}</li> `;

}

/*
    Ejercicio 9: Búsqueda del índice de un producto específico
    Contexto: Tienes una lista de productos y necesitas encontrar la posición de uno específico.

    1.Descripción: Tienes un array con los nombres de los productos [“manzana”, “naranja”, 
    “plátano”]. Luego:

        •Usa Array.indexOf() para encontrar el índice del producto "plátano".
        •Usa Array.lastIndexOf() para buscar el último índice del producto "manzana", en 
        caso de que esté duplicado.
    
        2.Resultado esperado:
        const productos = ["manzana", "naranja", "plátano"];
        productos.indexOf("plátano"); // 2
        productos.lastIndexOf("manzana"); // 0, si es el único
*/
function ejercicio9() {

    let info = document.getElementById('ej9');

    let producto = ["manzana", "naranja", "plátano"];

    info.innerHTML += `<li>Índice del producto plátano: ${producto.indexOf('plátano')}</li> `;

    info.innerHTML += `<li>Último índice del producto manzana: ${producto.lastIndexOf('manzana')}</li> `;

}

/*
    Ejercicio 10: Validación de usuarios con un tipo específico
    Contexto: Estás verificando si en una lista de usuarios hay un tipo de usuario específico (por 
    ejemplo, "administrador").

        1.Descripción: Tienes un array con los roles de los usuarios [“usuario”, “usuario”, “admin”, 
        “moderador”]. Luego:

            •Usa Array.includes() para verificar si hay un administrador.
            •Usa Array.some() para verificar si al menos uno de los usuarios es un administrador.
        
            2.Resultado esperado:
        const roles = ["usuario", "usuario", "admin", "moderador"];
        roles.includes("admin"); // true
        roles.some(rol => rol === "admin"); // true
*/
function ejercicio10() {

    let info = document.getElementById('ej10');

    let roles = ["usuario", "usuario", "admin", "moderador"];

    info.innerHTML += `<li>Existe un administrador: ${roles.includes('admin')}</li> `;

    info.innerHTML += `<li>Uno de los usuarios es administrador: ${roles.some(user => user === 'admin')}</li> `;

}

