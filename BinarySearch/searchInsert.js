function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }
    
    // If the target is not found, left will be the index where it should be inserted
    return left;
}

// Example usage:
const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); // Output: 2 (index of target 5)

const target2 = 2;
console.log(searchInsert(nums, target2)); // Output: 1 (index where 2 would be inserted)

const target3 = 7;
console.log(searchInsert(nums, target3)); // Output: 4 (index where 7 would be inserted)
