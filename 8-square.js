#!/usr/bin/env node

// Get the size argument and attempt to convert to integer
const size = parseInt(process.argv[2]);

// Check if size is not a number or not provided
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Use a for loop to print each row of the square
  for (let i = 0; i < size; i++) {
    // Create a row by repeating 'X' size times
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}