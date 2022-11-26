let frameTime = 20;

function changeBottom(heightForUp, allTime, idElem)
{
	let elem = document.getElementById(idElem);
	let start = Date.now();
	let heightVeilStr = elem.style.bottom;
	if (heightVeilStr.length == 0)
		heightVeilNum = 0;
	else
	{
		heightVeilStr.replace('vh', '');
		let heightVeilNum = parseInt(heightVeilStr);
	}
	let stepHeight = heightForUp / (allTime / frameTime);

	let timer = setInterval(function() 
	{
		heightVeilNum += stepHeight;
 		elem.style.bottom = heightVeilNum + 'vh';
		
		if (Date.now() - start > allTime) 
		{
			clearInterval(timer);
			return;
		}
	}, frameTime);
}

function changeTop(heightForUp, allTime, idElem)
{
	let elem = document.getElementById(idElem);
	let start = Date.now();
	
	let heightElemNum;
	let heightElemStr = elem.style.top;
	if (heightElemStr.length == 0)
		heightElemNum = 0;
	else
	{
		heightElemStr.replace('vh', '');
		heightElemNum = parseInt(heightElemStr);
	}
	let stepHeight = heightForUp / (allTime / frameTime);

	let timer = setInterval(function() 
	{
		heightElemNum += stepHeight;
 		elem.style.top = heightElemNum + 'vh';
		
		if (Date.now() - start > allTime) 
		{
			clearInterval(timer);
			return;
		}
	}, frameTime);
}

let statusLamp = false;
function switchLamp(time, ropeHeight, opacityLight)
{
	let lampElem = document.getElementById("lampRope");
	let lightElem = document.getElementById("light");
	
	let start = Date.now();
	
	let stepHeight = ropeHeight / (time / frameTime);	
	let stepLight = opacityLight / (time / frameTime);
	if (statusLamp)
		stepLight *= -1;
	
	let timer = setInterval(function() 
	{
 		addTop(lampElem, stepHeight);	
		addOpacity(lightElem, stepLight);
		
		if (Date.now() - start > 200) 
		{
			clearInterval(timer);
			return;
		}
	}, frameTime);
	
	if (opacityLight != 0)
		statusLamp = !statusLamp;
}

function addOpacity(elem, num)
{
	let opacityStr = elem.style.opacity;
	let opacityNum = 0;
	if (opacityStr.length != 0)
	{
		opacityNum = parseFloat(opacityStr);
	}	
	opacityNum += num;
	elem.style.opacity = opacityNum;
}

function addTop(elem, num)
{
	let topStr = elem.style.top;
	let topNum = 0;
	if (topStr.length != 0)
	{
		topStr.replace('vh', '');
		topNum = parseFloat(topStr);
	}
	topNum += num;
 	elem.style.top = topNum + 'vh';
}

/*
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

*/