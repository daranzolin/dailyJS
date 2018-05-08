//Day 1: Default arguments and rest parameter syntax: represent an indefinite number of arguments as an array.

/* If the last named argument of a function is prefixed with ..., 
it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) 
are supplied by the actual arguments passed to the function. */

let argDemo = (param1 = 10, ...args) =>{
    let result = 0;
    for(let i =0 ; i < args.length ; i ++){
        result += args[i];
    }
    return result;
};