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

//Day 6: try-catch

/* The try...catch statement marks a block of statements to try, and specifies one or more 
responses should an exception be thrown. If an exception is thrown, the try...catch statement 
catches it.

The try...catch statement consists of a try block, which contains one or more statements, 
and a catch block, containing statements that specify what to do if an exception is thrown 
in the try block. That is, you want the try block to succeed, and if it does not succeed, 
you want control to pass to the catch block. If any statement within the try block 
(or in a function called from within the try block) throws an exception, control 
immediately shifts to the catch block. If no exception is thrown in the try block, 
the catch block is skipped. The finally block executes after the try and catch blocks 
execute but before the statements following the try...catch statement. */

function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo'; //throw keyword is used here
    }
  }
  
  try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
  }
  catch (e) {
    monthName = 'unknown';
    logMyErrors(e); // pass exception object to error handler -> your own function
  }

  /* The catch block specifies an identifier (catchID in the preceding syntax) that holds the value specified 
  by the throw statement; you can use this identifier to get information about the exception that was thrown. 
  JavaScript creates this identifier when the catch block is entered; the identifier lasts only for the duration 
  of the catch block; after the catch block finishes executing, the identifier is no longer available. */

  openMyFile();
  try {
    writeMyFile(theData); //This may throw an error
  } catch(e) {  
    handleError(e); // If we got an error we handle it
  } finally {
    closeMyFile(); // always close the resource
  }
  
  /* The finally block contains statements to execute after the try and catch blocks execute but before the statements 
  following the try...catch statement. The finally block executes whether or not an exception is thrown. If an exception is thrown, 
  the statements in the finally block execute even if no catch block handles the exception. */

  //Day 7: Returning the object in a function allows you to chain functions

  function Person(name) {
    this.name = name;
  
    this.sayName = function() {
      console.log("Hello my name is: ", this.name);
      return this;
    };
  
    this.changeName = function(name) {
      this.name = name;
      return this;
    };
  }
  
  var person = new Person("John");
  person.sayName().changeName("Timmy").sayName();

  //Day 8: Ternary Operator
  // If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2. 

  function getFee(isMember) {
    return (isMember ? "$2.00" : "$10.00");
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"