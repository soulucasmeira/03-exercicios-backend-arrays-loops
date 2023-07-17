const numeros = [2, 3, 4, 6];

let soma = 0;

// for (let numero of numeros) {
//     soma += numero;
// };


for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
};



console.log(`A soma total dos numeros dentro do array é de ${soma}.`);