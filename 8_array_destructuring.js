/*
Question 8:
Given the following array:
const colors = [‘red’, ‘green’, ‘blue’, ‘yellow’]
Use array destructuring to extract the first and second elements of the array into
individual variables.
Use array destructuring to extract the second and fourth elements of the array into
individual variables.
*/

const colors = ["red", "green", "blue", "yellow"]

let [first,second] = colors

let [,sec,,fourth] = colors

console.log(`${first} ${second} ${sec} ${fourth}`)

