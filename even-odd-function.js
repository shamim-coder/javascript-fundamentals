function isEven(number) {
    let isEven = false;
    if (number % 2 === 0) {
        isEven = true;
    } else {
        isEven = false;
    }
    return isEven;
}

let result = isEven(555);
console.log(result);




