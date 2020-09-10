export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
const protectEmail = (str: string): string => {
    const strArr = str.split('');
    const atInd = strArr.indexOf('@');

    strArr.splice(3,atInd-3,'...');
    return strArr.join('');
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
