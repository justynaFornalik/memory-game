class PhotosDispenser {

    constructor() {
        this.photos = ["https://http.cat/100", "https://http.cat/100", "https://http.cat/404", "https://http.cat/404",
            "https://http.cat/101", "https://http.cat/101", "https://http.cat/405", "https://http.cat/405",
            "https://http.cat/426", "https://http.cat/426"];
    }

    pickPhoto(card) {
        var randomNumber = Math.floor(Math.random() * (this.photos.length));
        card.setImage(this.photos[randomNumber]);
        this.photos.splice(randomNumber, 1);
    }
}

export let photoDispenser = new PhotosDispenser();