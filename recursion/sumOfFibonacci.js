function fibonocci(n)
{
    if(n<=1)
    {
        return n
    }
    return fibonocci(n-1)+fibonocci(n-2)
}
function sumOfFiboncci(n)
{
    if(n<1)
    {
        return 0
    }
    return fibonocci(n)+sumOfFiboncci(n-1)
}
console.log(sumOfFiboncci(5))
