/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {

    if (n > 0) {
        let i = 0;
        while (i <= n ) {
          if (i === n) {
              return true;
          } else {
              i += 2;
          }   
        }
        return false;
    
    } else if (n < 0) {
        let i = 0;
        while (i >= n ) {
          if (i === n) {
              return true;
          } else {
              i -= 2;
          }   
        }
        return false;
    } else {
        return null;
    }
}

export { isEven };
