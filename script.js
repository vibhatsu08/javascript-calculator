const numbers_display = document.querySelector('numbers_display');
const button = document.querySelectorAll('button');

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (operator) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
    
        case '-':
            subtract(num1, num2);
            break;

        case '*':
            multiply(num1, num2);
            break;

        case '/':
            divide(num1, num2);
            break;
    }
}

function buttonClicked () {
    
}

function main () {
    button.addEventListener (
        'click', function () {

        }
    ) 
}
