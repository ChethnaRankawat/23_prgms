/*
Question 12:
Write a function createProfile that accepts an object with name, age, email, and
address. Use object destructuring to extract the name and email and return a new
object containing only the name and email.
*/

function createProfile(object){
    let {name,email} = object

    let obj2 = {
        name,email
    }

    return obj2
}

const obj = {
    name:"Chethna",
    age:19,
    email:"chethna@gmail.com",
    adress:"12344"
}

let obj2 = createProfile(obj)

console.log(obj2)

//Chat 
/*
function createProfile(user) {
    const { name, email } = user; // Destructure inside the function
    return { name, email };
  }
  */