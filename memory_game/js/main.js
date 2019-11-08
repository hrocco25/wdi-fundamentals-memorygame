


 cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match");
	} else {
		console.log("Sorry, try again.");
	}
}


function flipCard(cardId) {



cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]);

if (cardsInPlay.length === 2){

	checkForMatch();

}



}

flipCard(0);
flipCard(2);




/*var cardOne = cards[0];


console.log("User flipped " + cardOne);

cardsInPlay.push(cardOne);

console.log(cardsInPlay);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("user flipped " + cardTwo);

console.log(cardsInPlay);*/





