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

//Day 3 Call, Apply, Bind

// The call() method calls a function with a given this value and arguments provided individually.
// While the syntax of this function is almost identical to that of apply(), 
// the fundamental difference is that call() accepts an argument list, 
// while apply() accepts a single array of arguments.

// Call/apply call the function immediately, whereas bind returns a function that, when later executed, 
// will have the correct context set for calling the original function. 

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
console.log(new Food('cheese', 5).name);
  // expected output: "cheese"

var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }
  
  var unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  var boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42