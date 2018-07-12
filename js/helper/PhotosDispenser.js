class PhotosDispenser {

    constructor() {
        this.photos = ["test1", "test1", "test2", "test2", "test3", "test3", "test4", "test4", "test5", "test5"];
    }

    pickPhoto(card) {
        var randomNumber = Math.floor(Math.random() * (this.photos.length));
        card.setImage(this.photos[randomNumber]);
        this.photos.splice(randomNumber, 1);
    }
}

export let photoDispenser = new PhotosDispenser();