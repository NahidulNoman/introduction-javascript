let java = 'JavaScript is the worlds most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn .';

let search = java.includes('javascript') 
// console.log(search);

let doesExist = java.toLowerCase();
let searchIn = doesExist.includes('javascript')
// console.log(searchIn);

//  indexof find index of java..

// console.log(java .indexOf('the'))

// using conditionals  --

// if ( java.indexOf('javascript') !== -1 ){
//     console.log('You write valid word !!')
// }
// else{
//     console.log('Write the valid word !!')
// }

// startsWith

console.log(java.toLowerCase().startsWith('javascript'))

// endWith

console.log(java.toLowerCase().endsWith('.'))
