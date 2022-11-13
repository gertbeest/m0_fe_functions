// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting(name) {
    console.log(`Hi there ${name}`)
}

printGreeting("Percy")
printGreeting("Percy")
printGreeting("Percy")

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function printSentence(arg) {
    console.log(`Here is my argument: ${arg}`)
}

printSentence("Cilantro is gross")


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function printPayRange(companyName, min, max) {
    console.log(`Name: ${companyName}, Pay range: ${max - min}`)
}

printPayRange("Dunder Mifflin", 7000, 40000)


// 4: Write a function that satifies the following interaction pattern:

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"


function checkStock(stockRemaining, food) {
    if(stockRemaining >= 4) {
        console.log(food + " is stocked")
    } else if (stockRemaining < 4 && stockRemaining > 0) {
        console.log(food + " running low")
    } else if (stockRemaining === 0) {
        console.log(food + " OUT of stock!")
    }
}