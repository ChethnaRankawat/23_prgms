/*Question 2: Create three functions that take a number, multiply it by 2,
subtract 3, and then add 10. Use callbacks to chain these operations together.*/

function add(num,fun){
    return fun(num+10,false);
}

function sub(num,fun){
    return fun(num-5,false);
}

function mul(num,fun){
    return fun(num*2,false);
}

add(15,(addRes,err)=>{
    if(!err){
        sub(addRes,(subRes,err2)=>{
            if(!err2){
                mul(subRes,(mulRes,err3)=>{
                    if(!err3){
                        console.log("The result is :"+mulRes)
                    }
                    else{
                        console.log("Error in Multiplication:")
            }
            });
        }
            else{
                console.log("Error in Subtraction:")
            }
    });
        }
        else{
            console.log("Error in Addition")
        }
    });


