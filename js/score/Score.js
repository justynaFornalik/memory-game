export default class Score {

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