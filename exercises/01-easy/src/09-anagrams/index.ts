/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
    let str1 = stringA.toLowerCase().replace(/[\W]/g,'');
    let str2 = stringB.toLowerCase().replace(/[\W]/g,'');
  
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
   
    return str1 === str2
}

export { anagrams };
