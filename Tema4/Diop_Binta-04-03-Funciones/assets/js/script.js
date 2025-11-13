

/*
    Ejercicio 1.Crea una función Ej1Trigonometica que se le pase dos parametros 
    1)un número que es angulo en grados 
    2)un valor : cos, sen o tan
    la función debe pasar el valor a radianes y devolver el resultado dependiendo del parámetro la operación 
    correcta
    •cos→ coseno
    •sen → seno
    •tan → tangente
    •Lo tienes que pasar sabiendo las funciones  solo admiten Radianes (PI's) y que 180º = PI
*/
function ejercicio1Trigonometica() {

    let angulo = parseFloat(window.prompt("Introduce un número correspondiente a los grados:"));
    let valor = window.prompt("Escoja la operación a realizar (cos, sen, tan):");

    let radianes = (angulo / 180) * Math.PI;
    let resultado;

    switch (valor) {
        case 'cos':
            resultado = Math.cos(radianes);
            break;

        case 'sen':
            resultado = Math.sin(radianes);
            break;
    
        case 'tan':
            resultado = Math.tan(radianes);
            break;
            
        default:
            resultado = 'Operación propocionada incorrecta';
            break;
    }

    document.getElementById("ej1").innerHTML = `Ángulo: ${angulo} <br>
                                                Operación seleecionada: ${valor} <br>
                                                Resultado de la conversión a radianes del ángulo: ${resultado.toFixed(3)}`;
        
}

/*
    Ejercicio 2. Crea una función Ej2JS  que le pases una lista de valores y un id y te cree una lista ordenada con 
    ellos escrita en el el id
*/
function ejercicio2(id, ...arr) {

    // los valores se meten de forma literal en el array
    // y por tanto solo existe un elementos: "texto,texto,texto,texto"

    // vuelve a juntarlo todo en una misma cadena
    let reunido = arr.join('');
    // ahora SEPARA la cadena, que no se hizo al pasarlo por parametro
    // y ahora cada palabra/caracter es un elemento distinto del array
    let valSeparados = reunido.split(',');

    for (let i = 0; i < valSeparados.length; i++) {
        
        let listEl = document.createElement("li");
        listEl.innerHTML = valSeparados[i];
        document.getElementById(id).appendChild(listEl);
        
    }

}

/*
    Ejercicio 3. Modifica el anterior para  que uses parametros rest con un numero indeterminado de parametros
*/

function ejercicio3() {

    const tablaDocumento = document.getElementById("ej3");

    let tabla = []; // Aquí almacenaremos las tablas de multiplicar

    // Llenar el array multidimensional
    for (let i = 1; i <= 10; i++) {
        tabla[i] = []; // Cada fila será un nuevo array
        for (let j = 1; j <= 10; j++) {
            tabla[i][j] = i * j; // Guardamos el resultado en el array
        }
    }

    // Mostrar el array en forma de tabla HTML
    for (let i = 1; i <= 10; i++) {
        let fila = document.createElement("tr");

        for (let j = 1; j <= 10; j++) {
            let col = document.createElement("td");
            col.innerHTML = `${i} x ${j} = ${tabla[i][j]}`;
            fila.appendChild(col);
        }

        tablaDocumento.appendChild(fila);
    }

}

// Ejercicio 4. Modifica el anterior ejercicio para aplicar una función map que te sume 2 a cada valor
function ejercicio4() {

    const tablaDocumento = document.getElementById("ej4");

    let tabla = new Array(); // almacena las tablas de multiplicar

    // llenar el array
    for (let i = 1; i <= 10; i++) {
        tabla[i] = new Array(); // cada fila sera un nuevo array
        for (let j = 1; j <= 10; j++) {
            tabla[i][j] = i * j;
        }
    }

    // suma dos a los elementos de cada fila dentro del array tabla
    let tablaMasDos = tabla.map(fila =>
        fila.map(valor => valor + 2)
    );

    // mostrar el array
    for (let i = 1; i <= 10; i++) {
        let fila = document.createElement("tr");

        for (let j = 1; j <= 10; j++) {
            let col = document.createElement("td");
            col.innerHTML = `${i} x ${j} = ${tablaMasDos[i][j]}`;
            fila.appendChild(col);
        }
    }
    
    tablaDocumento.appendChild(fila);
}

/*
    Ejercicio 5. Modifica el anterior ejercicio para que te calcule la tabla de multiplicar tridimensional i*j*k en una
    estructura de array
*/
function ejercicio5() {

    

}

