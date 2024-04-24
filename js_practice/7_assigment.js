//Polynomials

//1.
function calcPolynomial(x){
return (1 * x) + (2.5 * x) + (3.5 * x**2) + (0 * x) + (5.4 * x**4);
}
let x = 1;
console.log(calcPolynomial(x));
//2
function calcPolynomialSum(arr1, arr2){
let sum = [];
let maxLength = Math.max(arr1.length, arr2.length);
for(let i = 0; i < maxLength; i++){
    sum[i] = (arr1[i] || 0) + (arr2[i] || 0);
    }
return sum;
}
console.log(calcPolynomialSum([1,2,5],[2,0,1,-7]));
//3
function calcPolynomialMul(arr1, arr2){
let sum = [];
let maxLength = Math.max(arr1.length, arr2.length);
for(let i = 0; i < maxLength; i++){
    sum[i] = (arr1[i] || 0) * (arr2[i] || 0);
    }
return sum;
}
console.log(calcPolynomialMul([1,2,5],[2,0,1,-7]));
