{
  // Using let
  console.log(myLet); // Logs 'undefined' due to hoisting
  let myLet = 10; // Variable assignment
  
  // Using var
  console.log(myVar); // Logs 'undefined' due to hoisting
  var myVar = 20; // Variable assignment
  
  // Using const
  console.log(myConst); // Throws a ReferenceError as hoisting doesn't initialize const variables
  const myConst = 30; // Variable assignment
}

// Values after declaration
console.log(myLet); // Logs 10
console.log(myVar); // Logs 20
console.log(myConst); // Throws a ReferenceError as const variables are block-scoped
