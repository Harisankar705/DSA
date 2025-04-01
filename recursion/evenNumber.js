function printEven(n) {
    if (n < 2) return; // Base case: Stop when n is less than 2

    printEven(n - 2); // Recursive call for the previous even number

    console.log(n); // Print the even number
}

// Example usage:
printEven(10);
