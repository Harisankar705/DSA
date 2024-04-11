function isPalindrome(str) {
    const numStr = String(str);
    if (numStr.length <= 1) {
        return true;
    }
    if (numStr[0] !== numStr[numStr.length - 1]) {
        return false;
    }
    return isPalindrome(numStr.slice(1, -1)); // Pass the substring to the recursive call
}

console.log(isPalindrome(121)); // Output: true
