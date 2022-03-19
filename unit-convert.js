// cm to inches
function cmToInches(cm){
    let inches =  (cm / 2.54).toFixed(3);
    return 'you entered ' + cm + ', approximate result is ' + inches;
}
let result = cmToInches(11);
console.log(result + ' inches');

// kg to lbs
function kgToLbs(kg) {
    let lbs = (kg * 2.205).toFixed(3);
    return 'you entered ' + kg + ', approximate result is ' + lbs;
}
result = kgToLbs(0.1);
console.log(result + ' pound');

// Celsius to Fahrenheit
function celToFah(celsius) {
    let fahrenheit = ((celsius * 9/5) + 32).toFixed(3);
    return 'you entered ' + celsius + ', approximate result is ' + fahrenheit;
}
result = celToFah(1);
console.log(result);

// km to miles
function kmToMiles(km) {
    let miles = (km / 1.609).toFixed(3);
    return 'you entered ' + km + ', approximate result is ' + miles;
}
result = kmToMiles(3);
console.log(result);

// meters to feet
function meterToFeet(meter) {
    let feet = (meter * 3.281).toFixed(3);
    return 'you entered ' + meter + ', approximate result is ' + feet;
}
result = meterToFeet(3);
console.log(result);

// Feet to Meters
function feetToMeter(feet) {
    let meter = (feet / 3.281).toFixed(3);
    return 'you entered ' + feet + ', approximate result is ' + meter;
}
result = feetToMeter(9.843000);
console.log(result);

// gallons to liters
function gallonToLiter(gallon) {
    let liter = (gallon * 3.785).toFixed(3);
    return 'you entered ' + gallon + ' gallon, result is ' + liter + ' liter';
}
result = gallonToLiter(4);
console.log(result);


// degrees to radians
function degToRadian(deg) {
    let PI = Math.PI;
    let radian = (deg * PI / 180).toFixed(7);
    return 'you entered ' + deg + ' deg, radian is ' + radian;
}
result = degToRadian(2);
console.log(result);
