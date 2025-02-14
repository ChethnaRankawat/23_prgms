/*
Write a function updateEmployeeDetails that takes an object representing an
employee’s details and updates their role while maintaining the other properties
using the spread operator.

Example Input:
const employee = {name: ‘Afroz’, role: ‘Developer’, age: 28, location: ‘IN’}
updateEmployeeDetails (employee, ‘Senior Developer’)

Example Output:
{name: ‘Afroz’, role: ‘Senior Developer’, age: 28, location: ‘IN’}
*/

function updateEmployeeDetails(object,role){
    object.role = role

    return object
}

const employee = {name: "Afroz"
    , role: "Developer", age: 28, location:"IN"}

console.log(updateEmployeeDetails (employee, "Senior Developer"))