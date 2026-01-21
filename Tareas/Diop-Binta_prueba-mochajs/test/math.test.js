
const { expect, should, assert } = require("chai"); // Importamos expect de Chai
const { suma, multiplica, divide } = require("../math"); // Importamos las funciones a probar

describe("Pruebas de operaciones matemáticas", function () {

    it("Debe retornar 5 cuando sumamos 2 + 3", function () {
        expect(suma(2, 3)).to.equal(5);
    });

    it("Debe retornar 10 cuando multiplicamos 2 * 5", function () {
        expect(multiplica(2, 5)).to.equal(10);
    });

    it("Debe retornar 15 cuando multiplicamos 3 * 5", function () {
        expect(multiplica(3, 5)).to.equal(15);
    });

    it("Debe retornar 0 cuando multiplicamos cualquier número por 0", function () {
        expect(multiplica(10, 0)).to.equal(0);
        expect(multiplica(0, 10)).to.equal(0);
    });

    it("Debe retornar 10 cuando dividimos 10 / 1", function () {
        should();
        divide(10, 1).should.equal(10);
    });

    it("Debe retornar 10 cuando dividimos 10 por 1", function () {
        assert(divide(10, 1), 10);
    });
});