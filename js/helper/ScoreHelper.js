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