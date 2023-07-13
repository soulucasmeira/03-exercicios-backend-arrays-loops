const nomes = ["Ana", "Joana", "Carlos", "amanda", "Arnold", "Aang"];

let novoArray = [];

for (let item of nomes) {
    if (item[0] === "A" || item[0] === "a") {
        novoArray.push(item);
    }
} console.log(novoArray);