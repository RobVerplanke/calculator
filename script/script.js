const container = document.getElementById("container");
const display = document.getElementById("display");
const buttonHolder = document.getElementById("button-holder");
const buttons = document.querySelectorAll(".calc-button");
let displayValue, firstNumber, secondNumber, operator;

init();

// Function to add event listeners on each button and send its inner text to the display 
function init(){
    buttons.forEach(currentBtn => {
        currentBtn.addEventListener("click", () => {
            processValue(currentBtn.value);
        });
    })
}

// Function that stores and handles incoming numbers and operators (as characters)
function processValue(currentBtn){
    displayValue += currentBtn;
    display.innerHTML += currentBtn;

    // Remove the initial 'undefined' value
    displayValue = displayValue.replace('undefined', '');

    if (currentBtn == '÷') {
        clearDisplay();
        operator = currentBtn;

        // Remove the operator at the end of the string
        firstNumber = displayValue.slice(0,-1);   
   
    }else if (currentBtn == '×'){
        clearDisplay();
        operator = currentBtn;
        firstNumber = displayValue.slice(0,-1);
   
    }else if (currentBtn == '−'){
        clearDisplay();
        operator = currentBtn;
        firstNumber = displayValue.slice(0,-1);
   
    }else if (currentBtn == '+'){
        clearDisplay();
        operator = currentBtn;
        firstNumber = displayValue.slice(0,-1);
    
    }else if (currentBtn == 'C'){
        clearValues();
        clearDisplay();
    
    }else if (currentBtn == '←'){

        // Remove the backspace symbol and the last number 
        displayValue = displayValue.slice(0,-2);

        // In case when used in second number: remove the first number and the operator symbol at the beginning
        display.innerHTML = displayValue
            .replace(firstNumber, '')
            .replace('÷', '')
            .replace('×', '')
            .replace('−', '')
            .replace('+', ''); 

    }else if (currentBtn == '='){

        // Remove the first number, the operator symbol and the equal sign from the string,
        // so only the second number remains
        secondNumber = displayValue.replace(firstNumber, '').replace('=', '').slice(1);

        // Division by zero check and make sure a valid operator and a second number is given
        if((operator == '÷' && secondNumber == '0') || operator == '' || operator =='.' || secondNumber == ''){
            secondNumber = NaN; // Leads to error message
        }

        // Calculate the input
        const result = operate(operator, +firstNumber, +secondNumber); 

        // If users input is invalid: give error message, else display result
        if (isNaN(result)){
            //clearValues();
            display.innerHTML = "Can't_compute";
            setTimeout(clearDisplay, 1000);
        
            // Is result is not a float, show full result
        }else if (result % 1 === 0) {
            display.innerHTML = result;

            // Is result is a float, show 2 decimals
        }else{
            display.innerHTML = result.toFixed(2);
        }

        // If result is returned, clear the values so user can't use backspace in the result
        clearValues();

    }

    // For testing
    console.log("current button: " + currentBtn + "\nDisplayValue: " + displayValue + "\nfirstNumber: "
        + firstNumber+ "\nsecondNumber: " + secondNumber + "\noperator: " + operator);
}

// Function operate, returns the right calculation
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

// Clear the display for new input
function clearDisplay(){
    display.innerHTML = "";
}

// Clear all stored numbers
function clearValues(){
    firstNumber = "";
    secondNumber = "";
    displayValue = "";
}