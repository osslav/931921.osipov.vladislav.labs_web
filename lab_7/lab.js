var heightCtrlBlock = document.getElementsByClassName('controlBlock')[0].offsetHeight + document.getElementsByClassName('controlBlock')[0].offsetTop;
var widthCtrlBlock = document.getElementsByClassName('controlBlock')[0].offsetWidth + document.getElementsByClassName('controlBlock')[0].offsetLeft;

var heightWindow = window.innerHeight - 2 * document.getElementsByClassName('controlBlock')[0].offsetTop;
var widthWindow = window.innerWidth - 2 * document.getElementsByClassName('controlBlock')[0].offsetLeft;

var minSize = Math.min(widthWindow, heightWindow) / 50;
var maxSize = Math.min(widthWindow, heightWindow) / 4;

function randByInterInPx(min, max)
{
	return String(Math.floor(Math.random() * (max - min + 1) + min)) + 'px';
}

var selectedElem = document.body;
function clickEvent()
{
	if (selectedElem == this)
		document.body.removeChild(this);
	else
	{
		if (selectedElem.id == 'defaultTriangle')
			selectedElem.style.borderBottomColor = '';
		else
			selectedElem.style.background = '';

		selectedElem = this;

		if (selectedElem.id == 'defaultTriangle')
			selectedElem.style.borderBottomColor = 'yellow';
		else
			selectedElem.style.background = 'yellow';
    }
}

function createSquare()
{
	let inputBlock = document.getElementsByTagName('input')[0];
	for (let i = 0; i < inputBlock.value; i++)
	{
		let newElem = document.createElement('div');
		newElem.id = 'defaultSquare';

		newElem.style.width = newElem.style.height = randByInterInPx(minSize, maxSize);

		newElem.style.left = randByInterInPx(0, widthWindow - parseInt(newElem.style.width));

		if (parseInt(newElem.style.left) <= widthCtrlBlock)
			newElem.style.top = randByInterInPx(heightCtrlBlock, heightWindow - parseInt(newElem.style.height));
		else
			newElem.style.top = randByInterInPx(0, heightWindow - parseInt(newElem.style.height));

		newElem.onclick = clickEvent;

		document.body.appendChild(newElem);
	}

	inputBlock.value = 0;
}

function createTriangle()
{
	let inputBlock = document.getElementsByTagName('input')[0];
	for (let i = 0; i < inputBlock.value; i++)
	{
		let newElem = document.createElement('div');
		newElem.id = 'defaultTriangle';

		let size = randByInterInPx(minSize, maxSize);
		newElem.style.border = size + ' solid transparent';
		newElem.style.borderBottom = size + ' solid blue';

		let sizeNum = parseInt(size.replace('px', ''))
		newElem.style.left = randByInterInPx(0, widthWindow - 2*sizeNum);

		if (parseInt(newElem.style.left) <= widthCtrlBlock)
			newElem.style.top = randByInterInPx(heightCtrlBlock - sizeNum, heightWindow - 2*sizeNum);
		else
			newElem.style.top = randByInterInPx(-sizeNum, heightWindow - 2*sizeNum);

		newElem.onclick = clickEvent;

		document.body.appendChild(newElem);
	}

	inputBlock.value = 0;
}

function createCircle()
{
	let inputBlock = document.getElementsByTagName('input')[0];
	for (let i = 0; i < inputBlock.value; i++)
	{
		let newElem = document.createElement('div');
		newElem.id = 'defaultCircle';

		newElem.style.width = newElem.style.height = randByInterInPx(minSize, maxSize);

		newElem.style.left = randByInterInPx(0, widthWindow - parseInt(newElem.style.width));

		if (parseInt(newElem.style.left) <= widthCtrlBlock)
			newElem.style.top = randByInterInPx(heightCtrlBlock, heightWindow - parseInt(newElem.style.height));
		else
			newElem.style.top = randByInterInPx(0, heightWindow - parseInt(newElem.style.height));

		newElem.onclick = clickEvent;

		document.body.appendChild(newElem);
	}

	inputBlock.value = 0;
}