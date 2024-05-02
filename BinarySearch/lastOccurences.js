function lastOccurrence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1; // Initialize result to -1, indicating no occurrence found yet

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            // Update result to the current index and continue searching to the right
            result = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            // If target is greater, search in the right half
            left = mid + 1;
        } else {
            // If target is smaller, search in the left half
            right = mid - 1;
        }
    }

    return result;
}

// Example usage:
const nums = [1, 2, 3, 4, 4, 4, 5, 6];
const target = 4;
console.log(lastOccurrence(nums, target)); // Output: 5
