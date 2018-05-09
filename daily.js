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

//Day 2: Passing functions as arguments

function calculateAge(yob) {
    return 2018 - yob
  };
  
  let calcAnything = (arr, computeLogic) => {
      let resArr = [];
        arr.forEach(ele => resArr.push(computeLogic(ele)));
      return resArr;
  };
  
  let years = [1987, 1988, 2000];
  console.log(calcAnything(years, calculateAge));