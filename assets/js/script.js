var CURRENT_NUMBER = document.getElementById('currentNumber')
var currentNumber = 0

function add() {
	currentNumber = currentNumber + 1;
	CURRENT_NUMBER.innerHTML = currentNumber;
}

function subtract() {
	currentNumber = currentNumber - 1;
	CURRENT_NUMBER.innerHTML = currentNumber;
}

function multiply() {
    currentNumber = currentNumber * currentNumber;
    CURRENT_NUMBER.innerHTML = currentNumber;
}

function divide() {
    currentNumber = currentNumber / currentNumber;
    CURRENT_NUMBER.innerHTML = currentNumber;
}

if(currentNumber >= 1000000) {
    currentNumber.style.color = "red";
}