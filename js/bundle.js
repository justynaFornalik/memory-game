(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const storage = require("./storage/Storage.js");
const scoreHelper = require("./helper/ScoreHelper.js");

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

module.exports = new GameController();
},{"./helper/ScoreHelper.js":7,"./storage/Storage.js":11}],2:[function(require,module,exports){
let Card = require("./card/Card.js");
let CardView = require("./card/CardView.js");
let CardController = require("./card/CardController.js");
let photoDispenser = require("./helper/PhotosDispenser.js");

let gameContainer = document.getElementById("game-container");

let initialCardAmmount = photoDispenser.photos.length;

for (let i=0; i< initialCardAmmount; i++) {
    let card = new Card();
    let cardController = new CardController(card);
    let cardView = new CardView(cardController);
    card.setView(cardView);

    gameContainer.appendChild(cardView.currentView);
}
},{"./card/Card.js":3,"./card/CardController.js":4,"./card/CardView.js":5,"./helper/PhotosDispenser.js":6}],3:[function(require,module,exports){
class Card {

    constructor() {
        this.id = this.getRandomId();
        this.cardView = null;
        this.image = "";
    }

    getRandomId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    setImage(photo) {
        this.image = photo;
    }

    setView(view) {
        this.cardView = view;
    }
}

module.exports = Card;
},{}],4:[function(require,module,exports){
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
},{"../GameController.js":1,"../helper/PhotosDispenser.js":6}],5:[function(require,module,exports){
class CardView {
    constructor(cardController) {
        this.cardController = cardController;
        this.currentView = this.createExteriorView();
        this.registerEventListeners();
    }

    createExteriorView() {
        let elem = document.createElement('template');
        elem.innerHTML = this.renderExteriorView().trim();
        return elem.content.firstChild;
    }
    //refactor - mieć jedno createView, ale przekazywać jej różną funkcję renderowania this.render().trim();

    renderExteriorView() {
        return `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div id="${this.cardController.card.id}" class="card">
                        <a href="#" class="btn btn-sq btn-primary">
                            <div class="cardContent">
                                <i class="fa fa-question fa-5x"></i>
                            </div>
                        </a>
                    </div>
                </div>`;
    }

    hide() {
       this.currentView.querySelector(".card").classList.add("hit");
    }

    uncover() {
        this.currentView.querySelector(".cardContent").innerHTML = `<img src=\"${this.cardController.card.image}\">`;
    }

    cover() {
        this.currentView.querySelector(".cardContent").innerHTML = "<i class=\"fa fa-question fa-5x\"></i>";
    }

    registerEventListeners() {
        this.currentView.addEventListener("click", this.cardController.uncover.bind(this.cardController));
    }

}

module.exports = CardView;
},{}],6:[function(require,module,exports){
class PhotosDispenser {

    constructor() {
        this.photos = ["https://http.cat/100", "https://http.cat/100", "https://http.cat/404", "https://http.cat/404",
            "https://http.cat/101", "https://http.cat/101", "https://http.cat/405", "https://http.cat/405",
            "https://http.cat/426", "https://http.cat/426"];
    }

    pickPhoto(card) {
        var randomNumber = Math.floor(Math.random() * (this.photos.length));
        card.setImage(this.photos[randomNumber]);
        this.photos.splice(randomNumber, 1);
    }
}

// export let photoDispenser = new PhotosDispenser();
module.exports = new PhotosDispenser();
},{}],7:[function(require,module,exports){
const ScoreView = require("../score/ScoreView.js");
const Score = require("../score/Score.js");
const ScoreController = require("../score/ScoreController.js");

class ScoreHelper {
    constructor() {
        this.moves = 0;
        this.hits = 0;
    }

    increaseMoves() {
        this.moves++;
    }

    increaseHits() {
        this.hits++;
    }

    createScore() {
        let score = new Score();
        let scoreController = new ScoreController(score);
        let scoreView = new ScoreView(scoreController);
        score.scoreView = scoreView;
        return scoreController;
    }

    calculatePoints() {
        return (this.hits/this.moves)*100;
    }

    handleScore() {
        let score = this.createScore();
        let calculatedPoints = this.calculatePoints();
        score.setScoreAttributes(calculatedPoints);
    }
}

module.exports = new ScoreHelper();
},{"../score/Score.js":8,"../score/ScoreController.js":9,"../score/ScoreView.js":10}],8:[function(require,module,exports){
class Score {

    constructor() {
        this._rank = null;
        this._points = null;
        this._player = null;
        this._scoreView = null;
    }

    static createFromObject(obj){
        let score = new Score();
        Object.assign(score, obj);
        return score;
    }

    set points(value) {
        this._points = value;
    }

    set rank(value) {
        this._rank = value;
    }

    set player(value) {
        this._player = value;
    }

    set scoreView(value) {
        this._scoreView = value;
    }
}

module.exports = Score;
},{}],9:[function(require,module,exports){
class ScoreController {
    constructor(score) {
        this.score = score;
    }

    setScoreAttributes(calculatedPoints) {
        let name = "Jan Nowak";
        let rank = "1";
        let points = calculatedPoints;

        this.score.player = name;
        this.score.rank = rank;
        this.score.points = points;
    }
}

module.exports = ScoreController;
},{}],10:[function(require,module,exports){
class ScoreView {
    constructor(scoreController) {
        this.scoreController = scoreController;
    }
}

module.exports = ScoreView;
},{}],11:[function(require,module,exports){
const Score = require("../score/Score.js");

class Storage {
    constructor(){
        this.scores = new Set();
        this.load();
    }

    add(score){
        this.scores.add(score);
        this.save();
    }

    remove(score){
        this.scores.delete(score);
        this.save();
    }

    save(){
        localStorage.setItem('scores', JSON.stringify([...this.scores]))
    }

    load(){
        let scores = JSON.parse(localStorage.getItem('scores'));
        if(scores !== null){
            for(let score of scores){
                this.scores.add(Score.createFromObject(score));
            }
        }
    }
}

module.exports = new Storage();
},{"../score/Score.js":8}]},{},[2]);
