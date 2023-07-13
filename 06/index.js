const numeros = [2, 3, 4, 7, 8, 1, 6, 5, 10, 12];

let soma = 0;

for (let item of numeros) {
    if (item % 2 === 0) {
        soma += item;
    }
} console.log(soma);