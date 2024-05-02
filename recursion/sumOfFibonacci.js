function sumOfFibonanci(limit,fibPrev=0,fibCurr=1,sum=0)
{
    if(fibCurr>limit)
    {
        return sum
    }
    sum+=fibCurr
    return sumOfFibonanci(limit,fibCurr,fibPrev+fibCurr,sum)
}
console.log(sumOfFibonanci(10)); // Output: 23 (1 + 1 + 2 + 3 + 5 + 8 = 20)

        