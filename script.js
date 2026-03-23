function onesDigit(n) {
  // Convert input to number
  const num = Number(n);

  // Validate: must be a positive integer
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error("Input must be a positive integer");
  }

  // Return ones digit
  return num % 10;
}

// Do not change the code below
const n = prompt("Enter Number:");
alert(onesDigit(n));