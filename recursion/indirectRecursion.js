function generateEven(n)
{
    if(n===0)
    {
        return 
    }
    console.log(n*2)
    generateEven(n-1)
}

function generateOdd(n)
{
    if(n===0)
    {
        return 
    }
    console.log(n*2-1)
    generateOdd(n-1)
}
const n=5
generateEven(n)