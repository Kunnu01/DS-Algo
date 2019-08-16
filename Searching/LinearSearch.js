/*
    Best => O(1)
    Average => O(n)
    Worst => O(n)
*/

const linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}

const linearS = (arr, val) => {
    let position = -1;
    arr.forEach((ele, i) => {
        if (ele === val) {
            position = i;
        }
    });
    return position;
}
