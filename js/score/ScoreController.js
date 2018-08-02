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