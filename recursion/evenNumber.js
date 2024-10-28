const printEven=(n)=>{
    if(n<=0)
    {
        return 
    }
    if(n%2===0)
    {
        console.log(n)
    }
    printEven(n-1)
}
printEven(10)
