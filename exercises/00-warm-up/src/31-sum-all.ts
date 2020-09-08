export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = (a, b) => {
    const arr = [];
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    arr.push(min, max);
    
    let i = min;
    let j = 1;
    while (i < max){
        arr.push(min+j);
        i++;
        j++;
    }
    arr.pop();
    const sum = arr.reduce((acc, i) => acc+i);
    return sum;
};

console.log(sumAll(1, 4)); // Expected output: 10
