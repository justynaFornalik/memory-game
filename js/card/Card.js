export default class Card {

    constructor() {
        this.id = this.getRandomId();
    }

    getRandomId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

