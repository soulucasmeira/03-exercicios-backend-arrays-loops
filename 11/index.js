const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

let novoArray = [];

for (let item of original) {
    if (item >= 10 && item <= 20 || item > 100) {
        novoArray.push(item);
    }
} console.log(novoArray);