
/*
    Ejercicio 1: Inventario de productos en una tienda
    Contexto: Estás manejando el inventario de una tienda y comienzas con un 
    inventario básico de productos.

        1.Descripción: Crea un array con los ID de los productos de la tienda [1, 2, 3, 4, 5] usando Array.of(). Luego:

            •Un cliente devolvió productos dañados, así que usa Array.fill() para 
            marcar los productos en las posiciones 2 a 4 con el código 7 (producto 
            defectuoso).
            •La tienda recibió nuevos productos, así que usa Array.unshift() para 
            agregar dos nuevos IDs (0 y 0) al inventario (nuevos productos).
            •Se vendió el último producto, así que usa Array.pop() para eliminar el 
            último ID.
            •Finalmente, llega un nuevo lote con IDs [10, 20, 30], por lo que debes 
            combinar los arrays con Array.concat().

        2.Resultado esperado:
        [0, 0, 1, 7, 7, 10, 20, 30
*/
function ejercicio1() {

    let info = document.getElementById('ej1');

    let ids = Array.of(1, 2, 3, 4, 5);
    info.innerHTML = `<li>Identificadores de productos: ${ids}</li>`;

    ids.fill(7, 1, 4);
    info.innerHTML += `<li>Productos defectuosos: ${ids}</li>`;

    ids.unshift(0, 0);
    info.innerHTML += `<li>Nuevos productos: ${ids}</li>`;

    ids.pop();
    info.innerHTML += `<li>Vendido último producto: ${ids}</li>`;

    let nuevo = ids.concat(10, 20, 30);
    info.innerHTML += `<li>Nuevo lote con otros IDs: ${nuevo}</li>`;

}

/*
    Ejercicio 2: Lista de empleados
    Contexto: Estás gestionando una lista de empleados de una empresa.

        1.Descripción: Crea un array de empleados a partir de las iniciales de sus 
        nombres usando Array.from() a partir del string "abcdef" (por ejemplo: Ana, 
        Bruno, Carlos, Daniela, Ernesto, Fernanda). Luego:

            •Usa Array.at() para obtener el nombre del tercer y último empleado.
            •El segundo empleado ha cambiado de departamento, así que usa 
            Array.with() para cambiar su inicial por "X".
            •El primer empleado se ha jubilado, por lo que debes eliminarlo con 
            Array.shift().
            •Finalmente, has contratado a dos nuevos empleados, así que usa 
            Array.push() para añadir "Y" y "Z" al final de la lista.

        2.Resultado esperado:
        ['b', 'X', 'd', 'e', 'Y', 'Z']

*/
function ejercicio2() {

    let info = document.getElementById('ej2');

    let iniciales = 'abcde';
    let empleados = Array.from(iniciales);
    info.innerHTML = `<li>Iniciales de empleados: ${empleados}</li>`;

    info.innerHTML += `<li>Nombre del tercer y último empleados: ${empleados.at(0)} - ${empleados.at(2)}</li>`;

    let cambioDepartamento = empleados.with(2, 'X');
    info.innerHTML += `<li>Cambio de inicial del segundo empleado: ${cambioDepartamento}</li>`;

    cambioDepartamento.shift();
    info.innerHTML += `<li>Primer empleado jubilado: ${cambioDepartamento}</li>`;

    cambioDepartamento.push('Y', 'Z');
    info.innerHTML += `<li>Nuevos empleados: ${cambioDepartamento}</li>`;

}

