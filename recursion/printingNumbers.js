function printNumber(n)
{
    if(n<=1)
        {
            console.log(n)
            return
        }
        console.log(n)
        printNumber(n-1)
}
printNumber(10)