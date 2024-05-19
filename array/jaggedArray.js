// Defining a jagged array
let jaggedArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
    [10]
];

// Accessing elements
console.log(jaggedArray[0][1]); // Output: 2
console.log(jaggedArray[2][3]); // Output: 9

// Iterating over a jagged array
for (let i = 0; i < jaggedArray.length; i++) {
    for (let j = 0; j < jaggedArray[i].length; j++) {
        console.log(jaggedArray[i][j]);
    }
}
