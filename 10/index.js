const numeros = [1, 11, 4, 8];

// let maior = numeros[0];
// let menor = numeros[0];

// for (let numero of numeros) {
//     if (numero < menor) {
//         menor = numero;
//     } else if (numero > maior) {
//         maior = numero;
//     };
// } console.log(maior - menor)

let maiorDif = -Number.MAX_VALUE;
for (let x of numeros) {
    for (let y of numeros) {
        const difAtual = x - y;
        if (difAtual > maiorDif) {
            maiorDif = difAtual;
        }
    }
}

console.log(maiorDif)