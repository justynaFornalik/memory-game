export default class Card {

    constructor() {
        this.id = this.getRandomId();
    }

    getRandomId() {
        return new Date().getUTCMilliseconds().toString();
    }
}

