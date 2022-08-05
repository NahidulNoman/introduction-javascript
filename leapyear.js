function isLeapYear(year){
    let whichyear = year % 4;
    if( whichyear === 0){
       return true;
    }
    else{
        return false;
    }
}

let theYear = 1344;
let confirm =isLeapYear(theYear);
console.log(confirm);