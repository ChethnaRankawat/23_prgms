/*Question 4: Write a program where an event is emitted, but the listener will
only respond to it the first time; then, it should remove itself.*/

const events = require('events')

let myE = new events.EventEmitter()

myE.once("UserDetails",(name,age)=>{
    console.log(`Hello , ${name} !`)
    console.log(`You are ${age} years old`)
})

myE.emit("UserDetails","Chezz",19)
console.log("-".repeat(40))
myE.emit("UserDetails","Chezz",19)
console.log("-".repeat(40))
myE.emit("UserDetails","Chezz",19)
