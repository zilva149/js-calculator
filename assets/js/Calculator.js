export class Calculator {
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
    this.currentValue = this.currentValue.slice(0, -1);
  }

  appendNumber(num) {
    if (num === "." && this.currentValue.includes(".")) {
      return;
    }
    this.currentValue = String(this.currentValue) + String(num);
  }

  chooseOperation(operation) {
    this.operation = operation;
    this.previousValue = `${this.currentValue} ${this.operation}`;
    this.currentValue = "";
  }

  compute() {
    console.log("compute");
  }

  getDisplayNumber() {
    console.log("get display number");
  }

  updateDisplay() {
    this.currentValueText.innerHTML = this.currentValue;
    this.previousValueText.innerHTML = this.previousValue;
  }
}
