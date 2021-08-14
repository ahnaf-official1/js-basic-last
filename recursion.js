// Sum using recursion


function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i - 1);
}

const myValue = sum (6);
console.log(myValue);


// We can use this process instead of simple loop.