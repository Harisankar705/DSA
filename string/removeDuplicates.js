function removeDuplicates(str)
{
    let uniqueChars=''
    for(let char of str)
    {
        if(!uniqueChars.includes(char))
        {
            uniqueChars+=char
        }
    }
    return uniqueChars
}

const str='malayalam'
console.log(removeDuplicates(str))