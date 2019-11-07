


const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

var cardOne = cards[0];


console.log("User flipped " + cardOne);

cardsInPlay.push(cardOne);

console.log(cardsInPlay);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("user flipped " + cardTwo);

console.log(cardsInPlay);


if (cardsInPlay.length === 2){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}

}



