/*Question 1: Write a function greet that takes a name and a callback function.
The function should return a greeting message by calling the callback with
the message.*/

function greet(name, callback) {    
    var message = "Hello, " + name + "!";
    return callback(message);
    }

    function printMessage(message) {
        return message;
    }

    console.log(greet("Chezzz",printMessage))