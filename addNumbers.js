function addNumbers(a, b) {
  // Variable declaration
  console.log(myVar); // Logs 'undefined' due to hoisting
  var myVar = 10; // Variable assignment
  
  return a + b;
}

console.log(addNumbers(5, 7)); // Calls the function
