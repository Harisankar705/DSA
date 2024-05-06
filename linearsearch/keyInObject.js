function searchInDictionay(dictionary,key)
{
    for(let dic in dictionary)
        {
            if(dic===key)
                {
                    return true
                }

            }
            return false
}

const dictionary = {
    "apple": 10,
    "banana": 20,
    "orange": 15
};
console.log(searchInDictionay(dictionary,'apple'))