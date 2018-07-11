export default class Card {

    constructor() {
        this.id = this.getRandomId();
        this.isCovered = true;
        this.image = "";
    }

    getRandomId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    setImage(photo) {
        this.image = photo;
    }
}

