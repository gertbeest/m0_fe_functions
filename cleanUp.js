// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?")
}

nameQuestion()

//I honestly don't see anything wrong with this example, so I didn't change anything.


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// I fixed the indentation on lines 21 and 22, and moved the closing bracket on line 23 to fall in line with function. I think it still would have ran with wonky indentations, but visually it was confusing. Same for the bracket.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// `Function` was incompletely spelled, so I fixed that because otherwise, there wouldn't be a working function. I added a space after the parentheses on line 31 for visual clarity. I moved the closing bracket down a line and in line with `function` to create a clean block.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}`)
}

average(2, 10)

  //I moved the opening bracket back up to line 44 to begin the code block. Then I indented line 45 and removed an indent on line 46 before the `var` to make the code block cleaner and less visually confusing. Then I moved the `console.log` up one line and indented it to match up with the rest of the code block. I removed a period from line 47 because it was causing the code to throw an error, as it didn't belong there. The function was missing its call, so I added one as well as two values for it to average (otherwise it wouldn't have printed anything to the terminal).