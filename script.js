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
function equals(total) {
  updateDisplay(total);
}
/*Operate takes in an operator and executes one of the basic operations on the 
given numbers */
function operate(num1, operator, num2) {
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
  //Prevents multiple decimal points
  if ('.' === value && displayValue.includes('.')) return;
  //Prevents unnecessary zeroes e.g 000145 => 145
  let firstChar = displayValue.substring(0, 1);
  let secondChar = displayValue.substring(1, 2);
  if ('0' === value && firstChar === '0' &&
   !displayValue.includes('.')) return;
  if (firstChar === '0' && value !== '.' && secondChar !== '.') {
    displayValue = '';
  }
  displayValue += value;
  if (displayValue) {
    (op.num1 === null || op.num1 === NaN ) ? (op.num1 = parseFloat(displayValue)) : 
    (op.num2 = parseFloat(displayValue)); 
  }
  console.log(op);
  result.textContent = displayValue;
}
//Makes number buttons functional
const numbers = document.querySelectorAll('.numberButton');
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    updateDisplay(e.target.textContent);
  });
});
//Make clear button functional
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  displayValue = '';
  op.num1 = null;
  op.num2 = null;
  op.operator = '';
  updateDisplay(displayValue);
});
//Object to track numbers and operators for calculations
op = {
  num1: null,
  operator: '',
  num2: null
}
//Allow operations to be carried out
const operateButtons = document.querySelectorAll('.operate')
operateButtons.forEach((operateButton) => {
  operateButton.addEventListener('click', (e) => {
    let chosenOp = e.target.textContent;
    switch (chosenOp) {
      case 'x':
        chosenOp = '*';
        break;
      case '÷':
        chosenOp = '/';
        break;
    }
    op.operator = chosenOp;
    displayValue = '';
    result.textContent = displayValue;
    console.log(op);
  });
});
//Execute operation when equals is clicked
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
  let out = operate(op.num1, op.operator, op.num2);
  result.textContent = out;
  op.num1 = null;
  op.operator = '';
  op.num2 = null;
});