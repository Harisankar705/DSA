function isPalindromeRecursive(str) {
    // Base cases: If the string is empty or has only one character, it's a palindrome
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    // Check if the first and last characters are equal
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursively call the function with the substring excluding the first and last characters
    return isPalindromeRecursive(str.slice(1, -1));
}

// Example usage:
console.log(isPalindromeRecursive('racecar')); // Output: true
console.log(isPalindromeRecursive('hello')); // Output: false
