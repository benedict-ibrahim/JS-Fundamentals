#!/usr/bin/env node

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Get the arguments and convert to integers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Check if both arguments are valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log(NaN);
} else {
  // Call the add function and print the result
  console.log(add(num1, num2));
}