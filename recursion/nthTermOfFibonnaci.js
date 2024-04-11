function fibonacci(n) {
    // Base cases: fibonacci of 0 is 0, fibonacci of 1 is 1
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // Recursive case: fibonacci of n is the sum of fibonacci of (n-1) and fibonacci of (n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
const n = 6;
console.log(`The ${n}th term of the Fibonacci sequence is:`, fibonacci(n)); // Output: The 6th term of the Fibonacci sequence is: 8
