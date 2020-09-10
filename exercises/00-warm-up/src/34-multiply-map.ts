export {};

/**
 * Implement map function which works similarly as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const map = (arr: number[], fun) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    newArr.push(fun(num));
  }
  return newArr;
}

const numbers = [1, 2, 3];
const doubled = map(numbers, function(number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
