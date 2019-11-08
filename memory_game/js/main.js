



 var cards = [
 {
 	rank: "queen",
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardIamge: "images/queen-of-diamonds.png"
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
 }
 ];

var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match");
		alert("You found a match");
		
	} else {
		console.log("Sorry, try again.");
		alert("Sorry, try again.");

	}
}


function flipCard(cardId) {



cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);




if (cardsInPlay.length === 2){

	checkForMatch();



}



}

flipCard(0);
flipCard(2);


/*cardsInPlay.push(cards[cardId].cardImage);
console.log(cards[cardId].cardImage);

cardsInPlay.push(cards[cardId].cardImage);
console.log(cards[cardId].suit);*/




/*var cardOne = cards[0];


console.log("User flipped " + cardOne);

cardsInPlay.push(cardOne);

console.log(cardsInPlay);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("user flipped " + cardTwo);

console.log(cardsInPlay);*/





