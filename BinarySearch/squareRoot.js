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
        /* `let middle=Math.floor((left+right)/2)` is calculating the middle point between the `left`
        and `right` boundaries in the binary search algorithm. This calculation finds the midpoint
        of the current range of numbers being searched, which helps in determining whether the
        square root of the input number lies to the left or right of this midpoint. The `Math.floor`
        function is used to ensure that the result is an integer, as binary search typically deals
        with integer values. */
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