// var signal = 'Red';

// if (signal.toLowerCase() === 'green') {
//     console.log('GO Ahead');
// }
// else if (signal.toLowerCase() === 'red') {
//     console.log('STOP NOW');
// }
// else if (signal.toLowerCase() === 'yellow') {
//     console.log('Proceed with Caution');
// } else {
//     console.log('Signal Lamp Not Working Properly');
// }


// for (i = 0; i <= 9; i++) {
//     var str = ''
//     for (j=0; j < i; j++) {
//         str = str + i + ' ';
//     }
//     console.log(str);
// }



// var age = 25;
// vaccineCount = 2;
// isVaccinated = false;

// if (age > 20 && vaccineCount === 2) {
//     isVaccinated = true;
//     console.log('You may go to abroad');
// } else if (age >= 15 && age <= 20 && vaccineCount < 2) {
//     console.log('You should take vaccine');
// } else if (age >= 15 && age <= 20 && vaccineCount === 2) {
//     isVaccinated = true;
//     console.log('you are vaccinated and complete 2 dose of vaccine');
// }
// console.log(isVaccinated);



// var myBudget = 4500;
// var hotelRent = 4000;
// if (myBudget > 5000) {
//     console.log('I will go for Vacation');
//     if(myBudget - hotelRent > 2000) {
//         console.log('Will Party BBQ at Sea');
//     } else {
//         console.log('oplo sopping korbo');
//     }
// } else {
//     console.log('amar taka nai, bashai ghum dibo');
// }



// var arr = [45, 66, 79, 13, 46, 78, 11, 56, 49];
// var largestNum = 0;

// for (i = 0; i < arr.length; i++) {
//     var element = arr[i];
    
//     if (element > largestNum) {
//         largestNum = element;
//     }
// }
// console.log(largestNum);



// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' is even');
//     } if (i % 2 === 1) {
//         console.log(i + ' is odd');
//     }
// }



// function dividedByThree(num) {
//     var count = 0;
//     for (i = 1; i < num; i++) {
//         if (i % 3 === 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// dividedByThree(50)




// function countVowel(string) {
//     var arrStr = string.split('');
//     var count = 0;
//     var arr = ['a', 'e', 'i', 'o', 'u'];
//     for (i = 0; i < arrStr.length; i++) {
//         var letter  = arrStr[i];
//         if (arr.indexOf(letter) != -1) {
//             count++;
//         }
//     }
//     return count;
// }

// var result = countVowel('aeiou');

// console.log(result);




// function countVowel(string) {
//     var count = 0;
//     for (i = 0; i < string.length; i++) {
//         let letter = string[i];
//         if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// var result = countVowel('web_projects/Reset Course Modules/JavaScript Module 01');

// console.log(result);




// function average(n) {
//     var count = 0;
//     var sum = 0;
//     for (i = 1; i < n; i++) {
//         if (i%3 === 0) {
//             count++;
//             sum += i;
//         }
//     }
//     return sum/count;
// }

// var result = average(1000);

// console.log(result);