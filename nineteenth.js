//using filter in array  and finding the odd number using filter function .

let arr=[111,121,131,141,150];

let newArr = arr.filter((val) => {
    return val % 2 !== 0;
}); 
console.log(newArr);
