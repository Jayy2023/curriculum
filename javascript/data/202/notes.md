# Javascript Data 202
## The syntax to read data depends on the data type or the data collection in which data types are found.
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
## strings booleans and numbers
Refer to the variable name to read the data.
```
const name = "Jordan";
console.log(Jordan); // expected Jordan 
```