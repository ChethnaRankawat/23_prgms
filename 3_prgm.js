/*Question 3: Write a function delayedMessage(message, delay) that prints the
message after the specified delay using setTimeout. Use a callback for when
the message has been printed.*/

function delayedMEssage(msg,delay){
    setTimeout(()=>printMessage(msg),delay)
}

function printMessage(msg){
    console.log(msg)
    }

delayedMEssage("Hello Chezzz!!!",3000)