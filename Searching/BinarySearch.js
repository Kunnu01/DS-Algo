/*
    Best => O(1)
    Average => O(log n)
    Worst => O(log n)
*/

const getMiddle = (start, end) => Math.floor((start + end) / 2);

const binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = getMiddle(start, end);
    while(arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = getMiddle(start, end);
    }

    if (arr[middle] === val) {
        return middle;
    }
    return -1;
}