/*
    Ejercicio 6. Crea un array multidimensional para almacenar esta tabla
    Para ello importarlo en calc y usa concatenar para convertir cada linea en
    ="[" & A2 & ", '"&B2&"',"& C2 &","&""&D2&"," & E2 &"," & F2&"," &
    G2&"," & H2&",'" & I2& "'],"
*/
function ejercicio6() {

    var datos = [

        [1,'Madrid',3334730,3273049,2882860,3120732,3188297,3146071,'Comunidad de Madrid'],
        [2,'Barcelona',1664182,1619337,1496266,1707286,1754900,1745142,'Cataluña'],
        [3,'Valencia',800215,809267,739014,758738,751734,653690,'Comunidad Valenciana'],
        [4,'Sevilla',691395,704198,700716,678218,653833,548072,'Andalucía'],
        [5,'Zaragoza',681877,675121,604631,592686,590750,479845,'Aragón'],
        [6,'Málaga',578460,568507,531565,560495,503251,374452,'Andalucía'],
        [7,'Murcia',459403,441345,357166,322911,288631,243759,'Región de Murcia'],
        [8,'Palma',422587,404681,333925,325120,304422,234098,'Islas Baleares'],
        [9,'Las Palmas de Gran Canaria',381223,383308,358518,373846,366454,287038,'Canarias'],
        [10,'Bilbao',350184,353187,354271,383798,433030,410490,'País Vasco'],
        [11,'Alicante',337482,334418,276886,267485,251387,184716,'Comunidad Valenciana'],
        [12,'Córdoba',326039,328547,313463,307275,284737,235632,'Andalucía'],
        [13,'Valladolid',299265,315522,319129,333680,330242,236341,'Castilla y León'],
        [14,'Vigo',296692,297124,285526,279986,258724,197144,'Galicia'],
        [15,'Gijón',271717,277198,267426,264948,255969,187612,'Principado de Asturias'],
        [16,'Hospitalet de Llobregat',269382,258642,241782,276198,294033,241978,'Cataluña'],
        [17,'Vitoria',253996,238247,217358,209506,192773,136873,'País Vasco'],
        [18,'La Coruña',247604,246047,241769,256579,232356,189654,'Galicia'],
        [19,'Elche',234765,230822,195791,184912,162873,122663,'Comunidad Valenciana'],
        [20,'Granada',233648,239154,244486,268674,262182,190429,'Andalucía'],
        [21,'Tarrasa',223627,212724,171794,161682,155360,138697,'Cataluña'],
        [22,'Badalona',223166,218886,208944,225207,227744,162888,'Cataluña'],
        [23,'Oviedo',219910,225155,200411,194637,190123,154117,'Principado de Asturias'],
        [24,'Cartagena',216108,214165,179939,175966,172751,146904,'Región de Murcia'],
        [25,'Sabadell',216520,207338,183727,192142,184943,159408,'Cataluña'],
        [26,'Jerez de la Frontera',213105,208896,183677,186812,176238,149867,'Andalucía'],
        [27,'Móstoles',210309,206015,196289,189707,149649,17836,'Comunidad de Madrid'],
        [28,'Santa Cruz de Tenerife',209194,222643,215132,222892,190784,151361,'Canarias'],
        [29,'Pamplona',203944,197488,182666,183525,183126,147168,'Navarra'],
        [30,'Almería',201322,190013,168945,161566,140946,114510,'Andalucía'],
        [31,'Alcalá de Henares',197562,204120,166397,155548,142862,59783,'Comunidad de Madrid'],
        [32,'Fuenlabrada',194514,198973,173788,141496,77626,7327,'Comunidad de Madrid'],
        [33,'Leganés',191114,187227,172049,172729,163426,57537,'Comunidad de Madrid'],
        [34,'San Sebastián',188240,185506,180277,183944,175576,165829,'País Vasco'],
        [35,'Getafe',185180,169130,146310,139068,127060,69424,'Comunidad de Madrid'],
        [36,'Burgos',176418,178574,163358,163507,156449,119915,'Castilla y León'],
        [37,'Albacete',174336,170475,149667,129002,117126,93233,'Castilla-La Mancha'],
        [38,'Castellón de la Plana',174264,180690,142285,135863,126464,93968,'Comunidad Valenciana'],
        [39,'Santander',173375,181589,184264,194221,180328,149704,'Cantabria'],
        [40,'Alcorcón',172384,168299,144636,141080,140657,46048,'Comunidad de Madrid'],
        [41,'San Cristóbal de la Laguna',158911,152222,126543,118548,112635,79963,'Canarias'],
        [42,'Logroño',152485,152650,128493,121911,110980,84456,'La Rioja'],
        [43,'Badajoz',150984,150376,136136,126781,114361,101710,'Extremadura'],
        [44,'Marbella',147633,136322,105910,81876,67822,33203,'Andalucía'],
        [45,'Salamanca',144825,154462,158556,162037,167131,125220,'Castilla y León'],
        [46,'Huelva',143837,149310,140985,141002,127806,96689,'Andalucía'],
        [47,'Lérida',140403,137387,112194,111825,109573,90884,'Cataluña'],
        [48,'Tarragona',136496,140184,114097,112360,111689,78238,'Cataluña'],
        [49,'Dos Hermanas',135050,125086,97324,72717,57357,39387,'Andalucía'],
        [50,'Parla',133482,120182,74203,69017,55933,10213,'Comunidad de Madrid'],
        [51,'Torrejón de Ardoz',132853,118441,94161,86678,75398,21117,'Comunidad de Madrid'],
        [52,'Mataró',129661,122905,104659,101510,96467,73129,'Cataluña'],
        [53,'León',124028,134012,138006,137758,131134,105235,'Castilla y León'],
        [54,'Algeciras',123078,116417,104087,101256,86042,81662,'Andalucía'],
        [55,'Santa Coloma de Gramanet',120443,120060,117127,135486,140588,106711,'Cataluña'],
        [56,'Alcobendas',118417,110080,89612,78295,63507,25000,'Comunidad de Madrid'],
        [57,'Cádiz',115439,125826,140061,156903,157766,135743,'Andalucía'],
        [58,'Jaén',112757,116790,110781,109338,96429,78156,'Andalucía'],
        [59,'Reus',106168,106622,89179,86407,80710,59095,'Cataluña'],
        [60,'Orense',105643,108673,108647,109283,96085,73379,'Galicia'],
        [61,'Telde',102791,100900,88110,78978,63441,44667,'Canarias'],
        [62,'Baracaldo',101486,99321,97280,111672,117422,108757,'País Vasco'],

    ]

    return datos;

}

