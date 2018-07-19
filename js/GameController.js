import {storage} from "./storage/Storage.js";
import {scoreHelper} from "./helper/ScoreHelper.js";

class GameController {

    constructor() {
        this.deck = [];
        this.uncoveredCards = [];
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
            if(this.checkIfFinished()) {
                scoreHelper.handleScore();
            }

        } else if (this.uncoveredCards.length === 3) {
            this.handleThreeUncoveredCards(card1, card2)
        }
    }

    handleTwoUncoveredCards(card1, card2) {
        scoreHelper.increaseMoves();

        if(this.ifMatched(card1, card2)) {
            scoreHelper.increaseHits();
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

    checkIfFinished() {
        return (this.deck.length)/2 === scoreHelper.hits;
    }

    ifMatched(card1, card2) {
        return card1.image === card2.image;
    }
}

export let deck = new GameController();
