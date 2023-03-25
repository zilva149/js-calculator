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
    this.currentValue = String(this.currentValue) + String(num);
  }

  chooseOperation(operation) {
    console.log(operation);
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
