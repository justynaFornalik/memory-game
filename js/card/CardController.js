const deck = require("../GameController.js");
const photoDispenser = require("../helper/PhotosDispenser.js");

class CardController {
    //jak zrobić aby cardController miał dostęp do View?

    constructor(card) {
        this.card = card;
        deck.add(this.card);
        photoDispenser.pickPhoto(this.card);
    }

    uncover() {
        this.card.isCovered = false;
        this.card.cardView.uncover();

        deck.checkCurrentSituationOnBoard(this.card);
    }
}

module.exports = CardController;