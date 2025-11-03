
document.addEventListener("DOMContentLoaded", function () {

    /*******************************************************************/
    /***** NOTA: Algunas variables y operaciones son reutilizadas *****/
    /*****************************************************************/

    // 2. Crea un ejemplo para cada asignación y muestralo con document.write(“”) console o con el alert
    let x = 5;
    let y = 2;

    alert(x = y); // resultado esperado: 2. Se almacena 2 de y en x
    alert(x += y); // resultado esperado: 4. Ahora x vale 2, y se le suman 2 de y
    alert(x -= y); // resultado esperado: 2. Ahora x vale 4 y se le restan 2 de y
    alert(x *= y); // resultado esperado: 4. Ahora x vale 2 y se le multiplica 2 de y
    alert(x /= y); // resultado esperado: 2. Ahora x vale 4 y se divide por 2 de y
    alert(x %= y); // resultado esperado: 4. Ahora x vale 2 y se almacena 0, resto de la division de x e y
    alert([x,y] = [y,x]); // resultado esperado: 2,0. Ahora x vale 0, e y vale 2. Se les asigna el valor del otro, por tanto: x=2 - y=0

    // 11. Ejecuta este codigo y observa los resultados de los alert
    let binario = "10010111";
    let num255 = "11111111";
    let decimal = parseInt("10010111", 2);

    let DesplazamientoAND = decimal & num255;
    let DesplazamientoOR = decimal | num255;
    let DesplazamientoXOR = decimal ^ decimal;
    let DesplazamientoNOT = ~decimal;
    let Desplazamientoizquierda = decimal << 1;
    let Desplazamientoderecha = decimal >> 1;
    let Desplazamientoderecha0 = decimal >>> 2;

    document.getElementById('ej11').innerHTML = "<li>" + binario  + " es " + decimal + "en decimal</li><br>"
                                                    + "<li>" + DesplazamientoAND + "</li><br>"
                                                    + "<li>" +  DesplazamientoOR + "</li><br>"
                                                    + "<li>" + DesplazamientoXOR + "</li><br>"
                                                    + "<li>" + DesplazamientoNOT + "</li><br>"
                                                    + "<li>" + Desplazamientoizquierda + "</li><br>"
                                                    + "<li>" + Desplazamientoderecha + "</li><br>"
                                                    + "<li>" + Desplazamientoderecha0 + "</li>";

    /*
        12. Modifica la variable segundoparametroBinario operador para que siempre salga el elemento en
        comentario y arregla el problema con los let
     */
    let decimal2 = parseInt("10010111", 2);

    let segundoParametroBinario = "01101000";
    let segundoParametro = parseInt(segundoParametroBinario, 2);
    DesplazamientoAND = decimal2 & segundoParametro; // 0

    segundoParametroBinario = "10010111"; // no se puede obtener 1 cmo resultado
    segundoParametro = parseInt(segundoParametroBinario, 2);
    DesplazamientoOR = decimal2 | segundoParametro; // 1

    segundoParametroBinario = "10010110";
    segundoParametro = parseInt(segundoParametroBinario, 2);
    DesplazamientoXOR = decimal2 ^ segundoParametro; // 1

    segundoParametroBinario = "00001001";
    segundoParametro = parseInt(segundoParametroBinario, 2);
    DesplazamientoNOT = ~ segundoParametro; // -10

    segundoParametroBinario = "00010000";
    segundoParametro = parseInt(segundoParametroBinario, 2);
    Desplazamientoizquierda = segundoParametro << 1; // 32

    segundoParametroBinario = "00010000";
    segundoParametro = parseInt(segundoParametroBinario, 2);
    Desplazamientoderecha = segundoParametro >> 1; // 8

    decimal2 = parseInt("10000000", 2);
    Desplazamientoderecha0 = decimal2 >>> 2; // 32

    document.getElementById('ej12').innerHTML = "<li>" + DesplazamientoAND + "</li><br>"
                                                    + "<li>" +  DesplazamientoOR + "</li><br>"
                                                    + "<li>" + DesplazamientoXOR + "</li><br>"
                                                    + "<li>" + DesplazamientoNOT + "</li><br>"
                                                    + "<li>" + Desplazamientoizquierda + "</li><br>"
                                                    + "<li>" + Desplazamientoderecha + "</li><br>"
                                                    + "<li>" + Desplazamientoderecha0 + "</li>";

});