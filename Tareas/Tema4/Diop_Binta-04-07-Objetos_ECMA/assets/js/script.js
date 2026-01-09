
// Ejercicio 1. Modifica el ejercicio anterior para usar las propiedades class y extend


/*
Ejercicio 2. Crea una alumno con los siguientes valores metodos y propiedades
1. Propiedades: nombre, apellidos, id, NombreModulos, notasModulos (estos dos son dos arrays paralelos) 
2. Metodos: 
1. set y get de las propiedades nombre, apellidos, id 
2. Mostrar modulos(id): muestra el nombre de los modulos : devuelve un string con los modulos
3. nota(nombremodulo) :devuelve un string  con la nota del modulo 
4. media(id) te muestra su media
5. suspensas(id): te muestra las notas suspensas
6. Aprobadas(id): te muestra las notas aprobadas
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
    get getNombre() {
        return this.nombre
    }

    get getApellidos() {
        return this.apellidos
    }

    get getId() {
        return this.id
    }

    // SETTERS
    set setNombre(n) {
        this.nombre = n
    }

    set setApellidos(ap) {
        this.apellidos = ap
    }

    set setId(id) {
        this.id = id
    }

    // FUNCIONES
    // muestra el nombre de los modulos
    mostrarModulos() {
        let nombres = '';
        for (let i = 0; i < this.nombreModulos.length; i++) {
            nombres += i == this.nombreModulos.length - 1 ? `${this.nombreModulos[i]}` : `${this.nombreModulos[i]}, `;
        }
        return nombres;
    }

    // muestra la nota del modulo pasado por parametro
    nota(nombreM) {
        let nota = this.nombreModulos.includes(nombreM) ? this.notasModulos[this.nombreModulos.indexOf(nombreM)] : null;
        return nota;
    }

    // muestra la media de las notas de todos los modulos
    media() {
        let media, sum = 0, cantModulos = 0;
        for (let i = 0; i < this.notasModulos.length; i++) {
            sum += this.notasModulos[i];
            cantModulos++;
        }
        media = sum / cantModulos;
        return media;
    }

    // muestra las notas suspensas
    suspensas() {
        let susp = '';
        for (let i = 0; i < this.notasModulos.length; i++) {
            if (this.notasModulos[i] < 5)
                susp += i == this.notasModulos.length - 1 ? `${this.notasModulos[i]}` : `${this.notasModulos[i]}, `;
        }
        return susp == '' ? 'Vacio' : susp;
    }

    // muestra las notas aprobadas
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
Ejercicio 3. Crea un objeto clase que sea un array de alumnos con los metodos (con notacion  anonima)
1. matricular(alumno) 
2. eliminar( alumnos)
3. numero(alumnos)
4. Mostrar(id)
*/
class Clase {

    // CONSTRUCTOR
    constructor() {
        this.alumnos = []
    }

    matricular = (alumno) => {
        if (!this.alumnos.includes(alumno)) this.alumnos.push(alumno)
    }

    eliminar = (alumno) => {
        let a = 0
        while (this.alumnos[a].getId != alumno.getId && a < this.alumnos.length) {

            if (this.alumnos[a].getId == alumno.getId)
                this.alumnos.splice(this.alumnos[a], 1)
            a++
        }
    }

    numero = (alumno) => {

    }

    mostrar = () => {
        let info = '\n'
        for (let i = 0; i < this.alumnos.length; i++) {
            info += `{ ID: ${this.alumnos[i].getId} - Nombre: ${this.alumnos[i].getNombre} - Apellidos: ${this.alumnos[i].getApellidos} }\n`
        }
        return info
    }

}

alumno1 = new Alumno('Binta', 'Diop Diop', 'BD2407', ['DWEC', 'DWES', 'DAW', 'INGLÉS', 'DIW', 'OPT'], [6, 7, 9, 9, 8, 9])
alumno2 = new Alumno('Javier', 'Figueroa Ramos', 'JF1407', ['DWEC', 'DWES', 'DAW', 'INGLÉS', 'DIW', 'OPT'], [10, 6, 4, 7, 8, 9])
//alumno3 = new Alumno('Javier', 'Figueroa Ramos', 'JF1407', ['DWEC', 'DWES', 'DAW', 'INGLÉS', 'DIW', 'OPT'], [10, 6, 4, 7, 8, 9])
clase = new Clase()

clase.matricular(alumno1)
clase.matricular(alumno2)
clase.eliminar(alumno1)

console.log(clase.mostrar())

/*
    4. Modifica el código anterior para sustituir los alert por
    document.getElementById("idetiqueta").innerHTML
*/
