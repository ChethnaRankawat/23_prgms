/*
Question 14:
You have the following array of 5 numbers:
const nums = [10, 20, 30, 40, 50];
Use array destructuring to swap the first and third elements of the array and the
second and fourth elements. Then, log the modified array.
*/

const nums = [10, 20, 30, 40, 50];

// Swap first and third elements
[nums[0], nums[2]] = [nums[2], nums[0]];

// Swap second and fourth elements
[nums[1], nums[3]] = [nums[3], nums[1]];

// Log the entire array
console.log(nums);
