function reverseArray(str)
{
    if(str.length<=1)
    {
        return str
    }
    return [str[str.length-1]].concat(reverseArray(str.slice(0,str.length-1)))
}
const arr=[1,2,3]
console.log(reverseArray(arr))