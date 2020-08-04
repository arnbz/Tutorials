// Global scope - defined outside any code blocks
// Local scope - defined within a code block

// In a scope, you can access that scope's local variables and any variables in parent/ancestor scope

//Global scope (varOne)
//-> Local scope (varTwo)
//->-> Local scope (varFour)
//->Local scope (varThree)

let varOne = 'varOne';

if (true) {
  console.log(varOne);
  let varTwo = 'varTwo';
  console.log(varTwo);

  if (true) {
    let varFour = 'varFour';
  }
}

if (true) {
  let varThree = 'varThree';
}

// Won't work
console.log(varTwo);
