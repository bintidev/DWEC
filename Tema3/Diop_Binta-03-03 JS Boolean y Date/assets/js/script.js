
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

    let nacimiento = new Date(anyo, mes, dia).getFullYear();
    let actualidad = new Date(Date.now()).getFullYear();

    let edad = actualidad - nacimiento;

    let hastaEdadMedia;

    if (sexo.toLowerCase() == 'h') {

        switch(nacionalidad.toLowerCase()) {

            case 'japon':
                hastaEdadMedia = 81.5 - edad;
                break;
            
            case 'suiza':
                hastaEdadMedia = 81.8 - edad;
                break;

            case 'españa':
                hastaEdadMedia = 80.7 - edad;
                break;

            case 'italia':
                hastaEdadMedia = 80.9 - edad;
                break;

            case 'italia':
                hastaEdadMedia = 69.9 - edad;
                break;

            case 'guinea ecuatorial':
                hastaEdadMedia = 60.9 - edad;
                break;

            case 'somalia':
                hastaEdadMedia = 54 - edad;
                break;

        }

    } else {

        switch(nacionalidad.toLowerCase()) {

            case 'japon':
                hastaEdadMedia = 86.9 - edad;
                break;
            
            case 'suiza':
                hastaEdadMedia = 85.1 - edad;
                break;

            case 'españa':
                hastaEdadMedia = 85.7 - edad;
                break;

            case 'italia':
                hastaEdadMedia = 84.9 - edad;
                break;

            case 'italia':
                hastaEdadMedia = 75 - edad;
                break;

            case 'guinea ecuatorial':
                hastaEdadMedia = 63.6 - edad;
                break;

            case 'somalia':
                hastaEdadMedia = 59.2 - edad;
                break;

        }

    }

    document.getElementById("ej5").innerHTML = `Te quedan ${hastaEdadMedia} años para alcanzar la media de edad de tu país`;

}

/*
    Ejercicio 6. Instala la libreria datejs y ejecuta los siguientes códigos de ejemplo
    <script type="text/javascript" src="date.js"></script>
    y muestralos mediante un document.write junto con el comentario
*/
//import './libreria.minima.datejs/datejs/date.js';
function ejercicio6() {

    let bloque = document.getElementById("ej6");

    bloque.innerHTML += `<li> ${Date.today()} </li>`; // Returns today's date, with time set to 00:00 (start of day).
    bloque.innerHTML += `<li> ${Date.today().next().friday()} </li>`; // Returns the date of the next Friday.
    bloque.innerHTML += `<li> ${Date.today().last().monday()} </li>`;

    bloque.innerHTML += `<li> ${new Date().next().march()} </li>`; // Returns the date of the next March.
    bloque.innerHTML += `<li> ${new Date().last().week()} </li>`; // Returns the date one week ago.day).

    bloque.innerHTML += `<li> ${Date.today().is().friday()} </li>`; // Returns true|false if the day-of-week matches.
    bloque.innerHTML += `<li> ${Date.today().is().fri()} </li>`; // Abbreviated day names.

    bloque.innerHTML += `<li> ${Date.today().is().november()} </li>`; // Month names.
    bloque.innerHTML += `<li> ${Date.today().is().nov()} </li>`; // Abbreviated month names.

    bloque.innerHTML += `<li> ${Date.today().is().weekday()} </li>`; // Is today a weekday?
    
    bloque.innerHTML += `<li> ${Date.today().addDays(1)} </li>`; // Add one day (+1).
    bloque.innerHTML += `<li> ${Date.today().addMonths(-3)} </li>`; // Subtract three months (-3).

    bloque.innerHTML += `<li> ${Date.today().add(1).day()} </li>`; // Add one (+1) day. Supports all date parts
    bloque.innerHTML += `<li> ${Date.today().add(-3).months()} </li>`; // Subtract three (-3) months.

    bloque.innerHTML += `<li> ${(1).day().fromNow()} </li>`; // One (1) day from now.
    bloque.innerHTML += `<li> ${(3).months().ago()} </li>`; // Three (3) months ago.
    var n = 6; 
    bloque.innerHTML += `<li> ${n.months().fromNow()} </li>`; // Six (6) months from now.

    bloque.innerHTML += `<li> ${Date.monday()} </li>`; // Returns Monday of the current week.
    bloque.innerHTML += `<li> ${Date.mon()} </li>`; // Abbreviated version of Date.monday()

    bloque.innerHTML += `<li> ${Date.march()} </li>`; // Returns March 1st of this year.
    bloque.innerHTML += `<li> ${Date.mar()} </li>`; // Abbreviated version of Date.march()

    bloque.innerHTML += `<li> ${Date.today().first().thursday()} </li>`; // Returns the first Thursday of the current month.
    bloque.innerHTML += `<li> ${Date.today().second().thursday()} </li>`; // Returns the second Thursday of the current month.

    bloque.innerHTML += `<li> ${Date.march().third().thursday()} </li>`; // Returns the third Thursday in March of the current year.
    bloque.innerHTML += `<li> ${Date.october().fourth().sunday()} </li>`; // Returns the fourth Sunday in October.

    bloque.innerHTML += `<li> ${Date.today().fifth().sunday()} </li>`; // Returns the fifth Sunday in the current month,
    bloque.innerHTML += `<li> ${Date.october().final().sunday()} </li>`; // Returns the final Sunday in October.

    bloque.innerHTML += `<li> ${Date.january().first().monday()} </li>`; // Returns the first Monday of the current year.
    bloque.innerHTML += `<li> ${Date.december().final().friday()} </li>`; // Returns the last Friday of the current year.

    bloque.innerHTML += `<li> ${Date.today().at("6:15pm")} </li>`; // Returns todays date at 6:15pm.

    var time = {hour:18, minute:15};
    bloque.innerHTML += `<li> ${Date.today().at(time)} </li>`; // Set time with a config object.

    var birthDayParty = {month: 1, day: 20, hour: 20, minute: 30};
    bloque.innerHTML += `<li> ${Date.today().set(birthDayParty)} </li>`; // Set date and time with a config object.

}

// Ejercicio 7. utiliza la libreria datejs para calcular las siguientes fechas
function ejercicio7() {

    let lista = document.getElementById("ej7");

    lista.innerHTML = `<li>Hoy: ${Date.today()}</li>`; // hoy
    var time = {hour:23, minute:0};
    lista.innerHTML += `<li>Hoy a las 23:00: ${Date.today().at(time)}</li>`; // hoy a las 23:00
    lista.innerHTML += `<li>Hoy dentro de un año: ${Date.today().add(12).months()}</li>`; // hoy dentro de un año
    var birthDayParty = {month: 6, day: 24};
    lista.innerHTML += `<li>Mi cumpleaños este año: ${Date.today().set(birthDayParty)}</li>`; // mi cumpleaños este año
    lista.innerHTML += `<li>El primer lunes de mes que viene: ${Date.today().add(1).months().first().monday()}</li>`; // el primer lunes de mes que viene
    lista.innerHTML += `<li>Preguntar si hoy es viernes: ${Date.today().is().friday()}</li>`; // preguntar si hoy es viernes
    lista.innerHTML += `<li>Preguntar si hace un mes fue septiembre: ${Date.today().add(-1).months().is().september()}</li>`; // preguntar si hace un mes fue septiembre

}

