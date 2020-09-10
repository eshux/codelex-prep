export {};

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    newArr.push(tidyUpString(num));
  }
  const capitArr = newArr.map(i => i.charAt(0).toUpperCase() + i.slice(1));
  return capitArr;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
