import {deck} from "../DeckController.js";
import {photoDispenser} from "../helper/PhotosDispenser.js";

export default class CardController {
    //jak zrobić aby cardController miał dostęp do View?

    constructor(card) {
        this.card = card;
        deck.add(this.card);
        photoDispenser.pickPhoto(this.card);
    }

    uncover() {
        this.card.isCovered = false;
        this.card.cardView.uncover();

        deck.checkIfTwoUncovered();
    }
}

