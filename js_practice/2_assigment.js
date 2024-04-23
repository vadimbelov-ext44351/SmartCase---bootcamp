//Shifting array to the right
const arr = [1,2,3,4,5,6];

function shiftArray(arr, shiftNumber){
if(shiftNumber < 0){
    return console.log("Shift number can't be negative!");
}
if(arr.length == 0){
    return console.log("You can't shift empty array!");
}
let shiftedArr = [];
for(let i = 0; i < arr.length; i++){
    // (0 + 2 = 2)% 6 = 2, (4 + 2 = 6)% 6 = 0, (5 + 2 = 7)% 6 = 1
    shiftedArr[i] = arr[(i + shiftNumber) % arr.length];
}
return shiftedArr;
};

console.log(shiftArray(arr,2));
console.log(shiftArray(arr,-2));
console.log(shiftArray([],2));