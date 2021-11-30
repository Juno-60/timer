// get arguments from command line as an array (remove extraneous indices)
let cmdLineArgs = process.argv.slice(2);
// iterate through arguments
for(let i = 0; i < cmdLineArgs.length; i++) {
  // checks 1. arguments actually exist 2. are positive 3. are integers
  if (cmdLineArgs && cmdLineArgs[i] > 0 && Number.isInteger(i)) {
    // sets timeout function
    setTimeout(() => {
    // play sound by writing a regular expression to terminal
    process.stdout.write('\x07');
    // since arguments are single digit, multiply by 1000 to convert to milliseconds
    }, cmdLineArgs[i] * 1000);
  }
};