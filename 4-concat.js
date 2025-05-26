#!/usr/bin/env node

// Get the arguments (skip node path and script path)
const [first, second] = process.argv.slice(2);

// Print in the required format
console.log(`${first} is ${second}`);