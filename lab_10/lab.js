let frameTime = 20;

let objectMoving = false;
function changeBottom(heightForUp, allTime, idElem)
{
	if (objectMoving)
		return;
	objectMoving = true;
	
	let elem = document.getElementById(idElem);
	let start = Date.now();
	let heightVeilStr = elem.style.bottom;
	let heightVeilNum;
	console.log(heightVeilStr);
	if (heightVeilStr.length == 0)
		heightVeilNum = 0;
	else
	{
		heightVeilStr.replace('vh', '');
		heightVeilNum = parseInt(heightVeilStr);
	}
	let stepHeight = heightForUp / (allTime / frameTime);

	let timer = setInterval(function() 
	{
		heightVeilNum += stepHeight;
 		elem.style.bottom = heightVeilNum + 'vh';
		
		if (Date.now() - start > allTime) 
		{
			clearInterval(timer);
			objectMoving = false;
			return;
		}
	}, frameTime);
}
/*
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
*/
let statusLamp = false;
function switchLamp(time, ropeHeight, opacityLight)
{
	let lampElem = document.getElementById("lampRope");
	let lightElem = document.getElementById("light");
	
	let start = Date.now();
	
	let countFrame = time / frameTime;
	let stepHeight = ropeHeight / countFrame;	
	let stepLight = opacityLight / countFrame;
	if (statusLamp)
		stepLight *= -1;
	
	let counterFrame = 0;
	let timer = setInterval(function() 
	{
 		addTop(lampElem, stepHeight);	
		addOpacity(lightElem, stepLight);
		counterFrame++;
		
		if (counterFrame >= countFrame) 
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

let isRabbit = false;
let trickGoingOn = false;
function trick()
{
	if (trickGoingOn)
		return;
		
	trickGoingOn = true;
	changeBottom(-12, 200, 'thing');
	
	setTimeout(function()
	{
		if (isRabbit)
			document.getElementById('thing').src = "dove.png";
		else
			document.getElementById('thing').src = "rabbit.png";	
			
		isRabbit = !isRabbit;
		changeBottom(12, 200, 'thing');	
		
		trickGoingOn = false;
	}, 300);
}