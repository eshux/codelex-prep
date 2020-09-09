export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

// You are allowed to change this function

const USD_RATE = 1.4
const BRL_RATE = 6.93
const FEE = 1.01

const convertTo = (price, currency, fee) => {
    return (price * currency) * fee;
}

// function convertToUSD(price) {
//     return (price * 1.4) * 1.01;

// }
// // You are allowed to change this function
// function convertToBRL(price) {
//     return (price * 6.93) * 1.01;

// }
    

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertTo(price, USD_RATE, FEE);
const priceInBRL = convertTo(price, BRL_RATE, FEE);
// const priceInUSD = convertToUSD(price);
// const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/