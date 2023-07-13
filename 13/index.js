const disjuntores = [
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
];
let indice = -1;

for (let item of disjuntores) {
    indice++;
    if (item) {
        console.log(indice)
    }
}