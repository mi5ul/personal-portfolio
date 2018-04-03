const testButton = document.getElementById('test-btn');


const showText = () => {
	console.log('it works!');
}

testButton.addEventListener('click', showText);