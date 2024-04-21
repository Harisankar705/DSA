// Function A: Generates even numbers up to n
function generateEven(n) {
    if (n === 0) {
        return;
    }
    console.log(n * 2);
    generateOdd(n - 1); // Call function B
}

// Function B: Generates odd numbers up to n
function generateOdd(n) {
    if (n === 0) {
        return;
    }
    console.log(n * 2 - 1);
    generateEven(n - 1); // Call function A
}

// Example usage:
console.log("Even numbers up to 5:");
generateEven(5);
