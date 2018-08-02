class CardView {
    constructor(cardController) {
        this.cardController = cardController;
        this.currentView = this.createExteriorView();
        this.registerEventListeners();
    }

    createExteriorView() {
        let elem = document.createElement('template');
        elem.innerHTML = this.renderExteriorView().trim();
        return elem.content.firstChild;
    }
    //refactor - mieć jedno createView, ale przekazywać jej różną funkcję renderowania this.render().trim();

    renderExteriorView() {
        return `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div id="${this.cardController.card.id}" class="card">
                        <a href="#" class="btn btn-sq btn-primary">
                            <div class="cardContent">
                                <i class="fa fa-question fa-5x"></i>
                            </div>
                        </a>
                    </div>
                </div>`;
    }

    hide() {
       this.currentView.querySelector(".card").classList.add("hit");
    }

    uncover() {
        this.currentView.querySelector(".cardContent").innerHTML = `<img src=\"${this.cardController.card.image}\">`;
    }

    cover() {
        this.currentView.querySelector(".cardContent").innerHTML = "<i class=\"fa fa-question fa-5x\"></i>";
    }

    registerEventListeners() {
        this.currentView.addEventListener("click", this.cardController.uncover.bind(this.cardController));
    }

}

module.exports = CardView;