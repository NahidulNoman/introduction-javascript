function getSumArray(numbers){
    var sum = 0;
    for(var i= 0; i< numbers.length; i++){
        // let index = i;
        // let element = numbers[index];
        sum +=numbers[i];
        console.log(i,numbers[i])
    }
   return sum;
}
let myNumbers = [12, 23, 11, 54, 32, 31,44];
let allNumbers = getSumArray(myNumbers);
console.log(allNumbers)

