// problem -1
/* 
fixed: per item wood requirements 
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft
vary: quantity
*/

// function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
//     let chairWood = 3;
//     let tableWood = 10;
//     let bedWood = 50;

//     let chairWoodNeeded = chairQuantity * chairWood;
//     let tableWoodNeeded = tableQuantity * tableWood;
//     let bedWoodNeeded = bedQuantity * bedWood;
//     const yourTotalWood =chairWoodNeeded + tableWoodNeeded + bedWoodNeeded;

//     return yourTotalWood;
// }
// let totalWood = woodQuantity(0,0,2);
// console.log(totalWood);

// problem -2

// const phones = [
//     { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
//     { name: 'iphone', camera: 7, storage: '32gb', price: 82000, color: 'silver' },
//     { name: 'Xiaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver' },
//     { name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'black' },
//     { name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'golden' },
//     { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver' },
// ];

// function cheapestPhone(phones){
//     let cheapPrice = phones[0]
//     for(i = 0; i < phones.length; i++){
//         let phone = phones[i];
//        if(phone.camera > cheapPrice.camera){
//             cheapPrice = phone
//        }
//     }
//     return cheapPrice;
// }
// let selectPhone = cheapestPhone(phones);
// console.log(selectPhone);

//problem -3

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        let total = product.quantity * product.price
        sum = sum + total;
    }
    return sum;
}
const shoppingCart = [
    { name: 'shoe', price: 1200 , quantity: 2},
    { name: 'shirt', price: 2200, quantity: 7 },
    { name: 'pant', price: 3700 , quantity: 3},
    { name: 'belt', price: 600 , quantity: 1}
];
let expense = totalCost(shoppingCart);
console.log(expense);