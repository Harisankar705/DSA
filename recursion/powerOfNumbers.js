function power(x,n)
{
    if(n===0)
    {
        return 1
    }
    return x*power(x,n-1)

}

const x=3
const n=2
console.log(power(x,n))

//square and power of number can be made