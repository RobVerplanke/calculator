const container = document.getElementById("container");
const display = document.getElementById("display");
const buttonHolder = document.getElementById("button-holder");

// Functions

    // add
function addNumbers(n1, n2) {
    return n1 + n2;
}

    // subtract
function substNumbers(n1, n2) {
    return n1 - n2;
}

    // multiply
function multiNumbers(n1, n2) {
    return n1 * n2;
}

    // divide
function divideNumbers(n1, n2) {
    return n1 / n2;
}

    // operate
function operate(op, n1, n2){
    if (op == "+") { return addNumbers(n1, n2);
    }else if (op == "-") { return substNumbers(n1, n2);
    }else if(op == "*") { return multiNumbers(n1, n2);
    }else if(op == "/") { return divideNumbers(n1, n2);
    }
}