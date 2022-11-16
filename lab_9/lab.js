const accuracy = 14;
const maxLengthNum = 18;

var firstNum = 0;
var secondNum = 0;

var currentOperation = '';
var powerNumber = 0;

function addNum(newNum)
{
	if (currentOperation == '')
	{
		if (document.getElementById('firstNum').innerHTML.length < maxLengthNum)
		{
			if (powerNumber == 0)
			{
				firstNum *= 10;
				firstNum += newNum;
			}
			else
			{
				firstNum += newNum * Math.pow(10, powerNumber);
				powerNumber--;
			}
			document.getElementById('firstNum').innerHTML += newNum;
			console.log(firstNum);
		}
		else
			alert("Error! Number very width")
	}
	else
	{
		if (document.getElementById('secondNum').innerHTML.length < maxLengthNum)
		{
			if (document.getElementById('secondNum').innerHTML.length == 0)
			{
				document.getElementById('operation').style.color = 'silver';
				document.getElementById('secondNum').style.display = 'inline-block';
			}

			if (powerNumber == 0)
			{
				secondNum *= 10;
				secondNum += newNum;
			}
			else
			{
				secondNum += newNum * Math.pow(10, powerNumber);
				powerNumber--;
			}
			document.getElementById('secondNum').innerHTML += newNum;
			console.log(secondNum);
		}
		else
			alert("Error! Number very width")
	}
}

function addOperation(newOperation)
{
	if (document.getElementById('firstNum').innerHTML.length == 0 || document.getElementById('firstNum').innerHTML.substr(document.getElementById('firstNum').innerHTML.length - 1))
		document.getElementById('firstNum').innerHTML += 0;

	if (currentOperation == '')
	{
		document.getElementById('operation').innerHTML += newOperation;
		currentOperation = newOperation;
	
		powerNumber = 0;

		document.getElementById('firstNum').style.color = 'silver';
		document.getElementById('operation').style.display = 'inline-block';
	}
	else
		alert("Error! Operation was added")
}

function backspace()
{
	if (document.getElementById('secondNum').innerHTML.length != 0)
	{
		if (powerNumber == 0)
			secondNum = Math.floor(secondNum / 10);
		else
		{
			powerNumber++;
			if (powerNumber != 0)
			{
				
				let multiplier = Math.pow(10, -powerNumber - 1)
				secondNum = Math.floor(secondNum * multiplier) / multiplier;
			}
			
		}
		document.getElementById('secondNum').innerHTML = document.getElementById('secondNum').innerHTML.slice(0, -1);

		if (document.getElementById('secondNum').innerHTML.length == 0)
		{
			document.getElementById('operation').style.color = 'black';

			document.getElementById('secondNum').style.display = 'none';
		}

		console.log(secondNum);
	}
	else
		if (document.getElementById('operation').innerHTML.length != 0)
		{
			currentOperation = '';
			document.getElementById('operation').innerHTML = document.getElementById('operation').innerHTML.slice(0, -1);

			document.getElementById('firstNum').style.color = 'black';

			document.getElementById('operation').style.display = 'none';
		}
		else
			if (document.getElementById('firstNum').innerHTML.length != 0)
			{
				if (powerNumber == 0)
					firstNum = Math.floor(firstNum / 10);
				else
				{
					powerNumber++;
					if (powerNumber != 0)
					{
						let multiplier = Math.pow(10, -powerNumber - 1)
						firstNum = Math.floor(firstNum * multiplier) / multiplier;
					}
					
				}
				document.getElementById('firstNum').innerHTML = document.getElementById('firstNum').innerHTML.slice(0, -1);
				console.log(firstNum);
			}
}

function clearLine()
{
	document.getElementById('firstNum').innerHTML = "";
	document.getElementById('secondNum').innerHTML = "";
	document.getElementById('operation').innerHTML = "";
	
	firstNum = 0;
	secondNum = 0;
	powerNumber = 0;
	currentOperation = '';

	document.getElementById('firstNum').style.color = 'black';

	document.getElementById('operation').style.color = 'black';
	document.getElementById('operation').style.display = 'none';

	document.getElementById('secondNum').style.display = 'none';
}

function addPoint()
{
	let currentNum;
	if (currentOperation == '')
		currentNum = document.getElementById('firstNum');
	else
		currentNum = document.getElementById('secondNum');

	if ((currentNum.innerHTML.length == 0) || (currentNum.innerHTML.substr(currentNum.innerHTML.length - 1) == ' '))
		currentNum.innerHTML += 0;

	if (powerNumber == 0)
	{
		currentNum.innerHTML += '.';
		powerNumber = -1;
	}
	else
		alert("Error! Point was added for current number");
}

function calculate()
{
	firstNum = parseFloat(firstNum.toFixed(accuracy));
	secondNum = parseFloat(secondNum.toFixed(accuracy));

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
	answerNum = parseFloat(answerNum.toFixed(accuracy));
	clearLine();
	document.getElementById('firstNum').innerHTML = answerNum;
	firstNum = answerNum;

	if (document.getElementById('firstNum').innerHTML.length >= maxLengthNum)
		document.getElementById('firstNum').innerHTML = answerNum.toExponential(5);
}