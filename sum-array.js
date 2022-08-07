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
        sum += element;
        console.log(element, index, sum)
    }
    return sum;
}
let myArray = [23, 43, 21, 44, 66, 47, 19, 18];
let myAllNum = sumArray(myArray);
console.log(myAllNum)

//problem-3

// function finalArray(arr){
//     let sum =0;
//     for(let i = 0; i < arr.length; i++ ){
//         let index = i;
//         let element = arr[index];
//         sum =sum +element;
//         console.log(index,element,sum)
//     }
//     return sum;
// }
// let thisArray = [11,22,33,44,55,66,77,88,99]
// let calArray = finalArray(thisArray);
// console.log(calArray)


