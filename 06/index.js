const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;

for (let numero of numeros) {
    const identificandoPar = numero % 2;
    if (identificandoPar === 0) {
        soma += numero;
    }
} console.log(soma)