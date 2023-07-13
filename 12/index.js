const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];


while (filaDeDentro.length < 5) {
    if (filaDeFora.length > 0) {
        filaDeDentro.push(filaDeFora[0])
        filaDeFora.shift()
    } else {
        break;
    }
}
console.log(filaDeDentro, filaDeFora)