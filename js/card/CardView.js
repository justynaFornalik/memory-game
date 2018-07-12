export default class CardView {
    constructor(cardController) {
        this.cardController = cardController;
        this.exteriorView = this.createExteriorView();
        this.interiorView = this.createInteriorView();
        this.registerEventListeners();
    }

    createExteriorView() {
        let elem = document.createElement('template');
        elem.innerHTML = this.renderExteriorView().trim();
        return elem.content.firstChild;
    }

    createInteriorView() {
        return null;
    }

    renderExteriorView() {
        return `<div id="${this.cardController.card.id}" class="card">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <a href="#" class="btn btn-sq btn-primary">
                    <i class="fa fa-question fa-5x"></i>
                </a>
            </div>
        </div>`;
    }

    hide() {
        let ex = this.exteriorView.classList.add("hit");
    }

    registerEventListeners() {
        this.exteriorView.addEventListener("click", this.cardController.flip.bind(this.cardController));
    }

}