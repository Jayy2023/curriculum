# Iterations 101
## Imperatively looping over arrays.

### Terms

**`break`**
Exits the loop programatically. Used only with imperative statements.
```javascript

```



**`continue`**
Skips over code within a loop that allows the loop to continue



**imperative programming**
Exposes the execution of steps taken in order to achieve a result- the HOW is just as important as the WHAT.



**infinite loop**
An iteration which has no exit condition so it runs infinitely.



**iterate**
To cycle through each individual item in a list.



**statement'**
A loop construct.

### Statements

**for**
The statement has three parts- __begin__,__condition__,__next__. After __begin__, which is executed only once, the order of firing is __condition__, __body__, and __next__.

```javascript
for(let i = 0; i < 10; i++) {
    console.log(i);
}

javascript
for(let i = 0; i < 10; i++) {
    // print multiples of 3 only
    if (i % 3 !== 0) continue;
    console.log(i);
}
```

**while**
Executes code as long as the condition is `true` it is possible that the condition is written so that the code never executes.
```javascript
let count = 10;
while(count > 0) {
    console.log(count);
    count--;
}
// break when `count` is 5
javascript
let count = 10;
while(count > 0) {
    if(count === 5){
        console.log("We reached 5!");
        break;
    }
    console.log(count);
    count--;
}
```
**do...while**
Executes code as long as the condition is `true`. It will always execute code within the body atleast once.

```javascript
let i = 0;
do{
    console.log(i);
    i++;
}while(i < 3);
```
**for...of**
Iterates by value. This is a more succinct alternative to the **for** explained above.
```javascript
const items = ["apples", "banana", "soup"];
for (const item of items){
    console.log(item);
}
```
