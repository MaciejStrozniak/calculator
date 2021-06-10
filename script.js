class Calculator {
  //constructor tworzy obiekt znajdujący się w klasie Calculator
  //trzeba o tym jeszcze poczytać bo nie jest do końca jasne
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {

  }

  chooseOperation(operation) {

  }

  compute(){

  }

  updateDisplay(){

  }
}

const numberButtons = document.querySelectAll('[data-number]');
const operationButtons = document.querySelectAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener(click, () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay();
  })
})
