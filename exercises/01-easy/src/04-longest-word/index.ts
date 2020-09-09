/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    let newSen = sen.replace(/[!£$%^&*+_-]/g,' ');
    const arr = newSen.split(' ');
    let longestWord = arr[0];

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }        
    }
    return longestWord;
}

export { longestWord };
