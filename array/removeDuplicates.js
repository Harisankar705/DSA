function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

const arr = [1, 2, 3, 1, 2, 3];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3]
