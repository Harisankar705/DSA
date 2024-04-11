function isPalindrome(str)
{
    if(str.length===0 || str.length===1)
    {
        return true
    }
    if(str[0]!==str[str.length-1])
    {
        return false
    }
    return true
}

console.log(isPalindrome('racecare'))