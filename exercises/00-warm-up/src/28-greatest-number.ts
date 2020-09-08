export {};

function greatest(x, y) {
    return x > y ? x : y > x ? y : x;
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
