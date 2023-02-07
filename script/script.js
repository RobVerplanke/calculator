const container = document.getElementById("container");
const display = document.getElementById("display");
const buttonHolder = document.getElementById("button-holder");
const buttons = document.querySelectorAll(".calc-button");
let displayValue, firstNumber, secondNumber, storedNumber, operator;

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
    
    }else if (currentBtn == '='){

        // Remove the first number, the operator symbol and the equal sign from the string,
        // so only the second number remains
        secondNumber = displayValue.replace(firstNumber, '').replace('=', '').slice(1);

        // Division by zero check
        if(operator == '÷' && secondNumber == '0'){
            secondNumber = NaN;
        }

        // Calculate the input.
        let tempValue = operate(operator, +firstNumber, +secondNumber); 

        // If users input is invalid: give error message, else display result
        if (isNaN(tempValue)){
            display.innerHTML = "Can't_compute";
            firstNumber = "";
            secondNumber = "";
            displayValue = "";
        } else{
            display.innerHTML = tempValue;
        }

        // If result is displayed, clear the values so user can't use backspace
        firstNumber = "";
        secondNumber = "";
        displayValue = "";

    }else if (currentBtn == 'C'){
        firstNumber = "";
        secondNumber = "";
        displayValue = "";
        clearDisplay();
    
    }else if (currentBtn == '←'){

        // Remove the backspace symbol and the last number 
        displayValue = displayValue.slice(0,-2);

        // Remove the first number and the operator symbol
        display.innerHTML = displayValue
            .replace(firstNumber, '')
            .replace('÷', '')
            .replace('×', '')
            .replace('−', '')
            .replace('+', '');   
    }

    // For testing
    console.log("current button: " + currentBtn + "\nDisplayValue: " + displayValue + "\nfirstNumber: "
        + firstNumber+ "\nsecondNumber: " + secondNumber + "\noperator: " + operator);
}

// Clear the display for new input
function clearDisplay(){
    display.innerHTML = "";
}

// Function operate, returns the right calculation
function operate(op, n1, n2){
    if       (op == "+") { return addNumbers(n1, n2);
    }else if (op == "−") { return substNumbers(n1, n2);
    }else if (op == "×") { return multiNumbers(n1, n2);
    }else if (op == "÷") { return divideNumbers(n1, n2);
    }else return "Invalid operator";
}

// Function add
function addNumbers(n1, n2) {return n1 + n2;}

// Function subtract
function substNumbers(n1, n2) {return n1 - n2;}

// Function multiply
function multiNumbers(n1, n2) {return n1 * n2;}

// Function divide
function divideNumbers(n1, n2) {return n1 / n2;}
