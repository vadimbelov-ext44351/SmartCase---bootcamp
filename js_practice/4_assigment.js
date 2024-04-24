//bubble sort
let arr;
let sortedArr;

function bubbleSorting(arr){
let temp;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i; j++){
        if(arr[j] > arr[j + 1]){
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
return arr;
}
// Test

arr = [1,2,5,7,6,3,4];
sortedArr = bubbleSorting(arr);
console.log('Bubble sort',sortedArr);

//selection sort
function selectionSorting(arr){
for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
         if(arr[j] < arr[min]){
             min = j;
         }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
return arr;
}
// Test

arr = [8,9,1,2,5,7,6,3,4];
sortedArr = selectionSorting(arr);
console.log('Selection sort',sortedArr);

//merge sort
function mergeSorting(arr){
if (arr.length < 2){
    return arr;
}
    let mid = Math.floor(arr.length / 2);
    let left = mergeSorting(arr.slice(0, mid));
    let right = mergeSorting(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

// Test

arr = [7,9,1,2,5,8,6,3,4];
sortedArr = mergeSorting(arr);
console.log('Merge sort',sortedArr);