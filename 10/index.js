const numeros = [1, 8, 11, 4];

let maior = 0;
let menor = Infinity;

for (let item of numeros) {
    for (let item2 of numeros)
        if (item > maior) {
            maior = item;
        } else if (item2 < menor) {
            menor = item2;
        }
}
let diferenca = maior - menor;
console.log(diferenca);