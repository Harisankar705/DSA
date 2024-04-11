function isPalindrome(str)
{
    const numStr=String(str)
    if(numStr.length===0 || numStr.length===1)
    {
        return true
    }
    if(numStr[0]!==numStr[numStr.length-1])
    {
        return false
    }
    return isPalindrome(Number(numStr.slice(1,-1)))
}

console.log(isPalindrome(121))