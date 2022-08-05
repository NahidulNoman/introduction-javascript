function add(number){
    let oddNumber = number % 2;
    if(oddNumber === 0){
        return true;
    }
    else{
        return false;
    }
}
let addSum = 109;
let total = add(addSum)
console.log(total)