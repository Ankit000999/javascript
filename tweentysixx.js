
//Question:-> print the square of each number in array using for each loop.

let num=[11,12,13,14,15];
let calcSquare =(num) => {
    console.log(num*num); //num**2
}
num.forEach(calcSquare);