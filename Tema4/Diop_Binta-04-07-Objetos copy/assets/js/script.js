

/*
Ejercicio 1.Crea un objeto alumno con los siguientes valores metodos y propiedades
1. Propiedades: nombre, apellidos, id, NombreModulos, notasModulos (estos dos son dos 
arrays paralelos) 
2. Metodos: 
1. set y get de las propiedades nombre, apellidos, id 
2. Mostrar modulos(id): muestra el nombre de los modulos
3. nota(nombremodulo) : muestra la nota del modulo
4. media(id) te muestra su media
5. suspensas(id): te muestra las notas suspensas
6. Aprobadas(id): te muestra las notas aprobadas
el id es para que se muestre en el InnerElement que tenga ese id.
*/
class Alumno {

    // CONSTRUCTOR Y PROPIEDADES
    constructor(nombre, apellidos, id, nombreModulos, notasModulos) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.id = id
        this.nombreModulos = nombreModulos
        this.notasModulos = notasModulos
    }

    // GETTERS
    get nombre() {
        return this.nombre
    }

    get apellidos() {
        return this.apellidos
    }

    get id() {
        return this.id
    }

    // SETTERS
    set nombre(n) {
        this.nombre = n
    }

    set apellidos(ap) {
        this.apellidos = ap
    }

    set id(id) {
        this.id = id
    }

    // FUNCIONES
    // muestra el nombre de los modulos
    mostrarModulos(id) {
        for (let i = 0; i < this.nombreModulos.length; i++) {
            document.getElementById(id).innerHTML += `${this.nombreModulos[i]}, `;
        }
    }

    // muestra la nota del modulo pasado por parametro
    nota(nombreM) {
        let nota = this.nombreModulos.includes(nombreM) ? this.notasModulos[this.nombreModulos.indexOf(nombreM)] : null;
        return nota;
    }

    // muestra la media de las notas de todos los modulos
    media(id) {
        let media, sum = 0, cantModulos = 0;
        for (let i = 0; i < this.notasModulos.length; i++) {
            sum += this.notasModulos[i];
            cantModulos++;
        }
        media = sum / cantModulos;
        document.getElementById(id).innerHTML = media;
    }

    // muestra las notas suspensas
    suspensas(id) {
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] < 5)
                document.getElementById(id).innerHTML += `${this.notasModulos[i]}, `;
        }
    }

    // muestra las notas aprobadas
    aprobadas(id) {
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] >= 5)
                document.getElementById(id).innerHTML += `${this.notasModulos[i]}, `;
        }
    }

}
/*let alumno = {
    nombre,
    apellidos,
    id,
    nombreModulos: ['Matemáticas', 'Biología', 'Anatomía', 'Física y Química', 'Filosofía', 'Inglés'],
    notasModulos: [7.5, 10, 8.75, 5, 6.21, 10],

    set nombre(nombre) {
        this.nombre = nombre;
    },
    set apellidos(apellidos) {
        this.apellidos = apellidos;
    },
    set id(id) {
        this.id = id
    },
    get nombre() {
        return this.nombre;
    },
    get apellidos() {
        return this.apellidos;
    },
    get id() {
        return this.id;
    },

    mostrarModulos(id) {
        let modulos;
        for (let i = 0; i < this.nombreModulos.length; i++) {
            modulos += `${this.nombreModulos[i]}, `;
        }
        document.getElementById(id).innerHTML = modulos;
    },
    nota(nombreM) {
        let nota;
        nota = this.nombreModulos.includes(nombreM) ? this.notasModulos[this.nombreModulos.indexOf(nombreM)] : null;
        return nota;
    },
    media(id) {
        let media, sum = 0, cantModulos = 0;
        for (let i = 0; i < this.notasModulos.length; i++) {
            sum += this.notasModulos[i];
            cantModulos++;
        }
        media = sum / cantModulos;
        document.getElementById(id).innerHTML = media;
    },
    suspensas(id) {
        let suspensas;
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] < 5)
                suspensas += `${this.notasModulos[i]}, `;
        }
        document.getElementById(id).innerHTML = suspensas;
    },
    aprobadas(id) {
        let aprobadas;
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] >= 5)
                aprobadas += `${this.notasModulos[i]}, `;
        }
        document.getElementById(id).innerHTML = aprobadas;
    }
}*/

