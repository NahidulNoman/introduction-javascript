// var mobile = {
//     brand : 'Xiaomi',
//     price : 15000,
//     Storage : '64gb',
//     camera : '12mp',
//     ram : 4
// }

// console.log(mobile.Storage)
// mobile.camera = "48MP"
// console.log(mobile)

// var cost = mobile.price
// console.log(cost)

// var properties = Object.keys(mobile)
// console.log(properties)

// var vales = Object.values(mobile);
// console.log(vales)


// var movie = {name: 'Din-TheDay'};
// movie.name ="how is this work now!!"
// console.log(movie)

// var smartphone = { brand: "iPhone", model: "13" };
// console.log(smartphone.brand)


// var computer={
//     monitor : 'hp++',
//     price : '30k',
//     keyboard: 'logitech',
//     mouse: 5,
//     ups: 'digitalX',
//     box:'vKer'
// }
// computer.keyboard= 'aFourTack'
// var cost = computer['price']
// console.log(cost)
// var properties = Object.keys(computer)
// console.log(properties)
// var values = Object.values(computer)
// console.log(values)

// var propertyName = 'mouse'
// var propertyValue = computer[propertyName]
// console.log(propertyName,propertyValue)

var computer={
    monitor : 'hp++',
    price : '30k',
    keyboard: 'logitech',
    mouse: 5,
    ups: 'digitalX',
    box:'vKer'
}
const keys = Object.keys(computer)
console.log(keys)
const values = Object.values(computer)
console.log(values)

// [ 'monitor', 'price', 'keyboard', 'mouse', 'ups', 'box' ]

for(i=0; i< keys.length; i++){
    console.log(keys[i],values[i])
}