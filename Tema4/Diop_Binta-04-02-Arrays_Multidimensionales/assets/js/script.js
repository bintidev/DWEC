

/*
    Ejercicio 1. Copia este codigo para crear un array multidimensional y añádele un código para mostrar solo
    los nombres en una lista ordenada
*/
function ejercicio1() {

    // declaracion einstanciacion del array
    var datos = new Array();

    // introduccion de datos
    datos[0] = new Array("Cristina","Seguridad",24);
    datos[1] = new Array("Catalina","Bases de Datos",17);
    datos[2] = new Array("Vieites","Sistemas Informáticos",28);
    datos[3] = new Array("Benjamin","Redes",26);

    let lista = document.getElementById("ej1");

    for (let i = 0; i < datos.length; i++) {
        
        let elemento = document.createElement("li");
        // accede a la primera "columan" de cada "fila"
        // del array datos
        elemento.innerHTML = datos[i][0];
        lista.appendChild(elemento);
        
    }
        
}

/*
    Ejercicio 2. Escribe un programa que genere al azar 20 números enteros comprendidos entre 0 y 9. Estos
    números se deben introducir en un array de 4 filas por 5 columnas.
*/
function ejercicio2() {

    let lista = document.getElementById("ej2");

    // arrays internos (filas) que almacenan las columnas
    var fila1 = new Array(5);
    var fila2 = new Array(5);
    var fila3 = new Array(5);
    var fila4 = new Array(5);

    // array que almacenara las filas
    var arrayMulti = [fila1, fila2, fila3, fila4];

    // recorre el array externo (filas)
    for (let i = 0; i < arrayMulti.length; i++) {
        
        // recorre los arrays internos (columnas)
        for (let j = 0; j < arrayMulti[i].length; j++) {
            
            let aleatorio = Math.round(Math.random() * 9);
            // rellena con numero aleatorios del 0 al 9
            arrayMulti[i][j] = aleatorio;
            
        }
        
    }

    // para mostrar el resultado por pantalla
    for (let i = 0; i < arrayMulti.length; i++) {
        
        // por cada fila del array
        let elemento = document.createElement("li");
        elemento.innerHTML = `Fila ${i + 1}`;

        // sublista con los valores de columna por cada fila
        let sublista = document.createElement("ul");

        for (let j = 0; j < arrayMulti[i].length; j++) {
            
            let subElem = document.createElement("li");
            subElem.innerHTML = `Columna ${j + 1} - Valor: ${arrayMulti[i][j]}`;
            sublista.appendChild(subElem);
            
        }

        elemento.appendChild(sublista);
        lista.appendChild(elemento);
        
    }

}

/*
    Ejercicio 3. Crea un array bidimensional que te calcule las tablas de multiplicar del 1 al 100.
    Puedes usar este código;
    for (var i=1 ; i<=100; i++)
    for (var j=1 ; j<=100; j++) tabla [i][j]=i*j;
    Ojo antes debes declarar los arrays con otro bucle.
*/

function ejercicio3() {

    let tabla = new Array();

    for (let i = 0; i < 10; i++) {

        tabla[i] = []; // cada fila es un nuevo array

        for (let j = 0; j < 10; j++) {

            tabla[i][j] = (i + 1) * j;

        }
    }

    // Mostrar el array en forma de tabla HTML
    for (let i = 0; i < tabla.length; i++) {
        
        let fila = document.createElement("tr");

        for (let j = 0; j < tabla[i].length; j++) {
            
            let col = document.createElement("td");
            col.innerHTML = `${i + 1} * ${j} = ${tabla[i][j]}`;
            fila.appendChild(col);
            
        }

        document.getElementById('ej3').appendChild(fila);
        
    }

}

// Ejercicio 4. Modifica el anterior ejercicio para aplicar una función map que te sume 2 a cada valor
function ejercicio4() {

    let tabla = new Array();

    for (let i = 0; i < 10; i++) {

        tabla[i] = []; // cada fila es un nuevo array

        for (let j = 0; j < 10; j++) {

            tabla[i][j] = (i + 1) * j;

        }
    }

    // suma dos a los elementos de cada fila dentro del array tabla
    let tablaMasDos = tabla.map(fila =>
        fila.map(valor => valor + 2)
    );

    // Mostrar el array en forma de tabla HTML
    for (let i = 0; i < tablaMasDos.length; i++) {
        
        let fila = document.createElement("tr");

        for (let j = 0; j < tablaMasDos[i].length; j++) {
            
            let col = document.createElement("td");
            col.innerHTML = `${i + 1} * ${j} = ${tablaMasDos[i][j]}`;
            fila.appendChild(col);
            
        }

        document.getElementById('ej4').appendChild(fila);
        
    }
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
    
    let datos = ejercicio6();
    let sumaPorAnyo = 0, anyo = 2020, contador = 2;

    // el contador representa las columnas que almacenan
    // los valores por año
    while (contador <= 7) {

        // inicializada a 0 por cada nueva columna (año)
        let mediaPorAnyo = 0;

        for (let i = 0; i < datos.length; i++) {

            sumaPorAnyo += datos[i][contador];

        }

        mediaPorAnyo = sumaPorAnyo / datos.length;
        document.getElementById("ej7").innerHTML += `- Media del año ${anyo}: ${mediaPorAnyo.toFixed(3)} <br>`;
        anyo -= 10; // del año mas reciente al mas antiguo con saltos de 10

        contador++;

    }
        
}

/*
    Ejercicio 8. función mostrartabla(tabla,id) que tome el array y devuelva el código html para dibujarla como
    una tabla.
*/
function ejercicio8MostrarTabla(tabla, id) {

    let tablaDocumento = document.getElementById(id);

    for (let i = 0; i < tabla.length; i++) {

        let fila = document.createElement("tr");
        fila.style.border = 'solid 1px black';
        
        for (let j = 0; j < tabla[i].length; j++) {
            
            let col = document.createElement("td");
            col.style.border = 'solid 1px black';
            col.innerHTML = tabla[i][j];
            fila.appendChild(col);
            
        }

        tablaDocumento.appendChild(fila);
        
    }

}

/*
    Ejercicio 9. crear una función en JavaScript que resuelva un sistema de ecuaciones lineales representado
    por matrices. Para un sistema de ecuaciones Ax=B Ax=B, donde A es una matriz 3x3 y B es una matriz
    3x1 puedes usar el método de inversión de matrices si A es invertible.
*/
function ejercicio9() {

    

}
