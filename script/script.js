const container = document.getElementById("container");
const display = document.getElementById("display");
const buttonHolder = document.getElementById("button-holder");

    
    // Create 16 buttons
    for (a = 0; a < 16; a++){
        let square = document.createElement('button');
        square.innerText = a;
        buttonHolder.appendChild(square).className = "button";
    }

    