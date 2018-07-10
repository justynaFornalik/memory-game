import Card from "./card/Card.js";
import CardView from "./card/CardView.js";
import CardController from "./card/CardController.js";


for (let i=0; i<10; i++) {
    let card = new Card();
    let cardView = new CardView(card);
    let cardController = new CardController(card, cardView);
}


