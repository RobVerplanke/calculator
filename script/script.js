const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

displayValue = '0'; 
firstNumber = '';
secondNumber = '';
firstOperator = '';
secondOperator = '';
result = '';

// Add event listeners on each button and refer to the matching function
function init(){
    updateDisplay();
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

                // Support multiple operators in one calculation
                if (secondOperator === ''){
                    inputEquals(firstOperator, firstNumber, secondNumber);
                } else{ 
                    inputEquals(secondOperator, firstNumber, secondNumber);
                }
                updateDisplay();
            }
        });
    });
}

// Start the calculator
init();


// Evaluate input numbers
function inputNumber(number){
    
    // Checks if input belongs in first number
    if (firstOperator === ''){
        firstNumber += number;
        displayValue = firstNumber;

    } else{
        secondNumber += number;
        displayValue = secondNumber;
    }
}


// Evaluate input operators
function inputOperator(operator){
   
    // Checks if input is first operator
    if (firstOperator === ''){
        firstOperator = operator;
    
    // If input is second operator, show result of the first calculation 
    } else if (secondOperator === ''){ 
        secondOperator = operator;
        inputEquals(firstOperator, firstNumber, secondNumber);
        firstNumber = result;
        secondNumber = '';
    
    // If input is third (or higher) operator, show result of the previous calculation
    } else{ 
        inputEquals(secondOperator, firstNumber, secondNumber);
        secondOperator = operator;
        firstNumber = result;
        secondNumber = '';
    }
}


function inputDecimal(decimal){
     
    // Checks if decimal belongs in first or second number
     if (firstOperator === ''){

        if (displayValue === '0'){            
            firstNumber = '0.';
        } else{
            firstNumber += decimal;
        }
        displayValue = firstNumber;

    } else{
        secondNumber += decimal;
        displayValue = secondNumber;
    }
}


// Calculate input
function inputEquals(op, n1, n2){
    result = operate(op, +n1, +n2);
    displayValue = operate(op, +n1, +n2).toString();
}


// Make sure value fits the display
function updateDisplay(){
    if (displayValue.length >= 12){
        displayValue = displayValue.substring(0, 11);
    }
    display.innerText = displayValue;
}


function inputClear(){
    displayValue = '0'; 
    firstNumber = '';
    secondNumber = '';
    firstOperator = '';
    secondOperator = '';
    result = '';
}


// Returns result of the calculation
function operate(op, n1, n2){
    if        (op == "+") { return addNumbers(n1, n2);
    } else if (op == "−") { return substNumbers(n1, n2);
    } else if (op == "×") { return multiNumbers(n1, n2);
    } else if (op == "÷") { return divideNumbers(n1, n2);
    } else return "Invalid operator";
}


// Calculations
function addNumbers(n1, n2) {return n1 + n2;}
function substNumbers(n1, n2) {return n1 - n2;}
function multiNumbers(n1, n2) {return n1 * n2;}
function divideNumbers(n1, n2) {return n1 / n2;}