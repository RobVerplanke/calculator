const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

displayValue = '0'; 
firstNumber = '';
secondNumber = '';
firstOperator = '';
secondOperator = '';
result = '';
equalBtnPressed = false;

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
                inputBackspace();
                updateDisplay();

            } else if (currentBtn.classList.contains("decimal")){
                inputDecimal(currentBtn.value);
                updateDisplay();

            } else if (currentBtn.classList.contains("equals")){ 
                if (equalBtnPressed === false){
                    // Support multiple operators in one calculation
                    if (secondOperator === ''){
                        inputEquals(firstOperator, firstNumber, secondNumber);
                    
                    } else{ 
                        inputEquals(secondOperator, firstNumber, secondNumber);
                    }
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
    equalBtnPressed = false;
}


// Evaluate input operators
function inputOperator(operator){
   
    // Checks if input is first operator
    if (firstOperator === ''){
        firstOperator = operator;
    
    // If input is second operator, show result of the first calculation as the first number
    } else if (secondOperator === ''){ 
        secondOperator = operator;
        inputEquals(firstOperator, firstNumber, secondNumber);
        firstNumber = result;
        secondNumber = '';
    
    // If input is third (or higher) operator, show result of the previous calculation as the first number
    } else{ 
        inputEquals(secondOperator, firstNumber, secondNumber);
        secondOperator = operator;
        firstNumber = result;
        secondNumber = '';
    }
    equalBtnPressed = false;
}


function inputDecimal(decimal){
     
    // Checks if decimal belongs in first or second number
     if (firstOperator === ''){

        if (displayValue === '0'){            
            firstNumber = '0.';

        } else{ // Allow only 1 decimal in the first number
            if (!(firstNumber.includes('.'))){
                firstNumber += decimal;
            }
        }
        displayValue = firstNumber;

    } else{ // Allow only 1 decimal in the second number
        if (!(secondNumber.includes('.'))){
            secondNumber += decimal;
        }
        displayValue = secondNumber;
    }
    equalBtnPressed = false;
}


// Remove last number
function inputBackspace(){
    if (secondNumber === ''){
        firstNumber = firstNumber.slice(0,-1);
        displayValue = firstNumber;

    } else if(!(displayValue === result)){
        secondNumber = secondNumber.slice(0,-1);
        displayValue = secondNumber;
    } 
    equalBtnPressed = false;
}


// Make sure the value fits on the display
function updateDisplay(){
    if (displayValue.length >= 12){
        displayValue = displayValue.substring(0, 11);
    }
    display.innerText = displayValue;
}


// Reset the calculator
function inputClear(){
    displayValue = '0'; 
    firstNumber = '';
    secondNumber = '';
    firstOperator = '';
    secondOperator = '';
    result = '';
}


// Calculate input
function inputEquals(op, n1, n2){
    result = operate(op, +n1, +n2);
    displayValue = operate(op, +n1, +n2).toString();
    firstNumber = result;
    equalBtnPressed = true;
}


// Returns result of the calculation
function operate(op, n1, n2){
    if        (op == "+") { return addNumbers(n1, n2);
    } else if (op == "−") { return substNumbers(n1, n2);
    } else if (op == "×") { return multiNumbers(n1, n2);
    } else if (op == "÷") { return divideNumbers(n1, n2);
    } else return "Invalid op.";
}


// Calculations
function addNumbers(n1, n2) {return n1 + n2;}
function substNumbers(n1, n2) {return n1 - n2;}
function multiNumbers(n1, n2) {return n1 * n2;}
function divideNumbers(n1, n2) {return n1 / n2;}