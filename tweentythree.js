//Pratice Question:


// Question:->   create  a function using "function" keyword that takes a string as a argument 
//               & returns the number of vowels in the string.

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(
           char === "a" || 
           char === "e" ||
           char === "i" || 
           char === "o" || 
           char === "u" )  {
           count++;
        }
    }
    return count;
}
