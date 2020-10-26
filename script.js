const add = function(a, b) {
    return parseFloat(a) + parseFloat(b);
}
const subtract = function(a, b) {
    return a - b;
}
const multiply = function(a, b) {
    return a * b;
}
const divide = function(a, b) {
    if (b !== "0") {
        return a / b;
    } else {
        return "DIVby0ERROR";
    }
}

const operate = function(operator, a, b) {
    let solution;

    if (operator === "" || b === "") {
        return a;
        solution = a;
    } else {
        if (operator === "+") {
            return add(a, b);
            solution = add(a, b);
        } else if (operator === "-") {
            return subtract(a, b);
            solution = subtract(a, b);
        } else if (operator === "*") {
            return multiply(a, b);
            solution = multiply(a, b);
        } else if (operator === "/") {
            return divide(a, b);
            solution = divide(a, b);
        }
    }
    if (solution > 10**9) {
        solution = solution.toExponential(6);
    }

    return solution;
}

// Global Variables------------------------------------------------------

let currentExpression = "0";
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let equalSign = "";
let output = "";
let lastOutput = "";
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operatorArray = ["+", "-", "*", "/"];

// Query Selectors-------------------------------------------------------

const memDisplay = document.querySelector("#memory");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalsButton = document.querySelector("#equals");
const clearCurrentNumberButton = document.querySelector("#clear");
const clearEntryButton = document.querySelector("#clear-entry");

// Event Listeners/Other Functions---------------------------------------

//Click
numberButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)})
});
operatorButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)});
});
equalsButton.addEventListener("click", function() {update(equalsButton)});
decimalButton.addEventListener("click", function() {update(decimalButton)});
plusMinusButton.addEventListener("click", function() {update(plusMinusButton)});
deleteButton.addEventListener("click", function() {update(deleteButton)});
clearCurrentNumberButton.addEventListener("click", function() {update(clearCurrentNumberButton)});
clearEntryButton.addEventListener("click", function() {update(clearEntryButton)});

//Keypress
document.onkeypress = function(e) {
    let key = e.key;
    if (key === "0") {
        e.value = key;
        update(e);
    } else if (key === "1") {
        e.value = key;
        update(e);
    } else if (key === "2") {
        e.value = key;
        update(e);
    } else if (key === "3") {
        e.value = key;
        update(e);
    } else if (key === "4") {
        e.value = key;
        update(e);
    } else if (key === "5") {
        e.value = key;
        update(e);
    } else if (key === "6") {
        e.value = key;
        update(e);
    } else if (key === "7") {
        e.value = key;
        update(e);
    } else if (key === "8") {
        e.value = key;
        update(e);
    } else if (key === "9") {
        e.value = key;
        update(e);
    } else if (key === "+") {
        e.value = key;
        update(e);
    } else if (key === "-") {
        e.value = key;
        update(e);
    } else if (key === "*") {
        e.value = key;
        update(e);
    } else if (key === "/") {
        e.value = key;
        update(e);
    } else if (key === "Enter") {
        e.value = "=";
        update(e);
    } else if (key === ".") {
        e.value = key;
        update(e);
    } else if (key === "Delete") {
        e.value = "delete";
        update(e);
    }

}

// Main Function---------------------------------------------------------

const update = function(button) {
    if (numberArray.includes(button.value)) {
        updateNumbers(button.value);
    }
    if (operatorArray.includes(button.value) && currentOperator === "" && firstNumber !== "") {
        currentOperator = button.value;
    } else if (operatorArray.includes(button.value) && firstNumber !== "") {
        firstNumber = operate(currentOperator, firstNumber, secondNumber);
        if (firstNumber !== "DIVby0ERROR") {
            currentOperator = button.value;
            secondNumber = "";
        }
    }
    if (button.value === ".") {
        addDecimal();
    }
    if (button.value === "+/-") {
        applyPlusMinus();
    }
    if (button.value === "delete") {
        deleteLastInput();
    }
    if (button.value === "C") {
        clearLastNumber();
    }
    if (button.value === "CE") {
        clearExpression();
    }

    updateExpression();
    updateDisplay();

    if (button.value === "=" && (currentExpression !== "" && currentExpression !== "0")) {
        equalSign = "=";
        output = operate(currentOperator, firstNumber, secondNumber);
        lastOutput = output;

        updateExpression();
        updateDisplay();
        clearExpression(); 
    } else if (button.value === "=") {
        display.textContent = "0";
    } 
};

