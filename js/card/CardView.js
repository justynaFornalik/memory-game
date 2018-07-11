export default class CardView {
    constructor(cardController) {
        this.cardController = cardController;
        this.exteriorView = this.createExteriorView();
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

}