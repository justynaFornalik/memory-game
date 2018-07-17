class DeckController {

    constructor() {
        this.deck = [];
        this.uncoveredCards = [];
        this.movesCounter = 0;
        this.hitCounter = 0;
    }

    add(card) {
        this.deck.push(card);
    }

    checkCurrentSituationOnBoard(card) {
        this.uncoveredCards.push(card);

        let card1 = this.uncoveredCards[0];
        let card2 = this.uncoveredCards[1];

        if (this.uncoveredCards.length === 2) {
            this.handleTwoUncoveredCards(card1, card2);

        } else if (this.uncoveredCards.length === 3) {
            this.handleThreeUncoveredCards(card1, card2)
        }
    }

    handleTwoUncoveredCards(card1, card2) {
        this.movesCounter++;

        if(this.ifMatched(card1, card2)) {
            this.hitCounter++;
            setTimeout(() => {
                card1.cardView.hide();
                card2.cardView.hide()
            }, 2000);

            this.uncoveredCards = [];
        }
    }

    handleThreeUncoveredCards(card1, card2) {
        card1.cardView.cover();
        card2.cardView.cover();
        this.uncoveredCards.splice(0,2);
    }


// → ilość odsłoniętych kart:
//         jedna - to nic się nie dzieje,
//     jeżeli dwie:
//         jeśli jest match -> zniknij,
//     jeżeli nie ma -> czekaj na trzecią kartę
//     jeśli trzy:
//         zakryj wszystkie karty oprócz ostatniej - jak zorientować się, która jest ostatnia?


    ifMatched(card1, card2) {
        return card1.image === card2.image;
    }
}

export let deck = new DeckController();
