function findIndex(arr, target1, target2) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] === target1 && arr[j] === target2) || (arr[j] === target1 && arr[i] === target2)) {
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return indexes;
}

const arr = [1, 2, 3, 4, 5];
console.log(findIndex(arr, 3, 4));
