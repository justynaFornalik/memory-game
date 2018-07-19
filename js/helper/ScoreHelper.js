import ScoreView from "../score/ScoreView.js";
import Score from "../score/Score.js";
import ScoreController from "../score/ScoreController.js";

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

export let scoreHelper = new ScoreHelper();