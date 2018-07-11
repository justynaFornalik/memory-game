class DeckController {

    constructor() {
        this.deck = [];
    }

    add(card) {
        this.deck.push(card);
    }

    checkIfTwoUncovered() {
        let uncoveredCards = [];

        for (let i = 0; i < this.deck.length; i++) {
            if (this.deck[i].isCovered === false) {
                uncoveredCards.push(this.deck[i])
            }
        }

        if (uncoveredCards.length === 2) {
            uncoveredCards[0].isCovered = true;
            uncoveredCards[1].isCovered = true;

        }

        console.log(this.deck);


    }


}

export let deck = new DeckController();