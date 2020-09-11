/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    let largest = array[0];
    array.forEach(i => {
        if (i > largest) {
          largest = i;
        } 
    });

    array.splice(array.indexOf(largest),1);
    let secondLargest = array[0];
    array.forEach(i => {
        if (i > secondLargest) {
            secondLargest = i;
        } 
    });
    return secondLargest;

}

export { secondLargest };
