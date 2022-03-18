var grade = '55';

// var result = grade >= 80 && grade < 100;

// var result = grade >= 80 && grade < 100;
// var result = grade >= 70 || grade < 100;

var result;

if(grade >= 80 && grade < 100) {
    result = 'A+';
}
else if (grade >= 70 && grade < 80) {
    result = 'A';
}
else if (grade >= 60 && grade < 70) {
    result = 'A-';
}
else if (grade >= 50 && grade < 60) {
    result = 'B';
}
else if (grade >= 40 && grade < 50) {
    result = 'C';
}
else if (grade >= 33 && grade < 40) {
    result = 'D';
}
else if (grade >= 0 && grade < 33) {
    result = 'F';
}
else if (grade < 0 || grade >= 100) {
    result = 'Invalid Result';
}
else {
    result = grade;
}
console.log(result);
