export {};

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together with space between them
  return firstWord.concat(' ').concat(secondWord).concat(' ').concat(thirdWord);
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
