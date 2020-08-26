// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let length = arr.length;
    for (let i=0; i<length; i++) {
        let swaps = 0;
        for (let j=0; j<length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                swaps++;
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        if(swaps===0){
            break;
        }
    }
    return arr;
}

function selectionSort(arr) {
    let length = arr.length;
    for (let i=0; i<length; i++) {
        let min = i;
        for (let j=i+1; j<length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i!==min){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

// const insertion_Sort = (nums) => {
//     for (let i = 1; i < nums.length; i++) {
//       let j = i - 1
//       let temp = nums[i]
//       while (j >= 0 && nums[j] > temp) {
//         nums[j + 1] = nums[j]
//         j--
//       }
//       nums[j+1] = temp
//     }
//     return nums
// }

function mergeSort(arr) {
    if(arr.length === 1){
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {  //merges 2 sorted sub-arrays together into a sorted array
    const results = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        } else{
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];  //concat the arrays, one of either left or right will be empty
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
