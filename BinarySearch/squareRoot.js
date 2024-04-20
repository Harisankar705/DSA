function squareRoot(n)
{
    if(n===1 || n===0)
    {
        return n
    }
    let left=0
    let result=0
    let right=Math.floor(n/2)
    while(left<=right)
    {
        let middle=Math.floor((left+right)/2)
        let square=middle*middle
        if(square===n)
        {
            return middle
        }
        else if(square<n)
        {
            left=middle+1
            result=middle
        }
        else
        {
            right=middle-1
        }

    }
    return result

}
const arr=4
console.log(squareRoot(arr))