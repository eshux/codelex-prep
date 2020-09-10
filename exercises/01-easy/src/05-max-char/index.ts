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
    let mostChar = strArr[0];
    let char = 0;
    strArr.forEach((i) => {
      const count = strArr.filter(j => j === i).length;
      if (count > char) {
        mostChar = i;
        char = count;
      }
    })
  return mostChar;
}

export { maxChar };
