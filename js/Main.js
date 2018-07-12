import Card from "./card/Card.js";
import CardView from "./card/CardView.js";
import CardController from "./card/CardController.js";


let gameContainer = document.getElementById("game-container");

for (let i=0; i<10; i++) {
    let card = new Card();
    let cardController = new CardController(card);
    let cardView = new CardView(cardController);
    card.setView(cardView);

    gameContainer.appendChild(cardView.exteriorView); //po appendowaniu nie ma exterior view ale document fragment
    console.log(cardView.exteriorView);
}
