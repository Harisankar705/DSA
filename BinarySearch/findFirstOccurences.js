function findFirstOccurences(arr, target) {
    let left = 0;
    let result = -1;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) {
            result = middle; // Store the result
            right = middle - 1; // Update right to search for first occurrence
        } else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return result;
}

const arr = [1, 2, 3, 3, 3, 4, 5];
console.log(findFirstOccurences(arr, 3)); // Output will be the index of the first occurrence of 3, which is 2
