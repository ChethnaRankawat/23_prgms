/*Question 5: Create a function fetchData(url) that returns a promise. If the
URL contains the word "error", the promise should reject; otherwise, it
should resolve with "Data fetched successfully."*/

function fetchData(url){
    return new Promise((resolve, reject) => {
        if(url.includes("error")){
            reject("Error in URL");
        }
        else{
            resolve("Data fetched successfully.");
        }
   });
}

fetchData("https://example.com/error").then((res)=>{
    console.log(res)
})
