export {};

const removeFromArray = function(arr: number[], ...num: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (arr[i] === num[j]) {
                let ind = arr.indexOf(arr[i]);
                arr.splice(ind, 1);
                return arr;
          } 
        }
      }
      return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]