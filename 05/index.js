const original = [1, 4, 12, 21, 53, 88, 112];

let novoArray = [];

for (let item of original) {
    if (item % 2 === 0) {
        novoArray.push(item);
    }
} console.log(novoArray);