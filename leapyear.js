// function isLeapYear(year){
//     let whichyear = year % 4;
//     if( whichyear === 0){
//        return true;
//     }
//     else{
//         return false;
//     }
// }

// let theYear = 1344;
// let confirm =isLeapYear(theYear);
// console.log(confirm);

function leapYear(year){
    let whichyear = year % 400;
    if(whichyear === 0){
        return true;
    }
    else{
        return false;
    }
}
let theYear = 2020;
let confirmYear = leapYear(theYear);
console.log(confirmYear)