
// Ejercicio 1. Crea un script que te cree la fecha de hoy a mano
function ejercicio1() {

    fechaActual = new Date(2025, 9, 19, 23, 42, 20);
    document.getElementById("ej1").innerHTML = fechaActual;

}

/*
    Ejercicio 2. usa este formato de string para crear una fecha
    let dia = new Date("11/06/2023");
*/
function ejercicio2() {

    let dia = new Date("11/06/2023");
    document.getElementById("ej2").innerHTML = dia;

}

/*
    Ejercicio 3. Usa este código para hacer la misma función
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    Calcula los segundos, horas, dias y años que han pasado desde entonces
*/
function ejercicio3() {

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    let pasado = new Date("2023-06-11");

    const diferencia= tiempoTranscurrido - pasado.getTime();
    
    const segundos = Math.floor(diferencia/ 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const años = Math.floor(dias / 365);

    document.getElementById("ej3").innerHTML = `Fecha actual: ${hoy} <br> Fecha pasada: ${pasado} <br><br>
                                                Tiempo transcurrido desde entonces:  <br>
                                                - ${segundos} segundos <br>
                                                - ${minutos} minutos <br>
                                                - ${horas} horas <br>
                                                - ${dias} días <br>
                                                - ${años} años`;

}

/*
    Ejercicio 4. Crea un script que te lea tu fecha de nacimiento y te calcule cuantos días llevas vivo.
    Debes restar las dos fechas en milisegundos y dividir el numero entre (1000*60*60*24)
    para mostrar las fechas puedes usar la función:
    var fechahoy = ahora2.toLocaleDateString("es-ES");
*/
function ejercicio4() {

    let dia = parseInt(window.prompt('Ingrese su día de nacimiento (1-31):'));
    let mes = parseInt(window.prompt('Ingrese su mes de nacimiento (01-12):')) - 1;
    let anyo = parseInt(window.prompt('Ingrese su año de nacimiento:'));

    let fechaNacimiento = new Date(anyo, mes, dia);
    let actualidad = new Date(Date.now());

    let tiempoVivido = Math.floor((actualidad.getTime() - fechaNacimiento.getTime()) / (1000*60*60*24));

    document.getElementById("ej4").innerHTML = `Su fehca de nacimiento es ${fechaNacimiento.toLocaleDateString("es-ES")}
                                                <br>Ha vivido un total de ${tiempoVivido} días`;

}

/*
    Ejercicio 5. Crea un script que te lea tu año de nacimiento y pais y sexo) . te calcule cuantos años te quedan
    para llegar a la edad media de esperanza de vida tu país (debes hacer un if )
*/
function ejercicio5() {
    
    let dia = parseInt(window.prompt('Ingrese su día de nacimiento (1-31):'));
    let mes = parseInt(window.prompt('Ingrese su mes de nacimiento (01-12):')) - 1;
    let anyo = parseInt(window.prompt('Ingrese su año de nacimiento:'));
    let nacionalidad = window.prompt('Ingrese su país de nacimiento:');
    let sexo = window.prompt('Ingrese su sexo (H o M):');

}

