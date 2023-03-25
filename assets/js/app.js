class Calculator {
  constructor(previousValueText, currentValueText) {
    this.previousValueText = previousValueText;
    this.currentValueText = currentValueText;
    this.clear();
  }

  clear() {
    this.previousValue = "";
    this.currentValue = "";
    this.operation = "";
  }

  delete() {
    this.currentValue = String(this.currentValue.slice(0, -1));
  }

  appendNumber(num) {
    this.currentValue = String(this.currentValue) + String(num);
  }

  chooseOperation() {
    console.log("choose operation");
  }

  compute() {
    console.log("compute");
  }

  getDisplayNumber() {
    console.log("get display number");
  }

  updateDisplay() {
    this.currentValueText.innerHTML = this.currentValue;
    this.operation = "";
  }
}

const previousValueText = document.querySelector(".previous-value-text");
const currentValueText = document.querySelector(".current-value-text");

const btnClear = document.querySelector("button[data-clear]");
const btnDelete = document.querySelector("button[data-delete]");
const btnEquals = document.querySelector("button[data-equals]");
const btnsNumber = document.querySelectorAll("button[data-number]");
const btnsOperation = document.querySelectorAll("button[data-operation]");

const calculator = new Calculator(previousValueText, currentValueText);

btnClear.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

btnDelete.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

btnEquals.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

btnsNumber.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calculator.appendNumber(e.currentTarget.innerHTML);
    calculator.updateDisplay();
  });
});

btnsOperation.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.chooseOperation();
    calculator.updateDisplay();
  });
});
