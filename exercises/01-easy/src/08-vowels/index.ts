/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    const lowS = s.toLowerCase();
    const arr = lowS.split('');
    const vowArr = ['a', 'e', 'o', 'i', 'u'];
    const allVow = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < vowArr.length; j++) {
            if (arr[i] === vowArr[j]) {
                allVow.push(arr[i]);
            }
        }
    }
    return allVow.length;
    
}

export { vowels };
