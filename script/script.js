const container = document.getElementById("container");
const display = document.getElementById("display");
const buttonHolder = document.getElementById("button-holder");

// Function add
function addNumbers(n1, n2) {return n1 + n2;}
// Function subtract
function substNumbers(n1, n2) {return n1 - n2;}
// Function multiply
function multiNumbers(n1, n2) {return n1 * n2;}
// Function divide
function divideNumbers(n1, n2) {return n1 / n2;}

// Function operate
function operate(op, n1, n2){
          if (op == "+") { return addNumbers(n1, n2);
    }else if (op == "-") { return substNumbers(n1, n2);
    }else if (op == "*") { return multiNumbers(n1, n2);
    }else if (op == "/") { return divideNumbers(n1, n2);
    }else return "Invalid operator";
}