console.log('testing');

// get images 
const queen = document.querySelector('#queen');
const small = document.querySelector('#small');
const checker = document.querySelectorAll('.checker');
const selectedPhoto = document.querySelector('#selected-photo');

const button = document.querySelector('#submit');

// function customizes form to user's chosen name 
const changeName = () => {
	let newName = name.value;

	if (newName === ''){
		document.querySelector('#question-w-name').textContent = `Do you want to play checkers or chess?`;
	}
	else{
		document.querySelector('#question-w-name').textContent = `${newName}, do you want to play checkers or chess?`;
	}
};

// function runs when form button is pressed 
const runForm = () => {
	let checkers = document.querySelector('#checkers');
	let chess = document.querySelector('#chess');

	// ========= PICKING CHESS OR CHECKERS =========
	// if only checkers is checked 
	if (checkers.checked === true && chess.checked === false){
		for (let i = 0; i < checker.length; i++){
			checker[i].style.display = 'block';
		}
	}
	// if only chess is checked
	else if (checkers.checked === false && chess.checked === true){
		queen.style.display = 'block';
		small.style.display = 'block';

	}
	// if both are checked 
	else if (checkers.checked === true && chess.checked === true){
		queen.style.display = 'block';
		small.style.display = 'block';
		for (let i = 0; i < checker.length; i++){
			checker[i].style.display = 'block';
		}
	}

	// ========= PICKING BOARD COLOR =========
	const boardColor = document.querySelector('#board-color');
	console.log(boardColor.value);
	const bgColor = document.querySelectorAll('.change-color');

	// change all white squares to new color
	for (let k = 0; k < bgColor.length; k++){
		bgColor[k].style.backgroundColor = boardColor.value;
	}

	// ========= PICKING A DRINK =========
	const cocktail = document.querySelector('#martini');
	const espresso = document.querySelector('#coffee');
	const cards = document.querySelector('#cards');

	if (cocktail.checked === true){
		selectedPhoto.src = 'img/martini.png';
		selectedPhoto.alt = 'martini with two olives';
		selectedPhoto.style.display = 'block';
	}
	else if (espresso.checked === true){
		selectedPhoto.src = 'img/coffee.png';
		selectedPhoto.alt = 'cup of coffee on a saucer';
		selectedPhoto.style.display = 'block';
	}
	else if (cards.checked === true){
		selectedPhoto.src = 'img/cards.png';
		selectedPhoto.alt = 'two playing cards';
		selectedPhoto.style.display = 'block';
	}

};

const name = document.querySelector('#name');

// activates changeName when user clicks out of text input box
name.addEventListener('focusout', changeName);

button.addEventListener('click', runForm);