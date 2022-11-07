var defaultTableElem = document.body.getElementsByClassName('tableBlock')[0].getElementsByClassName('tableElem')[0].cloneNode(true);
var counterIdTableElem = 1;

function delElem(id)
{
	let deletedElem = document.getElementById(id);
	document.getElementsByClassName('tableBlock')[0].removeChild(deletedElem);
}

function upElem(id)
{
	let currentElem = document.getElementById(id);
	let upElem = currentElem.previousElementSibling;
	if (upElem != null)
	{
		for (i = 0; i < 2; i++)
		{
			let buffer = currentElem.getElementsByTagName('input')[i].value;
			currentElem.getElementsByTagName('input')[i].value = upElem.getElementsByTagName('input')[i].value;
			upElem.getElementsByTagName('input')[i].value = buffer;
		}
	}
	else
		alert("This highest element!");
}

function downElem(id)
{
	let currentElem = document.getElementById(id);
	let downElem = currentElem.nextElementSibling;
	if (downElem != null)
	{
		for (i = 0; i < 2; i++)
		{
			let buffer = currentElem.getElementsByTagName('input')[i].value;
			currentElem.getElementsByTagName('input')[i].value = downElem.getElementsByTagName('input')[i].value;
			downElem.getElementsByTagName('input')[i].value = buffer;
		}
	}
	else
		alert("This lowest element!");
}

function createNew()
{
	let newElem = defaultTableElem.cloneNode(true);
	newElem.id = counterIdTableElem;

	newElem.getElementsByTagName('button')[0].value = newElem.id + ' up';
	newElem.getElementsByTagName('button')[1].value = newElem.id + ' down';
	newElem.getElementsByTagName('button')[2].value = newElem.id + ' del';

	document.getElementsByClassName('tableBlock')[0].appendChild(newElem);

	counterIdTableElem++;
}

function printRes()
{
	let data = new Object();
	let i = 0;
	for (elem of document.getElementsByClassName('tableBlock')[0].getElementsByClassName('tableElem'))
	{
		data[elem.getElementsByTagName('input')[0].value] = elem.getElementsByTagName('input')[1].value;
		i++;
	}

	document.getElementsByTagName('p')[0].innerHTML = JSON.stringify(data);
}