// function checkType(value) {
//     if (value === null) {
//         return "null";
//     }
//
//     if (Array.isArray(value)) {
//         return "array";
//     }
//
//     const type = typeof value;
//
//     if (type === "string") return "string";
//     if (type === "number") return "number";
//     if (type === "boolean") return "boolean";
//
//     return "unknown";
// }
//
// function countNumbers(arr) {
//     let count = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             count++;
//         }
//     }
//
//     return count;
// }
//
// function findMax(arr) {
//     let max = null;
//
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];
//
//         if (typeof value === "number" && !Number.isNaN(value)) {
//             if (max === null || value > max) {
//                 max = value;
//             }
//         }
//     }
//
//     return max;
// }
//
// function double(arr) {
//     const result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];
//
//         if (typeof value === "number") {
//             result.push(value * 2);
//         } else {
//             result.push(value);
//         }
//     }
//
//     return result
// }
//
//
// console.log(checkType("a") === "string");
// console.log(checkType(5) === "number");
// console.log(checkType(NaN) === "number");
// console.log(checkType(true) === "boolean");
// console.log(checkType(null) === "null");
// console.log(checkType([1,2]) === "array");
//
// console.log(countNumbers([1, "2", NaN, null, 5, true]) === 3);
// // console.log(countNumbers([]) === 0);
//
// console.log(findMax([1, 9, 3]) === 9);
// console.log(findMax([-10, -3, -7]) === -3);
// console.log(findMax([NaN, 2, NaN, 5]) === 5);
// console.log(findMax([NaN, NaN]) === null);
//
// const a = [1, "2", 3];
// const b = double(a);
// console.log(JSON.stringify(b) === JSON.stringify([2, "2", 6]));
// console.log(JSON.stringify(a) === JSON.stringify([1, "2", 3]));
