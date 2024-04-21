function integerPalindrome(str)
{
    const numStr=String(str)
    if(numStr.length<=1)
    {
        return true
    }
    if(numStr[0]!==numStr[numStr.length-1])
    {
        return false
    }
    return integerPalindrome(numStr.slice(1,-1))
}

const num=121
console.log(integerPalindrome(num))