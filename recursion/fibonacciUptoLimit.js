function fibonocciUptoLimit(limit)
{
    let fibSeries=[1,1]
    let fibPrev=1
    let fibCurr=1
    while(true)
        {
            const temp=fibCurr
            fibCurr+=fibPrev
            fibPrev=temp
            if(limit<fibCurr)
                {
                    break
                }
                fibSeries.push(fibCurr)
                

        }
        return fibSeries
        

}
const n=10
console.log(fibonocciUptoLimit(n))