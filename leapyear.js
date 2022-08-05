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

function checkLeapYear(year){
    let year1 = year % 4;
    let year2 = year % 100;
    let year3 = year % 400;
    if( (year1 == 0 && year2 !== 0) || year3 == 0){
        return 'Yes!! This is leap year'
    }
    else{
        return 'Oops!! it not leap year'
    }
}
let enterYear = 2019;
let finalResult = checkLeapYear(enterYear);
console.log(finalResult)