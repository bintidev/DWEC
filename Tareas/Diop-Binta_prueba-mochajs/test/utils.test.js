
const { expect } = require("chai");
const { revertirCadena, filtrarPares, celsiusToFahrenheit, fetchData, esPalindromo } = require("../utils");

describe("Pruebas para utils", function () {

    // pruebas para revertirCadena
    it("Debe devolver 'aloh' cuando recibe 'hola'", function () {
        expect(revertirCadena("hola")).to.equal("aloh");
    });

    it("Debe devolver una cadena vacía cuando recibe una cadena vacía", function () {
        expect(revertirCadena("")).to.equal("");
    });

    // pruebas para filtrarPares
    it("Debe devolver [2, 4, 6] cuando recibe [1, 2, 3, 4, 5, 6]", function () {
        expect(filtrarPares([1, 2, 3, 4, 5, 6])).to.deep.equal([2, 4, 6]);
    });

    it("Debe devolver [] cuando recibe un array vacío", function () {
        expect(filtrarPares([])).to.deep.equal([]);
    });

    // pruebas para celsiusToFahrenheit
    it("Debe convertir 0°C a 32°F", function () {
        expect(celsiusToFahrenheit(0)).to.equal(32);
    });

    it("Debe convertir 100°C a 212°F", function () {
        expect(celsiusToFahrenheit(100)).to.equal(212);
    });

    // pruebas para fetchData
    it("Debe devolver un objeto con nombre 'Juan' y edad 25", async function () {
        const data = await fetchData();
        expect(data).to.deep.equal({ nombre: "Juan", edad: 25 });
    });

    // prubas para esPalindromo
    it("Debe devolver true para 'Anita lava la tina'", function () {
        expect(esPalindromo("Anita lava la tina")).to.be.true;
    });

    it("Debe devolver false para 'Hola mundo'", function () {
        expect(esPalindromo("Hola mundo")).to.be.false;
    });

});