function reverseString(num)
{
    const numStr=String(num)
    if(numStr.length<=1)
    {
        return numStr
    }
    return reverseString(numStr.substring(1))+numStr[0]
}
const str=123
console.log(reverseString(str))