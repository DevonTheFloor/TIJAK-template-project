import TagInComponent from "../js/TagInComponent";

export default class TestComponent extends HTMLElement {
  constructor() {
    super();
    const pi = new TagInComponent('p','paraId','tested',this);
    const ai = new TagInComponent('a', 'flink', 'mylink', this);
    const ssTitre = new TagInComponent('h3','test-article,',null, this);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
}