//The following are the basic math operators
function add(num1, num2) {
  return strip(num1 + num2);
}
function subtract(num1, num2) {
  return strip(num1 - num2);
}
function multiply(num1, num2) {
  return strip(num1 * num2);
}
function divide(num1, num2) {
  return strip(num1 / num2);
}
/*Operate takes in an operator and executes one of the basic operations on the 
given numbers */
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
//Deals with floating point imprecision
function strip(number) {
  return (parseFloat(number).toPrecision(12));
}
//Displays to result box
let displayValue = "";
const result = document.querySelector('.result')
function updateDisplay(value) {
  if ('.' === value && displayValue.includes('.')) return;
  displayValue += value;
  parseInt(displayValue);
  result.textContent = displayValue;
}
//Makes number buttons functional
const numbers = document.querySelectorAll('.numberButton');
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    updateDisplay(e.target.textContent);
  });
});