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