//Helper Functions---------------------------------------

const updateNumbers = function(number) {
    if (firstNumber === "") {
        firstNumber = number;
    } else if (currentOperator === "") {
    } else if (currentOperator === "" && firstNumber.length < 9) {
        firstNumber += number;
    } else {
    } else if (currentOperator !== "" && secondNumber.length < 9) {
        secondNumber += number;
    }
};
const updateDisplay = function() {
    if (output !== "DIVby0ERROR" && firstNumber!== "DIVby0ERROR") {
        if (output !== "") {
            display.textContent = output;
        } else if (secondNumber !== "") {
            display.textContent = secondNumber;
        } else if (firstNumber !== "") {
            display.textContent = firstNumber;
        } else {
            display.textContent = "0";
        }
    } else {
        display.textContent = "DIVby0ERROR";
    }
};
const updateExpression = function() {
    if (output !== "DIVby0ERROR" && firstNumber!== "DIVby0ERROR") {
        currentExpression = firstNumber + currentOperator + secondNumber + equalSign;
        if (currentExpression === "") {
            currentExpression = "0";
        }
        memDisplay.textContent = currentExpression;
    } else {
        memDisplay.textContent = "DIVby0ERROR";
    }
};
const clearExpression = function() {
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    equalSign = "";
    output = "";
}
const addDecimal = function() {
    if (firstNumber === "") {
        firstNumber = "0.";
    } else if (currentOperator === "" && firstNumber.indexOf(".") === -1) {
        firstNumber += ".";
    } else if (currentOperator !== "" && secondNumber === "") {
        secondNumber = "0.";
    } else if (currentOperator !== "" && secondNumber.indexOf(".") === -1) {
        secondNumber += ".";
    }
}
const applyPlusMinus = function() {
    if (secondNumber !== "") {
        secondNumber *= -1;
    } else {
        firstNumber *= -1;
    }
}
const deleteLastInput = function() {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
    } else if (currentOperator !== "") {
        currentOperator = "";
    } else {
        firstNumber = firstNumber.slice(0, -1);
    }
}
const clearLastNumber = function() {
    if (secondNumber !== "") {
        secondNumber = "";
    } else if (currentOperator !== "") {
        currentOperator = "";
    } else {
        firstNumber = "";
    }
}

const update = function(button) {
    if (numberArray.includes(button.value)) {
        updateNumbers(button.value);
    }
    if (operatorArray.includes(button.value) && currentOperator === "" && firstNumber !== "") {
        currentOperator = button.value;
    } else if (operatorArray.includes(button.value) && firstNumber !== "") {
        firstNumber = operate(currentOperator, firstNumber, secondNumber);
        if (firstNumber !== "DIVby0ERROR") {
            currentOperator = button.value;
            secondNumber = "";
        }
    }
    if (button.value === ".") {
        addDecimal();
    }
    if (button.value === "+/-") {
        applyPlusMinus();
    }
    if (button.value === "delete") {
        deleteLastInput();
    }
    if (button.value === "C") {
        clearLastNumber();
    }
    if (button.value === "CE") {
        clearExpression();
    }

    updateExpression();
    updateDisplay();

    if (button.value === "=" && (currentExpression !== "" && currentExpression !== "0")) {
        equalSign = "=";
        output = operate(currentOperator, firstNumber, secondNumber);
        lastOutput = output;

        updateExpression();
        updateDisplay();
        clearExpression(); 
    } else if (button.value === "=") {
        display.textContent = "0";
    } 
};

numberButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)})
});

operatorButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)});
});

equalsButton.addEventListener("click", function() {update(equalsButton)});

decimalButton.addEventListener("click", function() {update(decimalButton)});

plusMinusButton.addEventListener("click", function() {update(plusMinusButton)});

deleteButton.addEventListener("click", function() {update(deleteButton)});

clearCurrentNumberButton.addEventListener("click", function() {update(clearCurrentNumberButton)});

clearEntryButton.addEventListener("click", function() {update(clearEntryButton)});