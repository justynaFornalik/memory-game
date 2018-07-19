import Card from "./card/Card.js";
import CardView from "./card/CardView.js";
import CardController from "./card/CardController.js";
import {photoDispenser} from "./helper/PhotosDispenser.js";


let gameContainer = document.getElementById("game-container");

let initialCardAmmount = photoDispenser.photos.length;

for (let i=0; i< initialCardAmmount; i++) {
    let card = new Card();
    let cardController = new CardController(card);
    let cardView = new CardView(cardController);
    card.setView(cardView);

    gameContainer.appendChild(cardView.currentView);
}
