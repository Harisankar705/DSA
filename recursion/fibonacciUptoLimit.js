function fibonocci(n)
{
    if(n<=1)return n
    return fibonocci(n-1)+fibonocci(n-2)
}
function printUptoLimit(limit)
{
    for(let i=0;i<limit;i++)
    {
        console.log(fibonocci(i))
    }
}
printUptoLimit(10)
