
// // QUESTION#01
// function power(a, b) {
//     return Math.pow(a, b);
// }

// // QUESTION#02
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// // QUESTION#03
// function triangleArea(a, b, c) {
//     let S = (a + b + c) / 2;
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }
// // QUESTION#04
// function average(marks) {
//     return marks.reduce((a, b) => a + b) / marks.length;
// }

// function percentage(marks) {
//     return (average(marks) / 100) * 100;
// }

// function mainFunction() {
//     const marks = [80, 90, 85];  
//     const avg = average(marks);
//     const perc = percentage(marks);
//     console.log(`Average: ${avg}, Percentage: ${perc}%`);
// }

// // QUESTION#05
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// // QUESTION#06
// function removeVowels(sentence) {
//     return sentence.replace(/[aeiou]/gi, '');
// }

// // QUESTION#07
// function countVowelPairs(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//         const pair = text[i] + text[i + 1];
//         switch (pair.toLowerCase()) {
//             case 'aa':
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
//             case 'ea':
//             case 'ee':
//             case 'ei':
//             case 'eo':
//             case 'eu':
//             case 'ia':
//             case 'ie':
//             case 'io':
//             case 'iu':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'oo':
//             case 'ou':
//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }

// // QUESTION#08
// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// // QUESTION#09
// function calculateOvertimePay(hoursWorked) {
//     if (hoursWorked > 40) {
//         return (hoursWorked - 40) * 12;
//     }
//     return 0;
// }

// // QUESTION#10
// function calculateCurrencyNotes(amount) {
//     const hundred = Math.floor(amount / 100);
//     amount %= 100;
//     const fifty = Math.floor(amount / 50);
//     amount %= 50;
//     const ten = Math.floor(amount / 10);
//     return { hundred, fifty, ten };
// }

// console.log(power(2, 3));
// console.log(isLeapYear(2020));
// console.log(triangleArea(3, 4, 5));
// mainFunction(); 
// console.log(customIndexOf("Hello", "e")); 
// console.log(removeVowels("Hello World")); 
// console.log(countVowelPairs("Pleases read this application and give me gratuity")); 
// console.log(toMeters(1)); 
// console.log(toFeet(1)); 
// console.log(toInches(1)); 
// console.log(toCentimeters(1));
// console.log(calculateOvertimePay(45));
// console.log(calculateCurrencyNotes(370)); 


// function main(){
//     alert("welcome visitor")
// }
//  function picture(){
//     Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success"
//       });
// }
// var counter = 0;
    
//             function increaseCounter() {
//                 counter++; 
//                 updateCounterDisplay();  
//             }
    
//             function decreaseCounter() {
//                 counter--; 
//                 updateCounterDisplay();  
//             }
    
//             function updateCounterDisplay() {
//                 document.getElementById("counterValue").innerText = counter;  
//             }

