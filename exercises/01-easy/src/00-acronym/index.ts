/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    let newString = input.replace(/[_-]/g,' ');

    const acron = [];
    const arr = newString.split(' ');

for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0).match(/[A-Z]/i)) {
        acron.push(arr[i].charAt(0));
    }
    }

return acron.join('').toUpperCase();

}

export { parse };
