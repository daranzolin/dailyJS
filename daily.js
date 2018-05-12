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


//Day 4: Object prototypes
/* 
Nearly all objects in JavaScript are instances of Object; a typical object inherits properties 
(including methods) from Object.prototype, although these properties may be shadowed 
(a.k.a. overridden). However, an Object may be deliberately created for which this is 
not true (e.g. by Object.create(null)), or it may be altered so that this is no longer 
true (e.g. with Object.setPrototypeOf).

Changes to the Object prototype object are seen by all objects through prototype chaining, 
unless the properties and methods subject to those changes are overridden further along 
the prototype chain.  This provides a very powerful although potentially dangerous 
mechanism to override or extend object behavior. */

function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

let john = new Person('John', 1990, 'teacher');

Person.prototype.familyName = 'Smith';
Person.prototype.log = function() {
    console.log(`Name : ${this.name} Year of Birth ${this.age} , job ${this.job}` )

};

//Day 5: String Methods

let str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be'));     // false

console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false

'abc'.repeat(2);    // 'abcabc'

let aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''

