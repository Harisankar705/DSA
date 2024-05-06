function valueInDictionary(dictionary,value)
{
    for(let key in dictionary)
        {
            if(dictionary[key]===value)
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

    console.log(valueInDictionary(dictionary,10))