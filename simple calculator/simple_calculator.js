function add() {
    const num1 = parseFloat(document.getElementById('value-1').value);
    const num2 = parseFloat(document.getElementById('value-2').value);
    const result = num1 + num2;
    displayResult(result);
}

function subtract() {
    const num1 = parseFloat(document.getElementById('value-1').value);
    const num2 = parseFloat(document.getElementById('value-2').value);
    const result = num1 - num2;
    displayResult(result);
}

function multiply() {
    const num1 = parseFloat(document.getElementById('value-1').value);
    const num2 = parseFloat(document.getElementById('value-2').value);
    const result = num1 * num2;
    displayResult(result);
}

function divide() {
    const num1 = parseFloat(document.getElementById('value-1').value);
    const num2 = parseFloat(document.getElementById('value-2').value);
    
    if (num2 !== 0) {
        const result = num1 / num2;
        displayResult(result);
    } else {
        displayResult('Error: Division by zero');
    }
}

function displayResult(result) {
    document.getElementById('result').textContent = 'The Final Answer is: ' + result;
}

document.getElementById('add').onclick = add;
document.getElementById('sub').onclick = subtract;
document.getElementById('mul').onclick = multiply;
document.getElementById('div').onclick = divide;
