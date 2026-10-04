import CollapsibleWidget from "./ui/CollapsibleWidget";

export default class Demo {
  constructor(container) {
    this.container = container;

    this.collapsible = new CollapsibleWidget(this.container);
  }

  init() {
    this.collapsible.open('В рамках реализации большого портала вам необходимо сделать виджет "collapsible"-контейнеров, который может разворачиваться и сворачиваться.');
  }

}
