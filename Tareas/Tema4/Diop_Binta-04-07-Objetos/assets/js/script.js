

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
let alumno = {
    nombre: 'Binta',
    apellidos: 'Diop Diop',
    id: 'BD2407',
    nombreModulos: ['DWEC', 'DWES', 'DAW', 'INGLÉS', 'DIW', 'OPT'],
    notasModulos: [6, 7, 9, 9, 8, 9],

    setNombre(nombre) { this.nombre = nombre },
    setApellidos(apellidos) { this.apellidos = apellidos },
    setId(id) { this.id = id },
    getNombre() { return this.nombre; },
    getApellidos() { return this.apellidos; },
    getId() { return this.id; },

    mostrarModulos() {
        let nombres = '';
        for (let i = 0; i < this.nombreModulos.length; i++) {
            nombres += i == this.nombreModulos.length - 1 ? `${this.nombreModulos[i]}` : `${this.nombreModulos[i]}, `;
        }
        return nombres;
    },
    nota(nombreM) {
        let nota = this.nombreModulos.includes(nombreM) ? this.notasModulos[this.nombreModulos.indexOf(nombreM)] : null;
        return nota;
    },
    media() {
        let media, sum = 0, cantModulos = 0;
        for (let i = 0; i < this.notasModulos.length; i++) {
            sum += this.notasModulos[i];
            cantModulos++;
        }
        media = sum / cantModulos;
        return media;
    },
    suspensas() {
        let susp = '';
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] < 5)
                susp += i == this.notasModulos.length - 1 ? `${this.notasModulos[i]}` : `${this.notasModulos[i]}, `;
        }
        return susp == '' ? 'Vacio' : susp;
    },
    aprobadas() {
        let aprob = '';
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] >= 5)
                aprob += i == this.notasModulos.length - 1 ? `${this.notasModulos[i]}` : `${this.notasModulos[i]}, `;
        }
        return aprob == '' ? 'Vacio' : aprob;
    }
}

/*
Ejercicio 2.Realiza el anterior para que los metodos sean funciones anonimas. Usando la notacion 
() =>
*/
let alumnoAnon = {
    nombre: 'Javier',
    apellidos: 'Figueroa Ramos',
    id: 'JF1407',
    nombreModulos: ['DWEC', 'DWES', 'DAW', 'INGLÉS', 'DIW', 'OPT'],
    notasModulos: [10, 6, 4, 7, 8, 9],

    setNombre(nombre) { this.nombre = nombre },
    setApellidos(apellidos) { this.apellidos = apellidos },
    setId(id) { this.id = id },
    getNombre() { return this.nombre; },
    getApellidos() { return this.apellidos; },
    getId() { return this.id; },

    mostrarModulos: () => {
        let nombres = '';
        for (let i = 0; i < alumnoAnon.nombreModulos.length; i++) {
            nombres += i == alumnoAnon.nombreModulos.length - 1 ? `${alumnoAnon.nombreModulos[i]}` : `${alumnoAnon.nombreModulos[i]}, `;
        }
        return nombres;
    },
    nota: nombreM => {
        let nota = alumnoAnon.nombreModulos.includes(nombreM) ? alumnoAnon.notasModulos[alumnoAnon.nombreModulos.indexOf(nombreM)] : null;
        return nota;
    },
    media: () => {
        let media, sum = 0, cantModulos = 0;
        for (let i = 0; i < alumnoAnon.notasModulos.length; i++) {
            sum += alumnoAnon.notasModulos[i];
            cantModulos++;
        }
        media = sum / cantModulos;
        return media;
    },
    suspensas: () => {
        let susp = '';
        for (let i = 0; i < alumnoAnon.notasModulos.length; i++) {
            if (alumnoAnon.notasModulos[i] < 5)
                susp += i == alumnoAnon.notasModulos.length - 1 ? `${alumnoAnon.notasModulos[i]}` : `${alumnoAnon.notasModulos[i]}, `;
        }
        return susp == '' ? 'Vacio' : susp;
    },
    aprobadas: () => {
        let aprob = '';
        for (let i = 0; i < alumnoAnon.notasModulos.length; i++) {
            if (alumnoAnon.notasModulos[i] >= 5)
                aprob += i == alumnoAnon.notasModulos.length - 1 ? `${alumnoAnon.notasModulos[i]}` : `${alumnoAnon.notasModulos[i]}, `;
        }
        return aprob == '' ? 'Vacio' : aprob;
    }
}

// Ejercicio 3.Crea un ejemplo que Muestra cada elemento.
function ejercicio3() {

    let id = 'ej3';
    let ejercicio = document.getElementById(id);

    // OBJETO ALUMNO (FUNCIONES ESTANDAR)
    ejercicio.innerHTML = `<h2>Objeto alumno</h2>`
    ejercicio.innerHTML += `ID: ${alumno.getId()}<br>`
    ejercicio.innerHTML += `Nombre y apellidos: ${alumno.getNombre()} ${alumno.getApellidos()}<br>`
    ejercicio.innerHTML += `Módulos en los que está matriculado: ${alumno.mostrarModulos()}<br>`
    ejercicio.innerHTML += `Nota módulo DAW: ${alumno.nota('DAW')}<br>`;
    ejercicio.innerHTML += `Media de todas las notas: ${alumno.media().toFixed(2)}<br>`;
    ejercicio.innerHTML += `Notas suspensas: ${alumno.suspensas()}<br>`;
    ejercicio.innerHTML += `Notas aprobadas: ${alumno.aprobadas()}<hr>`;

    // OBJETO ALUMNOANON (FUNCIONES ANONIMAS FLECHA)
    ejercicio.innerHTML += `<h2>Objeto alumnoAnon</h2>`
    ejercicio.innerHTML += `ID: ${alumnoAnon.getId()}<br>`
    ejercicio.innerHTML += `Nombre y apellidos: ${alumnoAnon.getNombre()} ${alumnoAnon.getApellidos()}<br>`
    ejercicio.innerHTML += `Módulos en los que está matriculado: ${alumnoAnon.mostrarModulos()}<br>`
    ejercicio.innerHTML += `Nota módulo DIW: ${alumnoAnon.nota('DIW')}<br>`;
    ejercicio.innerHTML += `Media de todas las notas: ${alumnoAnon.media().toFixed(2)}<br>`;
    ejercicio.innerHTML += `Notas suspensas: ${alumnoAnon.suspensas()}<br>`;
    ejercicio.innerHTML += `Notas aprobadas: ${alumnoAnon.aprobadas()}`;

}

/*
Ejercicio 4.Crea un objeto clase que sea un array de alumnos con los metodos (con notacion  
anonima)
1. matricular(alumno) 
2. eliminar( alumnos)
3. numero(alumnos)
4. Mostrar(id)
*/
let clase = {
    alumnos: [],

    matricular: (alumno) => {
        clase.alumnos.push(alumno)
    },

    eliminar: (alumno) => {
        let a = 0
        let eliminado
        while (this.alumnos[a].getId() != alumno.getId() && a < this.alumnos.length) {

            if (this.alumnos[a].getId() == alumno.getId()) {
                this.alumnos.splice(this.alumnos[a], this.alumnos[a + 1])
                eliminado = true
            }

            eliminado = false
            a++
        }
        return eliminado
    },

    /*numero: (alumno) => {

    },*/

    mostrar: () => {
        let info = ''
        for (let i = 0; i < this.alumnos.length; i++) {
            info += `{ ID: ${this.alumnos.getId()} - Nombre: ${this.alumnos.getNombre()} - Apellidos: ${this.alumnos.getApellidos()} } <br>`
        }
        return info
    }
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