/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string) {
    const strArr = str.split('');
    const arr1 = [];
    const arr2 = [];
  
    for (let i = 0; i < Math.ceil(strArr.length/2); i++) {
        arr1.push(strArr[i]);
    }
    for (let j = strArr.length-1; j > Math.floor(strArr.length/2)-1; j--) {
        arr2.push(strArr[j]);
    }
  
  
    if (arr1.join('') === arr2.join('')) {
      return true;
    } else {
      return false;
    }
}

export { palindrome };
