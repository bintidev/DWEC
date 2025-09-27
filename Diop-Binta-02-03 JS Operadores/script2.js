// 2. Ejecuta el siguiente código

document.addEventListener("DOMContentLoaded", function () {
    var resultado1 = 30 == 30 ;
    var resultado2 = 30 == 30.0; // true
    var resultado3 = 5 != 8; // true
    var resultado4 = 9 > 13; // false
    var resultado5 = 7.29 <= 7.28; // false
    var resultado6 = "Marta" == "Marta"; // true
    var resultado7 = "Marta" == "marta"; // false
    var resultado8 = "Marta" > "marta"; // false
    var resultado9 = "Mark" < "Marta"; // true
    
    document.getElementById('ej2').innerHTML = "<li>resultado1: "+ resultado1+ "<br></li>" +
                                                "<li>resultado2: "+ resultado2+ "<br></li> "+
                                                "<li>resultado3: "+ resultado3+ "<br></li> "+
                                                "<li>resultado4: "+ resultado4+ "<br></li> "+
                                                "<li>resultado5: "+ resultado5+ "<br></li> "+
                                                "<li>resultado6: "+ resultado6+ "<br></li> "+
                                                "<li>resultado7: "+ resultado7+ "<br></li> "+
                                                "<li>resultado8: "+ resultado8+ "<br></li> "+
                                                "<li>resultado9: "+ resultado9+ "<br></li>"

});

// 4. Ejecuta el siguiente código
document.addEventListener("DOMContentLoaded", function () {

    var resultado1 = 30;
    var resultado2 = 100;
    var resultado3 = resultado1 + resultado2;
    var resultado3 = resultado1 - resultado2 ;
    var resultado4 = resultado1 * resultado2 ;
    var resultado5 = resultado1 / resultado2 ;
    var resultado6 = resultado1 % 2 ;
    var resultado7 = resultado1 ++ ;
    var resultado8 = resultado1 -- ;
    var resultado9 = -resultado1 ;
    
    document.getElementById('ej4').innerHTML = "<li>resultado1: "+ resultado1+ "<br></li>" +
                                                "<li>resultado2: "+ resultado2+ "<br></li> "+
                                                "<li>resultado3: "+ resultado3+ "<br></li> "+
                                                "<li>resultado4: "+ resultado4+ "<br></li> "+
                                                "<li>resultado5: "+ resultado5+ "<br></li> "+
                                                "<li>resultado6: "+ resultado6+ "<br></li> "+
                                                "<li>resultado7: "+ resultado7+ "<br></li> "+
                                                "<li>resultado8: "+ resultado8+ "<br></li> "+
                                                "<li>resultado9: "+ resultado9+ "<br></li>"

});