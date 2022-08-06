//module-20//

// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

// function checkLeapYear(year){
//     let whichYear = year % 4;
//     if ( whichYear == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let enterYear = 2020;
// let setYear = checkLeapYear(enterYear)
// console.log('Your answer is...', setYear);

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

// function myAgeNum(year){
//     let age = year % 2;
//     if( age == 0){
//         return 'Your Age Is even'
//     }
//     else{
//         return 'Your Age Is odd'
//     }
// }
// let setYear = 2000;
// let result = myAgeNum(setYear);
// console.log(result)

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

// function hourToMin(hour){
//     let minutes = hour * 60;
//     return minutes;
// }
// let setHour = 5;
// let result = hourToMin(setHour);
// console.log('This is Your Find Minutes', result)

// ৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।

// function hourToSec(hour){
//     let second = 3600 * hour;
//     return second;
// }
// let setHour = 5;
// let yourSecValues =hourToSec(setHour);
// console.log(yourSecValues);


//module-19//


// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

// function namota(number){
//     for( let i = 1; i<= 10; i++){
//         let index = number * i;
//         console.log(index);
//     }
// }
// let setNumber = 5;
// let yourResult = namota(setNumber);


//২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// function upCase(alphabet){
//     let doWord = alphabet;
//     return doWord .toLowerCase();
// }
// let word = 'HELLO JAVASCRIPT.'
// let getWord = upCase(word)
// console.log(getWord);

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

// function fullName(first, last){
//     let yourName = first + ' ' + last;
//      return yourName;
// }
// let setYourName1 = 'Fokir';
// let setYourName2 = 'Lal';
// let yourResult = fullName(setYourName1, setYourName2)
// console.log('Your Full Name is :', yourResult)

//  ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
//  অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে। 

// function dubbel(number){
//     let coundt = number * number;
//     return coundt;
// }
// let putIn = 100;
// let getResult = dubbel(putIn);
// console.log('This is your square number--', getResult);

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :এবং pepperoni প্রিন্ট করবা।

// const pizza = {
//     toppings: ['cheese', 'sauce', 'pepperoni'],
//     crust: 'deep dish',
//     serves: 2
//  }
//  console.log(pizza.toppings[2]);


