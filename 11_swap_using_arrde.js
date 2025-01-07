/*
Question 11:
How can you swap two variables using array destructuring? Write an example that swaps
the values of two variables, a and b, without using a temporary variable.
*/

let a = 13
let b = 6

[b , a] = [a , b]

console.log(b)