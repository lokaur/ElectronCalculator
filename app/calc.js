var keys = document.querySelectorAll('#calculator span');
var input = document.querySelector('.screen');
var operators = ['+', '-', '*', '/'];
var decimalAdded = false;

function clear() {
	input.innerHTML = '';
	decimalAdded = false;
}

function calculate() {
	var equation = input.innerHTML;
	var lastChar = equation[equation.length - 1];

	equation = equation.replace(/x/g, '*').replace(/รท/g, '/');

	if(operators.indexOf(lastChar) > -1 || lastChar == '.')
		equation = equation.replace(/.$/, '');

	if(equation)
		input.innerHTML = eval(equation);
		
	decimalAdded = false;
}

for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if (btnVal == 'C') {
			clear();
		} else if (btnVal == '=') {
			calculate();
		} else if (operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
			if (inputVal != '' && operators.indexOf(lastChar) == -1) {
				input.innerHTML += btnVal;
			} else if(inputVal == '' && btnVal == '-') {
				input.innerHTML += btnVal;
			}

			if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded = false;
		} else if (btnVal == '.') {
			if (!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		} else {
			input.innerHTML += btnVal;
		}
		
		e.preventDefault();
	} 
}