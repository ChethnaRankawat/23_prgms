/*
Write a function createProfile that accepts an object with name, age, and an array
interests. Use object destructuring to extract name and age, and array destructuring
to extract the first two interests. The function should return a new object with the
following structure:
{name: ‘John’, age: 25, primaryInterest: ‘Reading’, secondaryInterest: ‘Traveling’}
*/

function createProfile(obj,arr){
    [first,second] = arr

    return {
        ...obj,
        primaryInterest:first,
        secondaryInterest:second
    }
}

let obj2 = createProfile({name:"Chethna",age:19},[12,23,45,56])

console.log(obj2)

