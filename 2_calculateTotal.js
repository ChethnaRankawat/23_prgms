/*Question 2:
Create a function calculateTotal that takes an arbitrary number of numeric values
(using the rest operator) and returns their sum.
Example Input:
calculateTotal (10, 20, 30, 40)
Example Output:
100
*/


function calculateTotal(...nums){
    let sum=0
    for(let i in nums){
        sum += nums[i]
    }
    return sum
}

const sum_nums = calculateTotal(1,2,3,4,5)

console.log(sum_nums)