/*
    Ejercicio 2. Realiza un ejercicio que te cree un array con 50 números random (Math.random) enteros del uno
    al 10 con un bucle y que te los ordene de mayor a menor y te calcule la moda (elemento que mas se
    repite) y la mediana
*/
function ejercicio2() {


}

// 3. Ejecuta el siguiente código para observar como podemos cambiar el titulo de la pagina
function ejercicio3() {

    let alumno1 = new Alumno('Binta', 'Diop Diop', 'BD2405', ['DWEC', 'DWES', 'DAW', 'INGLÉS', 'DIW', 'OPT'], [6, 7, 9, 9, 8, 9]);


}

/*
    4. Modifica el código anterior para sustituir los alert por
    document.getElementById("idetiqueta").innerHTML
*/
function ejercicio4() {

    let nombre = prompt('Ingrese nuevo titulo:', '');
    document.getElementById("ej4").innerHTML = "Titulo antiguo: " + document.title + "<br>";

    document.title = nombre;
    document.getElementById("ej4").innerHTML += "Titulo nuevo: " + document.title;

}

// 5. Ejercicio Usa getElementById()para acceder a un elemento identificado por el id escrito entre paréntesis.
function ejercicio5() {

    let nombre = prompt('Ingrese su nombre:', '');
    document.getElementById("ej5").innerHTML = `Hola, ${nombre}!!`;

}

/*
    6. Ejercicio Usa getElementsByName().InnerElement para acceder a un elemento identificado por el id escrito
    entre paréntesis.
*/
function ejercicio6() {

    let nombre = prompt('Ingrese su nombre:', '');
    document.getElementById("ej6.1").innerHTML = `¿Te llamas ${nombre}?`;
    document.getElementById("ej6.2").innerHTML = `Encantadx de conocerte ${nombre} 😊`;

}

/*
    7. Ejecuta el siguiente código para ver como se Usa getElementsByName().InnerHTML para acceder a un
    elemento identificado por el id escrito entre paréntesis.
*/
function ejercicio7() {

    let numero = parseInt(prompt('Ingrese el numero que deseas selecionar:', ''));
    let indice_string = "El " + numero + "o elemento de la lista es ";

    // recoge todos los elementos de lista existentes en el HTML
    const collection = document.getElementsByTagName("li");

    // muestra el texto almacenado en indice_string en el contenido del elemento con id indice
    document.getElementById("indice").innerHTML = indice_string;
    // obtiene un array del contenido de los elementos li del documento
    // y, de estos, busca la posicion del array que se corresponderia con el
    // numero ingresado por el usuario
    document.getElementById("lista").innerHTML = collection[numero - 1].innerHTML;

}

// 8. Modifica el siguiente código para ver el contenido de la etiqueta que se le indique
function ejercicio8() {

    let etiqueta = prompt('Ingrese el contenido que deseas conocer (p,h1,h2,span) que deseas seleccionar:', '');

    // almacena un array con el contenido de la/s etiqueta/s, especificada por el usuario,
    // existentes en el documento
    const collection = document.getElementsByTagName(etiqueta);

    document.getElementById("explica").innerHTML = "El contenido de la etiqueta " + etiqueta + " es: ";
    // obtiene el contenido de la primera etiqueta existente en el documento
    document.getElementById("elemento").innerHTML = collection[0].innerHTML;;

}

// 9. Modifica el siguiente código para ver el contenido de la etiqueta que se le indique
function ejercicio9() {

    let numero = prompt('Ingresa el numero de la etiqueta:', '');

    // almacena un array con los elementos con el atributo name especificado por el usuario
    // (en este caso de obtiene un array con un unico elemento de name etiquetaN)
    let elements = document.getElementsByName("etiqueta" + numero);
    // recoge el contenido del elemento
    let valorDeEtiqueta = elements[0].value;

    // muestra el resultado dentro de un elemento del documento especificado por id
    document.getElementById("explica2").innerHTML = "El contenido de la etiqueta " + numero + " es: ";
    document.getElementById("elemento2").innerHTML = valorDeEtiqueta;

}