/*
    Ejercicio 3: Gestión de calificaciones
    Contexto: Eres un profesor que está gestionando las calificaciones de los 
    estudiantes.

        1.Descripción: Tienes un array que contiene las calificaciones de los estudiantes 
        [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]. Luego:

            •Algunas calificaciones deben ser ajustadas, así que usa Array.fill() para 
            modificar las calificaciones entre las posiciones 4 y 8 por 99 (ajuste 
            especial).
            •Se agregaron estudiantes a la lista, así que usa Array.unshift() para 
            agregar las calificaciones de tres nuevos estudiantes (5, 6, 7).
            •Un estudiante ha sido transferido y uno más se graduó, por lo que usa 
            Array.pop() y Array.shift() para eliminar las calificaciones del último y 
            primer estudiante respectivamente.

        2.Resultado esperado:
        [6, 7, 10, 11, 99, 99, 99, 99, 15, 16, 17, 18, 19]
*/
function ejercicio3() {

    let info = document.getElementById('ej3');

    let calificaciones = Array.of(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
    info.innerHTML = `<li>Calificaciones de alumnos: ${calificaciones}</li>`;

    calificaciones.fill(99, 2, 6);
    info.innerHTML += `<li>Ajuste de calificaciones: ${calificaciones}</li>`;

    calificaciones.unshift(5, 6, 7);
    info.innerHTML += `<li>Calificaciones de nuevos estudiantes: ${calificaciones}</li>`;

    calificaciones.pop();
    calificaciones.shift();
    info.innerHTML += `<li>Estudiante transferido y graduado eliminados: ${calificaciones}</li>`;

}

/*
    Ejercicio 4: Precio de productos
    Contexto: Estás gestionando los precios de productos de un supermercado.

        1.Descripción: Tienes un array con los precios de algunos productos [100, 200, 
        300, 400]. Luego:

            •Usa Array.push() para añadir los precios de nuevos productos (500 y 
            600).
            •El primer producto ya no está en venta, por lo que usa Array.shift() para 
            eliminar su precio.
            •El tercer producto tiene un nuevo precio, así que usa Array.with() para 
            cambiar su precio a 999.
            •Finalmente, tienes una nueva lista de precios [700, 800, 900], así que 
            combina los arrays con Array.concat().

        2.Resultado esperado:
        [200, 300, 999, 500, 600, 700, 800, 900]
*/
function ejercicio4() {

    let info = document.getElementById('ej4');

    let precios = Array.of(100, 200, 300, 400);
    info.innerHTML = `<li>Precios: ${precios}</li>`;

    precios.push(500, 600);
    info.innerHTML += `<li>Añadir nuevos precios de productos: ${precios}</li>`;

    precios.shift();
    info.innerHTML += `<li>Primer producto fuera de stock: ${precios}</li>`;

    let actualizado = precios.with(2, 999);
    info.innerHTML += `<li>Actualización precio 3er producto: ${actualizado}</li>`;

    let otrosPrecios = actualizado.concat(700, 800, 900);
    info.innerHTML += `<li>Combinación con otra lista de precios: ${otrosPrecios}</li>`;

}

/*
    Ejercicio 5: Modificación de texto en una base de datos
    Contexto: Estás procesando un texto que se va a almacenar en una base de datos.

        1.Descripción: Crea un array de caracteres a partir del texto "hello world" 
        usando Array.from(). Luego:

            •Usa Array.at() para obtener el quinto carácter (debes validar que es una 
            letra válida) y el último.
            •Usa Array.unshift() para añadir un marcador especial "#" al inicio del 
            array.
            •Reemplaza todos los espacios con el carácter "*" usando Array.fill().
            •Combina el texto con una nueva frase exclamativa agregando ['!', '!', '!'] al 
            final con Array.concat().

        2.Resultado esperado:
        ['#', 'h', 'e', 'l', 'l', '*', 'w', 'o', 'r', 'l', 'd', '!', '!', '!'] qué ocurre esto.
*/
function ejercicio5() {

    let info = document.getElementById('ej5');

    let texto = 'hello world';
    let arrayTexto = Array.from(texto);

    info.innerHTML = `<li>Array a partir de cadena hello world: ${arrayTexto}</li>`;

    // valida que la letra en la posicion es valida
    let letraValida = (pos, arr) => { return arr.at(pos).match(/[a-zA-Z]/) ? arr.at(pos) : 'letra no válida' };
    info.innerHTML += `<li>Caracteres en 5a y última posición: ${letraValida(1, arrayTexto)} - ${arrayTexto.at(-1)}</li>`;

    arrayTexto.unshift('#');
    info.innerHTML += `<li>Caracter '#' añadido: ${arrayTexto}</li>`;

    arrayTexto.fill('*', 6, 7);
    info.innerHTML += `<li>Reemplazo de espacios con '*': ${arrayTexto}</li>`;

    let fraseExclamativa = arrayTexto.concat('!', '!', '!');
    info.innerHTML += `<li>Combinación con signos de exclamación: ${fraseExclamativa}</li>`;

}

/*
    Ejercicio 6: Gestión de pedidos
        Contexto: Estás gestionando los números de pedidos de una tienda en línea.
        1.Descripción: Crea un array con los números de los pedidos pendientes [1, 2, 3, 
        4, 5, 6]. Luego:

            •Usa Array.at() para obtener el número del tercer pedido y del último 
            pedido.
            •El primer pedido ha sido procesado, así que usa Array.with() para 
            cambiar el número del primer pedido a 0 (pedido procesado).
            •Los pedidos del 2 al 4 se han cancelado, así que usa Array.fill() para 
            cambiar esos valores por 8 (pedido cancelado).
            •El primer y último pedido han sido procesados, así que usa Array.shift() y 
            Array.pop() para eliminarlos.
            •Finalmente, se agregaron tres nuevos pedidos, así que usa Array.push() 
            para agregar los pedidos 7, 8, 9.

        2.Resultado esperado:
        [8, 8, 8, 5, 6, 7, 8, 9]
*/
function ejercicio6() {

    let info = document.getElementById('ej6');

    let pedidosPendientes = Array.of(1, 2, 3, 4, 5, 6);
    info.innerHTML = `<li>Lista de pedidos pendientes: ${pedidosPendientes}</li>`;

    info.innerHTML += `<li>Números de 3er y último pedidos: ${pedidosPendientes.at(2)} - ${pedidosPendientes.at(-1)}</li>`;

    let primeroProcesado = pedidosPendientes.with(0, 0);
    info.innerHTML += `<li>Primer pedido procesado: ${primeroProcesado}</li>`;

    primeroProcesado.fill(8, 0, 4);
    info.innerHTML += `<li>Pedidos cancelados: ${primeroProcesado}</li>`;

    primeroProcesado.shift();
    primeroProcesado.pop();
    info.innerHTML += `<li>Primer y último pedido procesados: ${primeroProcesado}</li>`;

    let nuevosPedidos = primeroProcesado.concat(7, 8, 9);
    info.innerHTML += `<li>Nuevos pedidos: ${nuevosPedidos}</li>`;

}

/*
    Ejercicio 7: Mostrar claves y valores de configuraciones del sistema
    Contexto: Estás administrando una aplicación y necesitas mostrar las configuraciones claves junto 
    con sus valores.
        1.Descripción: Tienes un array con las configuraciones del sistema [“pantalla completa”, 
        “sonido activado”, “modo oscuro”]. Luego:
            •Usa Array.keys() para obtener las claves de cada configuración.
            •Usa Array.values() para obtener los valores.
            •Usa un bucle for...of para mostrar tanto la clave como el valor de cada configuración 
        en la consola.
        2.Resultado esperado:
        Clave 0: pantalla completa
        Clave 1: sonido activado
        Clave 2: modo oscuro
*/
function ejercicio7() {

    let info = document.getElementById('ej7');

    let configuracion = ['pantalla completa', 'sonido activado', 'modo oscuro'];
    info.innerHTML = `<li>Configuración del sistema: ${configuracion}</li>`;

    // claves
    let iterador = configuracion.keys();
    info.innerHTML += `<li>Claves de configuraciones: `;

    for (let clave of iterador) {
        info.innerHTML += `${clave},`;
    }

    info.innerHTML += `</li>`;

    // valores
    iterador = configuracion.values();
    info.innerHTML += `<li>Valores de configuración: `;

    for (let valor of iterador) {
        info.innerHTML += `${valor},`;
    }

    info.innerHTML += `</li>`;

    // clave - valor
    iterador = configuracion.entries();
    info.innerHTML += `<li>Claves y valor configuración: `;

    for (let config of iterador) {
        info.innerHTML += `Clave ${config} <br>`;
    }

    info.innerHTML += `</li>`;

}

/*
    Ejercicio 8: Reorganizar comentarios de un blog
    Contexto: Estás gestionando los comentarios de un blog y necesitas reorganizarlos.
        1.Descripción: Tienes un array con los IDs de los comentarios más recientes en un blog [5003, 
        5001, 5002, 5005, 5004]. Luego:
            •Usa Array.toSorted() para crear un array con los comentarios ordenados por orden 
            ascendente (más antiguos primero).
            •Usa Array.reverse() para invertir el orden y mostrar los comentarios en orden 
            descendente (más recientes primero).
            •Usa Array.slice() para seleccionar los últimos dos comentarios publicados.
        2.Resultado esperado:
        [5005, 5004]
*/
function ejercicio8() {

    let info = document.getElementById('ej8');

    let idComentarios = Array.of(5003, 5001, 5002, 5005, 5004);
    info.innerHTML = `<li>IDs de los comentarios más recientes: ${idComentarios}</li>`;

    let ordenadoAntiguedad = idComentarios.toSorted();
    info.innerHTML += `<li>Ordenados por antigüedad: ${ordenadoAntiguedad}</li>`;

    idComentarios.reverse();
    let ordenadoReciente = idComentarios.toSorted((a, b) => a + b);
    info.innerHTML += `<li>Invertido: ${idComentarios}</li>`;
    info.innerHTML += `<li>Ordenado reciente: ${ordenadoReciente}</li>`;

    let masRecientes = ordenadoReciente.slice(3);
    info.innerHTML += `<li>Comentarios más recientes: ${masRecientes}</li>`;

}