export default class Card {

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

