function rearrangeArray (newNum2, newNum1){

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let newNum1 =  numbers;
// let newNum2 =  numbers;
newNum1.splice(3,5);
numbers.splice(0,3);
// let combinedNumber = (...newNum2, ...newNum1);
//     return combinedNumber;}
// console.log(combinedNumber(newNum2,newNum1));
    // console.log(newNum1);
console.log(numbers, newNum1);
}