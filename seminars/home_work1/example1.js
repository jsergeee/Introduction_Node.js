// setTimeout (() => {
//     console.log('log in setTimeout');
// }, 1000);

// console.log('log global context');

console.log("Hello, World!!!");
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const result = numArray.reduce((sum, number) => sum += number, 0);
console.log("Реузультат сложения числе массива:", result);