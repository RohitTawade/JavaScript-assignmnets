// Call the function before declaration (hoisting demonstration)
console.log(addNumAer)(5, 7));

// Function declaration
function addNumAer(a, b) {
  return a + b;
}

// Call the function after declaration
console.log(addNumAer(10, 20));
