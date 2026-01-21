
const { suma, sumaObj } = require("../math")

describe('GRUPO DE PRUEBAS 1', () => {

    test('suma 1 + i es igual a i + 1', () => {
        for (let i = 0; i < 10; i++)
            expect(suma(1, i)).toBe(i + 1)
    })

    test('suma 0 + i es igual a i', () => {
        for (let i = 0; i < 10; i++)
            expect(suma(0, i)).toBe(i)
    })

    test('sumaObj 1 + 2 es igual a { resultado: 3 }', () => {
        expect(sumaObj(1, 2)).toEqual({ resultado: 3 })
    })

}
)