class DeckController {

    constructor() {
        this.deck = [];
        //czy lepszy global czy countery jako fieldy???
        this.movesCounter = 0;
        this.hitCounter = 0;
    }

    add(card) {
        this.deck.push(card);
    }

    checkIfTwoUncovered() {
        let uncoveredCards = [];

        for (let i = 0; i < this.deck.length; i++) {
            if (this.deck[i].isCovered === false) {
                uncoveredCards.push(this.deck[i]);
            }
        }
        if (uncoveredCards.length === 2) {
            this.movesCounter++;
            let card1 = uncoveredCards[0];
            let card2 = uncoveredCards[1];
            card1.isCovered = true;
            card2.isCovered = true;

            if(this.ifMatched(card1, card2)) {
                this.hitCounter++;
                card1.cardView.hide();
                card2.cardView.hide();
            }
        }
    }

    ifMatched(card1, card2) {
        return card1.image === card2.image;
    }
}

export let deck = new DeckController();
