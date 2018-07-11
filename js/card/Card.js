export default class Card {

    constructor() {
        this.id = this.getRandomId();
        this.isCovered = true;
        this.image = "brytyjski.jpg";
    }

    getRandomId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

