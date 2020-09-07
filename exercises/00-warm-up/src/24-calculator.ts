export {};

function add(...n) {
    return n.reduce((previous, current) => {
      return previous + current;
    });
  }

function subtract(...n) {
    return n.reduce((previous, current) => {
        return previous - current;
      });
    }

function sum(arr) {
    const sum = arr.reduce((acc, i) => acc+i);
    return sum;
}

function multiply(arr) {
    const mult = arr.reduce((acc, i) => acc*i);
    return mult;
}

function power(a,b) {
    return Math.pow(a,b);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
