var leftColElem = document.getElementsByClassName('contentBlock').item(0).getElementsByClassName('columnLeft').item(0);
var rightColElem = document.getElementsByClassName('contentBlock').item(0).getElementsByClassName('columnRight').item(0);

function showLeft()
{
	leftColElem.firstElementChild.style.visibility = 'visible';
	leftColElem.firstElementChild.style.width = '600px';
	rightColElem.firstElementChild.style.visibility = 'hidden';

	rightColElem.style.width = '1%';
	leftColElem.style.width = '99%';
}

function showRight()
{
	rightColElem.firstElementChild.style.visibility = 'visible';
	rightColElem.firstElementChild.style.width = '600px';
	leftColElem.firstElementChild.style.visibility = 'hidden';

	leftColElem.style.width = '1%';
	rightColElem.style.width = '99%';
}

function showBoth()
{
	rightColElem.firstElementChild.style.visibility = 'visible';
	rightColElem.firstElementChild.style.width = '410px';
	leftColElem.firstElementChild.style.visibility = 'visible';
	leftColElem.firstElementChild.style.width = '410px';

	leftColElem.style.width = '50%';
	rightColElem.style.width = '50%';
}