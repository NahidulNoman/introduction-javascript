 // fibonacci = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

 let fibonacci = [0, 1];
 for(let i = 2; i <= 15; i ++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
 }
 console.log(fibonacci) 