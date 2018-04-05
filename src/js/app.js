import { name, btn } from './test.js';

const displayName = () => {
	console.log('Works fine!')
	let nameNode = document.createTextNode('My name is Mirt Suljic.');
	name.appendChild(nameNode);
}

const changeColour = () => {
	if (name.style.color === "" || name.style.color === "black") {
		name.style.color = "purple";
	} else {
		name.style.color = "black";
	}
}

btn.addEventListener('click', changeColour);

displayName();