#!/usr/bin/env node

// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n <= 1) return 1;
  return n * factorial(n - 1);
}

// Get and convert the argument
const num = parseInt(process.argv[2]);

// Compute and print the factorial
console.log(factorial(num));