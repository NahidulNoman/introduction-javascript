function reverseString(text){
    let letReverse = 0;
    for( i = text.length; i >= 0; i--){
        let index = text[i];
        letReverse = letReverse +index
        console.log(letReverse, index)
    }
    return letReverse
}
let thisLine = 'learn explore JavaScript'
let getResult = reverseString(thisLine);
console.log(getResult);