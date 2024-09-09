// Declarar variable
let suma = 0;
let i = 1;

// Inicio del ciclo
do {
    suma = suma + i;
    i++;
} while (i <= 100);

// Mostrar el resultado en el elemento con id 'resultado'
document.getElementById('resultado').textContent = `El resultado de la suma de los números del 1 al 100 es: ${suma}`;
