const container = document.getElementById("container");
const display = document.getElementById("display");
const buttonHolder = document.getElementById("button-holder");
const buttons = document.querySelectorAll(".calc-button");

init();

// Function to add event listeners on each button and send its inner text to the display 
function init(){
    buttons.forEach(currentBtn => {
        currentBtn.addEventListener("click", () => {
            processValue(currentBtn.value);
        });
    })
}

display.innerText = "012345";

// Function that stores and handles incoming numbers and operators (as characters)
function processValue(currentBtn){
    
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