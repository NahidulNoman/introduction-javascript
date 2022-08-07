function getHeightArray(number){
    let largest = number [0]
    for(let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index]
        if(element > largest){
            largest = element
        }
    }
    return largest;
}
let height = [134,167, 198, 155,120,188,184,179,200];
let getHeight = getHeightArray(height);
console.log(getHeight);