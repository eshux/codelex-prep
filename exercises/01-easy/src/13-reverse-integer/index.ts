/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    const neg = int >= 0;
    const reversed = parseInt(
        int
            .toString()
            .split("")
            .reverse()
            .join('')
    )

    if (neg) {
        return reversed
    } return reversed * -1;

}

export { reverse };
