import {deck} from "../DeckController.js";

export default class CardController {
    //jak zrobić aby cardController miał dostęp do View?

    constructor(card) {
        this.card = card;
        deck.add(this.card);
    }

    flip() {
        this.card.isCovered = false;
        deck.checkIfPair();
    }
}