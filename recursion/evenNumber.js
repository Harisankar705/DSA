function printEvenNumber(n)
{
    if(n<=1)
        {
            if(n===0)
                {
                    console.log(n)
                    return
                }
        }
        if(n%2===0)
            {
                console.log(n)
            }
            printEvenNumber(n-1)
            

}

printEvenNumber(10)