var numbers = [45, 65, 87, 93, 22, 12, 34];

var singer = ['ball', 'kal', 'jss', 'kory', 'puss']
var oneParson =singer['2']
// console.log(oneParson)
// numbers[2]= 70;
// console.log(numbers)

// practice problem-1

var fruits = ['Apple', 'Banana', 'Orange'];

var food = fruits[1];
fruits[1] = 'mango';
fruits.pop();
fruits.push('watermelon');
// console.log(fruits);

// practice problem-2
var you = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

var gradeA =80;
var gradeB =60;
var gradeC =50;
var gradeD =40;

if(gradeA >= you ){
    console.log( 'you got 1ist class')
    if( gradeA>=peter){
        console.log( 'you got 2nd class')
    }
    else{
        console.log('you got 2nd class')
    }
}
else{
    console.log('you got 1st class')
}