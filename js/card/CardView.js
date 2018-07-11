export default class CardView {
    constructor(cardController) {
        this.cardController = cardController;
        this.exteriorView = this.createExteriorView();
        this.interiorView = this.createInteriorView();
    }

    createExteriorView() {
        if ("content" in document.createElement("template")) {
            var templateElement = $("card"); //HTMLTemplateElement, HTMLTemplateElement.content - DocumentFragment
            var templateContent = templateElement.content.cloneNode(true);
            return this.render(templateContent);

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
}