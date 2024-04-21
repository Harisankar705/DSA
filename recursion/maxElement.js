function findMax(arr, start, end) {
    // Base case: If the array contains only one element, return it
    if (start === end) {
        return arr[start];
    }
    
    // Divide: Split the array into two halves
    const mid = Math.floor((start + end) / 2);
    
    // Conquer: Recursively find the maximum element in each half
    const maxLeft = findMax(arr, start, mid);
    const maxRight = findMax(arr, mid + 1, end);
    
    // Combine: Return the maximum of the maximum elements from each half
    return Math.max(maxLeft, maxRight);
}

// Example usage:
const arr = [3, 5, 1, 8, 4, 9, 2];
const maxElement = findMax(arr, 0, arr.length - 1);
console.log("Maximum element:", maxElement);
