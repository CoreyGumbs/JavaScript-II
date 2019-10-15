// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr);
}

const arrLength = (arr) => arr.length;

console.log(getLength(items, arrLength));

// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr);
}

const lastItem = (arr) => arr[arr.length-1];
console.log(last(items, lastItem));

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x, y);
}

const add = (x,y) => x + y;
console.log(sumNums(5, 29, add));

 // multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb){
    return cb(x, y);
}
const product = (x, y) => x * y;

console.log(multiplyNums(4, 5, product));

 // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  return cb(list.includes(item));
}
const boonleanCheck = (result) => result;

console.log(contains('cat', items, boonleanCheck), 'item: Cat');
console.log(contains('Notebook', items, boonleanCheck), 'item: Notebook');

/* STRETCH PROBLEM */
const duplicates = ['Apple', 'Mango', 'Pineapple', 'Grape', 'Apple', 'Grape', 'Watermellon', 'Mango'];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const myArray = array.filter((item, idx) => {
     return array.indexOf(item) === idx
  });

  return myArray;
}

const newArray = (arr) => arr;

console.log(removeDuplicates(duplicates, newArray));