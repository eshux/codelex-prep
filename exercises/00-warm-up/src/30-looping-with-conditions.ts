export {};

function onlyTheAces(arr) {
    const newArr = arr.filter(i => i === 'Ace');
    return newArr;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
