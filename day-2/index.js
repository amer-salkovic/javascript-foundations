// // // >>>>>>>>>>>>>>>>>>>> SCOPE CHECK
// // //
// // // // function scopeCheck(){
// // // //     let a = 1
// // // //     const b = 2
// // // //
// // // //     if(true){
// // // //         let c = 3
// // // //     }
// // // //
// // // //
// // // //
// // // //    const result = []
// // // //
// // // //     result.push('a is ok')
// // // //     result.push('b is ok')
// // // //
// // // //     try{
// // // //         c;
// // // //         result.push('c is ok')
// // // //     }
// // // //
// // // //     catch(err){
// // // //         result.push('c is not definied')
// // // //     }
// // // //
// // // //
// // // //     return result;
// // // //
// // // //
// // // // }
// // // //
// // // // console.log(scopeCheck());
// //
// // //
// // //
// // //
// // //>>>>>>>>>>>>>>>HOISTING
// //
// //
// // function hoistTest(){
// //     let varBefore;
// //     let letBefore;
// //
// //
// //    varBefore = x
// //     var x = 10
// //
// //     try{
// //         letBefore = y
// //     }
// //
// //     catch(err){
// //        letBefore = 'Refference Error'
// //     }
// //
// //     let y = 10
// //
// //     return {
// //     varBefore,letBefore}
// //
// //
// //
// //
// //
// //
// // }
// //
// // console.log(hoistTest())
//
//
// function makeCounter(start){
//     let current = start;
//
//     return function (){
//         const counter = current;
//         current++;
//
//         return counter;
//
//
//     }
// }
//
// const c = makeCounter(5);
//
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
//
// function once(fn){
//     let called = false
//     let result;
//
//     return function() {
//         if(called === false){
//
//             result = fn()
//             called = true;
//         }
//
//         return result;
//     }
// }
//
// let calls = 0;
//
// const f = once(() => {
//     calls++;
//     return 42;
// });
//
// console.log(f() === 42);
// console.log(f() === 42);
// console.log(calls === 1);
