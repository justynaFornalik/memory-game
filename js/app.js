let Card = require("./card/Card.js");
let CardView = require("./card/CardView.js");
let CardController = require("./card/CardController.js");
let photoDispenser = require("./helper/PhotosDispenser.js");
let express = require("express");

let app = express();

app.get("/dupa", (req, res) => {
    res.send("muahahahaha");
});

let gameContainer = document.getElementById("game-container");

let initialCardAmmount = photoDispenser.photos.length;

for (let i=0; i< initialCardAmmount; i++) {
    let card = new Card();
    let cardController = new CardController(card);
    let cardView = new CardView(cardController);
    card.setView(cardView);

    gameContainer.appendChild(cardView.currentView);
}

app.listen(63342, () => {
    console.log("Server is listening!");
});