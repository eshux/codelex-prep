export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
const isBlank = value => {
    if(typeof value === 'string'){
        const newVal = value.trim();
        return !newVal
    } else {
        return !value;
    }
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
