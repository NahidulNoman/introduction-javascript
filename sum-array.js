//problem-1

// function getSumArray(numbers){
//     var sum = 0;
//     for(var i= 0; i< numbers.length; i++){
//         let index = i;
//         let element = numbers[index];
//         sum +=2;
//         console.log(i,numbers[i])
//     }
//    return sum;
// }
// let myNumbers = [12, 23, 11, 54, 32, 31,44];
// let allNumbers = getSumArray(myNumbers);
// console.log(allNumbers)

//problem-2

function sumArray(number){
    let sum = 0;
    for(var i = 0; i < number.length; i++ ){
        let index = i;
        let element = number[index];
        sum +=2;
        console.log(element, index)
    }
    return sum;

}
let myArray = [23, 43, 21, 4, 6, 47, 9, 8];
let myAllNum = sumArray(myArray)
console.log(myAllNum)