// Ejercicio 7. Haz una función que recorra el array calculando la media por años y lo muestre.

function ejercicio7() {
    
    var datos = ejercicio6();
    let sumaPorAnyo = 0, mediaPorAnyo = 0, anyo = 2020;

    for (let i = 0; i < datos.length; i++) {

        for (let j = 2; j <= 7; j++) {
            
            sumaPorAnyo += datos[i][j];
            
        }

        mediaPorAnyo = sumaPorAnyo / datos.length;
        document.getElementById("ej7").innerHTML += `Media del año ${anyo}: ${mediaPorAnyo} <br>`;
        anyo -= 10;
        
    }

}

/*
    Ejercicio 8. Modifica el anterior para Concatenar tres arrays (arrayX ,arrayY, arrayZ) de la siguiente forma:
    X1-Y1-Z1-X2-Y2-Z2-X3-Z3-X4-Z4-X5-Z5-Z6-Z7-Z8
    (ojo que debes usar push para añadir por detras)
    Los vectores tendrán la diferente longitud. (El for es el máximo
    de los tamaños y tienes que hacer un if antes de insertar para
    asegurarte que estas en tamaño)
*/
function ejercicio8() {

    // tomando los valores introducidos y almacenandolos en variables
    arrayX = document.getElementsByName("caja6-1")[0].value;
    arrayY = document.getElementsByName("caja6-2")[0].value;
    arrayZ = document.getElementsByName("caja6-3")[0].value;

    // conversion a array tomando por separacion la coma
    let arrayXstr = arrayX.split(',');
    let arrayYstr = arrayY.split(',');
    let arrayZstr = arrayZ.split(',');

    // para obtener la longitud del array mas grande, en caso de
    // que tuvieran distinto tamaño
    let arrayMayor = Math.max(arrayXstr.length, arrayYstr.length, arrayZstr.length);

    // rellenando el array arraymix con los elementos de arrayXstr, arrayYstr y arrayZstr
    // NOTA: se toma como limite el array mas largo, para que no termine su recorrido
    // con el del arrays mas cortos
    for (let i = 0; i < arrayMayor; i++) {

        // en caso de que no tuvieran el mismo tamaño puede ocurrir que
        // sobrepase el largo de los arrays mas cortos y, por tanto, que
        // no haya mas elementos para leer
        // con este bloque, no se interrumpe el recorrido de los otros aarays
        // de los que aun se puede leer elementos
        if (arrayXstr[i] != undefined) {  arraymix.push(arrayXstr[i]); };
        if (arrayYstr[i] != undefined) {  arraymix.push(arrayYstr[i]); };
        if (arrayZstr[i] != undefined) {  arraymix.push(arrayZstr[i]); };
        
    }

    // contenido y tamaño de array
    let contenidostr = arraymix.join('-');
    let tamanostr = arraymix.length;
    
    // muestra por pantalla
    document.getElementById("explica5").innerHTML = `Contenido del array ${contenidostr}`;
    document.getElementById("tamano5").innerHTML = `El tamaño del array es ${tamanostr}`;

}

// 9. Modifica el siguiente código para ver el contenido de la etiqueta que se le indique
function ejercicio9() {

    

}
