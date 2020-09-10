export {};

const count = (str: string, word: string) => {
    const strArr = str.toLowerCase().split(' ');
    const arr = [];

    strArr.forEach(i => {
        if (i === word) {
            arr.push(word);
        };
    });

    return arr.length;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
