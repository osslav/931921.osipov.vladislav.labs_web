var mainString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias';
var dopString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.';

function showNewsWindow()
{
	let newElem = document.createElement('div');
	
	for (elem of document.getElementsByClassName('newsBlock'))
		elem.style.opacity = 0.5;

	newElem.id ='popupNews';
	
	let headerOfNewElem = document.createElement('h1');
	let textOfNewElem = document.createElement('p');
	let dopTextOfNewElem = document.createElement('p');
	
	newElem.appendChild(headerOfNewElem);
	newElem.appendChild(textOfNewElem);
	newElem.appendChild(dopTextOfNewElem);
	
	let activeNewsHeaderText = document.activeElement.parentElement.getElementsByTagName('h2').item(0).textContent;
	
	headerOfNewElem.textContent = activeNewsHeaderText;
	textOfNewElem.textContent = activeNewsHeaderText + ': ' + mainString;
	dopTextOfNewElem.textContent = dopString;
	
	newElem.onclick = function()
	{
		for (elem of document.getElementsByClassName('newsBlock'))
			elem.style.opacity = 1;
			
		document.body.removeChild(this);
	}
	
	document.body.appendChild(newElem);	
}