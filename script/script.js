const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

displayValue = ''; 
firstNumber = '';
secondNumber = '';
firstOperator = '';
secondOperator = '';
result = null;

// Add event listeners on each button and call the matching function
function init(){
    buttons.forEach(currentBtn => {
        currentBtn.addEventListener("click", () => {
            if (currentBtn.classList.contains("number")){
                inputNumber(currentBtn.value);
                updateDisplay();
            } else if (currentBtn.classList.contains("operator")){
                inputOperator(currentBtn.value);
                updateDisplay();
            } else if (currentBtn.classList.contains("clear")){
                inputClear();
                updateDisplay();
            } else if (currentBtn.classList.contains("backspace")){
                displayValue = displayValue.slice(0,-1);
                updateDisplay();
            } else if (currentBtn.classList.contains("decimal")){
                inputDecimal(currentBtn.value);
                updateDisplay();
            } else if (currentBtn.classList.contains("equals")){
                inputEquals();
                updateDisplay();
            }
        });
    });
}

init();

// Make sure the value fits on the display, if so update the display value
function updateDisplay(){
    if (displayValue.length >= 12){
        displayValue = displayValue.substring(0, 11);
    }
    display.innerText = displayValue;
}

function inputNumber(number){
    
    displayValue += number;

    // Store input numbers
    if (firstOperator === ''){
        firstNumber += number;
    }else {
        secondNumber += number;
        displayValue = secondNumber;
    }
}

// Store operator
function inputOperator(operator){
    firstOperator = operator;
}

function inputDecimal(decimal){
    if (displayValue === ''){
        displayValue = '0.';
    } else{
        displayValue += decimal; 
    }
}

// Calculate input
function inputEquals(){
    result = operate(firstOperator, +firstNumber, +secondNumber);
    displayValue = operate(firstOperator, +firstNumber, +secondNumber).toString();
}

function inputClear(){
    displayValue = ''; 
    firstNumber = '';
    secondNumber = '';
    firstOperator = '';
    secondOperator = '';
    result = '';
}

// Returns result of the calculation
function operate(op, n1, n2){
    if       (op == "+") { return addNumbers(n1, n2);
    }else if (op == "−") { return substNumbers(n1, n2);
    }else if (op == "×") { return multiNumbers(n1, n2);
    }else if (op == "÷") { return divideNumbers(n1, n2);
    }else return "Invalid operator";
}

// Calculation functions
function addNumbers(n1, n2) {return n1 + n2;}
function substNumbers(n1, n2) {return n1 - n2;}
function multiNumbers(n1, n2) {return n1 * n2;}
function divideNumbers(n1, n2) {return n1 / n2;}