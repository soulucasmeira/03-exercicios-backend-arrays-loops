const numeros = [54, 1, 22, 14, 21, 1, 284, 1];

// let indice = 0;

// for (let numero of numeros) {
//     if (numero === 10) {
//         break;
//     } else {
//         indice++;
//     }
// } if (indice === numeros.length) {
//     console.log(-1)
// } else {
//     console.log(indice);
// };
let resposta = -1

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        resposta = i;
        break;
    }
} console.log(resposta);