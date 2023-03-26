export class Calculator {
  constructor(previousValueText, currentValueText) {
    this.previousValueText = previousValueText;
    this.currentValueText = currentValueText;
    this.clear();
  }

  clear() {
    this.previousValue = "";
    this.currentValue = "";
    this.operation = null;
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
    if (this.currentValue === "") return;

    if (operation.trim() === "=") {
      this.operation = operation.trim();
      return;
    }

    if (this.operation !== null) {
      this.operation = operation;
      this.compute();
      return;
    }

    this.operation = operation;
    this.previousValue = `${this.currentValue} ${this.operation}`;
    this.currentValue = "";
  }

  compute() {
    const previous = parseFloat(this.previousValue.slice(0, -2));
    const current = parseFloat(this.currentValue);
    const operation = this.previousValue.slice(-1);

    console.log(previous, operation, current);

    if (isNaN(previous) || isNaN(current)) {
      this.operation = null;
      return;
    }

    let computedValue = "";

    switch (operation) {
      case "/":
        computedValue = previous / current;
        break;
      case "x":
        computedValue = previous * current;
        break;
      case "+":
        computedValue = previous + current;
        break;
      case "-":
        computedValue = previous - current;
        break;
    }

    if (this.operation === "=") {
      this.previousValue = "";
      this.currentValue = `${computedValue}`;
      this.operation = null;
      return;
    }

    this.previousValue = `${computedValue} ${this.operation}`;
    this.currentValue = "";
  }

  getDisplayNumber() {
    console.log("get display number");
  }

  updateDisplay() {
    this.currentValueText.innerHTML = this.currentValue;
    this.previousValueText.innerHTML = this.previousValue;
  }
}
