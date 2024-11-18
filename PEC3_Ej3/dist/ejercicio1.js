"use strict";
// Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones y salidas indicadas en los comentarios.
function printArray(array) {
    //code to print the array on console
    let salida = array.map(item => item);
    console.log(salida);
}
let array = [2, 3, 4];
console.log(array.shift()); //2
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
let pop = array.pop();
console.log(pop); //5
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
/***/
array.unshift(8);
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
let everyisgreater = array.filter(it => it > 3);
console.log(everyisgreater.length > 0); //false
/** check if every number is less than 10 */
let everyisless = array.filter(it => it < 10);
console.log(everyisless.length > 0); //true
console.log(array.sort()); //1,3,4,8
console.log(array.reverse()); //8,4,3,1
