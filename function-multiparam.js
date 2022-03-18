function addTwoNum (_num1, _num2){
    let add = _num1 + _num2;

    return add;
}

multiplyTwoNumbers = (num1, num2) => {
    let multiply = (num1 * num2);

    return multiply;
}

divideTwoNum = (num1, num2) => {
    let divide = num1 / num2;

    return divide;
}

function subtract(num1, num2) {
    let sub = num1 - num2;

    return sub;
}


var result = multiplyTwoNumbers(25, 89);

// console.log(result);



function findMax() {
    let max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if( arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

var result = findMax(20,55,67,88,97,136);
