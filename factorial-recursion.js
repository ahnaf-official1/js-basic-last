// Factorial using for loop


let factorial = 1;

for(let i = 6; i >= 1; i--){
    factorial = factorial * i;
}
console.log(factorial);

// Factorial using recursion

function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(7));


// For in loop used for object