// let btn = document.querySelectorAll('.btn')
// let display = document.querySelector('#display');
// let displayPara = document.createElement('p');
let panel = document.querySelector('#container');
let screen = document.querySelector('#screen');
let screenContent = document.createElement('p');

let displayText = [""];
screenContent.textContent = displayText.toString();
screen.appendChild(screenContent);

let buttons = 10;

for(let i = 0; i < buttons; i++){
    if(i === 9){
        let buttonTen = document.createElement('div');
        let buttonTenLabel = document.createElement('p');
        buttonTen.setAttribute('class', 'btn-ten');
        buttonTen.addEventListener('click', (e) => alert('My value is ' + 0));
        buttonTenLabel.textContent = '0';
        buttonTen.appendChild(buttonTenLabel);
        panel.appendChild(buttonTen);

    } else if (i === 0) {
        let button = document.createElement('div');
        let buttonLabel = document.createElement('p');
        button.setAttribute('class', 'btn');
        button.addEventListener('click', (e) => alert('My value is ' + 1));
        buttonLabel.textContent = "1";
        button.appendChild(buttonLabel);
        panel.appendChild(button);
    } else {
        let button = document.createElement('div');
        let buttonLabel = document.createElement('p');
        button.setAttribute('class', 'btn');
        button.addEventListener('click', (e) => alert('My value is ' + (i + 1)));
        buttonLabel.textContent = (i+1).toString();
        button.appendChild(buttonLabel);
        panel.appendChild(button);
    }

}
