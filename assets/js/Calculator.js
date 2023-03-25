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
    if (operation.trim() === "=") {
      this.operation = operation.trim();
      return;
    }

    if (this.operation !== "") {
      this.operation = operation;
      this.compute();
      return;
    }

    this.operation = operation;
    this.previousValue = `${this.currentValue} ${this.operation}`;
    this.currentValue = "";
  }

  compute() {
    const previous = this.previousValue.slice(0, -2);
    const current = this.currentValue;
    const operation = this.previousValue.slice(-1);

    let computedValue = "";

    switch (operation) {
      case "/":
        computedValue = Number(previous) / Number(current);
        break;
      case "x":
        computedValue = Number(previous) * Number(current);
        break;
      case "+":
        computedValue = Number(previous) + Number(current);
        break;
      case "-":
        computedValue = Number(previous) - Number(current);
        break;
    }

    if (this.operation === "=") {
      this.previousValue = "";
      this.currentValue = `${computedValue}`;
      this.operation = "";
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
