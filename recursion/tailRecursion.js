function factorialTail(n, accumulator = 1) {
    if (n === 0) {
        return accumulator;
    }
    return factorialTail(n - 1, n * accumulator); // Recursive call is the last operation
}
console.log(factorialTail(5))