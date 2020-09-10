/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    const strArr = str.split("").sort();
    const arr = [];
  
    // let i = 0;
    // while (i < strArr.length) {
    //   if (strArr.charAt(0) === strArr.charAt(0+1)) {
    //     arr.push(strArr.charAt(0));
    //   }
    //   i++;
    // }
  
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === strArr[i + 1] || strArr[i] === strArr[i - 1]) {
        arr.push(strArr[i]);
      }
    }
}

export { maxChar };
