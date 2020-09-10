export {};

const repeatString = (str: string, num: number) => {
    let i = 1;
    let newStr = str;
    while (i < num) {
        newStr += str;
        i++;
    }
    return newStr;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
