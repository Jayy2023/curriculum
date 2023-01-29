# Javascript Functions 101
## A general overview 

### Terms 
**anonymous function**
A function that is not named (see also function expressions)
In this function expression, the function part is considered to be anonymous.
```
const greeting = function(name){
    return `Hello ${name}`;
}
```

**argument**
A hardcoded value passed into the function when it is executed. In the example below, `"Jordan"` is the argument.
```
greeting("Jordan");
```

**call**
An action which executes (or fires) the function.

**callback function**
Executes within the function to which it is passed an argument.
```
const cb = function(){
    console.log('Iam the callback');
}
function greeting(name, fn){
    fn();
    return `Hello ${name};
}
greeting("Jordan", cb);
```

**function**
There are two contexts. One is the function definition itself. Another is the code within the definition which executes when being called and which sometimes returns a value.
**function body**
Contains the code of the function itself within a set of curly brackets.

**function declaration**
Uses the _function_ keyword.to declare a named function.The name of the function immediately follows the _function_ keyword.
```
function greeting(){
    return "Hello, you sure look nice today.";
 }
```
**function expression**
A function expression is the function that is the initialization of a variable declaration. The variable, which is named, stores the function but the function itself is considered anonymous or unnamed.
```
const greeting = function (){
    return "Hello, you sure look nice today.";
 }
```


**hoisting**
Allows a function declaration to be used in code before it is declared.

**IIFE**
An _immediately invoked function expression_ is a function that is executed directly by the Javascript engine.
```
(function (){
return 'Hello';
})();
'Hello'
```
IIFE can also have arguments and parameters.

**named function**
See function declarations.

**parameter**
A placeholder whose value equals the argument passed to the function when it is called. The value is accessed only within the function itself. In the example `name`,inside of the parentheses is the parameter.
```
function greeting(name){
    return "Hello " + name + " you sure look nice today.";
}
```

**parentheses**
The parentheses have two purposes. One is to execute or call the function. Another is part of the syntax to define a function.In the former, it may contain arguments. In the latter, it may contain parameters.

**return**
If implemented, it executes the last line of the function's code. It precedes a data type or collection to be returned. We say that a function closes or exits when the code that follow _return_ executes, which also means that any lines beneath it are ignored.

**scope**
Refers to what values are available in memory at a given time during the execution of code.