class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = 'Current';
    this.previousOperand = 'Previous';
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand === '.') return;
    if (this.currentOperand === 'Current') this.currentOperand = '';
    this.currentOperand = this.currentOperand + number.toString();
  }

  delete() {

  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand != '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computing;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    switch(this.operation){
      case '+':
        computing = prev + current;
        break;
      case '-':
        computing = prev - current;
        break;
      case '*':
        computing = prev * current;
        break;
      case '÷':
        computing = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computing;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});
