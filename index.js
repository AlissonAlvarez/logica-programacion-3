document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('botonCalcular').addEventListener('click', calcularFactorial);
});

function calcularFactorial() {
    const entrada = document.getElementById('inputNumero').value;
    const numero = parseInt(entrada);

    if (isNaN(numero) || numero < 0) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById('resultado').innerText = `El factorial de ${numero} es ${factorial}.`;
}
