//grading students score using prompt

let score = prompt ("Enter a score (0-100):");

if(score >= 90 && score <= 100){
    console.log(score," is A grade");
}
else if (score >= 70 && score<= 89){
console.log (score," is B grade");
}
else if (score >=60 && score<=69){
    console.log(score,"is C grade"); 
}
else if(score >=50 && score<=59){
    console.log(score," is D grade");
}
else{
    console.log (score," is F grade");
}
