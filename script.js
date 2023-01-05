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
  if (num2 == 0) return "Can't divide by zero";
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
//Deals with floating point imprecision and removes unecessary zeroes
function strip(number) {
  for (let i = 1; i < 13; i++) {
    if (number == parseFloat(number).toPrecision(i)) return number;
  }
  return parseFloat(number).toPrecision(12);
}
//Displays to result box
let displayValue = "";
let first = true;
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
  if (displayValue && first) {          //If first input then set to num1
    op.num1 = parseFloat(displayValue); 
  } else if (displayValue) {            //Second input then set to num2
    op.num2 = parseFloat(displayValue); //Allows first input to be a decimal value
  }
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
  clear();
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
    first = false;
    result.textContent = displayValue;
  });
});
//Execute operation when equals is clicked
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
  if (op.num1 && !op.num2) {
    result.textContent = '';
    op.num1 = null;
    displayValue = '';
    return;
  }
  let out = operate(op.num1, op.operator, op.num2);
  result.textContent = out;
  op.num1 = out;
  op.operator = '';
  op.num2 = null;
  first = true;
});
//Functionality for clear button (reset)
function clear() {
  displayValue = '';
  op.num1 = null;
  op.num2 = null;
  op.operator = '';
  updateDisplay(displayValue);
}
//Functionality for backspace button that deletes last argument for operate
const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
  if (op.num1 && op.num2 !== null) {
    result.textContent = result.textContent.slice(0, result.textContent.length - 1);
    op.num2 = result.textContent;
  }
  if (op.num1 && op.num2 === null) {
    result.textContent = result.textContent.slice(0, result.textContent.length - 1);
    op.num1 = result.textContent;
  }
});