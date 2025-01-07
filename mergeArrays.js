/*
Question 1:
Write a function mergeArrays that accepts any number of arrays as arguments and
merges them into a single array. Use the spread operator to accomplish this.
Example Input:
mergeArrays ([1, 2], [3, 4], [5, 6])
Example Output:
[1, 2, 3, 4, 5, 6]
*/
function mergeArrays(...arrays) {
    return [].concat(...arrays);
  }
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8];
  
  const result = mergeArrays(arr1, arr2, arr3);
  console.log(result);  
    
