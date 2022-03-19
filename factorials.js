// var fac = 6;
// var res = 1;
// for (i = 1; i <= fac; i++) {
//     res *= i;
//     console.log(res);
// }


function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}
const result = getFactorial(7);
console.log(result);