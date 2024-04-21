// Direct recursion example (factorial calculation)
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1); // Function directly calls itself
}

// Example usage
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
