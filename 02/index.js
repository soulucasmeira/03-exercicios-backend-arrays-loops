const letras = ["A", "E", "e", "C", "e", "E"];

let soma = 0;
let encontrado = false;
for (let item of letras) {
    if (item === "E" || item === "e") {
        soma++;
        encontrado = true;
    }
} if (encontrado === true) {
    console.log(`Foram encontradas ${soma} letras "E" ou "e".`)
} else {
    console.log("Desculpe, mas nenhuma letra 'E' ou 'e' foi encontrada.")

}
