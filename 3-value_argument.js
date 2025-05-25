/*
Write a script that prints the first argument passed to it:

If no arguments are passed to the script, print “No argument”
You must use console.log(...) to print all output
You are not allowed to use var
You are not allowed to use length
*/

const firstArgs = process.argv[2];

// Checks if no argument is passed
if (firstArgs === undefined) {
    console.log('No argument');
} else {
    console.log(firstArgs);
}