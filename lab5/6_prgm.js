/*Question 6: Write a series of promises where each promise resolves with a
value (e.g., 5, 10, 15), and you can chain them to calculate the sum of all
values.*/

let p = new Promise((res, rej) => {
    res(5);
});

let p2 = new Promise((res, rej) => {
    res(10);
});

let p3 = new Promise((res, rej) => {
    res(15);
});

Promise.all([p, p2, p3])
  .then((values) => {
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); 
  })
  .catch((error) => {
    console.error(error);
  });
