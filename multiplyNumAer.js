// Call the function before declaration (hoisting demonstration)
console.log(multiplyNumAer(3, 4));

// Function expression to define the function
var multiplyNumAer = function(a, b) {
  return a * b;
};

// Call the function after declaration
console.log(multiplyNumAer(5, 6));
