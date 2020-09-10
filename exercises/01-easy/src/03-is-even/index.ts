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

const ODD_DIGITS = [1, 3, 5, 7, 9]

function isEven(n: number) {

const str = n.toString().split('')[0];
const lastDigit = Number(str.slice(-1))

return !ODD_DIGITS.includes(lastDigit)
}
export { isEven };
