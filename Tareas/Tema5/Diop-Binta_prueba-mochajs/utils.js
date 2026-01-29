

// utils.js
function revertirCadena(str) {
    return str.split('').reverse().join('');
}

function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nombre: "Juan", edad: 25 });
        }, 1000);
    });
}

function esPalindromo(str) {

    const strLimpio = str.toLowerCase().replace(/[\W_]/g, "");
    return strLimpio === strLimpio.split('').reverse().join('');
}

module.exports = { revertirCadena, filtrarPares, celsiusToFahrenheit, fetchData, esPalindromo };