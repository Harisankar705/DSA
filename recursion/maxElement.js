function findMax(arr, index, max) {
    // Base case: if index reaches the end of the array
    if (index === arr.length) {
        return max;
    }

    // Update max if the current element is greater
    if (arr[index] > max) {
        max = arr[index];
    }

    // Recursive call with next index
    return findMax(arr, index + 1, max);
}

// Example usage:
const array = [3, 7, 2, 9, 5];
const maxElement = findMax(array, 0, array[0]);
console.log("Maximum element:", maxElement);
