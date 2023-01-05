//The following are the basic math operators
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
//Operate takes in an operator and executes one of the basic operations on the 
//given numbers
function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}
//IDEA TO DEAL WITH FLOATING POINT PRECISION
//OPTION 1:
//TAKE THE LENGTH OF THE NUMBER WITH MOST POINTS AND MULTIPLY BOTH NUMBERS
//BY 10**LENGTH AND EXECUTE OPERATION THEN DIVIDE RESULT BY 10**LENGTH
//OPTION 2: 
//AFTER 7 POINTS, OR ANOTHER AMOUNT OF POINTS, ROUND THE VALUE RETURNED FROM
//THE OPERATION
//FOR EXAMPLE 0.1 + 0.2 = 0.30000...4 ROUNDS TO 0.3