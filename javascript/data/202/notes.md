# Javascript Data 202
## The syntax to reading data from memory can be done using indices, bracket notation or dot notation
## arrays
we use an index  to read data from and array by enclosing the index value within square brackets.
```
const fruits = ["Apples", "Orange", "Peaches"]; 
console.log(fruits[0]); //arrays are zero indexed

```
## objects
We use bracket notation or dot notation to read data.
```
const car = {
color: "Blue",
type: "Mercedes",
mileage: 16000,
isNew: false,
};
console.log(car.mileage); expecting to get 16000 //
same as console.log(car['mileage']); // expect to get 16000
```