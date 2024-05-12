document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('.display');
    let currentInput = '';
    let firstOperand = null;
    let operator = null;

    document.querySelectorAll('.number').forEach(item => {
        item.addEventListener('click', event => {
            currentInput += event.target.textContent;
            display.value = currentInput;
        });
    });

    document.querySelectorAll('.operator').forEach(item => {
        item.addEventListener('click', event => {
            if (currentInput !== '') {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                    operator = event.target.textContent;
                    currentInput = '';
                } else {
                    const result = calculate(firstOperand, parseFloat(currentInput), operator);
                    display.value = result;
                    firstOperand = result;
                    operator = event.target.textContent;
                    currentInput = '';
                }
            }
        });
    });

    document.getElementById('calculate').addEventListener('click', () => {
        if (currentInput !== '' && firstOperand !== null && operator !== null) {
            const result = calculate(firstOperand, parseFloat(currentInput), operator);
            display.value = result;
            currentInput = '';
            firstOperand = null;
            operator = null;
        }
    });

    document.getElementById('clear').addEventListener('click', () => {
        currentInput = '';
        firstOperand = null;
        operator = null;
        display.value = '';
    });

    function calculate(num1, num2, op) {
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) {
                    return 'Error';
                } else {
                    return num1 / num2;
                }
            default:
                return 'Error';
        }
    }
});
