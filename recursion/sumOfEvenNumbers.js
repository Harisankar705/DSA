function sumOfEvenNumbers(arr)
{
    if(arr.length===0)
    {
        return 0
    }
    let first=arr[0]
    if(first%2===0)
    {
        return first+sumOfEvenNumbers(arr.slice(1))
    }
    else
    {
        return sumOfEvenNumbers(arr.slice(1))
    }
}
const arr=[1,2,3,4,5]
console.log(sumOfEvenNumbers(arr))
