/*
Question 13:
Given the following code, use array and object destructuring to extract the first
element of the array and the name and age from the object:
const data = [{name: ‘John’, age: 30 }, { name: ‘Jane’, age: 25 }];
*/

//Own


const data = [{name: "John", age: 30 }, { name: "Jane", age: 25 }];
let [first] = data

let {name,age} = data[0]

console.log(`${first} ${name} ${age}`)