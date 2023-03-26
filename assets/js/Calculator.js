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
    if (this.currentValue === "" || this.currentValue === ".") return;

    if (this.operation !== null) {
      this.compute();
    }

    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  }

  compute() {
    const previous = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);

    if (isNaN(previous) || isNaN(current)) return;

    let computedValue = "";

    switch (this.operation) {
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

    this.previousValue = "";
    this.currentValue = String(computedValue);
    this.operation = null;
  }

  formatNumber(num) {
    if (num === ".") return ".";

    const floatNum = parseFloat(num);
    if (isNaN(floatNum)) return "";

    if (num.includes(".")) {
      const splitNum = num.split(".");
      let integerDigits = parseInt(splitNum[0]);
      const decimalDigits = splitNum[1];

      let integerDigitsDisplay;

      if (isNaN(integerDigits)) {
        integerDigitsDisplay = "";
      } else {
        integerDigitsDisplay = integerDigits.toLocaleString("en", {
          maximumFractionDigits: 0,
        });
      }

      if (
        this.operation !== null &&
        decimalDigits === "" &&
        this.currentValue === ""
      ) {
        return String(integerDigitsDisplay);
      } else {
        return `${integerDigitsDisplay}.${decimalDigits}`;
      }
    }

    return String(
      floatNum.toLocaleString("en", {
        maximumFractionDigits: 0,
      })
    );
  }

  updateDisplay() {
    if (this.operation !== null) {
      this.previousValueText.innerHTML = `${this.formatNumber(
        this.previousValue
      )} ${this.operation}`;
    } else {
      this.previousValueText.innerHTML = this.formatNumber(this.previousValue);
    }

    this.currentValueText.innerHTML = this.formatNumber(this.currentValue);
  }
}
