var firstNum = 0;
var secondNum = 0;

var currentOperation = '';
var powerNumber = 0;

function addNum(newNum)
{
	document.getElementById('outputLine').value += newNum;
	if (currentOperation == '')
	{
		if (powerNumber == 0)
			firstNum *= 10;
		else
		{
			newNum *= Math.pow(10, powerNumber);
			powerNumber--;
		}
		firstNum += newNum;
		console.log(firstNum);
	}
	else
	{
		if (powerNumber == 0)
			secondNum *= 10;
		else
		{
			newNum *= Math.pow(10, powerNumber);
			powerNumber--;
		}
		secondNum += newNum;
		console.log(secondNum);
	}
}

function addOperation(newOperation)
{
	document.getElementById('outputLine').value += ' ' + newOperation + ' ';
	currentOperation = newOperation;
	
	powerNumber = 0;
}

function backspace()
{
	document.getElementById('outputLine').value = document.getElementById('outputLine').value.slice(0, -1);
	//firstNum = Math.floor(firstNum/10);
	
	//console.log(firstNum);
}

function clearLine()
{
	document.getElementById('outputLine').value = '';
	
	firstNum = 0;
	secondNum = 0;
	powerNumber = 0;
	currentOperation = '';
}

function addPoint()
{
	document.getElementById('outputLine').value += '.';
	powerNumber = -1;
}

function calculate()
{
	var answerNum = 0;
	switch(currentOperation)
	{
		case '+':
		answerNum = firstNum + secondNum;
		break;
		case '-':
		answerNum = firstNum - secondNum;
		break;
		case '*':
		answerNum = firstNum * secondNum;
		break;
		case '/':
		answerNum = firstNum / secondNum;
		break;
	}
	
	clearLine();
	document.getElementById('outputLine').value = answerNum;
	firstNum = answerNum;
}