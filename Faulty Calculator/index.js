/*
FAULTY CALCULATOR using JAVASCRIPT
1. It takes input from the user 
2. It performs wrong operations as follows :

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operations 10 % of the times (10 % probability)

*/ 




// Function to take user inputs
function getUserInput(message) {
    return parseFloat(prompt(message));
  }
  
  // Faulty Calculator Function
  function faultyCalculator(operator, operand1, operand2) {
    // Generate a random number between 1 and 10
    const randomNumber = Math.ceil(Math.random() * 10);
  
    // Determine if the operation is faulty based on a 10% probability
    const isFaulty = randomNumber === 1;
  
    // Perform the operation with a potential fault
    switch (operator) {
      case '+':
        return isFaulty ? operand1 - operand2 : operand1 + operand2;
      case '*':
        return isFaulty ? operand1 + operand2 : operand1 * operand2;
      case '-':
        return isFaulty ? operand1 / operand2 : operand1 - operand2;
      case '/':
        return isFaulty ? operand1 ** operand2 : operand1 / operand2;
      default:
        return 'Invalid operator';
    }
  }
  
  // Get user inputs
  const operator = prompt('Enter operator (+, *, -, /):');
  const operand1 = getUserInput('Enter the first operand:');
  const operand2 = getUserInput('Enter the second operand:');
  
  // Check if user inputs are valid numbers
  if (isNaN(operand1) || isNaN(operand2)) {
    console.log('Please enter valid numbers.');
  } else {
    // Perform calculation
    const result = faultyCalculator(operator, operand1, operand2);
    console.log(`Result of ${operand1} ${operator} ${operand2} is: ${result}`);
  }
  