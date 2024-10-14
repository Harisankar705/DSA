function removeWord(str,word)
{
    if(str.indexOf(word)===-1)
    {
        return str
    }
    const updatedWord=str.replace(word,'').trim()
    return removeWord(updatedWord,word)
}
const str='hello world'
console.log(removeWord(str,'world'))
