// let btn = document.querySelectorAll('.btn')
// let display = document.querySelector('#display');
// let displayPara = document.createElement('p');
let panel = document.querySelector('#container');
let screen = document.querySelector('#screen');
let screenContent = document.createElement('p');

//Im so confused bro

let displayText = [];
let round = false;
let operandOne = "!";
let operandTwo = "!";
let operator = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let result = 0;

      if(operator == 1){
        operandTwo = parseInt(displayText.join(''));
        displayText = [];
        round = false;
        result = (operandOne + operandTwo);
        screenContent.textContent = result.toString();
        screen.appendChild(screenContent);
        operator = 0;
        operandOne = "!";
        operandTwo = "!";
      } else if ( operator == 2){
        operandTwo = parseInt(displayText.join(''));
        displayText = [];
        round = false;
        result = (operandOne - operandTwo);
        screenContent.textContent = result.toString();
        screen.appendChild(screenContent);
        operator = 0;
        operandOne = "!";
        operandTwo = "!";
      } else if (operator == 3){
        operandTwo = parseInt(displayText.join(''));
        displayText = [];
        round = false;
        result = (operandOne * operandTwo);
        screenContent.textContent = result.toString();
        screen.appendChild(screenContent);
        operator = 0;
        operandOne = "!";
        operandTwo = "!";
      } else if ( operator == 4){
        operandTwo = parseInt(displayText.join(''));
        displayText = [];
        round = false;
        result = (operandOne / operandTwo);
        screenContent.textContent = result.toString();
        screen.appendChild(screenContent);
        operator = 0;
        operandOne = "!";
        operandTwo = "!";
      } 
    }
  });


screenContent.textContent = displayText.toString();
screen.appendChild(screenContent);

let buttons = 10;

