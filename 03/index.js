const numeros = [54, 22, 14, 21, 1, 284];

let indice = 0;
let encontrado = false;

for (let item of numeros) {
    indice++;
    if (item === 10) {
        indice--;
        console.log(indice);
        encontrado = true;
        break;
    }
} if (encontrado === false) {
    console.log("-1")
}