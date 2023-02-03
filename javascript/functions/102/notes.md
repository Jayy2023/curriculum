# Javascript Functions 102

## An arrow function expression is more concise than a traditional function expression. However, there are caveats (not discussed here)

## Advantages (not a complete list)

The `function` keyword is replaced with `=>`
```javascript
const a = function(){ //traditional function expression
    return "Jordan";
};

const b = () => { // Arrow function expression
    return "Jordan"; 
}
```
The curly braces and the `return` keyword can be removed entirely if everything can fit on one line.
```javascript
const a = function(){ //traditional function expression
    return "Jordan";
};

const b = () => "Jordan"; // Arrow function expression 
```

You can remove parentheses if there is only one argument.
```javascript
//one argument
const greeting = function (name){
    return "Hello, " + name;
};

const greeting = name => "Hello, " + name;

// more than one argument 
const location = function (city, state){
    return `The location is ${city}, ${state}`;
};

const location = (city, state) => `The location is ${city}, ${state}`;
```
A `return` that spans multiple lines can either use and explicit `return`, with curly brackets, or an implicit `return`, with parentheses.

```javascript
const studentDetails = function(){
    return {
        name: "Jordan",
        age: 25,
        grades: 98
    }
};

//explicit
const studentDetails = () => {
    return{
          name: "Jordan",
        age: 25,
        grades: 98
    }
};

//implicit
const studentDetails = () => (
    {
        name: "Jordan",
        age: 25,
        grades: 98
    }
);
```