/* 
Question 5:
Write a function updateProductInfo that extracts the id and name properties from a
product object and then adds new properties (discount and inStock) using the spread
operator.
Example Input:
const product = {id: 101, name: ‘Laptop’, price: 1000, category:
‘Electronics’}
Example Output:
{id: 101, name: ‘Laptop’, discount: 10, inStock: true}
*/

function updateProductInfo(obj,discount,inStock){
    let {id , name} = obj

    obj = {
        ...{id,name},
        discount,
        inStock
    }

    return obj
}

const product = {id: 101, name: "Laptop", price: 1000, category:"Electronics"}

const res = updateProductInfo(product,10,true)

console.log(res)