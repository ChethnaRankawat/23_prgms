/*Question 3: Create an event emitter that emits a "userDetails" event with
two arguments: name and age. Write a listener that formats the output and
logs it as "Hello, [name]! You are [age] years old."*/

const events = require('events')

let myE = new events.EventEmitter()

myE.on("UserDetails",(name,age)=>{
    console.log(`Hello , ${name} !`)
    console.log(`You are ${age} years old`)
})

myE.emit("UserDetails","Chezz",19)
console.log("-".repeat(40))
myE.emit("UserDetails","Chezz",19)
console.log("-".repeat(40))
myE.emit("UserDetails","Chezz",19)
