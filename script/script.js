const container = document.getElementById("container");
const display = document.getElementById("display");
const buttonHolder = document.getElementById("button-holder");
const buttons = document.querySelectorAll(".calc-button");
let displayValue, firstNumber, secondNumber;

init();

// Function to add event listeners on each button and send its inner text to the display 
function init(){
    buttons.forEach(currentBtn => {
        currentBtn.addEventListener("click", () => {
            processValue(currentBtn.value);
        });
    })
}

// Clear the display for new input
function clearDisplay(){
    display.innerHTML = "";
}

// Function operate
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

// Function that stores and handle incoming numbers and operators
function processValue(currentBtn){
    let firstNumber, storedNumber;
    displayValue += currentBtn;
    display.innerHTML += currentBtn;

    // Remove the initial 'undefined' value
    displayValue = displayValue.replace('undefined', '');

    if (currentBtn == '÷') {
        clearDisplay();
        firstNumber = displayValue.slice(0,-1);
        
        
                    // In progress...
     // if (typeof firstNumber !== "undefined"){
     //     storedNumber = firstNumber;}
   
   
    }else if (currentBtn == '×'){
        clearDisplay();
        firstNumber = displayValue.slice(0,-1);
    }else if (currentBtn == '−'){
        clearDisplay();
        firstNumber = displayValue.slice(0,-1);
    }else if (currentBtn == '+'){
        clearDisplay();
        firstNumber = displayValue.slice(0,-1);
    }else if (currentBtn == '='){
        display.innerHTML = "result";
    }

    console.log("current button: " + currentBtn + "\nDisplayValue: " + displayValue + "\nfirstNumber: " + firstNumber+ "\nstoredNumber: " + storedNumber);
}