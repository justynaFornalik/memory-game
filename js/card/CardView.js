export default class CardView {
    constructor(cardController) {
        this.cardController = cardController;
        this.exteriorView = this.createExteriorView();
        this.interiorView = this.createInteriorView();
        this.registerEventListeners();
    }

    createExteriorView() {
        if ("content" in document.createElement("template")) {
            var templateElement = document.querySelector("#cardTemplate"); //HTMLTemplateElement, HTMLTemplateElement.content - DocumentFragment
            var templateContent = templateElement.content.cloneNode(true);
            return this.renderExteriorView(templateContent);

        } else {
            return null;
            // Find another way to add the rows to the table because
            // the HTML template element is not supported - TO DO!!!
        }
    }

    createInteriorView() {
        return null;
    }

    renderExteriorView(templateContent) {
        templateContent.querySelector(".card").setAttribute("id", this.cardController.card.id);
        return templateContent;
    }

    registerEventListeners() {
        this.exteriorView.querySelector(".card").addEventListener("click", this.cardController.flip.bind(this.cardController))
    }
}