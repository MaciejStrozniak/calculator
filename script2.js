class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    clear();
  }

  clear() {
    this.previousOperandTextElement = '';
    this.currentOperandTextElement = '';
    this.operation = undefined;
  }

  appendNumber() {

  }

  delete() {

  }

  chooseOperation() {

  }

  compute() {
    
  }

  equals() {

  }

  updateDisplay() {

  }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButon = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