let createOperators = function(e){
    let operatorButtons = 5;

    for(let i = 0; i <= 5; i++){
        if(i == 0){ //Clear
            let button = document.createElement('div');
            let buttonLabel = document.createElement('p');
            button.setAttribute('class', 'btn');
            button.addEventListener('click', function(e){
                screenContent.textContent = " ";
                displayText.toString();
                displayText = [""];
                screen.appendChild(screenContent);
                round = false;
                operandOne = "!";
                operandTwo = "!";
                operator = 0;
            });
            buttonLabel.textContent = "CE";
            button.appendChild(buttonLabel);
            panel.appendChild(button);
        } else if (i == 1){ //Addition
            let button = document.createElement('div');
            let buttonLabel = document.createElement('p');
            button.setAttribute('class', 'btn');  
            button.addEventListener('click', function(e){
                if(round == false && operandOne != 0){
                    screenContent.textContent = "+";
                    screen.appendChild(screenContent);
                    operandOne = parseInt(displayText.join(''));
                    console.log(operandOne);
                    displayText = [];
                    round = true;
                    operator = 1;
                } else {
                }
            });
            buttonLabel.textContent = "+";
            button.appendChild(buttonLabel);
            panel.appendChild(button);
        } else if (i == 2){ //Substraction
            let button = document.createElement('div');
            let buttonLabel = document.createElement('p');
            button.setAttribute('class', 'btn');
            button.addEventListener('click', function(e){
                if(round == false && operandOne != 0){
                    screenContent.textContent = "-";
                    screen.appendChild(screenContent);
                    operandOne = parseInt(displayText.join(''));
                    console.log(operandOne);
                    displayText = [];
                    round = true;
                    operator = 2;
                } else {
                }
            });
            buttonLabel.textContent = "-";
            button.appendChild(buttonLabel);
            panel.appendChild(button);
        } else if ( i == 3){ //Multiplication
            let button = document.createElement('div');
            let buttonLabel = document.createElement('p');
            button.setAttribute('class', 'btn');
            button.addEventListener('click', function(e){
                if(round == false && operandOne != 0){
                    screenContent.textContent = "*";
                    screen.appendChild(screenContent);
                    operandOne = parseInt(displayText.join(''));
                    console.log(operandOne);
                    displayText = [];
                    round = true;
                    operator = 3;
                } else {
                }
            });
            buttonLabel.textContent = "*";
            button.appendChild(buttonLabel);
            panel.appendChild(button);
        } else if (i == 4){ //Division
            let button = document.createElement('div');
            let buttonLabel = document.createElement('p');
            button.setAttribute('class', 'btn');
            button.addEventListener('click', function(e){
                if(round == false && operandOne != 0){
                    screenContent.textContent = "/";
                    screen.appendChild(screenContent);
                    operandOne = parseInt(displayText.join(''));
                    console.log(operandOne);
                    displayText = [];
                    round = true;
                    operator = 4;
                } else {
                }
            });
            buttonLabel.textContent = "/";
            button.appendChild(buttonLabel);
            panel.appendChild(button);

        } else { //Residual
            let button = document.createElement('div');
            let buttonLabel = document.createElement('p');
            button.setAttribute('class', 'btn');
            button.addEventListener('click', function(e){
                let result = 0;

                if(operator == 1){
                  operandTwo = parseInt(displayText.join(''));
                  displayText = [];
                  round = false;
                  result = (operandOne + operandTwo);
                  screenContent.textContent = result.toString();
                  screen.appendChild(screenContent);
                  operator = 0;
                  operandOne = "!";
                  operandTwo = "!";
                } else if ( operator == 2){
                  operandTwo = parseInt(displayText.join(''));
                  displayText = [];
                  round = false;
                  result = (operandOne - operandTwo);
                  screenContent.textContent = result.toString();
                  screen.appendChild(screenContent);
                  operator = 0;
                  operandOne = "!";
                  operandTwo = "!";
                } else if (operator == 3){
                  operandTwo = parseInt(displayText.join(''));
                  displayText = [];
                  round = false;
                  result = (operandOne * operandTwo);
                  screenContent.textContent = result.toString();
                  screen.appendChild(screenContent);
                  operator = 0;
                  operandOne = "!";
                  operandTwo = "!";
                } else if ( operator == 4){
                  operandTwo = parseInt(displayText.join(''));
                  displayText = [];
                  round = false;
                  result = (operandOne / operandTwo);
                  screenContent.textContent = result.toString();
                  screen.appendChild(screenContent);
                  operator = 0;
                  operandOne = "!";
                  operandTwo = "!";
                } else {
                }
            });
            buttonLabel.textContent = "Enter";
            button.appendChild(buttonLabel);
            panel.appendChild(button);
        }
        
    }
}

for(let i = 0; i < buttons; i++){
    if(i === 9){
        let buttonTen = document.createElement('div');
        let buttonTenLabel = document.createElement('p');
        buttonTen.setAttribute('class', 'btn-ten');
        buttonTen.addEventListener('click', function(e){
            displayText.push("0");
            screenContent.textContent = displayText.join("");
            displayText.toString();
            screen.appendChild(screenContent);
        });
        buttonTenLabel.textContent = '0';
        buttonTen.appendChild(buttonTenLabel);
        panel.appendChild(buttonTen);
        createOperators();

    } else if (i === 0) {
        let button = document.createElement('div');
        let buttonLabel = document.createElement('p');
        button.setAttribute('class', 'btn');
        button.addEventListener('click', function(e){
            displayText.push("1");
            screenContent.textContent = displayText.join("");
            displayText.toString();
            screen.appendChild(screenContent);
        });
        buttonLabel.textContent = "1";
        button.appendChild(buttonLabel);
        panel.appendChild(button);
    } else {
        let button = document.createElement('div');
        let buttonLabel = document.createElement('p');
        button.setAttribute('class', 'btn');
        button.addEventListener('click', function(e){
            let operand = (i + 1).toString();
            displayText.push(operand);
            screenContent.textContent = displayText.join("");
            displayText.toString();
            screen.appendChild(screenContent);
            console.log(displayText);
        });
        buttonLabel.textContent = (i+1).toString();
        button.appendChild(buttonLabel);
        panel.appendChild(button);
    }

}
