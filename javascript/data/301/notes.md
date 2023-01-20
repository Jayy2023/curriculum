# Javascript Data 301
## Understanding immutability comes down to understanding how data is stored in memory.
**Definitions of immutablity**
primitive data types are immutable. Immutability means that whenever a variable is declared, it lives at unique address in memory and if we re-initalized (e.g. reassigned), it will live at a new, unique address. If variable is initialized by reference, instead of by value, its unique address points to the refered address.
**List of primitive data types**
* strings 
* booleans
* numbers 
* nulls
* undefined
**Examples**
let age = 25; //initializes by value, it gets a unique address (e.g. Hx78)
let marysAge = age;/initializes by reference, it gets a unique address (e.g. Rw33) but this address doesnt hold a value it simply points to the Hx78 address.
age = 26 //  with reintialization the new value is storeed at new address (e.g. Xa15)


 **Definition of Mutibility**
 Collections of primitive types are mutable , which means that when they are modified or updated the data is not stored at a new address but remains at the orginal address when the variable was first declared.


**List of collections**
 * arrays 
 * objects
