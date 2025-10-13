document.addEventListener("DOMContentLoaded", function () {
    
    /*
        1. Copia el ejemplo1 y modificalo para que tengas tres usuarios distintos (como no hemos
        visto aun arrays solo crea tres variables distintas)
    */
    // datos de usuarios
    const nombres = ["Laura García", "Sofía Stone", "Paola Castillo"];
    const edades = [29, 18, 23];
    const ciudades = ["Madrid", "Zamora", "Cáceres"];
    const intereses = [
                        ["fotografía", "viajes", "tecnología"],
                        ["libros", "juegos roleplay", "viajes"],
                        ["piano", "actuación", "dibujar"]
                    ];

    // i < nombres.length como condición porque todos los arrays tienen el mismo tamaño
    for (let i = 0; i < nombres.length; i++) {
        
        // creación del bloque de tarjeta y sus correspondientes elementos internos
        let tarjeta = document.createElement("div");
        let nombre = document.createElement("h2");
        let edad = document.createElement("p");
        let ciudad = document.createElement("p");
        let lista = document.createElement("ul");

        // texto identificativo para cada tipo de dato mostrado en panatalla
        nombre.innerHTML = `Nombre: ${nombres[i]}`;
        edad.innerHTML = `Edad: ${edades[i]}`;
        ciudad.innerHTML = `Ciudad: ${ciudades[i]}`;
        lista.innerHTML = `Intereses:`;

        // recorre, por cada usuario, sus intereses dentro del array 'intereses'
        for (let j = 0; j < intereses[i].length; j++) {
            
            // nuevo elemento de lista por cada interés
            let interes = document.createElement("li");
            // se escribe el interés 
            interes.innerHTML = `${intereses[i][j]}`;
            // se añade a la lista de intereses de dicho usuario
            lista.appendChild(interes);
            
        }

        // añadir los elementos al final, en el interior del bloque 'tarjeta'
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(edad);
        tarjeta.appendChild(ciudad);
        tarjeta.appendChild(lista);

        // añade tarjeta por usuario al html
        document.getElementById("ej1").appendChild(tarjeta);
        
    }

    /*
        Ejercicio 2. Formatea una descripción con datos dinámicos Crear un texto descriptivo
                    usando backticks e interpolación, luego usar funciones de String para manipularlo.
    */
    const producto = "auriculares inalámbricos";
    const precio = 59.99;
    const marca = "SoundMax";

    // el separador es el espacio en blanco
    let arrayProducto = producto.split(" "); // resultado: ["auriculares", "inalámbricos"]
    // por cada elemento del array, convierte el primer caracter en mayúsuculas
    let primeraMayuscula = arrayProducto.map(
        // a la mayúscula le añade el resto de la palabra, excluyendo la primera letra (A e I, respectivamente)
        (palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)
    );
    // une en un string arrayProducto, con un espacio en blanco como separador entre cada elemento
    let cadenaUnida = primeraMayuscula.join(" "); // resultado "Auriculares Inalámbricos"

    let descripcion = `Los ${cadenaUnida} de la marca ${marca} cuestan ${precio}€`;

    // reemplazo del símbolo '€' por la palabra euros
    let descripcionFinal = descripcion.replace("€", " euros");

    document.getElementById("ej2").innerHTML = descripcionFinal;

    /*
        Ejercicio 3. Construiye una plantilla de correo Crear una plantilla de email
        personalizada y limpiar texto con métodos de String.
    */
    const nombre = " juan pérez ";
    const producto2 = "Teclado mecánico RGB";
    const fecha = "09/10/2025";

    // elimina los espacios del principio y del final de la palabra
    let nombreSinEspacios = nombre.trim(" ");

    let arrayNombre = nombreSinEspacios.split(" ");

    let nombreApellidoMayuscula = arrayNombre.map(
        // a la mayúscula le añade el resto de la palabra, empezando desde la primera poscición
        (palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)
    );

    cadenaUnida = nombreApellidoMayuscula.join(" ");

    descripcion = `Hola ${cadenaUnida}, tu pedido del producto ${producto2} se enviará el ${fecha} <br>`;

    // primera letra de nombre y apellido en mayúsculas
    let resultado = descripcion;

    // todo el mensaje a mayúsculas
    resultado += descripcion.toUpperCase();
    
    // muestra ambos casos
    document.getElementById("ej3").innerHTML = resultado;

    /*
        Ejercicio 4. Genera una tabla de datos en HTML. Usar template literals y métodos de
        cadena para generar un bloque HTML limpio.
    */
    const usuarios = [" ana ", "PEDRO", "maria "];

    // elimina los espacios alrededor de cada elemento del array (si los hubiera),
    // y convierte el texto en minúsuclas
    let usuariosSinEspacios = usuarios.map(
        (u) => u.trim(" ").toLowerCase()
    );

    // capitalizar la primera letra de cada uno
    let capitaliza = usuariosSinEspacios.map(
        (uC) => uC.charAt(0).toUpperCase() + uC.slice(1)
    );

    // crear un bloque ul donde cada li tenga formateo diferente
    let lista = document.createElement("ul");

    for (let i = 0; i < capitaliza.length; i++) {
        
        // tamaño de fuente [10, 25]px
        let tamanioAleatorio = (Math.random() * (25 - 10 + 1)) + 10;
        // para modelo de color rgb
        let r = (Math.random() * 255);
        let g = (Math.random() * 255);
        let b = (Math.random() * 255);

        let elementoLista = document.createElement("li");

        // el texto será el nombre leído del array capitaliza
        elementoLista.innerHTML = capitaliza[i];
        // obtenido aleatoriamente de tamanioAleatorio
        elementoLista.style.fontSize = `${tamanioAleatorio}px`;
        // código de color obtenido aleatoriamente por su variable correspondiente
        elementoLista.style.color = `rgb(${r}, ${g}, ${b})`;
        // añade el elemento a la lista
        lista.appendChild(elementoLista);
    }

    // lista final añadida al documento
    document.getElementById("ej4").appendChild(lista);

    /*
        Ejercicio 5. Análisis de texto dinámico. Analizar un texto generado con template
        literals y aplicar varias funciones de String.
    */
    const nombre2 = "Lucía";
    const hobby = "leer libros de ciencia ficción";

    // mensaje
    let mensaje = `A ${nombre2} le encanta ${hobby}`;
    resultado = mensaje;

    // cantidad de letras que contiene el mensaje
    let tamanioMensaje = mensaje.length;
    resultado += `<br>Tamaño del texto: ${tamanioMensaje}`;

    // verifica que el mensaje incluye la palabra 'ficción'
    let existeFiccion = mensaje.includes("ficción");
    resultado += `<br>Existe la palabra 'ficción': ${existeFiccion}`;

    // reemplaza la palabra 'ficción' por 'aventuras'
    let reemplazo = mensaje.replace("ciencia ficción", "aventuras");
    resultado += `<br>${reemplazo}`;

    // convierte la oración en minúsuclas y luego a mayúsculas
    resultado += `<br>Minúsuclas: ${reemplazo.toLowerCase()}`;
    resultado += `<br>Mayúsculas: ${reemplazo.toUpperCase()}`;

    document.getElementById("ej5").innerHTML = resultado;

    /*
        Ejercicio 6. Plantilla de perfil resumido. Generar un resumen de usuario y recortar
        texto si es demasiado largo.
    */
    const usuario = {
        nombre: "Beatriz",
        descripcion: "Apasionada del desarrollo web, la inteligencia artificial y los videojuegos."
    };

    // recorta la descripción si tiene más de 50 caracteres y añade "..." al final
    usuario.descripcion = (usuario.descripcion.length > 50) ? (usuario.descripcion.slice(0, 51)).concat("...") : usuario.descripcion;

    // texto
    mensaje = `Perfil de ${usuario.nombre}: ${usuario.descripcion}`;

    // resultado final
    document.getElementById("ej6").innerHTML = mensaje;
    

});