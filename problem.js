// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
// ৩. ভেরিয়েবল কি জিনিস?
// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে

// var age = 21;

// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে।

// age = [2]
// console.log(age)

// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)

// var name = 'noma';
// var roll = 15;
// var isCodeHard = true;
// console.log(typeof(isCodeHard))

// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।

// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।

// ৯. দুইটা ভেরিয়েবল এর মধ্যে +, -, *, /, % কিভাবে করে?

// var num1 = 30 ;
// var num2 = 25 ;
// var sum = num1 % num2 
// console.log(sum)

// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে।

// var num1 = 20;
// var num2 = 34;
// num1 /=10;
// console.log(num1) 

// ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো।

// var num1 = 20;
// var num = num1 +1
// console.log(num)

// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে?

// var num1 = 0.1;
// var num2 = 0.2;
// sum = num1 + num2;
// sum = sum.toFixed(1);
// sum = parseFloat(sum)
// console.log(sum);


// Variable ---------- complete-----


// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয়

// var age =[12, 23, 21, 24, 32, 30]

// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে

// console.log(age.length)

// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।

// var age =[12, 23, 21, 24, 32, 30]
// console.log(age[2])
// age[3] = 40;
// console.log(age) 

// ১৬. কোন একটা উপাদানের index এর মান  -১ বলতে কি বুঝায়

// var ages = age.indexOf(24)
// console.log(ages)

// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো

// var friends = ['nom', 'kak', 'kea', 'koo']

// var friend = friends.indexOf('koo')
// console.log(friend)

// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে

// var roll =[34, 32, 33, 12, 21, 65 ]
// roll [5] = 50;
// console.log(roll)

// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

// var roll =[34, 32, 33, 12, 21, 65 ]
// var rolled = roll.indexOf(12)
// console.log(rolled)

// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

// var roll =[34, 32, 33, 12, 21, 65 ]

// console.log(roll[6])

// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

// var roll =[34, 32, 33, 12, 21, 65 ]
// roll.push(100)
// console.log(roll)
// roll.pop()
// console.log(roll)

// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

// var roll =[34, 32, 33, 12, 21, 65 ]

// roll.unshift(100)
// roll.shift()
// console.log(roll)

// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি:  >, <, ==, !=, <=, >=, ===, !==, &&, ।।


// ২৪. তোমার কাছে:  ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

// var yourMoney = 20000;

// if(yourMoney > 80000){
//     console.log('tumi mac kinte parba')
// }
// else  if(yourMoney > 60000 ){
//     console.log('tumi ekta gaming laptop kinte paro')
// }
// else if(yourMoney > 40000 ){
//     console.log('tumi lenovo giga computer kinte paro')
// }
// else if( yourMoney > 20000){
//     console.log('tumi ekta puran laptop kinte paro')
// }
// else{
//     console.log('mobile diya kaj chalao')
// }


// -------------------loop--------------

// ২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট  হিসেবে দেখাও।

var sentence = ['Today i am not fine.']



