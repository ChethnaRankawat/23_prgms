/*Question 6: Write a Node.js script that reads the content of a file
asynchronously using the fs.readFile() method. The script should print the
file's content to the console, and if an error occurs (e.g., the file doesn't
exist), it should print an appropriate error message.*/

const fs = require("fs")

fs.writeFile('./test2.txt',"This is Test file",(err)=>{
    console.log("Error in Writing File!")
})

fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){
        console.log('File Does Not Exist')
    }

    else{
        console.log(data)
    }
})
